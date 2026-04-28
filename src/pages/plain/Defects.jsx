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
          A perfect pond is elegant. A <em style={{
            fontFamily: "var(--font-serif)", fontStyle: "italic", color: "#e67ac6",
          }}>flawed</em> pond is interesting.
        </TPTitle>
        <TPLede>
          The last chapter left us with a too-smooth universe — a perfect fluid
          with perfect ripples. Beautiful, but it can't hold stuff. Nothing
          sticks, nothing counts, nothing <em>is</em>. To get a universe with
          distinguishable things in it, the fluid has to be allowed to fail —
          in specific, well-behaved ways. Those failures are called
          <em> defects</em>, and they are how the pond makes matter.
        </TPLede>
      </section>

      <TPSection anchor="flaw" eyebrow="the flaw" heading="Some patterns just can't be smoothed out.">
        <TPBody>
          Lay a bedsheet on a table and smooth it. Most wrinkles come out with a
          hand-sweep. But if you pinch one spot and twist, you can produce a
          pinched point that <em>will not</em> go flat, no matter how you push
          the cloth around it. The twist has to go somewhere. The only way to
          remove it is to physically cut the sheet or drag the pinch off the
          edge.
        </TPBody>
        <TPBody>
          That stubborn pinch is a <strong style={{ color: "var(--ink-1)" }}>defect</strong>.
          Our pond has them too. The fluid is described by a kind of local
          “state” at every point. In most places, the state varies smoothly from
          neighbor to neighbor. But once in a while — for pure geometric reasons —
          the state twists up on itself in a way that can't be unwound by any
          local fiddling. That twist is stuck. And because it's stuck, it
          behaves like a <em>thing</em>.
        </TPBody>

        <DefectDiagramPlain />
      </TPSection>

      <TPSection anchor="types" eyebrow="the family" heading="Three kinds of stubborn.">
        <TPBody>
          Defects come in families, distinguished by how they're stuck. The
          ones the Fluid Spacetime program cares about most share a property:
          they're <em>localized</em> — you can point at them, and everything
          outside is smooth pond.
        </TPBody>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(220px, 100%), 1fr))", gap: 16, margin: "24px 0 12px", maxWidth: 820 }}>
          {[
            { k: "A point", v: "A single spot where the fluid is forced to do something it can't. Like a single tight knot on a smooth thread." },
            { k: "A line",  v: "A line-shaped defect the fluid has to flow around. A whirlpool's axis, extended." },
            { k: "A mouth", v: "An opening. The pond surface bends inward, making a kind of tunnel. We'll meet these as throats." },
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
          configuration <em>of</em> the pond itself — a knot in its own fabric.
          The pond is both the stage and the actor.
        </TPCallout>
      </TPSection>

      <TPSection anchor="count" eyebrow="counting" heading="Defects carry a number — and that number never changes.">
        <TPBody>
          Here's the strange and useful thing. Each defect carries an integer
          label. Call it a <em>winding number</em> for short. You can compute it by
          walking around the defect in a small loop and keeping track of how
          many full turns the fluid's state makes while you walk. One full turn?
          Winding number 1. Two turns? Winding number 2. Zero turns? It wasn't
          actually a defect.
        </TPBody>
        <TPBody>
          The key point: this number can't change continuously. It's a
          count, and counts jump in whole units or not at all. So as long as
          the pond evolves smoothly, a defect with winding number 1 stays at
          winding number 1. It can't sneakily become zero. It can move. It can
          meet another defect and annihilate. But it can't vanish alone.
        </TPBody>
        <TPBody>
          This is what makes defects <em>stable</em>. Not because they're made
          of sturdy stuff, but because their <em>bookkeeping</em> doesn't allow
          them to disappear. In the Fluid Spacetime picture, this is the
          explanation for why matter persists — why an electron is still an
          electron a billion years later. It isn't a little marble; it's a
          <em> locked count</em>.
        </TPBody>
      </TPSection>

      <TPSection
        anchor="what"
        eyebrow="so what"
        heading="Every stable particle is a defect of this kind."
      >
        <TPBody>
          That's the proposal. What we call <em>charge</em> is one such count.
          What we call <em>spin</em> is another. What we call the <em>identity</em>
          of a particle — the thing that survives every collision — is, in this
          story, the geometric stubbornness of the underlying knot.
        </TPBody>
        <TPBody>
          That is a bold claim, and we haven't earned it yet. The rest of Part I
          builds the pieces needed to make it precise: a hidden direction the
          defects can extend into, and a specific kind of defect — the
          <em> throat</em> — that lets the whole picture hang together.
        </TPBody>
      </TPSection>
    </TopicPage>
  );
}

