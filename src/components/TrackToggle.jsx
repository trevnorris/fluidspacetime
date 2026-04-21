import React from 'react';
import { Link } from 'react-router-dom';
import { useTopicContext } from './TopicPage.jsx';

// Segmented Plain ↔ Technical toggle.
// The inactive side is a real `<Link>` that navigates to the other track's
// version of the same topic; the active side is a styled `<span>`.
// On topic pages both `track` and `counterpartHref` fall back to the topic
// context so inline toggles inside callouts don't need to pass them.
export function TrackToggle({ track, counterpartHref, size = 'sm' }) {
  const ctx = useTopicContext();
  const resolvedTrack = track ?? ctx?.track;
  const resolvedHref = counterpartHref ?? ctx?.counterpartHref;
  const isPlain = resolvedTrack === 'plain';
  const plainTint = '#e67ac6';
  const techTint = '#7aa2ff';
  const activeTint = isPlain ? plainTint : techTint;

  const small = size === 'sm';
  const pad = small ? '5px 12px' : '8px 16px';
  const fontSize = small ? 10.5 : 12;
  const gap = small ? 2 : 3;

  const pillBase = {
    fontFamily: 'var(--font-mono)',
    fontSize,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    padding: pad,
    borderRadius: 999,
    cursor: resolvedHref ? 'pointer' : 'default',
    transition: 'color 0.15s, background 0.15s',
    lineHeight: 1,
    display: 'inline-flex',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    userSelect: 'none',
    textDecoration: 'none',
  };

  const activePillStyle = (tint) => ({
    ...pillBase,
    background: tint,
    color: '#0a0d18',
    fontWeight: 600,
  });
  const inactivePillStyle = {
    ...pillBase,
    background: 'transparent',
    color: 'var(--ink-2)',
    fontWeight: 400,
  };

  const Inactive = ({ children }) =>
    resolvedHref ? (
      <Link to={resolvedHref} style={inactivePillStyle}>
        {children}
      </Link>
    ) : (
      <span style={inactivePillStyle}>{children}</span>
    );

  return (
    <div
      role="tablist"
      aria-label="Reading track"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap,
        padding: 3,
        border: `1px solid ${activeTint}44`,
        background: 'rgba(10,13,24,0.55)',
        borderRadius: 999,
      }}
    >
      {isPlain ? (
        <>
          <span role="tab" aria-selected style={activePillStyle(plainTint)}>
            Plain
          </span>
          <Inactive>Technical</Inactive>
        </>
      ) : (
        <>
          <Inactive>Plain</Inactive>
          <span role="tab" aria-selected style={activePillStyle(techTint)}>
            Technical
          </span>
        </>
      )}
    </div>
  );
}
