import React from 'react';
import { TopicPage, TPTitle, TPLede, TPSection, TPBody, TPCallout } from '../../components/TopicPage.jsx';

// Part 1 · Topic 03 — A Hidden Direction — PLAIN ENGLISH

export default function PlainHiddenDirection() {
  const topic = {
    n: "03",
    part: "I",
    partName: "Foundations",
    slug: "hidden-direction",
    title: "A Hidden Direction",
  };

  return (
    <TopicPage track="plain" topic={topic}>
      <section style={{ padding: "10px 0 40px" }}>
        <TPTitle>
          There's a direction you can't look in — but defects can{" "}
          <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "#e67ac6" }}>
            extend into it
          </em>.
        </TPTitle>
        <TPLede>
          If the last chapter convinced you that stable matter needs defects,
          this chapter asks a harder question: where do the defects <em>live</em>?
          In the Fluid Spacetime picture, the answer is that our familiar 3D
          space is a thin slice of a larger 4D arena. We see the slice.
          The defects use the whole room.
        </TPLede>
      </section>

      <TPSection anchor="flatland" eyebrow="a warmup" heading="Flatland with a ceiling.">
        <TPBody>
          Imagine a sheet of paper hovering inside a room. A tiny, flat
          creature lives on the paper. Its whole world is paper: two directions
          to walk in, nothing above or below. Drop a pencil vertically through
          the sheet. From above, you see a pencil passing through. From the
          creature's point of view — it only sees the slice — a circle appears
          out of nothing, grows, maybe shrinks, and disappears. The creature
          has no name for “up.” But the circle's behavior is driven by something
          the creature can't see: the pencil's extent <em>along the hidden axis</em>.
        </TPBody>
        <TPBody>
          Now add one dimension to the creature and one to the room. The
          creature is us; the sheet is our 3D space; the room is a 4D arena;
          the hidden direction is what the program calls <em>w</em>. We live on
          a three-dimensional slice (in the theory's vocabulary: the{" "}
          <strong style={{ color: "var(--ink-1)" }}>brane</strong>). The full
          four-dimensional arena is the <strong style={{ color: "var(--ink-1)" }}>bulk</strong>.
        </TPBody>

        <BraneBulkDiagram />
      </TPSection>

      <TPSection anchor="why" eyebrow="why bother" heading="Why add a direction we can't see?">
        <TPBody>
          The honest answer is that the 3D story isn't rich enough. Some
          defects we want to describe behave as if they have <em>depth</em>.
          Pinch the sheet of paper: the creature sees a point, but the pinch
          itself extends up and down into the room. The w direction is what
          gives our defects room to be more than pointlike. It's also where
          certain long-range interactions keep their bookkeeping — in a way
          that lets gravity and electromagnetism be organized inside the same
          brane-bulk framework, not as two unrelated inventions.
        </TPBody>
        <TPBody>
          If you've read about string theory or Kaluza–Klein before, resist the
          urge to file this under “extra dimension for particle physics
          reasons.” The w direction in this program has a specific job: to host
          the bulk behaviour of defects we already need. It isn't tuned to
          reproduce a spectrum.
        </TPBody>
      </TPSection>

      <TPSection anchor="see" eyebrow="what we see" heading="We see the slice — but the slice sees what passes through it.">
        <TPBody>
          A brane observer — that's us — measures things on the slice. A
          defect that extends into the bulk isn't invisible: its <em>trace</em>
          on the slice is what we read as “a particle sitting here.” Two
          different bulk objects can leave the same trace. That's not a bug;
          it's part of why the theory is interesting.
        </TPBody>
        <TPBody>
          How does the slice measure the bulk? It averages — not naively, but
          through a specific shape, called a{" "}
          <strong style={{ color: "var(--ink-1)" }}>projection kernel</strong>,
          which says how much each layer of w contributes to what we see. A
          narrow kernel means a thin brane: we feel only the fluid very close
          to our slice. A broader kernel means we feel deeper into the bulk.
          In this program, the kernel is part of the observer definition, not
          something adjusted separately for each brane equation.
        </TPBody>

        <TPCallout kind="note">
          <em>Projection</em> is the exact operation that turns a bulk object
          into its brane trace. <em>Reduction</em> is a later, approximate
          operation that uses a physical limit (weak gradients in w, say) to
          write a brane-only equation.
          Those two words look interchangeable — they aren't. The honesty rail
          on technical pages tracks which one is in play.
        </TPCallout>
      </TPSection>

      <TPSection anchor="so-what" eyebrow="why it matters" heading="Two sector lives — one brane view.">
        <TPBody>
          Gravity and electromagnetism will, in the chapters to come, be modeled
          as two different brane-readable channels tied to what a defect does
          along the w axis. Gravity is about <em>flow inward</em>: a defect
          drinks fluid from the bulk, and the brane reads the inflow as
          attraction. Electromagnetism is about <em> orientation in w</em>: a
          defect punctures through the brane into one half of the hidden
          direction, and the brane reads which half as charge sign. Same defect
          family, two bulk behaviours. Same slice — but a slice that sees more
          than its own thickness.
        </TPBody>
        <TPBody>
          The next chapter introduces the specific defect that the whole
          program is organized around. It's the one that does both at once:
          the <em>throat</em>.
        </TPBody>

      </TPSection>
    </TopicPage>
  );
}