// ─── diagram: a smooth pond vs. a pinched-up one ────────────────
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
          plate 02 · smooth vs. stubborn
        </span>
        <span className="fu-mono fu-small" style={{ color: "var(--ink-4)", fontSize: 10.5 }}>
          metaphor · plain english
        </span>
      </div>

      <svg viewBox="0 0 720 240" width="100%" style={{ display: "block" }}>
        <defs>
          <radialGradient id="dp-knot" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#e67ac6" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#e67ac6" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* LEFT — smooth field */}
        <g transform="translate(16,16)">
          <rect x="0" y="0" width="320" height="200" fill="none" stroke="#2a3160" strokeDasharray="3 3" />
          <text x="10" y="18" fill="#6d749a" fontFamily="JetBrains Mono, monospace" fontSize="10">smooth pond — no defect</text>
          {/* tidy grid of arrows all pointing the same way */}
          {Array.from({ length: 6 }).map((_, r) =>
            Array.from({ length: 9 }).map((_, c) => {
              const x = 24 + c * 32;
              const y = 44 + r * 26;
              return (
                <g key={`a-${r}-${c}`} transform={`translate(${x},${y})`}>
                  <line x1="-8" y1="0" x2="8" y2="0" stroke="#7aa2ff" strokeWidth="1.1" />
                  <path d="M8 0 L4 -3 M8 0 L4 3" stroke="#7aa2ff" strokeWidth="1.1" fill="none" />
                </g>
              );
            })
          )}
        </g>

        {/* RIGHT — knotted field */}
        <g transform="translate(384,16)">
          <rect x="0" y="0" width="320" height="200" fill="none" stroke="#2a3160" strokeDasharray="3 3" />
          <text x="10" y="18" fill="#6d749a" fontFamily="JetBrains Mono, monospace" fontSize="10">a knot — winding number 1</text>
          {/* arrows circulating around a center; can't be combed flat */}
          {Array.from({ length: 6 }).map((_, r) =>
            Array.from({ length: 9 }).map((_, c) => {
              const x = 24 + c * 32;
              const y = 44 + r * 26;
              const dx = x - 160;
              const dy = y - 112;
              const a = Math.atan2(dy, dx) + Math.PI / 2; // tangential
              const ux = Math.cos(a);
              const uy = Math.sin(a);
              return (
                <g key={`b-${r}-${c}`} transform={`translate(${x},${y}) rotate(${(a * 180) / Math.PI})`}>
                  <line x1="-8" y1="0" x2="8" y2="0" stroke="#e67ac6" strokeWidth="1.1" opacity="0.85" />
                  <path d="M8 0 L4 -3 M8 0 L4 3" stroke="#e67ac6" strokeWidth="1.1" fill="none" opacity="0.85" />
                </g>
              );
            })
          )}
          {/* center glow */}
          <circle cx="160" cy="112" r="26" fill="url(#dp-knot)" />
          <circle cx="160" cy="112" r="3" fill="#f0c26b" />
          {/* annotation */}
          <line x1="160" y1="112" x2="244" y2="50" stroke="#e4e7f5" strokeWidth="0.6" opacity="0.6" strokeDasharray="2 2" />
          <text x="248" y="48" fill="#e4e7f5" fontFamily="Newsreader, serif" fontStyle="italic" fontSize="11">
            the stuck spot
          </text>
        </g>
      </svg>

      <figcaption className="fu-small" style={{ color: "var(--ink-3)", marginTop: 14, lineHeight: 1.55, maxWidth: 660 }}>
        Left: a smooth configuration — every arrow aligned. You can smooth it flat.
        Right: the arrows circle a central point. No amount of local tidying unwinds them.
        The center <em>has to be</em> special. That's a defect.
      </figcaption>
    </figure>
  );
}
