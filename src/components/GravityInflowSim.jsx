import React, { useEffect, useRef, useState } from 'react';

const TAU = Math.PI * 2;
const Y_SCALE = 0.78;
const SMALL_WEIGHT = 0.34;
const LARGE_WEIGHT = 1.7;
const FLOW_STRENGTH = 0.35;
const INITIAL_SEPARATION = 1.32;

function seededUnit(i, salt = 0) {
  const x = Math.sin(i * 127.1 + salt * 311.7) * 43758.5453;
  return x - Math.floor(x);
}

function resetParticle(p, salt = 0) {
  const theta = seededUnit(p.seed + salt, 2) * TAU;
  const r = Math.sqrt(0.58 + seededUnit(p.seed + salt, 3) * 1.24);
  p.x = Math.cos(theta) * r;
  p.y = Math.sin(theta) * r;
}

function makeParticle(i) {
  const p = {
    seed: i,
    x: 0,
    y: 0,
    size: 1.1 + seededUnit(i, 4) * 1.7,
    tint: seededUnit(i, 5),
  };
  const theta = seededUnit(i, 6) * TAU;
  const r = Math.sqrt(0.16 + seededUnit(i, 7) * 1.6);
  p.x = Math.cos(theta) * r;
  p.y = Math.sin(theta) * r;
  return p;
}

