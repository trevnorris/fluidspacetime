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
          Imagine a dense soup of throats, some carrying one puncture
          orientation and some carrying the opposite orientation. Once a
          convention is chosen, those are the positive and negative charge
          branches. Each one drinks a little fluid and sits in the gauge
          field of its neighbours. The positives and negatives attract and
          repel in the usual ways.
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
          picture has to recover MHD in that controlled range: long scales,
          low frequencies, negligible transverse leakage, and a quiet mixed
          sector. The plasma paper builds exactly that limit. What's
          interesting is what becomes visible when those assumptions fail.
        </TPBody>
      </TPSection>

      <TPSection anchor="where" eyebrow="where ideal MHD breaks" heading="Real plasmas do things ideal MHD says they can't.">
        <TPBody>
          Ideal MHD assumes the plasma is a perfect conductor — the
          magnetic field lines are frozen into the fluid and never break or
          rearrange. But real plasmas break field lines all the time. The
          aurora, solar flares, the dynamics inside a tokamak — all of them
          involve rapid reconfigurations of magnetic structure that perfect
          MHD forbids. Standard plasma theory patches the ideal limit in
          principled ways — Hall drift, electron pressure, electron inertia,
          collisions, kinetic effects — but large simulations still have to
          choose closures and numerical rules for how topology changes.
        </TPBody>
        <TPBody>
          The Fluid Spacetime program has a specific story about where those
          additional beyond-MHD terms can come from: not by replacing the
          usual Hall or resistive closures, but by keeping the channels that
          ideal MHD deliberately suppresses. Some of the pond's activity can
          move through the hidden direction, or into transverse field modes,
          instead of staying visible on the brane.
        </TPBody>

        <TPCallout kind="note">
          Put differently: part of the non-ideal ledger can be an open-system
          bookkeeping problem. Energy, momentum, charge, or helicity may leave
          the brane-visible variables without leaving the parent system. The
          hidden-channel terms are designed to make that exchange measurable,
          not to rename every ordinary plasma effect.
        </TPCallout>
      </TPSection>

      <TPSection anchor="channels" eyebrow="the hidden channels" heading="Where the energy goes.">
        <TPBody>
          The rigorous version of the previous paragraph lists four specific
          places the pond can park energy that aren't part of the brane's
          MHD description:
        </TPBody>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))", gap: 14, margin: "18px 0 6px", maxWidth: 820 }}>
          {[
            { k: "Mixed-sector EM", v: "Components of the electromagnetic field with one leg on the brane and one leg in the hidden direction. They're suppressed in the far-field limit, but strong gradients can make them relevant." },
            { k: "Bulk leakage",    v: "Matter or current moving along the hidden direction instead of only along the brane. It can look like a source or loss to us while remaining conservative in the bulk." },
            { k: "Higher modes",    v: "Excitations above the lowest localized electromagnetic mode. Normally quiet, but expected when structures approach the localization scale." },
            { k: "Projection stress", v: "Residual terms from projecting products, ratios, and unresolved transverse structure into a brane-only description." },
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
          brane-level MHD is blind to by construction. If the plasma is
          long-wavelength, low-frequency, well localized, and has negligible
          transverse current, those channels are quiet and MHD looks complete.
          Step outside those assumptions and the hidden channels can become
          dynamically important.
        </TPBody>
      </TPSection>

      <TPSection anchor="reconnection" eyebrow="where this might help" heading="The reconnection question.">
        <TPBody>
          Magnetic reconnection — the sudden rearrangement of field
          topology in a conducting fluid — is one of the central stress tests
          for plasma theory. Observations tell us it happens fast and releases
          enormous energy. Ideal MHD says it shouldn't happen at all; extended
          MHD and kinetic theory explain many regimes, but the closure and
          energy-ledger problem remains important in large-scale models.
        </TPBody>
        <TPBody>
          The fluid picture suggests a geometric angle: what looks on the
          brane like topology changing discontinuously may, in the bulk, be
          a smooth rearrangement whose brane shadow only looks abrupt. The
          energy and helicity budget for the event should then correlate with
          measurable hidden-channel activity: transverse current, mixed-field
          energy, leakage, and higher-mode storage. This is a
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
          The fluid picture reproduces standard ideal MHD under the paper's
          controlled brane/zero-mode assumptions. The hidden-channel story is
          structural and diagnostic: it says what to measure when those
          assumptions fail. Turning that into quantitative reconnection rates
          or closure coefficients requires simulations and the moving-throat
          PDE of topic 11 to be solved or closed in the relevant limit. That's
          ongoing work.
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
