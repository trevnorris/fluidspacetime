import React from 'react';
import { TopicPage, TPTitle, TPLede, TPSection, TPBody, TPCallout } from '../../components/TopicPage.jsx';

// Part 1 · Topic 02 — Defects, When Perfection Breaks — PLAIN ENGLISH

export default function PlainDefects() {
  const topic = {
    n: "02",
    part: "I",
    partName: "Foundations",
    slug: "defects",
    title: "Defects — When Perfection Breaks",
  };

  return (
    <TopicPage track="plain" topic={topic}>
      <section style={{ padding: "10px 0 40px" }}>
        <TPTitle>
          A perfect pond is elegant; a <em style={{
            fontFamily: "var(--font-serif)", fontStyle: "italic", color: "#e67ac6",
          }}>flawed</em> pond is interesting
        </TPTitle>
        <TPLede>
          The last chapter left us with a too-smooth universe — a perfect fluid
          with perfect ripples. Beautiful, but it can't hold stuff. Nothing
          sticks, nothing counts, nothing <em>is</em>. To get a universe with
          distinguishable things in it, the fluid has to be allowed to fail —
          in specific, well-behaved ways. Those failures are called
          <em> defects</em>, and they are the program's proposed route to
          matter-like objects.
        </TPLede>
      </section>

      <TPSection anchor="flaw" eyebrow="the flaw" heading="A wave passes; a drain stays put">
        <TPBody>
          A ripple moves through water and keeps going. A drain is different:
          it is a localized place where the surface flow has somewhere else to
          go. Water can rush straight into it. It can also swirl on the way in,
          but the swirl is not the drain.
        </TPBody>
        <TPBody>
          That is the role of a <strong style={{ color: "var(--ink-1)" }}>defect</strong>{' '}
          in this story. It is not extra stuff dropped into the fluid. It is a
          localized feature <em>of</em> the fluid's own configuration. For the
          throat-like defects that matter most later, the clean picture is a
          mouth in the surface: flow can enter it, and the full structure can
          extend into a direction a surface-bound observer cannot directly see.
        </TPBody>

        <DefectDiagramPlain />
      </TPSection>

      <TPSection anchor="types" eyebrow="representations" heading="Three views of the same defect">
        <TPBody>
          The next few pages use several pictures for the same basic object.
          That does not mean there are three unrelated defects. It means the
          same throat-like defect can be represented at different levels of
          detail, depending on what question we are asking.
        </TPBody>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(220px, 100%), 1fr))", gap: 16, margin: "24px 0 12px", maxWidth: 820 }}>
          {[
            { k: "Point-like view", v: "From far away, the mouth can be treated as a single location: a compact source, sink, or particle-like marker." },
            { k: "Mouth view", v: "Closer in, the defect is not just a mathematical point. It has a visible opening where surface flow can enter." },
            { k: "Throat view", v: "In the full picture, that mouth continues into the hidden direction as a finite structure. This is the throat." },
          ].map((c) => (
            <div key={c.k} style={{
              padding: "22px 22px",
              border: "1px solid var(--rule-2)",
              borderRadius: 3,
              background: "rgba(16,20,42,0.5)",
            }}>
              <div className="fu-display" style={{ fontSize: 18, color: "var(--ink-1)", marginBottom: 10, fontWeight: 400 }}>{c.k}</div>
              <div className="fu-small" style={{ color: "var(--ink-2)", lineHeight: 1.6 }}>{c.v}</div>
            </div>
          ))}
        </div>

        <TPCallout kind="note">
          A defect isn't something dropped <em>into</em> the pond. It's a
          configuration <em>of</em> the pond itself — an organized pattern in
          the fluid's own state. Later, throats make the picture sharper: what
          we see on the surface can be the visible mouth of a structure that
          extends into a direction we do not directly inspect.
        </TPCallout>
      </TPSection>

      <TPSection anchor="identity" eyebrow="stability" heading="Why a defect can keep its identity">
        <TPBody>
          Stable does not mean frozen. The mouth can wobble. The nearby flow
          can surge. The throat can ring for a while after something hits it.
          But small disturbances are treated more like elastic deformations
          than permanent damage: the defect can shed the extra energy and settle
          back toward its ordinary state.
        </TPBody>
        <TPBody>
          The important part is that the basic identity of the defect is not a
          sliding scale. A mouth does not gradually become half an opposite
          mouth just because the surrounding flow gets messy. More water can
          enter. Less water can enter. The pattern can vibrate. But the opening
          remains the same kind of opening.
        </TPBody>
        <TPBody>
          To actually change that identity, the model needs a bigger event:
          meeting a compatible opposite defect, leaving through a boundary, or
          changing the topology of the opening. That is what this site means
          when it says the defect is <em>protected</em>. In the Fluid Spacetime
          picture, this is part of the candidate explanation for why a
          particle-like object could keep the same identity over time.
        </TPBody>
      </TPSection>

      <TPSection
        anchor="what"
        eyebrow="so what"
        heading="The proposal: stable particle-like objects are defects"
      >
        <TPBody>
          That's the proposal. A particle-like object is not treated as a tiny
          bead sitting in the fluid. It is treated as a stable defect of the
          fluid itself: a throat-like pattern that can move around while keeping
          the same basic identity.
        </TPBody>
        <TPBody>
          Different physical labels then come from different features of that
          defect. Electric charge sign is tied to the orientation of the
          puncture or mouth. Magnetic behavior is tied to circulation around the
          defect. Those are related parts of the same object, but they are not
          the same feature.
        </TPBody>
        <TPBody>
          That is a bold claim, and we haven't earned it yet. The rest of Part
          I builds the pieces needed to make it precise: a hidden direction the
          defects can extend into, and a specific kind of defect — the
          <em> throat</em> — that lets the whole picture hang together.
        </TPBody>
      </TPSection>
    </TopicPage>
  );
}