function drawArrow(ctx, x, y, vx, vy, alpha, color = '#7aa2ff', width = 1) {
  const len = Math.hypot(vx, vy);
  if (len < 0.01) return;

  ctx.save();
  const ux = vx / len;
  const uy = vy / len;
  const head = Math.min(9, Math.max(4, len * 0.36));

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

function sinkFieldAt(x, y, sources) {
  let vx = 0;
  let vy = 0;

  for (const source of sources) {
    const dx = source.x - x;
    const dy = source.y - y;
    const r = Math.hypot(dx, dy);
    if (r < source.core || r > 1.55) continue;

    const mag = Math.min(
      1.85,
      ((0.055 + 0.26 * FLOW_STRENGTH) * source.weight) / (r * r + 0.035),
    );
    vx += (dx / r) * mag;
    vy += (dy / r) * mag;
  }

  return { vx, vy };
}

function sourcePotentialAt(x, y, sources) {
  return sources.reduce((sum, source) => {
    const r2 = (source.x - x) ** 2 + (source.y - y) ** 2;
    return sum + source.weight / Math.sqrt(r2 + 0.035);
  }, 0);
}

export function GravityInflowSim() {
  const canvasRef = useRef(null);
  const frameRef = useRef(0);
  const particlesRef = useRef([]);
  const separationRef = useRef(INITIAL_SEPARATION);
  const lastRef = useRef(0);
  const lockedRef = useRef(true);
  const [locked, setLocked] = useState(true);

  useEffect(() => {
    lockedRef.current = locked;
  }, [locked]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;

    particlesRef.current = Array.from({ length: 190 }, (_, i) => makeParticle(i));

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      const width = Math.max(300, rect.width);
      const height = Math.max(340, Math.min(540, width * 0.56));
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas.style.height = `${height}px`;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function toCanvas(x, y, cx, cy, scale) {
      return { x: cx + x * scale, y: cy + y * scale * Y_SCALE };
    }

    function drawBody(body, cx, cy, scale) {
      const p = toCanvas(body.x, body.y, cx, cy, scale);
      const haloSize = scale * body.halo;
      const halo = ctx.createRadialGradient(p.x, p.y, 4, p.x, p.y, haloSize);
      halo.addColorStop(0, body.halo0);
      halo.addColorStop(0.45, body.halo1);
      halo.addColorStop(1, 'rgba(10,13,24,0)');
      ctx.fillStyle = halo;
      ctx.beginPath();
      ctx.arc(p.x, p.y, haloSize, 0, TAU);
      ctx.fill();

      for (let i = 1; i <= 4; i += 1) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, scale * (body.ringBase + i * body.ringStep), 0, TAU);
        ctx.strokeStyle = body.ring;
        ctx.lineWidth = i === 1 ? 1.2 : 0.8;
        ctx.globalAlpha = 0.44 - i * 0.065;
        ctx.stroke();
      }
      ctx.globalAlpha = 1;

      const localArrows = body.weight > 1 ? 12 : 4;
      for (let i = 0; i < localArrows; i += 1) {
        const a = i * (TAU / localArrows) + 0.18;
        const ax = p.x + Math.cos(a) * scale * body.arrowRadius;
        const ay = p.y + Math.sin(a) * scale * body.arrowRadius * Y_SCALE;
        drawArrow(ctx, ax, ay, (p.x - ax) * body.arrowPull, (p.y - ay) * body.arrowPull, body.arrowAlpha, body.color);
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, body.bodyRadius, 0, TAU);
      ctx.fillStyle = body.color;
      ctx.fill();
      ctx.beginPath();
      ctx.arc(p.x, p.y, body.bodyRadius * 1.9, 0, TAU);
      ctx.strokeStyle = body.ring;
      ctx.lineWidth = 1.4;
      ctx.stroke();
    }

    function draw(now) {
      if (!lastRef.current) lastRef.current = now;
      const dt = Math.min(0.035, (now - lastRef.current) / 1000);
      lastRef.current = now;

      if (!lockedRef.current) {
        const sep = separationRef.current;
        const drift = ((0.08 + 0.22 * FLOW_STRENGTH) / (sep * sep + 0.25)) * dt;
        separationRef.current = Math.max(0.6, sep - drift);
      }

      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const cx = width * 0.5;
      const cy = height * 0.52;
      const scale = Math.min(width, height) * 0.42;
      const sep = separationRef.current;

      const totalWeight = SMALL_WEIGHT + LARGE_WEIGHT;
      const pairCenter = 0.24;
      const smallX = pairCenter - sep * (LARGE_WEIGHT / totalWeight);
      const largeX = pairCenter + sep * (SMALL_WEIGHT / totalWeight);

      const bodies = [
        {
          x: smallX,
          y: 0,
          weight: SMALL_WEIGHT,
          core: 0.046,
          color: '#f0c26b',
          ring: 'rgba(240,194,107,0.46)',
          halo0: 'rgba(240,194,107,0.14)',
          halo1: 'rgba(240,194,107,0.045)',
          halo: 0.14,
          ringBase: 0.027,
          ringStep: 0.022,
          arrowRadius: 0.095,
          arrowPull: 0.2,
          arrowAlpha: 0.24,
          bodyRadius: 7,
        },
        {
          x: largeX,
          y: 0,
          weight: LARGE_WEIGHT,
          core: 0.15,
          color: '#e67ac6',
          ring: 'rgba(230,122,198,0.72)',
          halo0: 'rgba(230,122,198,0.38)',
          halo1: 'rgba(230,122,198,0.13)',
          halo: 0.34,
          ringBase: 0.072,
          ringStep: 0.052,
          arrowRadius: 0.22,
          arrowPull: 0.29,
          arrowAlpha: 0.45,
          bodyRadius: 16,
        },
      ];

      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = '#0a0d18';
      ctx.fillRect(0, 0, width, height);

      const cell = Math.max(8, Math.floor(width / 120));
      for (let py = 0; py < height; py += cell) {
        for (let px = 0; px < width; px += cell) {
          const sx = (px + cell * 0.5 - cx) / scale;
          const sy = (py + cell * 0.5 - cy) / (scale * Y_SCALE);
          const potential = sourcePotentialAt(sx, sy, bodies);
          const field = sinkFieldAt(sx, sy, bodies);
          const fieldMag = Math.hypot(field.vx, field.vy);
          const basin = Math.min(1, potential / 5.6);
          const gradient = Math.min(1, fieldMag / 1.35);
          const alpha = 0.018 + basin * 0.065 + gradient * 0.05;
          const amber = Math.floor(105 + basin * 90);
          const blue = Math.floor(140 + gradient * 90);
          ctx.fillStyle = `rgba(${amber},${120 + Math.floor(basin * 50)},${blue},${alpha})`;
          ctx.fillRect(px, py, cell + 1, cell + 1);
        }
      }

      const smallCanvas = toCanvas(bodies[0].x, bodies[0].y, cx, cy, scale);
      const largeCanvas = toCanvas(bodies[1].x, bodies[1].y, cx, cy, scale);
      const bridge = ctx.createLinearGradient(smallCanvas.x, cy, largeCanvas.x, cy);
      bridge.addColorStop(0, 'rgba(240,194,107,0.15)');
      bridge.addColorStop(0.5, 'rgba(122,162,255,0.11)');
      bridge.addColorStop(1, 'rgba(230,122,198,0.15)');
      ctx.strokeStyle = bridge;
      ctx.lineWidth = 18;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(smallCanvas.x, cy);
      ctx.lineTo(largeCanvas.x, cy);
      ctx.stroke();

      const gridX = 13;
      const gridY = 8;
      for (let iy = 0; iy < gridY; iy += 1) {
        for (let ix = 0; ix < gridX; ix += 1) {
          const px = width * (0.08 + (ix / (gridX - 1)) * 0.84);
          const py = height * (0.15 + (iy / (gridY - 1)) * 0.68);
          const sx = (px - cx) / scale;
          const sy = (py - cy) / (scale * Y_SCALE);
          if (bodies.some((body) => Math.hypot(sx - body.x, sy - body.y) < body.core * 1.55)) continue;

          const field = sinkFieldAt(sx, sy, bodies);
          const mag = Math.hypot(field.vx, field.vy);
          if (mag < 0.04) continue;
          drawArrow(ctx, px, py, field.vx * scale * 0.045, field.vy * scale * 0.045 * Y_SCALE, Math.min(0.76, 0.2 + mag * 0.32));
        }
      }

      for (const p of particlesRef.current) {
        const field = sinkFieldAt(p.x, p.y, bodies);
        p.x += field.vx * dt;
        p.y += field.vy * dt;

        const absorbed = bodies.some((body) => Math.hypot(p.x - body.x, p.y - body.y) < body.core);
        const escaped = Math.hypot(p.x, p.y) > 1.45;
        if (absorbed || escaped) resetParticle(p, now * 0.00003);

        const nearest = Math.min(...bodies.map((body) => Math.hypot(p.x - body.x, p.y - body.y)));
        const edge = Math.min(1.35, Math.hypot(p.x, p.y));
        const alpha = Math.max(0.18, Math.min(0.9, 0.25 + (1 - edge / 1.35) * 0.32 + (0.2 - Math.min(nearest, 0.2)) * 1.7));
        const c = toCanvas(p.x, p.y, cx, cy, scale);
        ctx.beginPath();
        ctx.arc(c.x, c.y, p.size, 0, TAU);
        ctx.fillStyle = p.tint > 0.82 ? `rgba(240,194,107,${alpha})` : `rgba(236,240,251,${alpha * 0.76})`;
        ctx.fill();
      }

      bodies.forEach((body) => drawBody(body, cx, cy, scale));

      if (!lockedRef.current) {
        drawArrow(ctx, smallCanvas.x + 26, smallCanvas.y - 40, 84, 0, 0.72, '#f0c26b', 2);
        drawArrow(ctx, largeCanvas.x - 28, largeCanvas.y + 48, -42, 0, 0.55, '#e67ac6', 2);
      }

      ctx.font = '11px "JetBrains Mono", ui-monospace, monospace';
      ctx.fillStyle = 'rgba(198,204,228,0.8)';
      ctx.fillText('combined projected inflow', 18, 25);
      ctx.fillStyle = 'rgba(240,194,107,0.9)';
      ctx.fillText(
        width > 760
          ? 'smaller throat: smaller capture basin; remaining flow bends to the larger throat'
          : 'smaller basin; remaining flow bends to larger throat',
        Math.max(18, cx - (width > 760 ? 250 : 180)),
        height - 22,
      );
      ctx.fillStyle = 'rgba(142,150,189,0.82)';
      ctx.fillText('shading: qualitative source-gradient landscape', 18, height - 44);

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

  function resetBodies() {
    separationRef.current = INITIAL_SEPARATION;
    setLocked(true);
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
          aria-label="Schematic two-body animation of projected superfluid inflow into positive-mass throat defects"
          style={{ display: 'block', width: '100%', minHeight: 340 }}
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
        <button
          type="button"
          onClick={() => setLocked((v) => !v)}
          className="fu-mono"
          style={controlButtonStyle}
          aria-label={locked ? 'Release bodies' : 'Hold bodies stationary'}
        >
          {locked ? 'Release' : 'Hold'}
        </button>
        <button
          type="button"
          onClick={resetBodies}
          className="fu-mono"
          style={controlButtonStyle}
          aria-label="Reset bodies"
        >
          Reset
        </button>
        <div
          className="fu-small"
          style={{
            flex: '1 1 220px',
            color: 'var(--ink-2)',
            lineHeight: 1.45,
          }}
        >
          Slow flow, stationary by default. Release shows the smaller throat
          moving farther through the shared inflow.
        </div>
      </div>
    </div>
  );
}

const controlButtonStyle = {
  border: '1px solid var(--rule-2)',
  borderRadius: 3,
  background: 'rgba(21,26,54,0.9)',
  color: 'var(--ink-1)',
  padding: '8px 12px',
  fontSize: 11,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  cursor: 'pointer',
};
