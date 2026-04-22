import React, { createContext, useContext } from 'react';
import { Link } from 'react-router-dom';
import { TrackToggle } from './TrackToggle.jsx';
import { crossTrack, neighborsOf, findBySlug } from '../data/topics.js';

// Context for inline widgets inside topic body content (e.g. TrackToggle in a
// callout) so they don't need to repeat the current track / counterpart href.
const TopicCtx = createContext(null);
export function useTopicContext() {
  return useContext(TopicCtx);
}

// ─── Page chrome used by every topic page ────────────────────────
// `topic` carries canonical per-topic metadata (number, slug, part, etc.).
// prev/next and the cross-track counterpart are derived from topics.js —
// the topic pages don't pass hrefs themselves.
export function TopicPage({ track, topic, meta = false, children }) {
  const isPlain = track === 'plain';
  const trackColor = meta ? '#d7c9a1' : isPlain ? '#e67ac6' : '#7aa2ff';

  const canonical = meta ? findBySlug(topic.slug) : findBySlug(topic.slug);
  const { prev, next } = canonical ? neighborsOf(canonical, track) : { prev: null, next: null };
  const other = canonical ? crossTrack(canonical, track) : null;

  return (
    <TopicCtx.Provider value={{ track, topic, counterpartHref: other?.href, counterpartTrack: other?.track }}>
    <div
      className="fu-root dir-atlas"
      style={{ minHeight: '100%', overflow: 'auto' }}
    >
      <TPAtmosphere />
      <TPNav track={track} trackColor={trackColor} meta={meta} counterpartHref={other?.href} />

      {/* Topic header */}
      <section style={{ padding: '60px 0 20px', position: 'relative' }}>
        <div className="fu-wrap-narrow" style={{ maxWidth: 820 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: 18,
              marginBottom: 18,
            }}
          >
            <div
              className="fu-mono"
              style={{
                fontSize: 52,
                color: trackColor,
                fontWeight: 300,
                lineHeight: 1,
                letterSpacing: '-0.02em',
              }}
            >
              {topic.n}
            </div>
            <div className="fu-eyebrow" style={{ color: 'var(--ink-3)' }}>
              ◇ part {topic.part} · {topic.partName.toLowerCase()}
            </div>
          </div>
        </div>
      </section>

      {children}

      {/* Cross-track bridge + prev/next */}
      <section style={{ padding: '80px 0', borderTop: '1px solid var(--rule)' }}>
        <div className="fu-wrap-narrow" style={{ maxWidth: 820 }}>
          {!meta && other && (
            <div
              style={{
                padding: '22px 26px',
                border: `1px dashed ${trackColor}55`,
                borderRadius: 3,
                background: `linear-gradient(160deg, ${trackColor}0c, rgba(10,13,24,0.3))`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 20,
                flexWrap: 'wrap',
                marginBottom: 40,
              }}
            >
              <div>
                <div
                  className="fu-mono"
                  style={{
                    fontSize: 10,
                    letterSpacing: '0.14em',
                    color: 'var(--ink-3)',
                    textTransform: 'uppercase',
                    marginBottom: 6,
                  }}
                >
                  ◇ switch tracks
                </div>
                <div
                  className="fu-body"
                  style={{ fontSize: 15.5, color: 'var(--ink-1)' }}
                >
                  Same section, same anchors — switch any time.
                </div>
              </div>
              <TrackToggle track={track} counterpartHref={other.href} size="md" />
            </div>
          )}

          {meta && (
            <div
              style={{
                padding: '18px 22px',
                border: '1px solid var(--rule-2)',
                borderRadius: 3,
                background: 'rgba(215,201,161,0.04)',
                marginBottom: 40,
              }}
            >
              <span
                className="fu-mono fu-small"
                style={{
                  color: '#d7c9a1',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  fontSize: 10.5,
                  marginRight: 14,
                }}
              >
                ◇ meta
              </span>
              <span className="fu-small" style={{ color: 'var(--ink-2)' }}>
                Part III pages are single-track. They describe the program itself
                rather than a topic within it — no plain mirror.
              </span>
            </div>
          )}

          {/* Prev / Next within track */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(min(260px, 100%), 1fr))',
              gap: 16,
            }}
          >
            <PrevNextCard label="← previous" fallback="You're at the start." item={prev} color="var(--ink-3)" />
            <PrevNextCard label="next →" fallback="—" item={next} color={trackColor} alignRight />
          </div>
        </div>
      </section>

      <TPFooter track={track} />
    </div>
    </TopicCtx.Provider>
  );
}

