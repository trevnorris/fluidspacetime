import React from 'react';
import { Link } from 'react-router-dom';
import { TrackToggle } from '../components/TrackToggle.jsx';
import { TOPICS } from '../data/topics.js';

// Site map. Adapted from the SitemapArtboard design.
export default function SitemapPage() {
  const parts = [
    {
      num: 'I',
      name: 'Foundations',
      topics: TOPICS.filter((t) => t.part === 'I'),
    },
    {
      num: 'II',
      name: 'Applications',
      topics: TOPICS.filter((t) => t.part === 'II'),
    },
    {
      num: 'III',
      name: 'Meta',
      topics: TOPICS.filter((t) => t.part === 'III'),
    },
  ];

  return (
    <div
      className="fu-root dir-atlas"
      style={{ minHeight: '100%', padding: '60px 0 80px' }}
    >
      <SMAtmosphere />
      <div className="fu-wrap">
        {/* Header */}
        <div style={{ marginBottom: 56 }}>
          <div
            className="fu-eyebrow"
            style={{ color: 'var(--accent)', marginBottom: 18 }}
          >
            ◇ information architecture · v0.5
          </div>
          <h1
            className="fu-display fu-h2"
            style={{ marginBottom: 18, fontWeight: 300, maxWidth: 900 }}
          >
            Site map — two parallel tracks, one structure.
          </h1>
          <p className="fu-lede" style={{ maxWidth: 760 }}>
            Every topic exists twice: a plain-English page for the curious
            reader, a technical page for the working physicist. Same sections,
            same diagrams, same anchor IDs. A single <em>Plain ↔ Technical</em>{' '}
            toggle in the page chrome lets readers swap voices at any time.
          </p>
        </div>

        {/* Entry + fork */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: 48,
          }}
        >
          <SMNode label="Start Here" variant="entry" />
          <SMConnector height={54} />
          <div
            className="fu-mono fu-small"
            style={{
              color: 'var(--ink-3)',
              marginBottom: 10,
              letterSpacing: '0.08em',
            }}
          >
            reader chooses a track
          </div>
          <SMForkLines />
        </div>

        {/* Track headers */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
            gap: 40,
            marginBottom: 36,
          }}
        >
          <SMTrackHeader
            kind="plain"
            title="Plain English"
            subtitle="Metaphor-first. No equations in body copy."
            audience="curious readers · students · science writers"
            color="#e67ac6"
          />
          <SMTrackHeader
            kind="technical"
            title="Technical"
            subtitle="Formal notation, equations inline, claim-status badges."
            audience="working physicists · graduate readers · referees"
            color="#7aa2ff"
          />
        </div>

        {/* Parts */}
        <div
          style={{
            border: '1px solid var(--rule-2)',
            borderRadius: 3,
            background:
              'linear-gradient(180deg, rgba(16,20,42,0.4), rgba(10,13,24,0.2))',
            overflow: 'hidden',
          }}
        >
          {parts.map((p, i) => (
            <div
              key={p.num}
              style={{
                display: 'grid',
                gridTemplateColumns: '120px 1fr 1fr',
                borderBottom:
                  i < parts.length - 1 ? '1px solid var(--rule)' : 'none',
              }}
            >
              <div
                style={{
                  padding: '28px 22px',
                  borderRight: '1px solid var(--rule)',
                  background: 'rgba(28,34,70,0.35)',
                }}
              >
                <div
                  className="fu-mono"
                  style={{
                    fontSize: 11,
                    letterSpacing: '0.14em',
                    color: 'var(--ink-3)',
                    marginBottom: 6,
                  }}
                >
                  PART {p.num}
                </div>
                <div
                  className="fu-display"
                  style={{
                    fontSize: 17,
                    color: 'var(--ink-1)',
                    lineHeight: 1.2,
                  }}
                >
                  {p.name}
                </div>
              </div>
              {p.num === 'III' ? (
                <SMMetaColumn topics={p.topics} spanTwo />
              ) : (
                <>
                  <SMTopicColumn topics={p.topics} track="plain" color="#e67ac6" />
                  <SMTopicColumn
                    topics={p.topics}
                    track="technical"
                    color="#7aa2ff"
                    borderLeft
                  />
                </>
              )}
            </div>
          ))}
        </div>

        {/* Cross-track bridge callout */}
        <div
          style={{
            marginTop: 42,
            padding: '28px 32px',
            border: '1px dashed var(--rule-2)',
            borderRadius: 3,
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            gap: 32,
            alignItems: 'center',
          }}
        >
          <div>
            <div
              className="fu-eyebrow"
              style={{ color: '#e67ac6', marginBottom: 8 }}
            >
              ◇ track toggle
            </div>
            <div className="fu-small" style={{ color: 'var(--ink-2)' }}>
              Persistent in the page chrome. Swapping voices keeps your place
              in the topic.
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <TrackToggle
              track="plain"
              counterpartHref="/technical/universe-as-fluid"
              size="md"
            />
          </div>
          <div
            className="fu-small"
            style={{ color: 'var(--ink-3)', textAlign: 'right' }}
          >
            Same anchor IDs on both sides, so in-page links survive the swap.
          </div>
        </div>
      </div>
    </div>
  );
}

