import React from 'react';
import { TopicPage, TPTitle, TPLede, TPSection, TPBody, TPCallout } from '../../components/TopicPage.jsx';

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
          behaves like a stiff, still pond. Now it's time to make that
          precise. A pond propagates ripples at a characteristic speed set
          by how resistant it is to being disturbed. In the controlled
          brane wave sector of this program, that characteristic speed is
          the quantity we call <em>c</em>.
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
          heavier — but the ratio is what matters. In the weakly perturbed,
          long-wavelength regime, the ratio is the quantity brane observers
          call <em>c</em>. The current framework explains how a characteristic
          signal speed appears from the equation of state. It does not yet
          derive the numerical value of <em>299,792,458 metres per second</em>{" "}
          from deeper inputs. The speed limit is not imposed as a separate
          rule; it is the propagation speed of the wave sector used by
          brane observers to build signals, clocks, and rulers.
        </TPBody>
      </TPSection>

      <TPSection anchor="identity" eyebrow="what light is" heading="A specific kind of ripple.">
        <TPBody>
          Not every disturbance of the pond is light. A throat moving
          through the pond has a longitudinal, density-sourcing side —
          that's the gravity story from topic 05. A charged throat also
          sources the localized gauge field from topic 06. What <em>light</em>{" "}
          is, in the current papers, is the brane-facing electromagnetic
          zero mode: the massless, transverse part of that localized gauge
          sector in the regime where mixed and higher modes are quiet.
        </TPBody>
        <TPBody>
          That's the source-backed reason the site treats light as a
          two-polarization, massless brane signal in the Maxwell limit. The
          surrounding picture is still medium-like, but the exact statement
          here is a controlled reduction: localized 4+1 electromagnetism
          reduces to ordinary 3+1 Maxwell propagation on the brane only under
          the zero-mode assumptions.
        </TPBody>

        <TPCallout kind="note">
          Shorthand: light is the quiet brane zero mode of the localized gauge
          sector, not every disturbance the parent medium can carry.
        </TPCallout>
      </TPSection>

      <TPSection anchor="why-c" eyebrow="why c" heading="Why this speed, not some other?">
        <TPBody>
          Why this specific stiffness, giving this specific speed? The
          framework is honest: the microscopic parameters that set the
          pond's stiffness and density aren't <em>derived</em> from anything
          deeper in this work. They're inputs. What the framework shows is
          that, <em>given</em> those inputs and the controlled long-wavelength
          assumptions, the brane signal sector has an invariant propagation
          speed and wave-supported clocks and rulers acquire the usual
          Lorentz factors.
        </TPBody>
        <TPBody>
          This is a proper scientific stance: the theory explains a route to
          operational Lorentz behavior in the sectors checked so far. It does
          not yet prove that every possible correction channel is invisible,
          and it does not explain why the measured number has its specific
          value. Those remain marked as scope boundaries.
        </TPBody>
      </TPSection>

      <TPSection anchor="consequences" eyebrow="consequences" heading="What follows from the pond being stiff.">
        <TPBody>
          Three famous results of relativity have a medium-mechanism in the
          controlled regime:
        </TPBody>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(220px, 100%), 1fr))", gap: 14, margin: "18px 0 6px", maxWidth: 900 }}>
          {[
            { k: "Same c in the brane law", v: "The localized Maxwell zero mode depends on the Lorentz scalar k², so its brane response has the usual observer-independent form." },
            { k: "Time dilation", v: "For wave-supported matter with linear dispersion, the phase along the moving object's worldline ticks slower by the usual gamma factor." },
            { k: "Length contraction", v: "A wave-supported ruler contracts along the direction of motion when its internal timing is made self-consistent with that same phase kinematics." },
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
          None of this is meant to contradict Einstein's relativity. It is a
          proposed mechanism for why the familiar kinematics can appear to
          brane observers even if the parent medium has a distinguished rest
          frame. The remaining work is to quantify where leakage, dispersion,
          dissipation, or sector mismatch could reintroduce preferred-frame
          signals.
        </TPBody>
      </TPSection>

      <TPSection anchor="dispersion" eyebrow="what's different" heading="Where this picture predicts something new.">
        <TPBody>
          If light were only the zero mode of textbook Maxwell theory in
          empty three-space, the brane response would stay exactly Maxwellian
          at every scale. In this picture the localized gauge sector also has
          a hidden-direction mode tower. For a Gaussian localization profile,
          the higher modes have fixed masses, produce Yukawa corrections in
          static fields, and add threshold and tail effects in time-dependent
          response.
        </TPBody>
        <TPBody>
          This isn't a prediction that's currently in tension with any
          experiment. It's a place the framework sticks its neck out: some
          day, at some frequency or distance scale we haven't reached, an
          electromagnetic signal could show the fixed pattern of massive-mode
          corrections. If we ever measure that, we know where to look for the
          geometry responsible.
        </TPBody>
      </TPSection>

      <TPSection anchor="next" eyebrow="up next" heading="Next: atoms.">
        <TPBody>
          Light on its own is one brane-readable mode of the pond. What we
          see it do in practice — illuminate atoms, get absorbed, get emitted
          in specific colours — is the interaction between that mode and the
          standing-wave structure of matter itself. Which means it's time to
          turn to the reduced Coulomb/atomic sector, and to ask what is known
          and still open about the electron's magnetic moment in this picture.
        </TPBody>

      </TPSection>
    </TopicPage>
  );
}
