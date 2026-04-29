import React from 'react';
import { TopicPage, TPTitle, TPLede, TPSection, TPBody, TPCallout } from '../../components/TopicPage.jsx';

// Part 1 · Topic 04 — Throats — PLAIN ENGLISH

export default function PlainThroats() {
  const topic = {
    n: "04",
    part: "I",
    partName: "Foundations",
    slug: "throats",
    title: "Throats — Defect Openings",
  };

  return (
    <TopicPage track="plain" topic={topic}>
      <section style={{ padding: "10px 0 40px" }}>
        <TPTitle>
          The defects in this model are{" "}
          <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "#e67ac6" }}>
            openings
          </em>, not points
        </TPTitle>
        <TPLede>
          We have the fluid. We have defects. We have a hidden direction the
          defects can live in. This chapter introduces the single geometric
          object around which the rest of the program is organized: the
          <em> throat</em>. A throat is the defect shape that does the work of
          representing a particle-like branch — and lets gravity and
          electromagnetism be organized as distinct brane-readable channels of
          the same finite bulk object.
        </TPLede>
      </section>

      <TPSection anchor="opening" eyebrow="the opening" heading="Picture an intake mouth in the fluid">
        <TPBody>
          Earlier pages sometimes draw a defect as a dot because that is what a
          distant brane observer can mark. This page resolves the diagram: the
          dot is the mouth of an <em>opening</em>. Picture a tiny intake mouth
          in the fluid. From our side it looks localized, but the object does
          not stop at the visible mouth. It has a neck and an interior that
          extend along the hidden direction.
        </TPBody>
        <TPBody>
          That is the diagram for a throat. On the brane — our 3D world — we
          see a mouth: a localized place where fluid can enter or where a
          charge orientation can be read. Along the hidden direction, the
          defect has depth. The visible mouth is only the entrance, not the
          whole object.
        </TPBody>

        <ThroatDiagramPlain />
      </TPSection>

      <TPSection anchor="anatomy" eyebrow="the anatomy" heading="Mouth, throat, interior">
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
        heading="One object, three readable channels"
      >
        <TPBody>
          Here's the reason throats are the star of the show. The same finite
          opening can act as an inflow sink, carry a puncture orientation, and
          support circulation. The site treats those as distinct channels
          because later pages use them differently.
        </TPBody>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))", gap: 16, margin: "18px 0 14px", maxWidth: 820 }}>
          <div style={{
            padding: "24px 26px",
            border: "1px solid #7aa2ff44",
            borderRadius: 3,
            background: "linear-gradient(160deg, rgba(122,162,255,0.08), rgba(16,20,42,0.5))",
          }}>
            <div className="fu-mono fu-small" style={{ color: "#7aa2ff", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 8, fontSize: 10.5 }}>
              channel a
            </div>
            <div className="fu-display" style={{ fontSize: 20, color: "var(--ink-1)", fontWeight: 400, marginBottom: 10 }}>
              Inflow
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
              channel b
            </div>
            <div className="fu-display" style={{ fontSize: 20, color: "var(--ink-1)", fontWeight: 400, marginBottom: 10 }}>
              Puncture orientation
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

          <div style={{
            padding: "24px 26px",
            border: "1px solid #b88bff44",
            borderRadius: 3,
            background: "linear-gradient(160deg, rgba(184,139,255,0.08), rgba(16,20,42,0.5))",
          }}>
            <div className="fu-mono fu-small" style={{ color: "#b88bff", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 8, fontSize: 10.5 }}>
              channel c
            </div>
            <div className="fu-display" style={{ fontSize: 20, color: "var(--ink-1)", fontWeight: 400, marginBottom: 10 }}>
              Circulation
            </div>
            <div className="fu-small" style={{ color: "var(--ink-2)", lineHeight: 1.65 }}>
              The fluid can also swirl around or through the throat. That
              vortical channel belongs to <strong style={{ color: "var(--ink-1)" }}>magnetism</strong>,
              not to the electric-charge sign and not to the gravity inflow
              channel.
            </div>
          </div>
        </div>

        <TPBody>
          This is the punchline of Part I: gravity, electric charge, and
          magnetism are not introduced here as unrelated primitives. They are
          modeled as different geometric or field-theoretic channels of a
          single kind of object — a throat — along a direction we can't see.
        </TPBody>
      </TPSection>

      <TPSection anchor="caution" eyebrow="honest caveats" heading="What a throat is not">
        <TPBody>
          A throat is not a wormhole to another universe. The fluid on either
          side of the neck is the same fluid. It is also not a shallow dent or
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

      <TPSection anchor="next" eyebrow="end of part I" heading="Coming up: gravity, electromagnetism, light">
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
          cutaway schematic · plain english
        </span>
      </div>

      <svg viewBox="0 0 780 360" width="100%" style={{ display: "block" }}>
        <defs>
          <radialGradient id="th-mouth" cx="50%" cy="45%" r="55%">
            <stop offset="0%" stopColor="#f0c26b" stopOpacity="1" />
            <stop offset="60%" stopColor="#e67ac6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#e67ac6" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="th-throat" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e67ac6" stopOpacity="0.28" />
            <stop offset="52%" stopColor="#b88bff" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#e67ac6" stopOpacity="0.22" />
          </linearGradient>
          <marker id="th-arrow-blue" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
            <path d="M0,0 L7,3.5 L0,7 Z" fill="#7aa2ff" />
          </marker>
          <marker id="th-arrow-pink" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
            <path d="M0,0 L7,3.5 L0,7 Z" fill="#e67ac6" />
          </marker>
        </defs>

        {/* w-axis */}
        <g transform="translate(50,34)">
          <line x1="0" y1="0" x2="0" y2="300" stroke="#6d749a" strokeWidth="0.8" strokeDasharray="3 3" />
          <path d="M-4 4 L0 0 L4 4" stroke="#6d749a" fill="none" strokeWidth="0.8" />
          <text x="-28" y="6" fill="#e4e7f5" fontFamily="Newsreader, serif" fontStyle="italic" fontSize="12">w</text>
          <text x="-44" y="154" fill="#6d749a" fontFamily="JetBrains Mono, monospace" fontSize="10">hidden</text>
        </g>

        <g transform="translate(80,26)">
          {/* 2D cutaway brane-side fluid line bending into the finite-width mouth */}
          <path
            d="M40,132
               L210,132
               M370,132
               L650,132"
            fill="none"
            stroke="#7aa2ff"
            strokeOpacity="0.72"
            strokeWidth="1.35"
          />
          <text x="638" y="122" fill="#7aa2ff" fontFamily="JetBrains Mono, monospace" fontSize="10" textAnchor="end">
            brane-side fluid line — w = 0
          </text>

          {/* finite-width hyper-trumpet conduit: narrows but does not pinch closed */}
          <path
            d="M210,132
               C238,166 255,194 264,222
               C271,244 268,268 258,290
               C248,310 232,326 210,338
               L370,338
               C348,326 332,310 322,290
               C312,268 309,244 316,222
               C325,194 342,166 370,132
               Z"
            fill="url(#th-throat)"
            stroke="#e67ac6"
            strokeOpacity="0.25"
          />
          <path
            d="M210 132
               C238 166 255 194 264 222
               C271 244 268 268 258 290
               C248 310 232 326 210 338"
            fill="none"
            stroke="#e67ac6"
            strokeOpacity="0.65"
            strokeWidth="1.4"
          />
          <path
            d="M370 132
               C342 166 325 194 316 222
               C309 244 312 268 322 290
               C332 310 348 326 370 338"
            fill="none"
            stroke="#e67ac6"
            strokeOpacity="0.65"
            strokeWidth="1.4"
          />

          {/* mouth, neck, and open exit */}
          <path d="M210 132 L370 132" fill="none" stroke="#f0c26b" strokeWidth="1.05" opacity="0.92" />
          <circle cx="290" cy="132" r="3.5" fill="#f0c26b" opacity="0.95" />

          {/* brane-side inflow bends into the mouth */}
          <path d="M155 82 C190 100 225 124 262 141" stroke="#7aa2ff" strokeWidth="1.1" opacity="0.75" fill="none" markerEnd="url(#th-arrow-blue)" />
          <path d="M425 82 C390 100 355 124 318 141" stroke="#7aa2ff" strokeWidth="1.1" opacity="0.75" fill="none" markerEnd="url(#th-arrow-blue)" />
          <path d="M250 80 C258 104 270 126 284 141" stroke="#7aa2ff" strokeWidth="1.1" opacity="0.72" fill="none" markerEnd="url(#th-arrow-blue)" />
          <path d="M330 80 C322 104 310 126 296 141" stroke="#7aa2ff" strokeWidth="1.1" opacity="0.72" fill="none" markerEnd="url(#th-arrow-blue)" />

          {/* puncture indicator — throat opens into +w half */}
          <path d="M290 132 L290 318" stroke="#e67ac6" strokeWidth="1.1" strokeDasharray="4 4" opacity="0.85" fill="none" markerEnd="url(#th-arrow-pink)" />

          {/* labels */}
          <line x1="350" y1="132" x2="492" y2="76" stroke="#e4e7f5" strokeWidth="0.5" opacity="0.55" strokeDasharray="2 2" />
          <text x="496" y="74" fill="#e4e7f5" fontFamily="Newsreader, serif" fontStyle="italic" fontSize="12">
            mouth — what the brane sees
          </text>

          <line x1="318" y1="238" x2="470" y2="238" stroke="#e4e7f5" strokeWidth="0.5" opacity="0.55" strokeDasharray="2 2" />
          <text x="474" y="241" fill="#e4e7f5" fontFamily="Newsreader, serif" fontStyle="italic" fontSize="12">
            neck — narrow support region
          </text>

          <line x1="352" y1="338" x2="486" y2="304" stroke="#e4e7f5" strokeWidth="0.5" opacity="0.55" strokeDasharray="2 2" />
          <text x="490" y="307" fill="#e4e7f5" fontFamily="Newsreader, serif" fontStyle="italic" fontSize="12">
            open exit into bulk
          </text>

          {/* inflow label */}
          <text x="210" y="76" fill="#7aa2ff" fontFamily="Newsreader, serif" fontStyle="italic" fontSize="11" textAnchor="end">
            brane-side inflow → gravity
          </text>
          <text x="334" y="292" fill="#e67ac6" fontFamily="Newsreader, serif" fontStyle="italic" fontSize="11">
            puncture orientation → charge sign
          </text>
        </g>
      </svg>

      <figcaption className="fu-small" style={{ color: "var(--ink-3)", marginTop: 14, lineHeight: 1.55, maxWidth: 680 }}>
        This is a 2D cutaway schematic, not a literal 3D rendering. The brane-side fluid
        line bends into the throat mouth instead of ending at it. The finite-width throat
        narrows without pinching shut, then opens into the bulk at finite radius.
        Inflow is read in the gravity sector, while puncture orientation carries electric
        charge sign. Circulation or winding belongs to the magnetic/vortical sector.
      </figcaption>
    </figure>
  );
}
