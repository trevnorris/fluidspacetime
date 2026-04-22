import React, { useEffect, useRef, useState } from 'react';

// Hero diagram — brane + bulk + throat cross-section.
// Drag to rotate. Autopilot rotates gently when idle. Scrub (state) reveals the
// 3D→projected split; exposed as a prop default so callers can freeze a pose.

export function HeroDiagram({ palette, className, speed = 1, scrub: scrubProp = 0.35 }) {
  const [drag, setDrag] = useState({ yaw: -0.35, tilt: 0.55 });
  const [scrub] = useState(scrubProp);
  const ref = useRef(null);
  const dragging = useRef(null);

  useEffect(() => {
    let raf;
    const t0 = performance.now();
    let last = t0;
    const tick = (t) => {
      const dt = (t - last) / 1000;
      last = t;
      if (!dragging.current) {
        setDrag((d) => ({
          yaw: d.yaw + dt * 0.05 * speed,
          tilt: 0.5 + Math.sin((t - t0) / 4000) * 0.08,
        }));
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [speed]);

  useEffect(() => {
    const onMove = (e) => {
      if (!dragging.current) return;
      const dx = e.clientX - dragging.current.x;
      const dy = e.clientY - dragging.current.y;
      setDrag({
        yaw: dragging.current.yaw + dx * 0.006,
        tilt: Math.max(0.1, Math.min(1.2, dragging.current.tilt + dy * 0.004)),
      });
    };
    const onUp = () => {
      dragging.current = null;
    };
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
  }, []);

  const onDown = (e) => {
    e.preventDefault();
    dragging.current = {
      x: e.clientX,
      y: e.clientY,
      yaw: drag.yaw,
      tilt: drag.tilt,
    };
  };

  // ── Geometry ──
  const W = 1200;
  const H = 760;
  const cx = W / 2;
  const cy = H / 2 + 30;
  const yaw = drag.yaw;
  const tilt = drag.tilt;
  const sin = Math.sin;
  const cos = Math.cos;

  const proj = (x, y, z) => {
    const rx = cos(yaw) * x - sin(yaw) * z;
    const rz = sin(yaw) * x + cos(yaw) * z;
    const ry = y * cos(tilt) - rz * sin(tilt);
    const rz2 = y * sin(tilt) + rz * cos(tilt);
    return { x: cx + rx, y: cy + ry, z: rz2 };
  };

  const braneHalf = 420;
  const braneCorners = [
    [-braneHalf, 0, -braneHalf],
    [braneHalf, 0, -braneHalf],
    [braneHalf, 0, braneHalf],
    [-braneHalf, 0, braneHalf],
  ].map(([x, y, z]) => proj(x, y, z));

  const throatProfile = (w) => {
    const m = 80;
    const L = 240;
    const shape =
      m * Math.exp(-Math.pow(w / L, 2) * 1.4) * (0.6 + 0.4 * Math.cos(w / 90));
    return Math.max(6, shape);
  };

  const ring = (w, N = 48) => {
    const r = throatProfile(w);
    const pts = [];
    for (let i = 0; i < N; i++) {
      const a = (i / N) * Math.PI * 2;
      pts.push(proj(r * cos(a), w, r * sin(a)));
    }
    return pts;
  };

  const slices = [];
  for (let w = -300; w <= 300; w += 20) slices.push({ w, ring: ring(w) });

  const mouthRing = ring(0, 64);

  const projRadius = 110;
  const projRing = Array.from({ length: 64 }, (_, i) => {
    const a = (i / 64) * Math.PI * 2;
    return proj(projRadius * cos(a), 0, projRadius * sin(a));
  });

  const fieldLines = [];
  const NLINES = 8;
  for (let i = 0; i < NLINES; i++) {
    const a = (i / NLINES) * Math.PI * 2;
    const pts = [];
    for (let t = 0; t <= 1.0001; t += 0.04) {
      const w = (t - 0.5) * 600;
      const r = 150 + 50 * Math.sin(t * Math.PI * 2 + i);
      const ang = a + t * 0.8;
      const x = r * cos(ang);
      const z = r * sin(ang);
      pts.push(proj(x, w, z));
    }
    fieldLines.push(pts);
  }

  const toPath = (pts) =>
    pts
      .map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)},${p.y.toFixed(1)}`)
      .join(' ');
  const closedPath = (pts) => toPath(pts) + ' Z';

  const bulkAlpha = 1 - scrub * 0.75;
  const projAlpha = 0.2 + scrub * 0.8;

  const p = palette;

  return (
    <div className={className} style={{ position: 'relative', userSelect: 'none' }}>
      <svg
        ref={ref}
        viewBox={`0 0 ${W} ${H}`}
        width="100%"
        style={{
          display: 'block',
          cursor: dragging.current ? 'grabbing' : 'grab',
          touchAction: 'none',
        }}
        onPointerDown={onDown}
      >
        <defs>
          <radialGradient id="fu-bulk" cx="50%" cy="55%" r="65%">
            <stop offset="0%" stopColor={p.bulkCore} stopOpacity="0.55" />
            <stop offset="70%" stopColor={p.bulkEdge} stopOpacity="0.0" />
          </radialGradient>
          <linearGradient id="fu-brane" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={p.brane} stopOpacity="0.25" />
            <stop offset="50%" stopColor={p.brane} stopOpacity="0.06" />
            <stop offset="100%" stopColor={p.brane} stopOpacity="0.0" />
          </linearGradient>
          <linearGradient id="fu-throat" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={p.throatTop} stopOpacity="0.0" />
            <stop offset="30%" stopColor={p.throatTop} stopOpacity="0.35" />
            <stop offset="50%" stopColor={p.throatMid} stopOpacity="0.55" />
            <stop offset="70%" stopColor={p.throatTop} stopOpacity="0.35" />
            <stop offset="100%" stopColor={p.throatTop} stopOpacity="0.0" />
          </linearGradient>
          <filter id="fu-soft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>

        <ellipse
          cx={cx}
          cy={cy}
          rx={560}
          ry={280 + 100 * tilt}
          fill="url(#fu-bulk)"
          opacity={bulkAlpha}
        />

        <g opacity={bulkAlpha}>
          {slices
            .filter((s) => s.w < 0)
            .map(({ w, ring }) => (
              <path
                key={`b${w}`}
                d={closedPath(ring)}
                fill="none"
                stroke={p.throatTop}
                strokeWidth="0.6"
                opacity={0.25 + Math.max(0, 0.4 * (1 - Math.abs(w) / 300))}
              />
            ))}
        </g>

        <g opacity={bulkAlpha * 0.55}>
          {fieldLines.map((pts, i) => (
            <path
              key={`fl${i}`}
              d={toPath(pts)}
              fill="none"
              stroke={p.field}
              strokeWidth="0.8"
              strokeDasharray="1 3"
              opacity="0.8"
            />
          ))}
        </g>

        <path
          d={closedPath(braneCorners)}
          fill="url(#fu-brane)"
          stroke={p.braneEdge}
          strokeWidth="1"
          opacity={0.9}
        />
        <g opacity={0.4}>
          {Array.from({ length: 11 }, (_, i) => {
            const t = (i / 10) * 2 - 1;
            const u = proj(-braneHalf, 0, t * braneHalf);
            const v = proj(braneHalf, 0, t * braneHalf);
            const u2 = proj(t * braneHalf, 0, -braneHalf);
            const v2 = proj(t * braneHalf, 0, braneHalf);
            return (
              <g key={i}>
                <line
                  x1={u.x}
                  y1={u.y}
                  x2={v.x}
                  y2={v.y}
                  stroke={p.braneGrid}
                  strokeWidth="0.4"
                />
                <line
                  x1={u2.x}
                  y1={u2.y}
                  x2={v2.x}
                  y2={v2.y}
                  stroke={p.braneGrid}
                  strokeWidth="0.4"
                />
              </g>
            );
          })}
        </g>

        <path
          d={closedPath(projRing)}
          fill={p.projFill}
          opacity={projAlpha * 0.45}
          stroke={p.proj}
          strokeWidth="1"
        />
        <path
          d={closedPath(projRing)}
          fill="none"
          stroke={p.proj}
          strokeWidth="0.5"
          strokeDasharray="3 3"
          opacity={projAlpha * 0.9}
        />

        <g opacity={bulkAlpha}>
          {slices
            .filter((s) => s.w >= 0)
            .map(({ w, ring }) => (
              <path
                key={`a${w}`}
                d={closedPath(ring)}
                fill="none"
                stroke={p.throatTop}
                strokeWidth="0.6"
                opacity={0.3 + Math.max(0, 0.45 * (1 - Math.abs(w) / 300))}
              />
            ))}
        </g>

        <g>
          {(() => {
            const L = [];
            const R = [];
            for (let w = -300; w <= 300; w += 8) {
              const r = throatProfile(w);
              L.push(
                proj(
                  -r * cos(yaw + Math.PI / 2),
                  w,
                  -r * sin(yaw + Math.PI / 2)
                )
              );
              R.push(
                proj(r * cos(yaw + Math.PI / 2), w, r * sin(yaw + Math.PI / 2))
              );
            }
            const env = [...L, ...R.reverse()];
            return (
              <path
                d={closedPath(env)}
                fill="url(#fu-throat)"
                opacity={bulkAlpha * 0.85}
                stroke={p.throatEdge}
                strokeWidth="0.8"
              />
            );
          })()}
        </g>

        <path
          d={closedPath(mouthRing)}
          fill="none"
          stroke={p.mouth}
          strokeWidth="1.5"
        />

        <g opacity={0.7}>
          {(() => {
            const a = proj(0, -320, 0);
            const b = proj(0, 320, 0);
            return (
              <>
                <line
                  x1={a.x}
                  y1={a.y}
                  x2={b.x}
                  y2={b.y}
                  stroke={p.axis}
                  strokeWidth="0.8"
                  strokeDasharray="2 4"
                />
                <text
                  x={b.x + 6}
                  y={b.y + 4}
                  fill={p.axisText}
                  fontSize="12"
                  fontFamily="JetBrains Mono, monospace"
                  fontStyle="italic"
                >
                  w
                </text>
                <text
                  x={a.x + 6}
                  y={a.y - 6}
                  fill={p.axisText}
                  fontSize="10"
                  fontFamily="JetBrains Mono, monospace"
                  opacity="0.6"
                >
                  bulk
                </text>
              </>
            );
          })()}
        </g>

        <g
          fontFamily="JetBrains Mono, monospace"
          fontSize="10.5"
          letterSpacing="1.2"
          fill={p.label}
          opacity={0.85}
        >
          {(() => {
            const lbl1 = proj(braneHalf - 80, 0, -braneHalf + 30);
            const lbl2 = proj(0, 0, -40);
            const lbl3 = proj(0, 300, 0);
            const lbl4 = proj(180, 0, 180);
            return (
              <>
                <text x={lbl1.x} y={lbl1.y - 6} textAnchor="end">
                  3-BRANE · (x, y, z)
                </text>
                <text x={lbl2.x - 120} y={lbl2.y - 8} opacity={projAlpha}>
                  PROJECTION
                </text>
                <text x={lbl3.x + 12} y={lbl3.y} opacity={bulkAlpha}>
                  THROAT
                </text>
                <text x={lbl4.x} y={lbl4.y + 14} opacity={bulkAlpha * 0.8}>
                  4+1 BULK
                </text>
              </>
            );
          })()}
        </g>
      </svg>
    </div>
  );
}

export const AtlasPalette = {
  bulkCore: '#2a2060',
  bulkEdge: '#0a0d18',
  brane: '#e67ac6',
  braneEdge: 'rgba(230,122,198,0.55)',
  braneGrid: 'rgba(230,122,198,0.3)',
  throatTop: 'rgba(184, 139, 255, 0.75)',
  throatMid: 'rgba(230,122,198,0.65)',
  throatEdge: 'rgba(184, 139, 255, 0.45)',
  mouth: '#f0c26b',
  proj: '#f0c26b',
  projFill: 'rgba(240,194,107,0.15)',
  field: 'rgba(122,162,255,0.75)',
  axis: 'rgba(228,231,245,0.4)',
  axisText: '#a9b0cc',
  label: '#a9b0cc',
};

export const NotebookPalette = {
  bulkCore: '#3a2f1a',
  bulkEdge: '#15130f',
  brane: '#d9a441',
  braneEdge: 'rgba(217,164,65,0.55)',
  braneGrid: 'rgba(217,164,65,0.35)',
  throatTop: 'rgba(237, 229, 212, 0.8)',
  throatMid: 'rgba(217,164,65,0.7)',
  throatEdge: 'rgba(237, 229, 212, 0.4)',
  mouth: '#ede5d4',
  proj: '#d9a441',
  projFill: 'rgba(217,164,65,0.18)',
  field: 'rgba(200,189,166,0.7)',
  axis: 'rgba(237,229,212,0.45)',
  axisText: '#c8bda6',
  label: '#c8bda6',
};