// ─── diagram: 3D sheet in 4D arena, defect crossing through ──────
function BraneBulkDiagram() {
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
          plate 03 · brane, bulk, and the hidden w
        </span>
        <span className="fu-mono fu-small" style={{ color: "var(--ink-4)", fontSize: 10.5 }}>
          metaphor · plain english
        </span>
      </div>

      <svg viewBox="0 0 780 320" width="100%" style={{ display: "block" }}>
        <defs>
          <linearGradient id="hd-brane" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7aa2ff" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#7aa2ff" stopOpacity="0.03" />
          </linearGradient>
          <radialGradient id="hd-defect" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#e67ac6" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#e67ac6" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* vertical w-axis */}
        <g transform="translate(50,34)">
          <line x1="0" y1="0" x2="0" y2="254" stroke="#6d749a" strokeWidth="0.8" strokeDasharray="3 3" />
          <path d="M-4 4 L0 0 L4 4" stroke="#6d749a" fill="none" strokeWidth="0.8" />
          <text x="-28" y="6" fill="#e4e7f5" fontFamily="Newsreader, serif" fontStyle="italic" fontSize="12">w</text>
          <text x="-44" y="130" fill="#6d749a" fontFamily="JetBrains Mono, monospace" fontSize="10">hidden</text>
        </g>

        {/* 4D bulk box — parallelogram */}
        <g transform="translate(80,30)">
          <path d="M0,60 L520,60 L600,30 L80,30 Z" fill="rgba(16,20,42,0.7)" stroke="#2a3160" />
          <path d="M0,260 L520,260 L600,230 L80,230 Z" fill="rgba(16,20,42,0.35)" stroke="#2a3160" />
          <line x1="0" y1="60" x2="0" y2="260" stroke="#2a3160" />
          <line x1="520" y1="60" x2="520" y2="260" stroke="#2a3160" />
          <line x1="80" y1="30" x2="80" y2="230" stroke="#2a3160" opacity="0.5" />
          <line x1="600" y1="30" x2="600" y2="230" stroke="#2a3160" opacity="0.5" />
          <text x="10" y="22" fill="#6d749a" fontFamily="JetBrains Mono, monospace" fontSize="10">bulk — the 4D arena</text>
        </g>

        {/* 3D brane — a sheet slicing across the middle */}
        <g transform="translate(80,30)">
          <path d="M0,150 L520,150 L600,120 L80,120 Z"
                fill="url(#hd-brane)" stroke="#7aa2ff" strokeOpacity="0.7" />
          <text x="520" y="144" fill="#7aa2ff" fontFamily="JetBrains Mono, monospace" fontSize="10" textAnchor="end">
            brane — what we see (w = 0)
          </text>
        </g>

        {/* defect extending through w */}
        <g transform="translate(80,30)">
          <line x1="270" y1="40" x2="270" y2="240" stroke="#e67ac6" strokeWidth="1.4" />
          <circle cx="270" cy="135" r="24" fill="url(#hd-defect)" />
          <circle cx="270" cy="135" r="3" fill="#f0c26b" />
          {/* dots showing extent along w */}
          {[60, 90, 110, 135, 160, 185, 215].map((y, i) => (
            <circle key={i} cx="270" cy={y} r="1.8" fill="#e67ac6" opacity={0.3 + 0.5 * (1 - Math.abs(y - 135) / 80)} />
          ))}
          <line x1="270" y1="135" x2="380" y2="70" stroke="#e4e7f5" strokeWidth="0.5" opacity="0.55" strokeDasharray="2 2" />
          <text x="384" y="68" fill="#e4e7f5" fontFamily="Newsreader, serif" fontStyle="italic" fontSize="12">
            a defect, extended along w
          </text>
          <line x1="270" y1="135" x2="420" y2="160" stroke="#7aa2ff" strokeWidth="0.5" opacity="0.8" strokeDasharray="2 2" />
          <text x="424" y="164" fill="#7aa2ff" fontFamily="Newsreader, serif" fontStyle="italic" fontSize="12">
            what the brane sees — its slice
          </text>
        </g>
      </svg>

      <figcaption className="fu-small" style={{ color: "var(--ink-3)", marginTop: 14, lineHeight: 1.55, maxWidth: 680 }}>
        The brane (faint blue sheet) is our 3D world. The bulk (the box) extends upward and
        downward along a hidden direction <em>w</em>. A defect (magenta column) pierces the brane;
        we only read its slice, but the defect's behaviour is set by its full bulk profile.
      </figcaption>
    </figure>
  );
}
