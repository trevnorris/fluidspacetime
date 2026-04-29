import React, { useEffect, useRef, useState } from 'react';

const TAU = Math.PI * 2;
const Y_SCALE = 0.82;
const SPEED = 0.18;
const SWIRL_STRENGTH = 0.32;
const INTAKE_STRENGTH = 0.078;
const CAPTURE_RADIUS = 0.105;
const SPAWN_INNER_RADIUS = 0.56;
const SPAWN_RADIUS_SPAN = 0.32;
const INITIAL_SEPARATION = 1.02;
const ATTRACTED_SEPARATION = 0.72;
const REPELLED_SEPARATION = 1.3;

function seededUnit(i, salt = 0) {
  const x = Math.sin(i * 91.7 + salt * 271.3) * 43758.5453;
  return x - Math.floor(x);
}

function resetTracer(p, salt = 0, vortices = null) {
  const theta = seededUnit(p.seed + salt, 1) * TAU;
  if (vortices?.length) {
    const target = vortices[Math.floor(seededUnit(p.seed + salt, 5) * vortices.length) % vortices.length];
    const r = SPAWN_INNER_RADIUS + seededUnit(p.seed + salt, 2) * SPAWN_RADIUS_SPAN;
    p.x = target.x + Math.cos(theta) * r;
    p.y = target.y + Math.sin(theta) * r;
  } else {
    const r = Math.sqrt(0.35 + seededUnit(p.seed + salt, 2) * 1.35);
    p.x = Math.cos(theta) * r;
    p.y = Math.sin(theta) * r;
  }
  p.prevX = p.x;
  p.prevY = p.y;
}

function makeTracer(i, vortices = null) {
  const p = {
    seed: i,
    x: 0,
    y: 0,
    prevX: 0,
    prevY: 0,
    size: 1.15 + seededUnit(i, 3) * 1.6,
    tint: seededUnit(i, 4),
  };
  resetTracer(p, i * 0.43, vortices);
  return p;
}

function drawArrow(ctx, x, y, vx, vy, alpha, color = '#7aa2ff', width = 1) {
  const len = Math.hypot(vx, vy);
  if (len < 0.01) return;

  ctx.save();
  const ux = vx / len;
  const uy = vy / len;
  const head = Math.min(8, Math.max(4, len * 0.34));

  ctx.globalAlpha = alpha;
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + vx, y + vy);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(x + vx, y + vy);
  ctx.lineTo(x + vx - ux * head - uy * head * 0.55, y + vy - uy * head + ux * head * 0.55);
  ctx.lineTo(x + vx - ux * head + uy * head * 0.55, y + vy - uy * head - ux * head * 0.55);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
  ctx.restore();
}

function circulationFieldAt(x, y, vortices) {
  let vx = 0;
  let vy = 0;

  for (const v of vortices) {
    const dx = x - v.x;
    const dy = y - v.y;
    const r2 = dx * dx + dy * dy;
    const soft = r2 + 0.022;
    const local = Math.exp(-r2 / 0.9);
    const swirl = (v.gamma * SWIRL_STRENGTH * local) / soft;
    const intake = (INTAKE_STRENGTH * local) / soft;

    vx += -dy * swirl - dx * intake;
    vy += dx * swirl - dy * intake;
  }

  const len = Math.hypot(vx, vy);
  if (len > 1.35) {
    vx = (vx / len) * 1.35;
    vy = (vy / len) * 1.35;
  }

  return { vx, vy };
}

function signedInfluenceAt(x, y, vortices) {
  return vortices.reduce((sum, v) => {
    const r2 = (x - v.x) ** 2 + (y - v.y) ** 2;
    return sum + v.gamma * Math.exp(-r2 / 0.18);
  }, 0);
}