// ─── diagram: ordinary flow vs. a mouth-like defect ────────────────
function DefectDiagramPlain() {
  return (
    <figure style={{
      margin: "28px 0 12px",
      padding: "26px 28px 24px",
      border: "1px solid var(--rule-2)",
      borderRadius: 3,
      background: "rgba(12,16,34,0.55)",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 14 }}>
        <span className="fu-mono fu-small" style={{ color: "var(--accent)", letterSpacing: "0.12em", textTransform: "uppercase", fontSize: 10.5 }}>
          plate 02 · ordinary flow vs. defect
        </span>
        <span className="fu-mono fu-small" style={{ color: "var(--ink-4)", fontSize: 10.5 }}>
          metaphor · plain english
        </span>
      </div>

      <svg viewBox="0 0 720 240" width="100%" style={{ display: "block" }}>
        <defs>
          <radialGradient id="dp-defect" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#050815" stopOpacity="1" />
            <stop offset="54%" stopColor="#111833" stopOpacity="0.98" />
            <stop offset="100%" stopColor="#7aa2ff" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="dp-mouth-glow" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="#7aa2ff" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#7aa2ff" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* LEFT — smooth field */}
        <g transform="translate(16,16)">
          <rect x="0" y="0" width="320" height="200" fill="none" stroke="#2a3160" strokeDasharray="3 3" />
          <text x="10" y="18" fill="#6d749a" fontFamily="JetBrains Mono, monospace" fontSize="10">ordinary flow — no defect</text>
          {/* tidy grid of arrows all pointing the same way */}
          {Array.from({ length: 6 }).map((_, r) =>
            Array.from({ length: 9 }).map((_, c) => {
              const x = 32 + c * 32;
              const y = 47 + r * 26;
              return (
                <g key={`a-${r}-${c}`} transform={`translate(${x},${y})`}>
                  <line x1="-8" y1="0" x2="8" y2="0" stroke="#7aa2ff" strokeWidth="1.1" />
                  <path d="M8 0 L4 -3 M8 0 L4 3" stroke="#7aa2ff" strokeWidth="1.1" fill="none" />
                </g>
              );
            })
          )}
        </g>

        {/* RIGHT — mouth-like defect */}
        <g transform="translate(384,16)">
          <rect x="0" y="0" width="320" height="200" fill="none" stroke="#2a3160" strokeDasharray="3 3" />
          <text x="10" y="18" fill="#6d749a" fontFamily="JetBrains Mono, monospace" fontSize="10">mouth-like defect — no circulation shown</text>
          {/* arrows flow inward toward the mouth; circulation is a separate label */}
          {Array.from({ length: 6 }).map((_, r) =>
            Array.from({ length: 9 }).map((_, c) => {
              const x = 32 + c * 32;
              const y = 47 + r * 26;
              const dx = x - 160;
              const dy = y - 112;
              const dist = Math.hypot(dx, dy);
              if (dist < 22) return null;
              const a = Math.atan2(-dy, -dx);
              const opacity = Math.max(0.4, 1 - dist / 170);
              return (
                <g key={`b-${r}-${c}`} transform={`translate(${x},${y}) rotate(${(a * 180) / Math.PI})`}>
                  <line x1="-8" y1="0" x2="8" y2="0" stroke="#7aa2ff" strokeWidth="1.2" opacity={opacity} />
                  <path d="M8 0 L4 -3 M8 0 L4 3" stroke="#7aa2ff" strokeWidth="1.2" fill="none" opacity={opacity} />
                </g>
              );
            })
          )}
          {/* mouth */}
          <circle cx="160" cy="112" r="46" fill="url(#dp-mouth-glow)" />
          <circle cx="160" cy="112" r="22" fill="url(#dp-defect)" stroke="#7aa2ff" strokeWidth="1.4" opacity="0.95" />
          <circle cx="160" cy="112" r="9" fill="#050815" stroke="#e4e7f5" strokeWidth="0.8" opacity="0.95" />
          {/* annotation */}
          <line x1="160" y1="112" x2="242" y2="52" stroke="#e4e7f5" strokeWidth="0.6" opacity="0.6" strokeDasharray="2 2" />
          <text x="246" y="50" fill="#e4e7f5" fontFamily="Newsreader, serif" fontStyle="italic" fontSize="11">
            the mouth
          </text>
        </g>
      </svg>

      <figcaption className="fu-small" style={{ color: "var(--ink-3)", marginTop: 14, lineHeight: 1.55, maxWidth: 660 }}>
        Left: ordinary flow, with no localized core. Right: a mouth-like
        defect, where flow is organized around a special place. Circulation can
        be added later, but it is a separate magnetic/vortical feature, not the
        thing that makes every defect a defect.
      </figcaption>
    </figure>
  );
}
