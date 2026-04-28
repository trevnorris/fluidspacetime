import React from 'react';
import { TopicPage, TPTitle, TPLede, TPSection, TPBody, TPCallout } from '../../components/TopicPage.jsx';

// Part 1 · Topic 04 — Throats — PLAIN ENGLISH

export default function PlainThroats() {
  const topic = {
    n: "04",
    part: "I",
    partName: "Foundations",
    slug: "throats",
    title: "Throats — Defects That Connect",
  };

  return (
    <TopicPage track="plain" topic={topic}>
      <section style={{ padding: "10px 0 40px" }}>
        <TPTitle>
          Some defects aren't points. They're{" "}
          <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "#e67ac6" }}>
            openings
          </em>.
        </TPTitle>
        <TPLede>
          We have the fluid. We have defects. We have a hidden direction the
          defects can live in. This chapter introduces the single geometric
          object around which the rest of the program is organized: the
          <em> throat</em>. A throat is the defect shape that does the work of
          representing a particle-like branch — and lets gravity and
          electromagnetism be organized as two brane-readable channels of the
          same finite bulk object.
        </TPLede>
      </section>

      <TPSection anchor="opening" eyebrow="the opening" heading="Picture a funnel in the bedsheet.">
        <TPBody>
          Go back to the sheet metaphor. Most defects we've met so far were
          local tangles — the sheet pinched at a point. A throat is different:
          it's where the sheet develops an <em>opening</em>. Imagine pushing
          your finger down into a soft fabric. A dimple forms. The dimple has
          a <em>mouth</em> on the surface and a <em>neck</em> that descends
          into the fabric. If you could reach through, you'd pass into a
          region the surface itself can't see.
        </TPBody>
        <TPBody>
          That is the cartoon for a throat. Upstairs on the brane — our 3D
          world — we see a mouth: a localized spot where something is
          happening. Down the neck, along the hidden direction, the defect
          has depth. Fluid can flow into it. Something can come out of it.
        </TPBody>

        <ThroatDiagramPlain />
      </TPSection>

      <TPSection anchor="anatomy" eyebrow="the anatomy" heading="Mouth, throat, interior.">
        <TPBody>
          Three words the program uses over and over:
        </TPBody>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(220px, 100%), 1fr))", gap: 16, margin: "22px 0 14px", maxWidth: 820 }}>
          {[
            { k: "Mouth",    v: "Where the throat intersects the brane. This is the part we can point at in ordinary space.", tint: "#e67ac6" },
            { k: "Neck",     v: "A narrow support region along the hidden direction. It helps set internal support scales, but it is not the whole defect.", tint: "#b88bff" },
            { k: "Interior", v: "The region deeper in the bulk where support, mixed fields, and open-system bookkeeping live. Not directly visible; felt through its influence on the brane.", tint: "#7aa2ff" },
          ].map((c) => (
            <div key={c.k} style={{
              padding: "22px 22px",
              border: `1px solid ${c.tint}55`,
              borderRadius: 3,
              background: `linear-gradient(160deg, ${c.tint}10, rgba(16,20,42,0.5))`,
            }}>
              <div className="fu-display" style={{ fontSize: 18, color: c.tint, marginBottom: 8, fontWeight: 400 }}>{c.k}</div>
              <div className="fu-small" style={{ color: "var(--ink-2)", lineHeight: 1.6 }}>{c.v}</div>
            </div>
          ))}
        </div>

        <TPCallout kind="note">
          A throat is a single object with these three parts. We describe it
          piecewise because each part does a different job — but the rules of
          the fluid tie them together. Squeeze the neck and the mouth
          responds; perturb the interior and the brane feels it.
        </TPCallout>
      </TPSection>

      <TPSection
        anchor="does"
        eyebrow="what a throat does"
        heading="One object, two behaviours — and both of them matter."
      >
        <TPBody>
          Here's the reason throats are the star of the show. A throat carries
          more than one kind of brane-readable data along the hidden direction,
          and our 3D experience reads those channels as different long-range
          interactions.
        </TPBody>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))", gap: 16, margin: "18px 0 14px", maxWidth: 820 }}>
          <div style={{
            padding: "24px 26px",
            border: "1px solid #7aa2ff44",
            borderRadius: 3,
            background: "linear-gradient(160deg, rgba(122,162,255,0.08), rgba(16,20,42,0.5))",
          }}>
            <div className="fu-mono fu-small" style={{ color: "#7aa2ff", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 8, fontSize: 10.5 }}>
              behaviour a
            </div>
            <div className="fu-display" style={{ fontSize: 20, color: "var(--ink-1)", fontWeight: 400, marginBottom: 10 }}>
              Drinks fluid
            </div>
            <div className="fu-small" style={{ color: "var(--ink-2)", lineHeight: 1.65 }}>
              Fluid flows into the throat along the hidden direction. The brane
              reads the surrounding inflow as an <em>attraction</em> to the
              mouth in the gravity sector.
            </div>
          </div>

          <div style={{
            padding: "24px 26px",
            border: "1px solid #e67ac644",
            borderRadius: 3,
            background: "linear-gradient(160deg, rgba(230,122,198,0.08), rgba(16,20,42,0.5))",
          }}>
            <div className="fu-mono fu-small" style={{ color: "#e67ac6", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 8, fontSize: 10.5 }}>
              behaviour b
            </div>
            <div className="fu-display" style={{ fontSize: 20, color: "var(--ink-1)", fontWeight: 400, marginBottom: 10 }}>
              Punctures
            </div>
            <div className="fu-small" style={{ color: "var(--ink-2)", lineHeight: 1.65 }}>
              The throat opens through the brane into one side of the
              hidden direction. The orientation branch is recorded as{" "}
              <strong style={{ color: "var(--ink-1)" }}>electric charge sign</strong>,
              written <em>eta</em><sub>Q</sub> = +1 or -1. Once a sign
              convention is fixed, the two orientations give opposite charge
              signs.
            </div>
          </div>
        </div>

        <TPBody>
          This is the punchline of Part I: gravity and electromagnetism are not
          introduced here as unrelated primitives. They are modeled as different
          geometric or field-theoretic channels of a single kind of object — a
          throat — along a direction we can't see.
        </TPBody>
      </TPSection>

      <TPSection anchor="caution" eyebrow="honest caveats" heading="What a throat is not.">
        <TPBody>
          A throat is not a wormhole to another universe. The fluid on either
          side of the neck is the same fluid. It is also not a surface dimple or
          a capped pocket. In the current ontology it is a finite-radius opening
          into a bulk throat.
        </TPBody>
        <TPBody>
          And a throat is not, by itself, a completed particle model. A
          particle-like branch needs specific branch data: mouth geometry,
          interior support, inflow/source data, puncture orientation, charge
          normalization, and any magnetic or vortical winding data. Those labels
          are related, but the current ontology does not collapse them into one
          number.
        </TPBody>

      </TPSection>

      <TPSection anchor="next" eyebrow="end of part I" heading="Coming up: gravity, electromagnetism, light.">
        <TPBody>
          Part II takes the throat and runs it through each of the forces we
          know. Gravity comes first, because it's the cleanest: inflow, and
          only inflow, without using the electric charge branch. Electromagnetism
          follows, and it's where the throat's puncture orientation and localized
          Maxwell sector enter.
        </TPBody>
      </TPSection>
    </TopicPage>
  );
}