export function MagnetismCirculationSim() {
  const canvasRef = useRef(null);
  const frameRef = useRef(0);
  const tracersRef = useRef([]);
  const lastRef = useRef(0);
  const modeRef = useRef('sameTopDown');
  const releasedRef = useRef(false);
  const separationRef = useRef(INITIAL_SEPARATION);
  const [mode, setMode] = useState('sameTopDown');
  const [released, setReleased] = useState(false);

  useEffect(() => {
    modeRef.current = mode;
  }, [mode]);

  useEffect(() => {
    releasedRef.current = released;
  }, [released]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;
    const initialVortices = [
      { x: -INITIAL_SEPARATION / 2, y: 0, gamma: 1 },
      { x: INITIAL_SEPARATION / 2, y: 0, gamma: 1 },
    ];
    tracersRef.current = Array.from({ length: 170 }, (_, i) => makeTracer(i, initialVortices));

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      const width = Math.max(300, rect.width);
      const height = Math.max(330, Math.min(510, width * 0.55));
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas.style.height = `${height}px`;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function toCanvas(x, y, cx, cy, scale) {
      return { x: cx + x * scale, y: cy + y * scale * Y_SCALE };
    }

    function drawVortex(v, cx, cy, scale) {
      const p = toCanvas(v.x, v.y, cx, cy, scale);
      const color = v.gamma > 0 ? '#7aa2ff' : '#e67ac6';
      const halo = ctx.createRadialGradient(p.x, p.y, 5, p.x, p.y, scale * 0.27);
      halo.addColorStop(0, v.gamma > 0 ? 'rgba(122,162,255,0.24)' : 'rgba(230,122,198,0.23)');
      halo.addColorStop(0.5, v.gamma > 0 ? 'rgba(122,162,255,0.08)' : 'rgba(230,122,198,0.08)');
      halo.addColorStop(1, 'rgba(10,13,24,0)');
      ctx.fillStyle = halo;
      ctx.beginPath();
      ctx.arc(p.x, p.y, scale * 0.27, 0, TAU);
      ctx.fill();

      for (let i = 1; i <= 4; i += 1) {
        const rr = scale * (0.055 + i * 0.045);
        ctx.beginPath();
        ctx.arc(p.x, p.y, rr, 0, TAU);
        ctx.strokeStyle = color;
        ctx.globalAlpha = 0.42 - i * 0.055;
        ctx.lineWidth = i === 1 ? 1.2 : 0.8;
        ctx.stroke();
      }
      ctx.globalAlpha = 1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, 11, 0, TAU);
      ctx.fillStyle = '#0b0e1b';
      ctx.fill();
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(p.x, p.y, 4.3, 0, TAU);
      ctx.fillStyle = color;
      ctx.fill();
    }

    function drawForceCue(vortices, oppositeTopDown, releasedNow, cx, cy, scale) {
      const left = toCanvas(vortices[0].x, vortices[0].y, cx, cy, scale);
      const right = toCanvas(vortices[1].x, vortices[1].y, cx, cy, scale);
      const midX = (left.x + right.x) * 0.5;
      const midY = (left.y + right.y) * 0.5;
      const attracts = oppositeTopDown;
      const cueColor = attracts ? '#7aa2ff' : '#e67ac6';

      if (attracts) {
        const bridge = ctx.createLinearGradient(left.x, midY, right.x, midY);
        bridge.addColorStop(0, 'rgba(122,162,255,0.15)');
        bridge.addColorStop(0.5, 'rgba(236,240,251,0.12)');
        bridge.addColorStop(1, 'rgba(122,162,255,0.15)');
        ctx.strokeStyle = bridge;
        ctx.lineWidth = 14;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(left.x + 28, midY);
        ctx.lineTo(right.x - 28, midY);
        ctx.stroke();

        drawArrow(ctx, midX - 78, midY - 58, 58, 0, releasedNow ? 0.72 : 0.5, cueColor, 1.4);
        drawArrow(ctx, midX + 78, midY + 58, -58, 0, releasedNow ? 0.72 : 0.5, cueColor, 1.4);
      } else {
        const gap = ctx.createRadialGradient(midX, midY, 2, midX, midY, scale * 0.42);
        gap.addColorStop(0, 'rgba(230,122,198,0.18)');
        gap.addColorStop(0.55, 'rgba(122,162,255,0.08)');
        gap.addColorStop(1, 'rgba(10,13,24,0)');
        ctx.fillStyle = gap;
        ctx.beginPath();
        ctx.arc(midX, midY, scale * 0.42, 0, TAU);
        ctx.fill();

        drawArrow(ctx, midX - 48, midY - 58, -58, 0, releasedNow ? 0.72 : 0.5, cueColor, 1.4);
        drawArrow(ctx, midX + 48, midY + 58, 58, 0, releasedNow ? 0.72 : 0.5, cueColor, 1.4);
      }

      ctx.font = '11px "JetBrains Mono", ui-monospace, monospace';
      ctx.fillStyle = attracts ? 'rgba(122,162,255,0.9)' : 'rgba(230,122,198,0.88)';
      ctx.fillText(
        attracts ? 'opposite top-down swirls: attraction tendency' : 'same top-down swirls: repulsion tendency',
        Math.max(18, midX - 146),
        Math.max(42, midY - 104),
      );
    }

    function draw(now) {
      if (!lastRef.current) lastRef.current = now;
      const dt = Math.min(0.035, (now - lastRef.current) / 1000);
      lastRef.current = now;

      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const cx = width * 0.5;
      const cy = height * 0.52;
      const scale = Math.min(width, height) * 0.43;
      const oppositeTopDown = modeRef.current === 'oppositeTopDown';
      const targetSeparation = releasedRef.current
        ? (oppositeTopDown ? ATTRACTED_SEPARATION : REPELLED_SEPARATION)
        : INITIAL_SEPARATION;
      separationRef.current += (targetSeparation - separationRef.current) * Math.min(1, dt * 1.15);
      const separation = separationRef.current;
      const vortices = [
        { x: -separation / 2, y: 0, gamma: 1 },
        { x: separation / 2, y: 0, gamma: oppositeTopDown ? -1 : 1 },
      ];

      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = '#0a0d18';
      ctx.fillRect(0, 0, width, height);

      const cell = Math.max(9, Math.floor(width / 110));
      for (let py = 0; py < height; py += cell) {
        for (let px = 0; px < width; px += cell) {
          const sx = (px + cell * 0.5 - cx) / scale;
          const sy = (py + cell * 0.5 - cy) / (scale * Y_SCALE);
          const field = circulationFieldAt(sx, sy, vortices);
          const mag = Math.min(1, Math.hypot(field.vx, field.vy) / 1.25);
          const signed = signedInfluenceAt(sx, sy, vortices);
          const blue = Math.max(0, signed);
          const pink = Math.max(0, -signed);
          const alpha = 0.025 + mag * 0.06 + Math.min(1, Math.abs(signed)) * 0.05;
          ctx.fillStyle = `rgba(${95 + Math.floor(pink * 100)},${105 + Math.floor(blue * 60)},${150 + Math.floor(blue * 85)},${alpha})`;
          ctx.fillRect(px, py, cell + 1, cell + 1);
        }
      }

      const gridX = 13;
      const gridY = 8;
      for (let iy = 0; iy < gridY; iy += 1) {
        for (let ix = 0; ix < gridX; ix += 1) {
          const px = width * (0.08 + (ix / (gridX - 1)) * 0.84);
          const py = height * (0.15 + (iy / (gridY - 1)) * 0.68);
          const sx = (px - cx) / scale;
          const sy = (py - cy) / (scale * Y_SCALE);
          if (vortices.some((v) => Math.hypot(sx - v.x, sy - v.y) < 0.12)) continue;
          const field = circulationFieldAt(sx, sy, vortices);
          const mag = Math.hypot(field.vx, field.vy);
          if (mag < 0.04) continue;
          drawArrow(ctx, px, py, field.vx * scale * 0.052, field.vy * scale * 0.052 * Y_SCALE, Math.min(0.88, 0.34 + mag * 0.34), '#8faeff', 1.15);
        }
      }

      for (const p of tracersRef.current) {
        const field = circulationFieldAt(p.x, p.y, vortices);
        p.prevX = p.x;
        p.prevY = p.y;
        p.x += field.vx * SPEED * dt;
        p.y += field.vy * SPEED * dt;

        const tooClose = vortices.some((v) => Math.hypot(p.x - v.x, p.y - v.y) < CAPTURE_RADIUS);
        const outside = Math.hypot(p.x, p.y) > 1.42;
        if (tooClose || outside) resetTracer(p, now * 0.00004, vortices);

        const prev = toCanvas(p.prevX, p.prevY, cx, cy, scale);
        const cur = toCanvas(p.x, p.y, cx, cy, scale);
        const nearest = Math.min(...vortices.map((v) => Math.hypot(p.x - v.x, p.y - v.y)));
        const alpha = Math.max(0.2, Math.min(0.85, 0.34 + (0.28 - Math.min(nearest, 0.28)) * 1.25));
        ctx.beginPath();
        ctx.moveTo(prev.x, prev.y);
        ctx.lineTo(cur.x, cur.y);
        ctx.strokeStyle = p.tint > 0.78 ? `rgba(240,194,107,${alpha * 0.55})` : `rgba(198,204,228,${alpha * 0.44})`;
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(cur.x, cur.y, p.size, 0, TAU);
        ctx.fillStyle = p.tint > 0.78 ? `rgba(240,194,107,${alpha})` : `rgba(236,240,251,${alpha * 0.72})`;
        ctx.fill();
      }

      drawForceCue(vortices, oppositeTopDown, releasedRef.current, cx, cy, scale);
      vortices.forEach((v) => {
        drawVortex(v, cx, cy, scale);
      });

      ctx.font = '11px "JetBrains Mono", ui-monospace, monospace';
      ctx.fillStyle = 'rgba(198,204,228,0.82)';
      ctx.fillText('top-down circulation around two intake mouths', 18, 25);
      ctx.fillStyle = 'rgba(142,150,189,0.82)';
      ctx.fillText('tracers spiral slowly inward, then respawn', 18, height - 44);
      ctx.fillStyle = 'rgba(240,194,107,0.9)';
      ctx.fillText('conditional side-by-side current/dipole branch; positive plumbing sign', Math.max(18, cx - 250), height - 22);

      frameRef.current = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener('resize', resize);
    frameRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  function resetTracers() {
    separationRef.current = INITIAL_SEPARATION;
    setReleased(false);
    const oppositeTopDown = modeRef.current === 'oppositeTopDown';
    const vortices = [
      { x: -INITIAL_SEPARATION / 2, y: 0, gamma: 1 },
      { x: INITIAL_SEPARATION / 2, y: 0, gamma: oppositeTopDown ? -1 : 1 },
    ];
    tracersRef.current.forEach((p, i) => resetTracer(p, i * 0.61, vortices));
  }

  return (
    <div
      style={{
        margin: '24px 0',
        border: '1px solid var(--rule-2)',
        borderRadius: 3,
        background: 'rgba(16,20,42,0.48)',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'relative' }}>
        <canvas
          ref={canvasRef}
          aria-label="Schematic animation of magnetic circulation around two throat defects"
          style={{ display: 'block', width: '100%', minHeight: 330 }}
        />
      </div>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 12,
          alignItems: 'center',
          padding: '14px 16px',
          borderTop: '1px solid var(--rule)',
          background: 'rgba(10,13,24,0.68)',
        }}
      >
        <div
          role="group"
          aria-label="Circulation orientation"
          style={{
            display: 'flex',
            gap: 8,
            flexWrap: 'wrap',
          }}
        >
          <button
            type="button"
            onClick={() => setMode('sameTopDown')}
            className="fu-mono"
            style={buttonStyle(mode === 'sameTopDown')}
            aria-pressed={mode === 'sameTopDown'}
          >
            Same swirl
          </button>
          <button
            type="button"
            onClick={() => setMode('oppositeTopDown')}
            className="fu-mono"
            style={buttonStyle(mode === 'oppositeTopDown')}
            aria-pressed={mode === 'oppositeTopDown'}
          >
            Opposite swirl
          </button>
        </div>
        <button
          type="button"
          onClick={resetTracers}
          className="fu-mono"
          style={buttonStyle(false)}
          aria-label="Reset tracer positions"
        >
          Reset
        </button>
        <button
          type="button"
          onClick={() => setReleased((value) => !value)}
          className="fu-mono"
          style={buttonStyle(released)}
          aria-pressed={released}
          aria-label={released ? 'Hold mouth separation' : 'Release mouth separation'}
        >
          {released ? 'Hold' : 'Release'}
        </button>
        <div
          className="fu-small"
          style={{
            flex: '1 1 220px',
            color: 'var(--ink-2)',
            lineHeight: 1.45,
          }}
        >
          Gray/gold tracers are the superfluid and spiral into each throat.
          Blue/pink rings and arrows mark circulation orientation. Same swirl
          repels; opposite swirl attracts in this conditional current-like
          closure.
        </div>
      </div>
    </div>
  );
}

function buttonStyle(active) {
  return {
    border: `1px solid ${active ? '#7aa2ff' : 'var(--rule-2)'}`,
    borderRadius: 3,
    background: active ? 'rgba(122,162,255,0.16)' : 'rgba(21,26,54,0.9)',
    color: active ? 'var(--ink-1)' : 'var(--ink-2)',
    padding: '8px 12px',
    fontSize: 11,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    cursor: 'pointer',
  };
}