function SMAtmosphere() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        background: [
          'radial-gradient(ellipse 800px 500px at 20% 5%, rgba(122,162,255,0.08), transparent 60%)',
          'radial-gradient(ellipse 700px 500px at 80% 30%, rgba(230,122,198,0.06), transparent 60%)',
        ].join(','),
      }}
    />
  );
}

function SMNode({ label, variant }) {
  const entry = variant === 'entry';
  return (
    <div
      style={{
        padding: entry ? '18px 32px' : '12px 20px',
        border: '1px solid var(--rule-2)',
        borderRadius: 3,
        background: entry
          ? 'linear-gradient(160deg, rgba(122,162,255,0.12), rgba(184,139,255,0.08))'
          : 'rgba(16,20,42,0.7)',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div
        className="fu-display"
        style={{
          fontSize: entry ? 22 : 15,
          color: 'var(--ink-1)',
          fontWeight: 300,
        }}
      >
        {label}
      </div>
    </div>
  );
}

function SMConnector({ height = 32 }) {
  return (
    <svg width="2" height={height} style={{ display: 'block' }}>
      <line
        x1="1"
        y1="0"
        x2="1"
        y2={height}
        stroke="#2a3160"
        strokeWidth="1"
        strokeDasharray="3 3"
      />
    </svg>
  );
}

function SMForkLines() {
  return (
    <svg
      width="600"
      height="60"
      viewBox="0 0 600 60"
      style={{ display: 'block' }}
    >
      <path
        d="M300 0 L300 24 L150 24 L150 60"
        stroke="#2a3160"
        strokeWidth="1"
        strokeDasharray="3 3"
        fill="none"
      />
      <path
        d="M300 0 L300 24 L450 24 L450 60"
        stroke="#2a3160"
        strokeWidth="1"
        strokeDasharray="3 3"
        fill="none"
      />
      <path
        d="M147 56 L150 60 L153 56"
        stroke="#e67ac6"
        strokeWidth="1.2"
        fill="none"
      />
      <path
        d="M447 56 L450 60 L453 56"
        stroke="#7aa2ff"
        strokeWidth="1.2"
        fill="none"
      />
    </svg>
  );
}

function SMTrackHeader({ kind, title, subtitle, audience, color }) {
  return (
    <div
      style={{
        padding: '24px 26px',
        border: `1px solid ${color}55`,
        borderRadius: 3,
        background: `linear-gradient(160deg, ${color}14, rgba(10,13,24,0.3))`,
      }}
    >
      <div
        className="fu-mono"
        style={{
          fontSize: 11,
          letterSpacing: '0.14em',
          color,
          marginBottom: 10,
          textTransform: 'uppercase',
        }}
      >
        ◇ {kind} track
      </div>
      <div
        className="fu-display"
        style={{
          fontSize: 26,
          color: 'var(--ink-1)',
          fontWeight: 300,
          marginBottom: 8,
        }}
      >
        {title}
      </div>
      <div
        className="fu-small"
        style={{ color: 'var(--ink-2)', marginBottom: 14 }}
      >
        {subtitle}
      </div>
      <div
        className="fu-small"
        style={{ color: 'var(--ink-3)', fontStyle: 'italic' }}
      >
        for: {audience}
      </div>
    </div>
  );
}

function SMTopicColumn({ topics, track, color, borderLeft }) {
  const titleKey = track === 'plain' ? 'plainTitle' : 'techTitle';
  return (
    <div
      style={{
        padding: '18px 22px',
        borderLeft: borderLeft ? '1px solid var(--rule)' : 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      {topics.map((t) => (
        <Link
          key={t.n}
          to={`/${track}/${t.slug}`}
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: 14,
            padding: '9px 10px',
            borderRadius: 2,
            textDecoration: 'none',
          }}
        >
          <span
            className="fu-mono"
            style={{ color, fontSize: 11, minWidth: 22 }}
          >
            {t.n}
          </span>
          <span
            className="fu-body"
            style={{
              fontSize: 15,
              color: 'var(--ink-1)',
              flex: 1,
            }}
          >
            {t[titleKey]}
          </span>
        </Link>
      ))}
    </div>
  );
}

function SMMetaColumn({ topics, spanTwo }) {
  return (
    <div
      style={{
        gridColumn: spanTwo ? 'span 2' : 'auto',
        padding: '18px 22px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: 4,
      }}
    >
      {topics.map((t) => (
        <Link
          key={t.n}
          to={`/meta/${t.slug}`}
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: 14,
            padding: '9px 10px',
            borderRadius: 2,
            textDecoration: 'none',
          }}
        >
          <span
            className="fu-mono"
            style={{ color: '#d7c9a1', fontSize: 11, minWidth: 22 }}
          >
            {t.n}
          </span>
          <span
            className="fu-body"
            style={{ fontSize: 15, color: 'var(--ink-1)', flex: 1 }}
          >
            {t.metaTitle}
          </span>
        </Link>
      ))}
    </div>
  );
}