function PrevNextCard({ label, fallback, item, color, alignRight = false }) {
  const card = {
    padding: '22px 24px',
    border: '1px solid var(--rule-2)',
    borderRadius: 3,
    background: 'rgba(16,20,42,0.4)',
    cursor: item ? 'pointer' : 'default',
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
    textDecoration: 'none',
    textAlign: alignRight ? 'right' : 'left',
  };
  const labelStyle = {
    color,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    fontSize: 10.5,
  };
  const titleStyle = {
    color: item ? 'var(--ink-1)' : 'var(--ink-3)',
    fontSize: 15,
    fontStyle: item ? 'normal' : 'italic',
  };
  const Inner = (
    <>
      <span className="fu-mono fu-small" style={labelStyle}>
        {label}
      </span>
      <span className="fu-body" style={titleStyle}>
        {item ? `${item.n ? item.n + ' · ' : ''}${item.title}` : fallback}
      </span>
    </>
  );
  return item ? (
    <Link to={item.href} style={card}>
      {Inner}
    </Link>
  ) : (
    <div style={card}>{Inner}</div>
  );
}

function TPAtmosphere() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        background: [
          'radial-gradient(ellipse 800px 500px at 15% 5%, rgba(122,162,255,0.09), transparent 62%)',
          'radial-gradient(ellipse 600px 400px at 85% 40%, rgba(184,139,255,0.06), transparent 60%)',
        ].join(','),
      }}
    />
  );
}

