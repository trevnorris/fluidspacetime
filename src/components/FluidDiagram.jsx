import React from 'react';

// Shared diagram used in Part 1 · The Universe as a Fluid.
// Same geometry on both tracks — only the labels change.
export function FluidDiagram({ labels, accent = '#7aa2ff' }) {
  return (
    <div
      style={{
        border: '1px solid var(--rule-2)',
        borderRadius: 3,
        background:
          'linear-gradient(180deg, rgba(16,20,42,0.75), rgba(10,13,24,0.4))',
        overflow: 'hidden',
        margin: '32px 0 12px',
      }}
    >
      <div
        style={{
          padding: '12px 18px',
          borderBottom: '1px solid var(--rule)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span className="fu-eyebrow">
          ◇ {labels.plateNum} · {labels.plateTitle}
        </span>
        <span
          className="fu-small fu-mono"
          style={{ color: 'var(--ink-3)', fontSize: 11 }}
        >
          {labels.plateTag}
        </span>
      </div>

      <svg
        viewBox="0 0 800 420"
        style={{ width: '100%', height: 'auto', display: 'block' }}
      >
        <defs>
          <linearGradient id="fd-medium" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={accent} stopOpacity="0.22" />
            <stop offset="60%" stopColor={accent} stopOpacity="0.10" />
            <stop offset="100%" stopColor={accent} stopOpacity="0.02" />
          </linearGradient>
          <radialGradient id="fd-defect" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#e67ac6" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#e67ac6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        {/* Medium — the fluid */}
        <rect x="0" y="80" width="800" height="260" fill="url(#fd-medium)" />

        {/* Faint horizontal streaks — suggests a medium with structure */}
        <g opacity="0.55">
          {Array.from({ length: 13 }).map((_, i) => (
            <line
              key={i}
              x1="40"
              y1={100 + i * 18}
              x2="760"
              y2={100 + i * 18}
              stroke={accent}
              strokeOpacity={0.08 + (i % 3) * 0.02}
              strokeWidth="0.7"
            />
          ))}
        </g>

        {/* Ripple — concentric arcs from a point on the left */}
        <g transform="translate(200, 210)">
          {[28, 58, 92, 128].map((r, i) => (
            <circle
              key={r}
              cx="0"
              cy="0"
              r={r}
              fill="none"
              stroke={accent}
              strokeWidth={1.2 - i * 0.15}
              strokeOpacity={0.8 - i * 0.18}
            />
          ))}
          <circle cx="0" cy="0" r="3.5" fill={accent} />
        </g>

        {/* Defect — localized mouth on the right */}
        <g transform="translate(560, 210)">
          <circle cx="0" cy="0" r="46" fill="url(#fd-defect)" />
          <ellipse
            cx="0"
            cy="0"
            rx="42"
            ry="10"
            stroke="#e67ac6"
            strokeWidth="1.1"
            fill="none"
            opacity="0.85"
          />
          <ellipse
            cx="0"
            cy="0"
            rx="28"
            ry="6.5"
            stroke="#e67ac6"
            strokeWidth="0.9"
            fill="none"
            opacity="0.65"
          />
          <circle cx="0" cy="0" r="3.5" fill="#f0c26b" />
          <g stroke="#e67ac6" strokeWidth="0.8" opacity="0.4" fill="none">
            <path d="M -90 -4 L -50 -3" />
            <path d="M -90 4 L -50 3" />
            <path d="M 90 -4 L 50 -3" />
            <path d="M 90 4 L 50 3" />
          </g>
        </g>

        {/* Speed-limit marker — dashed line, labeled c */}
        <g>
          <line
            x1="100"
            y1="370"
            x2="340"
            y2="370"
            stroke="var(--ink-3)"
            strokeWidth="0.8"
            strokeDasharray="3 4"
          />
          <text
            x="220"
            y="388"
            textAnchor="middle"
            fill="var(--ink-2)"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.08em',
            }}
          >
            {labels.speedLimit}
          </text>
        </g>

        {/* Axis hints */}
        <g
          stroke="var(--ink-4)"
          strokeWidth="0.8"
          fill="none"
          opacity="0.8"
        >
          <line x1="40" y1="380" x2="40" y2="60" />
          <path d="M 36 64 L 40 56 L 44 64" />
          <line x1="40" y1="380" x2="760" y2="380" />
          <path d="M 756 376 L 764 380 L 756 384" />
          <text
            x="50"
            y="64"
            fill="var(--ink-3)"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              letterSpacing: '0.08em',
            }}
          >
            {labels.yAxis}
          </text>
          <text
            x="760"
            y="398"
            fill="var(--ink-3)"
            textAnchor="end"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              letterSpacing: '0.08em',
            }}
          >
            {labels.xAxis}
          </text>
        </g>

        {/* Callouts */}
        <g>
          <line
            x1="400"
            y1="120"
            x2="400"
            y2="92"
            stroke={accent}
            strokeWidth="0.8"
          />
          <line
            x1="400"
            y1="92"
            x2="480"
            y2="92"
            stroke={accent}
            strokeWidth="0.8"
          />
          <circle cx="400" cy="120" r="2.2" fill={accent} />
          <text
            x="484"
            y="96"
            fill="var(--ink-1)"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 12,
              letterSpacing: '0.04em',
            }}
          >
            {labels.medium}
          </text>
        </g>
        <g>
          <line
            x1="280"
            y1="210"
            x2="320"
            y2="158"
            stroke={accent}
            strokeWidth="0.8"
          />
          <line
            x1="320"
            y1="158"
            x2="400"
            y2="158"
            stroke={accent}
            strokeWidth="0.8"
          />
          <circle cx="280" cy="210" r="2.2" fill={accent} />
          <text
            x="404"
            y="162"
            fill="var(--ink-1)"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 12,
              letterSpacing: '0.04em',
            }}
          >
            {labels.ripple}
          </text>
        </g>
        <g>
          <line
            x1="600"
            y1="210"
            x2="680"
            y2="270"
            stroke="#e67ac6"
            strokeWidth="0.8"
          />
          <line
            x1="680"
            y1="270"
            x2="760"
            y2="270"
            stroke="#e67ac6"
            strokeWidth="0.8"
          />
          <circle cx="600" cy="210" r="2.2" fill="#e67ac6" />
          <text
            x="756"
            y="274"
            fill="var(--ink-1)"
            textAnchor="end"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 12,
              letterSpacing: '0.04em',
            }}
          >
            {labels.defect}
          </text>
        </g>
      </svg>

      <div
        style={{
          padding: '10px 18px',
          borderTop: '1px solid var(--rule)',
          display: 'flex',
          gap: 18,
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <LegendDot color={accent} label={labels.mediumShort} />
        <LegendDot color={accent} label={labels.rippleShort} />
        <LegendDot color="#e67ac6" label={labels.defectShort} />
        <LegendDot color="#f0c26b" label={labels.braneShort} />
      </div>
    </div>
  );
}

function LegendDot({ color, label }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
      <span
        style={{
          width: 9,
          height: 9,
          borderRadius: 5,
          background: color,
          boxShadow: `0 0 8px ${color}`,
        }}
      />
      <span
        className="fu-small fu-mono"
        style={{ color: 'var(--ink-2)', fontSize: 11 }}
      >
        {label}
      </span>
    </span>
  );
}
