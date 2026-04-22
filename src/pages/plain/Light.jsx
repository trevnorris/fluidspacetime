import React from 'react';
import { TopicPage, TPTitle, TPLede, TPSection, TPBody, TPCallout } from '../../components/TopicPage.jsx';
import { TrackToggle } from '../../components/TrackToggle.jsx';

// Part II · Topic 08 — Light, Waves & the Speed Limit — PLAIN ENGLISH

export default function PlainLight() {
  const topic = {
    n: "08",
    part: "II",
    partName: "Applications",
    slug: "light",
    title: "Light, Waves & the Speed Limit",
  };

  return (
    <TopicPage track="plain" topic={topic}>
      <section style={{ padding: "10px 0 40px" }}>
        <TPTitle>
          Light is a ripple running across the{" "}
          <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "#e67ac6" }}>tension</em> of the pond.
        </TPTitle>
        <TPLede>
          We started this whole story with the observation that the universe
          behaves like a stiff, still pond. Now it's time to make good on
          that. A pond propagates ripples at a characteristic speed set by
          how resistant it is to being disturbed. For our pond, that speed
          is <em>c</em>.
        </TPLede>
      </section>

      <TPSection anchor="ripples" eyebrow="ripples first" heading="Why anything has a speed limit.">
        <TPBody>
          Take a bathtub full of water and tap the surface. A ripple runs
          outward at a particular speed. That speed isn't an accident — it's
          set by two properties of the water: how heavy it is (inertia) and
          how strongly it resists being bent (restoring force). Heavier or
          floppier water, slower ripples. Lighter or stiffer water, faster.
          Every continuous medium has a ripple speed, and it's always set by
          that same ratio.
        </TPBody>
        <TPBody>
          The pond of this program is much stiffer than water and much
          heavier — but the ratio is what matters. In the regime we care
          about, the ratio is the quantity brane observers call <em>c</em>.
          The current framework explains why there is one characteristic speed
          at all. It does not yet derive the numerical value of{" "}
          <em>299,792,458 metres per second</em> from deeper inputs.
          It's not that light was issued a speed limit by a cosmic rulebook.
          The speed limit is simply how fast the pond can move information
          from one place to another. Anything that is fundamentally a
          ripple is stuck with it.
        </TPBody>
      </TPSection>

      <TPSection anchor="identity" eyebrow="what light is" heading="A specific kind of ripple.">
        <TPBody>
          Not every disturbance of the pond is light. A throat moving
          through the pond drags along some of the ambient fluid with it —
          that's gravity. A throat's gauge field distributes around it —
          that's the electric field. What <em>light</em> is, in this picture, is
          the <em>transverse</em> part of the pond's disturbance — the part
          that ripples sideways rather than outward, and that carries no
          net flow with it. It's the pond vibrating in a particular
          shear-y mode that doesn't pile up matter or charge in any one
          place.
        </TPBody>
        <TPBody>
          That's why light has two polarizations (two transverse directions
          in three-space), why it doesn't have mass (no pileup), and why it
          interacts with charged throats (those throats source the gauge
          field that this transverse vibration couples to). All of it falls out of
          asking: what modes can a stiff, incompressible-ish pond actually
          carry?
        </TPBody>

        <TPCallout kind="note">
          Shorthand: light is what the pond does when nothing is being
          pushed <em>through</em> it — only <em>along</em> it.
        </TPCallout>
      </TPSection>

      <TPSection anchor="why-c" eyebrow="why c" heading="Why this speed, not some other?">
        <TPBody>
          Why this specific stiffness, giving this specific speed? The
          framework is honest: the microscopic parameters that set the
          pond's stiffness and density aren't <em>derived</em> from anything
          deeper in this work. They're inputs. What the framework shows is
          that, <em>given</em> those inputs, the speed limit is what you get,
          that all ripples must travel at it, and that all the textbook
          consequences (relativity, length contraction, time dilation)
          follow as properties of the pond.
        </TPBody>
        <TPBody>
          This is a proper scientific stance: the theory explains why
          there's a speed limit at all, and why everything obeys it, and
          why it's identical for every observer. It doesn't yet explain why
          the specific number is what it is. That's an open question marked
          as such.
        </TPBody>
      </TPSection>

      <TPSection anchor="consequences" eyebrow="consequences" heading="What follows from the pond being stiff.">
        <TPBody>
          Three famous results of relativity are all consequences of this
          setup:
        </TPBody>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14, margin: "18px 0 6px", maxWidth: 900 }}>
          {[
            { k: "Same c for everyone", v: "The pond's ripple speed is a property of the pond, not of whoever is watching. Every observer measures the same c because they are all embedded in the same medium." },
            { k: "Time dilation", v: "When you move through the pond, your internal clock — which is also a ripple-process — runs slower, because some of its propagation budget is spent moving you through space." },
            { k: "Length contraction", v: "A ruler made of matter that is itself ripples gets geometrically squeezed in the direction of travel by the same mechanism." },
          ].map((c) => (
            <div key={c.k} style={{
              padding: "18px 20px",
              border: "1px solid var(--rule-2)",
              borderRadius: 3,
              background: "rgba(16,20,42,0.5)",
            }}>
              <div className="fu-display" style={{ fontSize: 15, color: "var(--ink-1)", marginBottom: 8, fontWeight: 400 }}>{c.k}</div>
              <div className="fu-small" style={{ color: "var(--ink-2)", lineHeight: 1.6 }}>{c.v}</div>
            </div>
          ))}
        </div>

        <TPBody>
          None of this contradicts Einstein's relativity — it <em>is</em>
          relativity, derived as the behaviour of a specific kind of medium.
          The shift is from taking the Lorentz symmetry as an axiom to
          taking it as a consequence.
        </TPBody>
      </TPSection>

      <TPSection anchor="dispersion" eyebrow="what's different" heading="Where this picture predicts something new.">
        <TPBody>
          If light were <em>just</em> a textbook ripple in empty
          three-space, different colours (different frequencies) would
          always travel at exactly the same speed. In our picture, once you
          look carefully, the pond has a hidden direction too, and very
          high-frequency ripples can briefly explore it before coming back.
          This predicts, at frequencies unimaginably higher than anything
          we've tested, a small deviation from perfectly uniform <em>c</em>
          — a <em>dispersion</em>.
        </TPBody>
        <TPBody>
          This isn't a prediction that's currently in tension with any
          experiment. It's a place the framework sticks its neck out: some
          day, at some energy we haven't reached, the speed of light
          depends very slightly on its colour. If we ever measure that, we
          know where to look for the geometry responsible.
        </TPBody>
      </TPSection>

      <TPSection anchor="next" eyebrow="up next" heading="Next: atoms.">
        <TPBody>
          Light on its own is one mode of the pond. What we see it do in
          practice — illuminate atoms, get absorbed, get emitted in specific
          colours — is the interaction between that mode and the standing-wave
          structure of matter itself. Which means it's time to do atoms
          properly, and to ask where the most precisely measured number in
          physics — the electron's magnetic moment — comes from in this
          picture.
        </TPBody>

        <div style={{
          marginTop: 30, padding: "20px 24px",
          border: "1px dashed var(--rule-2)", borderRadius: 3,
          display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap",
        }}>
          <span className="fu-mono" style={{ fontSize: 10.5, letterSpacing: "0.14em", color: "var(--ink-3)", textTransform: "uppercase" }}>
            ◇ technical mirror
          </span>
          <span className="fu-small" style={{ color: "var(--ink-2)", flex: 1, minWidth: 220 }}>
            Characteristic speed from the EOS slope, controlled brane Maxwell reduction, and profile-gated KK corrections.
          </span>
          <TrackToggle track="plain" size="sm" />
        </div>
      </TPSection>
    </TopicPage>
  );
}