function TPNav({ track, trackColor, meta = false, counterpartHref }) {
  const items = [
    { label: 'Start Here', href: '/', extra: true },
    { label: 'Site map', href: '/sitemap' },
    { label: 'Moving-Throat PDE', href: '/plain/moving-throat', extra: true },
    { label: 'Results Ledger', href: '/plain/pn-ledger', extra: true },
    { label: 'Library', href: '/meta/paper-library' },
  ];
  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 20,
        background: 'rgba(10,13,24,0.78)',
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid var(--rule)',
      }}
    >
      <div
        className="fu-wrap fu-nav"
        style={{
          display: 'flex',
          alignItems: 'center',
          height: 68,
          gap: 24,
        }}
      >
        <Link
          to="/"
          style={{ display: 'flex', alignItems: 'center', gap: 12 }}
        >
          <svg width="26" height="26" viewBox="0 0 28 28" aria-hidden>
            <defs>
              <radialGradient id={`tp-logo-${track}`} cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#e67ac6" stopOpacity="0.9" />
                <stop offset="60%" stopColor="#7aa2ff" stopOpacity="0.4" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
            <circle cx="14" cy="14" r="13" fill={`url(#tp-logo-${track})`} />
            <ellipse
              cx="14"
              cy="14"
              rx="11"
              ry="2.5"
              stroke="#e4e7f5"
              strokeWidth="0.6"
              fill="none"
              opacity="0.55"
            />
            <path
              d="M14 3 Q 11 14 14 25 Q 17 14 14 3 Z"
              fill="none"
              stroke="#e4e7f5"
              strokeWidth="0.8"
              opacity="0.85"
            />
            <circle cx="14" cy="14" r="1.4" fill="#f0c26b" />
          </svg>
          <span
            className="fu-mono fu-nav-wordmark"
            style={{
              fontSize: 15,
              letterSpacing: '0.05em',
              color: 'var(--ink-1)',
            }}
          >
            fluid<span style={{ color: 'var(--accent)' }}>·</span>spacetime
          </span>
        </Link>
        {meta ? (
          <span
            className="fu-mono"
            style={{
              fontSize: 10.5,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              padding: '5px 12px',
              borderRadius: 999,
              border: '1px solid #d7c9a166',
              color: '#d7c9a1',
              background: 'rgba(215,201,161,0.08)',
              lineHeight: 1,
            }}
          >
            Meta
          </span>
        ) : (
          <TrackToggle track={track} counterpartHref={counterpartHref} size="sm" />
        )}
        <div style={{ flex: 1 }} />
        {items.map((x) => (
          <Link
            key={x.href}
            to={x.href}
            className={`fu-small${x.extra ? ' fu-nav-extra' : ''}`}
            style={{ color: 'var(--ink-2)' }}
          >
            {x.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

function TPFooter({ track }) {
  const label =
    track === 'plain'
      ? 'PLAIN ENGLISH TRACK'
      : track === 'technical'
      ? 'TECHNICAL TRACK'
      : 'META';
  return (
    <footer
      style={{ padding: '60px 0 80px', borderTop: '1px solid var(--rule)' }}
    >
      <div className="fu-wrap">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: 20,
            flexWrap: 'wrap',
          }}
        >
          <div>
            <div
              className="fu-mono"
              style={{
                fontSize: 12,
                color: 'var(--ink-3)',
                letterSpacing: '0.08em',
                marginBottom: 8,
              }}
            >
              FLUID SPACETIME · {label}
            </div>
            <div
              className="fu-small"
              style={{ color: 'var(--ink-3)', maxWidth: 460 }}
            >
              A speculative research program. Every claim carries its own badge;
              no hype, no placeholders.
            </div>
          </div>
          <div
            className="fu-small fu-mono"
            style={{ color: 'var(--ink-4)' }}
          >
            fluidspacetime.com
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── In-page layout primitives (shared by every topic page) ──────
export function TPTitle({ children }) {
  return (
    <div className="fu-wrap-narrow" style={{ maxWidth: 820 }}>
      <h1
        className="fu-display"
        style={{
          fontSize: 'clamp(44px, 5.5vw, 72px)',
          fontWeight: 300,
          lineHeight: 1.05,
          letterSpacing: '-0.025em',
          marginBottom: 28,
          color: 'var(--ink-1)',
        }}
      >
        {children}
      </h1>
    </div>
  );
}

export function TPLede({ children }) {
  return (
    <div
      className="fu-wrap-narrow"
      style={{ maxWidth: 760, marginBottom: 72 }}
    >
      <p
        className="fu-lede"
        style={{ fontSize: 'clamp(18px, 1.5vw, 22px)' }}
      >
        {children}
      </p>
    </div>
  );
}

export function TPSection({ anchor, eyebrow, heading, children }) {
  return (
    <section
      id={anchor}
      style={{ padding: '60px 0', borderTop: '1px solid var(--rule)' }}
    >
      <div className="fu-wrap-narrow" style={{ maxWidth: 820 }}>
        <div
          className="fu-eyebrow"
          style={{ color: 'var(--accent)', marginBottom: 14 }}
        >
          ◇ {eyebrow}
        </div>
        <h2
          className="fu-display"
          style={{
            fontSize: 'clamp(28px, 3vw, 40px)',
            fontWeight: 300,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: 32,
            color: 'var(--ink-1)',
          }}
        >
          {heading}
        </h2>
        {children}
      </div>
    </section>
  );
}

export function TPBody({ children, style }) {
  return (
    <div
      className="fu-body"
      style={{
        fontSize: 17,
        lineHeight: 1.75,
        color: 'var(--ink-2)',
        marginBottom: 24,
        maxWidth: 720,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function TPCallout({ kind = 'note', children }) {
  const tint = kind === 'warn' ? '#e67ac6' : 'var(--accent)';
  return (
    <aside
      style={{
        margin: '28px 0 32px',
        padding: '20px 24px',
        borderLeft: `2px solid ${tint}`,
        background: 'rgba(16,20,42,0.35)',
        color: 'var(--ink-1)',
      }}
    >
      <div
        className="fu-body"
        style={{
          fontSize: 16,
          fontStyle: 'italic',
          color: 'var(--ink-1)',
          margin: 0,
        }}
      >
        {children}
      </div>
    </aside>
  );
}
