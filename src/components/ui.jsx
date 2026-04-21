import React, { useMemo } from 'react';
import katex from 'katex';

// ─── Claim-status badge ──────────────────────────────────────────
export function Badge({ kind = 'exact', children }) {
  const map = {
    exact: ['b-exact', 'Exact'],
    closure: ['b-closure', 'Within closure'],
    reduce: ['b-reduce', 'Controlled reduction'],
    effect: ['b-effect', 'Effective closure'],
    num: ['b-num', 'Numerically located'],
    open: ['b-open', 'Open'],
  };
  const [cls, label] = map[kind] || map.exact;
  return <span className={`fu-badge ${cls}`}>{children || label}</span>;
}

// ─── Source-file / citation chip ─────────────────────────────────
export function Chip({ children, href, label }) {
  const content = label != null ? label : children;
  if (href) {
    return (
      <a
        className="fu-chip"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none', cursor: 'pointer' }}
      >
        {content}
      </a>
    );
  }
  return <span className="fu-chip">{content}</span>;
}

// KaTeX is rendered synchronously via renderToString so the output is correct
// on the first paint (SSR) and the client has nothing to hydrate but identical
// HTML — no flash of un-rendered LaTeX on navigation.
function renderTex(tex, displayMode) {
  try {
    return katex.renderToString(tex, { throwOnError: false, displayMode });
  } catch (err) {
    return tex;
  }
}

// Inline TeX (flows with surrounding text). `display` forces block mode.
export function Tex({ tex, display = false }) {
  const html = useMemo(() => renderTex(tex, display), [tex, display]);
  return (
    <span
      className="katex-host"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

// ─── Equation card (labelled block with plain-english gloss + tex + chips) ──
export function EqCard({ label, plain, tex, chips = [] }) {
  const html = useMemo(() => renderTex(tex, true), [tex]);
  return (
    <div className="fu-eq">
      {label && <div className="fu-eq-label">{label}</div>}
      {plain && <div className="fu-eq-plain">{plain}</div>}
      <div
        className="fu-eq-body"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      {chips.length > 0 && (
        <div style={{ marginTop: 14, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {chips.map((c, i) => {
            if (typeof c === 'string') return <Chip key={i}>{c}</Chip>;
            return (
              <Chip key={i} href={c.href}>
                {c.label}
              </Chip>
            );
          })}
        </div>
      )}
    </div>
  );
}
