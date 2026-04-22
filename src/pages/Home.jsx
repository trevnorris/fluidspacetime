import React from 'react';
import { Link } from 'react-router-dom';
import { Tex } from '../components/ui.jsx';

// Home — track-choice landing. Adapted from the original TrackChoice artboard.
export default function Home() {
  return (
    <div
      className="fu-root dir-atlas"
      style={{ minHeight: '100%', overflow: 'auto' }}
    >
      <TCAtmosphere />
      <TCNav />

      <section style={{ padding: '90px 0 60px', position: 'relative' }}>
        <div className="fu-wrap">
          {/* Program framing */}
          <div style={{ maxWidth: 860, marginBottom: 72 }}>
            <div
              className="fu-eyebrow"
              style={{ marginBottom: 22, color: 'var(--accent)' }}
            >
              ◇ a speculative research program · est. 2024
            </div>
            <h1
              className="fu-display fu-h1"
              style={{
                marginBottom: 28,
                fontWeight: 280,
                fontSize: 'clamp(48px, 6.5vw, 92px)',
              }}
            >
              Physics,{' '}
              <em
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  background:
                    'linear-gradient(90deg, var(--accent) 0%, #b88bff 60%, #e67ac6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                projected
              </em>
              .<br />
              Particles as moving throats in a 4D fluid.
            </h1>
            <p className="fu-lede" style={{ maxWidth: 720 }}>
              An atlas for a toy-model research program that tests whether
              gravity-like, electromagnetic, plasma and atomic behavior can
              emerge as the measured surface of a deeper four-dimensional
              fluid substrate.
            </p>
          </div>

          {/* Track choice */}
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: 20,
              marginBottom: 28,
            }}
          >
            <span className="fu-eyebrow" style={{ color: 'var(--accent)' }}>
              ◇ choose a track
            </span>
            <span className="fu-small" style={{ color: 'var(--ink-3)' }}>
              each topic exists twice — same structure, different voice
            </span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 28,
            }}
          >
            <TrackCard
              kind="plain"
              color="#e67ac6"
              gradient="rgba(230,122,198,0.10)"
              title="Plain English"
              tagline="Metaphor first. Math optional."
              audience="Curious readers, students, science writers."
              bullets={[
                'Every idea explained with superfluids, ripples, and knots before any formula appears.',
                'No equations in the body. Occasional “here\'s the math if you want it” fold-outs.',
                '14 topics, ~45 minutes end to end.',
              ]}
              sample={{
                label: 'how a page opens',
                body: 'Imagine the universe is a still pond, but four-dimensional. Light is a ripple across it. What we call a particle is a tiny whirlpool — a knot in the water that refuses to untie.',
              }}
              cta="Start reading plain →"
              href="/plain/universe-as-fluid"
            />
            <TrackCard
              kind="technical"
              color="#7aa2ff"
              gradient="rgba(122,162,255,0.10)"
              title="Technical"
              tagline="Formal notation. Equations inline."
              audience="Working physicists, graduate readers, referees."
              bullets={[
                'Parent action stated on page 1. Every carry-forward identity is cited.',
                'Every asserted equality carries a claim-status badge (exact · closure · open …).',
                'Source chips point back to the current Zenodo preprints and the paper library.',
              ]}
              sample={{
                label: 'how a page opens',
                body: (
                  <>
                    Let <Tex tex="\psi(x,w,t)" /> denote a complex order
                    parameter on the bulk{' '}
                    <Tex tex="\mathbb{R}^{3}\!\times\!\mathbb{R}_w\!\times\!\mathbb{R}_t" />
                    , with <Tex tex="\rho = |\psi|^2" /> and a stiff polytropic
                    EoS <Tex tex="P(\rho)=K\rho^{n}" />, <Tex tex="\,n=5" />. A
                    brane observer measures projection-defined fields…
                  </>
                ),
              }}
              cta="Start reading technical →"
              href="/technical/universe-as-fluid"
            />
          </div>

          {/* Meta row */}
          <div
            style={{
              marginTop: 32,
              padding: '18px 22px',
              border: '1px dashed var(--rule-2)',
              borderRadius: 3,
              display: 'flex',
              gap: 20,
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <span
              className="fu-mono"
              style={{
                fontSize: 11,
                letterSpacing: '0.14em',
                color: 'var(--ink-3)',
                textTransform: 'uppercase',
              }}
            >
              ◇ either track
            </span>
            <span
              className="fu-small"
              style={{ color: 'var(--ink-2)', maxWidth: 680 }}
            >
              Every page has a link to the other track's version, so you can
              switch mid-read without losing your place. Prefer to browse the
              raw source? The{' '}
              <Link className="fu-link" to="/meta/paper-library">
                Paper Library
              </Link>{' '}
              indexes the 9 published 4D papers plus the earlier superfluid-defect
              papers they build on.
            </span>
          </div>

          {/* Constants */}
          <div
            style={{
              marginTop: 64,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: 1,
              background: 'var(--rule)',
              border: '1px solid var(--rule)',
              borderRadius: 3,
              overflow: 'hidden',
            }}
          >
            {[
              { k: 'n = 5', v: 'EoS exponent' },
              { k: 'κ_ρ = 1', v: 'mass-dressing' },
              { k: 'κ_add = ½', v: 'added-mass' },
              { k: 'β_1PN = 3', v: 'precession ledger' },
              { k: 'χ_Q = 1', v: 'outgoing normalization' },
            ].map(({ k, v }) => (
              <div
                key={k}
                style={{
                  padding: '20px 22px',
                  background: 'rgba(16,20,42,0.5)',
                }}
              >
                <div
                  className="fu-mono"
                  style={{
                    fontSize: 15,
                    color: 'var(--ink-1)',
                    marginBottom: 4,
                  }}
                >
                  {k}
                </div>
                <div className="fu-small" style={{ color: 'var(--ink-3)' }}>
                  {v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HomeFooter />
    </div>
  );
}

function TCAtmosphere() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        background: [
          'radial-gradient(ellipse 900px 600px at 15% 6%, rgba(122,162,255,0.11), transparent 62%)',
          'radial-gradient(ellipse 700px 500px at 88% 26%, rgba(184,139,255,0.08), transparent 60%)',
          'radial-gradient(ellipse 600px 400px at 50% 85%, rgba(230,122,198,0.055), transparent 65%)',
        ].join(','),
      }}
    />
  );
}

