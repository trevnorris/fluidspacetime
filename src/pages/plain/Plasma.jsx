import React from 'react';
import { TopicPage, TPTitle, TPLede, TPSection, TPBody, TPCallout } from '../../components/TopicPage.jsx';

// Part II · Topic 07 — Plasma & MHD — PLAIN ENGLISH

export default function PlainPlasma() {
  const topic = {
    n: "07",
    part: "II",
    partName: "Applications",
    slug: "plasma",
    title: "Plasma & Magnetohydrodynamics",
  };

  return (
    <TopicPage track="plain" topic={topic}>
      <section style={{ padding: "10px 0 40px" }}>
        <TPTitle>
          A plasma is the pond talking to{" "}
          <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "#e67ac6" }}>itself</em> — many charged throats, one medium.
        </TPTitle>
        <TPLede>
          The sun is a plasma. So is a lightning bolt, the aurora, the
          interstellar medium, and the interior of most stars in the universe.
          When the fluid picture has many charged throats swimming together
          in the pond, it has to reproduce the physics of plasmas — not only
          the textbook parts, but specific places where textbooks are known
          to be incomplete. That's this chapter.
        </TPLede>
      </section>

      <TPSection anchor="picture" eyebrow="the picture" heading="Many throats, moving, talking.">
        <TPBody>
          Imagine a dense soup of throats, half puncturing into +w (call
          them positive), half into −w (negative). Each one drinks a
          little fluid and sits in the gauge field of its neighbours.
          The positives and negatives attract and repel in the usual ways.
          They push on each other; they move; and as they move, they
          generate new gauge fields, which push on more throats, which
          move, which generate more fields. This feedback loop is what makes a
          plasma behave unlike either a gas or a collection of separate
          particles.
        </TPBody>
        <TPBody>
          The ordinary toolkit for this situation is called
          <em> magnetohydrodynamics</em> — MHD for short. It's a set of
          equations that treat the plasma as a conducting fluid, and for a
          remarkable range of situations it works beautifully. The fluid
          picture should reproduce MHD in that range. It does. What's
          interesting is where it doesn't.
        </TPBody>
      </TPSection>

      <TPSection anchor="where" eyebrow="where MHD breaks" heading="Real plasmas do things MHD says they can't.">
        <TPBody>
          Textbook MHD assumes the plasma is a perfect conductor — the
          magnetic field lines are frozen into the fluid and never break or
          rearrange. But real plasmas break field lines all the time. The
          aurora, solar flares, the dynamics inside a tokamak — all of them
          involve rapid reconfigurations of magnetic structure that perfect
          MHD forbids. Patching this up usually requires adding little terms
          to the equations that don't have a first-principles origin —
          resistivity, Hall effects, kinetic instabilities. Useful, but
          conceptually messy.
        </TPBody>
        <TPBody>
          The Fluid Spacetime program has a specific story about where those
          corrections come from: they are not extra terms added to the pond's
          equations. They are what happens when some of the pond's activity
          takes a shortcut through the hidden direction instead of staying
          visible on the brane.
        </TPBody>

        <TPCallout kind="note">
          Put differently: textbook non-ideality is often a bookkeeping
          problem — energy and momentum appear to vanish from the
          brane-visible equations. In the fluid picture, they don't vanish.
          They move into channels a brane observer can't directly see, but
          can still balance the books against.
        </TPCallout>
      </TPSection>

      <TPSection anchor="channels" eyebrow="the hidden channels" heading="Where the energy goes.">
        <TPBody>
          The rigorous version of the previous paragraph lists four specific
          places the pond can park energy that aren't part of the brane's
          MHD description:
        </TPBody>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, margin: "18px 0 6px", maxWidth: 820 }}>
          {[
            { k: "Mixed-sector EM", v: "Components of the electromagnetic field that have one leg in the brane and one leg in the hidden direction. They're suppressed in the far-field, but hot and dense regions re-excite them." },
            { k: "Bulk leakage",    v: "Matter and charge moving bodily along the hidden direction instead of on the brane. Looks like a loss to us; conserved once you count the bulk." },
            { k: "Higher modes",    v: "Excitations of the brane's thickness profile above its lowest mode. Normally frozen out, but accessible at high field gradients." },
            { k: "Throat-stress",   v: "Mechanical stress in the throat geometries themselves, supplied by the distributed moving-throat dynamics of topic 11." },
          ].map((c) => (
            <div key={c.k} style={{
              padding: "20px 22px",
              border: "1px solid var(--rule-2)",
              borderRadius: 3,
              background: "rgba(16,20,42,0.5)",
            }}>
              <div className="fu-display" style={{ fontSize: 17, color: "var(--ink-1)", marginBottom: 8, fontWeight: 400 }}>{c.k}</div>
              <div className="fu-small" style={{ color: "var(--ink-2)", lineHeight: 1.6 }}>{c.v}</div>
            </div>
          ))}
        </div>

        <TPBody>
          These aren't new particles or new forces. They're different
          geometric modes of the same underlying medium — channels that
          brane-level MHD is blind to by construction. If you stay far from
          throats, stay at modest field strengths, and stay at long
          wavelengths, those channels are quiet and MHD looks complete. Step
          outside any of those conditions and the hidden channels turn on.
        </TPBody>
      </TPSection>

      <TPSection anchor="reconnection" eyebrow="where this might help" heading="The reconnection question.">
        <TPBody>
          Magnetic reconnection — the sudden rearrangement of field
          topology in a conducting fluid — is one of the oldest open
          problems in plasma physics. Observations tell us it happens fast
          and releases enormous energy. Ideal MHD says it shouldn't happen
          at all. Dozens of patches exist, none universally accepted.
        </TPBody>
        <TPBody>
          The fluid picture suggests a geometric angle: what looks on the
          brane like topology changing discontinuously may, in the bulk, be
          a smooth rearrangement whose brane shadow only looks abrupt. The
          energy budget for the abrupt event is supplied by the hidden
          channels going quiet as the brane topology settles. This is a
          <em> hypothesis</em>, not a completed derivation — it's where the
          program expects its insights to pay off, not where they've
          already landed.
        </TPBody>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
          <span className="fu-mono fu-small" style={{
            fontSize: 10, color: "#e67ac6", letterSpacing: "0.14em", textTransform: "uppercase",
            padding: "4px 10px", border: "1px solid #e67ac655", borderRadius: 999,
          }}>
            open · hypothesis
          </span>
          <span className="fu-mono fu-small" style={{
            fontSize: 10, color: "#7aa2ff", letterSpacing: "0.14em", textTransform: "uppercase",
            padding: "4px 10px", border: "1px solid #7aa2ff55", borderRadius: 999,
          }}>
            feeds: moving-throat PDE
          </span>
        </div>
      </TPSection>

      <TPSection anchor="caveats" eyebrow="honest caveats" heading="Where we stand.">
        <TPBody>
          The fluid picture does reproduce ordinary MHD in the regime where
          ordinary MHD works. The identification of non-ideal effects with
          hidden channels is structural — we know where to park the missing
          books — but turning that into quantitative predictions requires the
          moving-throat PDE of topic 11 to be solved or closed in the
          relevant limit. That's ongoing work.
        </TPBody>
        <TPBody>
          So this chapter is a placeholder in a specific sense: the
          machinery is in place, the questions are correctly framed, and
          several of the entries in the results ledger will live here once
          they land.
        </TPBody>

      </TPSection>

      <TPSection anchor="next" eyebrow="up next" heading="Next: what ripples in the pond actually are.">
        <TPBody>
          We've now extracted gravity, electromagnetism, and plasma behaviour
          from the throat-and-fluid picture. The one piece we haven't
          revisited since chapter 01 is light itself — the ripple on the
          pond's surface. The next chapter makes it quantitative: why the
          speed limit is <em>c</em>, why waves travel the way they do, and
          how the stiff pond's equation of state is what pins the whole thing
          down.
        </TPBody>
      </TPSection>
    </TopicPage>
  );
}
