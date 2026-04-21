import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div
      className="fu-root dir-atlas"
      style={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        padding: 40,
      }}
    >
      <div style={{ maxWidth: 520, textAlign: 'center' }}>
        <div
          className="fu-eyebrow"
          style={{ color: 'var(--accent)', marginBottom: 18 }}
        >
          ◇ 404
        </div>
        <h1
          className="fu-display fu-h2"
          style={{ fontWeight: 300, marginBottom: 20 }}
        >
          Not a page in this atlas.
        </h1>
        <p className="fu-body" style={{ marginBottom: 28 }}>
          The route you asked for isn't in the index. Head back to the start or
          consult the site map.
        </p>
        <div
          style={{
            display: 'flex',
            gap: 14,
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Link
            to="/"
            className="fu-small fu-mono"
            style={{
              padding: '8px 16px',
              border: '1px solid var(--accent)',
              color: 'var(--accent)',
              borderRadius: 2,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}
          >
            Start Here →
          </Link>
          <Link
            to="/sitemap"
            className="fu-small fu-mono"
            style={{
              padding: '8px 16px',
              border: '1px solid var(--rule-2)',
              color: 'var(--ink-2)',
              borderRadius: 2,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}
          >
            Site map
          </Link>
        </div>
      </div>
    </div>
  );
}
