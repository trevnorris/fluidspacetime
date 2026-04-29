import React from 'react';

// Shared diagram used in Part 1 · The Universe as a Fluid.
// Same geometry on both tracks — only the labels change.
export function FluidDiagram({ labels, accent = '#7aa2ff' }) {
  const defectLines = Array.isArray(labels.defect)
    ? labels.defect
    : [labels.defect];

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
          <linearGradient id="fd-medium" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={accent} stopOpacity="0.16" />
            <stop offset="48%" stopColor={accent} stopOpacity="0.08" />
            <stop offset="100%" stopColor="#0a0d18" stopOpacity="0.12" />
          </linearGradient>
          <radialGradient id="fd-ripple-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={accent} stopOpacity="0.22" />
            <stop offset="100%" stopColor={accent} stopOpacity="0" />
          </radialGradient>
          <radialGradient id="fd-defect" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#e67ac6" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#e67ac6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        {/* Medium — the fluid */}
        <rect x="0" y="0" width="800" height="420" fill="url(#fd-medium)" />

        {/* Faint structure lines — a continuous medium, not a chart. */}
        <g opacity="0.44">
          {Array.from({ length: 12 }).map((_, i) => (
            <line
              key={i}
              x1="46"
              y1={68 + i * 24}
              x2="754"
              y2={68 + i * 24}
              stroke={accent}
              strokeOpacity={0.08 + (i % 3) * 0.02}
              strokeWidth="0.7"
            />
          ))}
        </g>

        {/* Ripple — concentric arcs from a point on the left */}
        <g transform="translate(235, 206)">
          <circle cx="0" cy="0" r="150" fill="url(#fd-ripple-glow)" />
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
        <g transform="translate(535, 240)">
          <circle cx="0" cy="0" r="52" fill="url(#fd-defect)" />
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
        </g>

        {/* Speed-limit marker — a small wave-sector cue, not chart axes. */}
        <g opacity="0.9">
          <path
            d="M 120 344 C 168 332, 202 356, 250 344 S 332 356, 382 344"
            fill="none"
            stroke={accent}
            strokeWidth="1"
            strokeOpacity="0.58"
          />
          <text
            x="252"
            y="372"
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

        {/* Callouts */}
        <g>
          <line
            x1="448"
            y1="104"
            x2="448"
            y2="76"
            stroke={accent}
            strokeWidth="0.8"
          />
          <line
            x1="448"
            y1="76"
            x2="518"
            y2="76"
            stroke={accent}
            strokeWidth="0.8"
          />
          <circle cx="448" cy="104" r="2.2" fill={accent} />
          <text
            x="524"
            y="80"
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
            x1="320"
            y1="206"
            x2="356"
            y2="158"
            stroke={accent}
            strokeWidth="0.8"
          />
          <line
            x1="356"
            y1="158"
            x2="436"
            y2="158"
            stroke={accent}
            strokeWidth="0.8"
          />
          <circle cx="320" cy="206" r="2.2" fill={accent} />
          <text
            x="442"
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
            x1="570"
            y1="240"
            x2="592"
            y2="240"
            stroke="#e67ac6"
            strokeWidth="0.8"
          />
          <circle cx="570" cy="240" r="2.2" fill="#e67ac6" />
          <text
            x="600"
            y="236"
            fill="var(--ink-1)"
            textAnchor="start"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 12,
              letterSpacing: '0.04em',
            }}
          >
            {defectLines.map((line, i) => (
              <tspan key={line} x="600" dy={i === 0 ? 0 : 17}>
                {line}
              </tspan>
            ))}
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