// ─── diagram: the throat (mouth / neck / interior) ───────────────
function ThroatDiagramPlain() {
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
          plate 04 · mouth, neck, interior
        </span>
        <span className="fu-mono fu-small" style={{ color: "var(--ink-4)", fontSize: 10.5 }}>
          metaphor · plain english
        </span>
      </div>

      <svg viewBox="0 0 780 340" width="100%" style={{ display: "block" }}>
        <defs>
          <radialGradient id="th-mouth" cx="50%" cy="30%" r="50%">
            <stop offset="0%" stopColor="#f0c26b" stopOpacity="1" />
            <stop offset="60%" stopColor="#e67ac6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#e67ac6" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="th-brane" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7aa2ff" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#7aa2ff" stopOpacity="0.03" />
          </linearGradient>
        </defs>

        {/* w-axis */}
        <g transform="translate(50,30)">
          <line x1="0" y1="0" x2="0" y2="280" stroke="#6d749a" strokeWidth="0.8" strokeDasharray="3 3" />
          <path d="M-4 4 L0 0 L4 4" stroke="#6d749a" fill="none" strokeWidth="0.8" />
          <text x="-28" y="6" fill="#e4e7f5" fontFamily="Newsreader, serif" fontStyle="italic" fontSize="12">w</text>
          <text x="-44" y="146" fill="#6d749a" fontFamily="JetBrains Mono, monospace" fontSize="10">hidden</text>
        </g>

        {/* brane sheet */}
        <g transform="translate(80,30)">
          <path d="M0,120 L520,120 L600,90 L80,90 Z" fill="url(#th-brane)" stroke="#7aa2ff" strokeOpacity="0.6" />
          <text x="500" y="114" fill="#7aa2ff" fontFamily="JetBrains Mono, monospace" fontSize="10" textAnchor="end">
            brane — w = 0
          </text>
        </g>

        {/* throat body — symmetric hourglass-ish */}
        <g transform="translate(80,30)">
          {/* outer throat wall (two mirrored bezier) */}
          <path
            d="M220 30
               C 230 60 260 90 290 105
               C 310 115 310 155 290 165
               C 260 180 230 210 220 240
               M360 30
               C 350 60 320 90 290 105
               M 290 165
               C 320 180 350 210 360 240"
            fill="none"
            stroke="#e67ac6"
            strokeOpacity="0.65"
            strokeWidth="1.4"
          />
          {/* soft interior fill */}
          <path
            d="M220 30
               C 230 60 260 90 290 105
               C 260 90 230 60 220 30
               Z"
            fill="rgba(230,122,198,0.08)"
          />

          {/* mouth highlight at the brane intersection */}
          <ellipse cx="290" cy="105" rx="72" ry="14" fill="url(#th-mouth)" opacity="0.85" />
          <ellipse cx="290" cy="105" rx="72" ry="14" fill="none" stroke="#f0c26b" strokeWidth="0.8" opacity="0.9" />

          {/* inflow arrows above the mouth */}
          {[-70, -40, -10, 20, 50].map((dx, i) => (
            <g key={i} transform={`translate(${290 + dx},${58})`}>
              <line x1="0" y1="0" x2="0" y2="36" stroke="#7aa2ff" strokeWidth="1" opacity="0.7" />
              <path d="M0 36 L-3 30 M0 36 L3 30" stroke="#7aa2ff" strokeWidth="1" fill="none" opacity="0.7" />
            </g>
          ))}

          {/* puncture indicator — throat opens into +w half */}
          <line x1="290" y1="95" x2="290" y2="230" stroke="#e67ac6" strokeWidth="1.1" strokeDasharray="3 3" opacity="0.85" />
          <path d="M290 230 L286 223 M290 230 L294 223" stroke="#e67ac6" strokeWidth="1.1" fill="none" opacity="0.85" />

          {/* labels */}
          <line x1="290" y1="105" x2="440" y2="66" stroke="#e4e7f5" strokeWidth="0.5" opacity="0.55" strokeDasharray="2 2" />
          <text x="444" y="64" fill="#e4e7f5" fontFamily="Newsreader, serif" fontStyle="italic" fontSize="12">
            mouth — what the brane sees
          </text>

          <line x1="290" y1="160" x2="450" y2="160" stroke="#e4e7f5" strokeWidth="0.5" opacity="0.55" strokeDasharray="2 2" />
          <text x="454" y="162" fill="#e4e7f5" fontFamily="Newsreader, serif" fontStyle="italic" fontSize="12">
            neck — narrowest point
          </text>

          <line x1="310" y1="230" x2="460" y2="240" stroke="#e4e7f5" strokeWidth="0.5" opacity="0.55" strokeDasharray="2 2" />
          <text x="464" y="243" fill="#e4e7f5" fontFamily="Newsreader, serif" fontStyle="italic" fontSize="12">
            interior — bulk reservoir
          </text>

          {/* inflow label */}
          <text x="190" y="54" fill="#7aa2ff" fontFamily="Newsreader, serif" fontStyle="italic" fontSize="11" textAnchor="end">
            inflow → gravity
          </text>
          <text x="340" y="200" fill="#e67ac6" fontFamily="Newsreader, serif" fontStyle="italic" fontSize="11">
            puncture orientation → charge sign
          </text>
        </g>
      </svg>

      <figcaption className="fu-small" style={{ color: "var(--ink-3)", marginTop: 14, lineHeight: 1.55, maxWidth: 680 }}>
        The throat pierces the brane (faint blue sheet). The <em>mouth</em> is what we see. Along
        the hidden direction, fluid inflow is read in the gravity sector and puncture
        orientation carries electric charge sign. Circulation or winding belongs to the
        magnetic/vortical sector, not to the electric-charge definition.
      </figcaption>
    </figure>
  );
}