function TCNav() {
  const items = [
    { label: 'Site map', href: '/sitemap' },
    { label: 'Moving-Throat PDE', href: '/plain/moving-throat' },
    { label: 'Results Ledger', href: '/plain/pn-ledger' },
    { label: 'What this is not', href: '/meta/what-this-is-not' },
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
        className="fu-wrap"
        style={{
          display: 'flex',
          alignItems: 'center',
          height: 68,
          gap: 28,
        }}
      >
        <Link
          to="/"
          style={{ display: 'flex', alignItems: 'center', gap: 12 }}
        >
          <svg width="26" height="26" viewBox="0 0 28 28" aria-hidden>
            <defs>
              <radialGradient id="tc-logo" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#e67ac6" stopOpacity="0.9" />
                <stop offset="60%" stopColor="#7aa2ff" stopOpacity="0.4" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
            <circle cx="14" cy="14" r="13" fill="url(#tc-logo)" />
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
            className="fu-mono"
            style={{
              fontSize: 13,
              letterSpacing: '0.05em',
              color: 'var(--ink-1)',
            }}
          >
            fluid<span style={{ color: 'var(--accent)' }}>·</span>spacetime
          </span>
        </Link>
        <span
          className="fu-small"
          style={{ marginLeft: 4, opacity: 0.5 }}
        >
          v0.5
        </span>
        <div style={{ flex: 1 }} />
        {items.map((x) => (
          <Link
            key={x.href}
            to={x.href}
            className="fu-small"
            style={{ color: 'var(--ink-2)' }}
          >
            {x.label}
          </Link>
        ))}
        <Link
          to="/meta/paper-library"
          className="fu-small fu-mono"
          style={{
            padding: '6px 14px',
            border: '1px solid rgba(122,162,255,0.45)',
            color: 'var(--accent)',
            borderRadius: 2,
            fontSize: 11,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          Library →
        </Link>
      </div>
    </nav>
  );
}

function TrackCard({
  kind,
  color,
  gradient,
  title,
  tagline,
  audience,
  bullets,
  sample,
  cta,
  href,
}) {
  return (
    <div
      style={{
        position: 'relative',
        padding: '40px 36px 32px',
        border: `1px solid ${color}40`,
        borderRadius: 3,
        background: `linear-gradient(165deg, ${gradient}, rgba(10,13,24,0.3))`,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: `linear-gradient(90deg, ${color}, transparent)`,
        }}
      />
      <div
        className="fu-mono"
        style={{
          fontSize: 11,
          letterSpacing: '0.14em',
          color,
          marginBottom: 12,
          textTransform: 'uppercase',
        }}
      >
        ◇ {kind} track
      </div>
      <h2
        className="fu-display"
        style={{
          fontSize: 40,
          color: 'var(--ink-1)',
          fontWeight: 300,
          marginBottom: 8,
          lineHeight: 1.05,
        }}
      >
        {title}
      </h2>
      <div
        className="fu-body"
        style={{
          color: 'var(--ink-2)',
          fontSize: 17,
          fontStyle: 'italic',
          marginBottom: 20,
        }}
      >
        {tagline}
      </div>

      <div
        className="fu-small"
        style={{
          color: 'var(--ink-3)',
          marginBottom: 22,
          letterSpacing: '0.02em',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginRight: 8,
            opacity: 0.8,
          }}
        >
          for
        </span>
        {audience}
      </div>

      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          margin: '0 0 26px 0',
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
        }}
      >
        {bullets.map((b, i) => (
          <li
            key={i}
            className="fu-body"
            style={{
              fontSize: 14.5,
              color: 'var(--ink-2)',
              paddingLeft: 20,
              position: 'relative',
            }}
          >
            <span
              style={{
                position: 'absolute',
                left: 0,
                top: 10,
                width: 6,
                height: 1,
                background: color,
              }}
            />
            {b}
          </li>
        ))}
      </ul>

      <div
        style={{
          padding: '18px 20px',
          background: 'rgba(6,9,18,0.45)',
          border: `1px solid ${color}26`,
          borderRadius: 3,
          marginBottom: 24,
        }}
      >
        <div
          className="fu-mono"
          style={{
            fontSize: 10,
            letterSpacing: '0.14em',
            color: 'var(--ink-3)',
            textTransform: 'uppercase',
            marginBottom: 8,
          }}
        >
          ◇ {sample.label}
        </div>
        <div
          className="fu-body"
          style={{
            fontSize: 14,
            color: 'var(--ink-1)',
            fontStyle: kind === 'plain' ? 'italic' : 'normal',
            lineHeight: 1.6,
          }}
        >
          {sample.body}
        </div>
      </div>

      <div style={{ flex: 1 }} />

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: 12,
        }}
      >
        <Link
          to={href}
          className="fu-mono"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            fontSize: 12,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            padding: '14px 22px',
            borderRadius: 999,
            background: color,
            color: '#0a0d18',
            fontWeight: 600,
            textDecoration: 'none',
          }}
        >
          {cta}
        </Link>
      </div>
    </div>
  );
}

function HomeFooter() {
  return (
    <footer
      style={{
        padding: '60px 0 80px',
        borderTop: '1px solid var(--rule)',
        marginTop: 40,
      }}
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
              FLUID SPACETIME
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
