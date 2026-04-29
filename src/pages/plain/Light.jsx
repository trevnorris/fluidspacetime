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
          <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "#e67ac6" }}>tension</em> of the pond
        </TPTitle>
        <TPLede>
          We started this whole story with the observation that the universe
          behaves like a stiff, still pond. Now it's time to make that
          precise. A pond propagates ripples at a characteristic speed set
          by how resistant it is to being disturbed. In the controlled
          signal-carrying wave sector of this program, that characteristic
          speed is the quantity we call <em>c</em>.
        </TPLede>
      </section>

      <TPSection anchor="ripples" eyebrow="ripples first" heading="Why anything has a speed limit">
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
          long-wavelength regime, the ratio is the quantity observers in our world
          call <em>c</em>. The current framework explains how a characteristic
          signal speed appears from the equation of state. It does not yet
          derive the numerical value of <em>299,792,458 metres per second</em>{" "}
          from deeper inputs. The speed limit is not imposed as a separate
          rule; it is the propagation speed of the wave sector used by
          observers in our world to build signals, clocks, and rulers.
        </TPBody>
      </TPSection>

      <TPSection anchor="identity" eyebrow="what light is" heading="A specific kind of ripple">
        <TPBody>
          Not every disturbance of the pond is light. A throat can disturb
          the medium by taking in fluid; that is the gravity story from topic
          05. A charged throat also has puncture orientation and circulation,
          which show up as electric and magnetic behavior. Light is different:
          it is the energy-bearing wave channel of the medium.
        </TPBody>
        <TPBody>
          In the controlled long-distance limit, this channel behaves like the
          familiar two-polarization, massless signal that travels at
          <em> c</em>. Hidden-direction structure and heavier internal patterns
          have to be quiet for that simple light law to apply.
        </TPBody>

        <TPCallout kind="note">
          Shorthand: light is the medium's ordinary long-range signal channel.
          It is not the electric force itself, not magnetism itself, and not
          every disturbance the parent medium can carry.
        </TPCallout>
      </TPSection>

      <TPSection anchor="traveling-trapped" eyebrow="two roles" heading="Traveling light and trapped light">
        <TPBody>
          The same light-sector energy can appear in two different roles. In
          open space, it travels as a signal through the medium. Around matter,
          it can also be trapped into standing patterns.
        </TPBody>
        <TPBody>
          That matters because a throat is not just an empty hole that stays
          open for free. In this ontology, an open throat has to be supported.
          One support channel is a standing photon pattern in or near the
          throat. The stored light-sector energy helps hold the throat open; if
          that energy leaves the support pattern, the throat can relax and
          close.
        </TPBody>
        <TPCallout kind="note">
          This page names the role light-sector energy is expected to play. The
          detailed moving-throat calculation that makes this support mechanism
          fully quantitative is still part of the open work.
        </TPCallout>
      </TPSection>

      <TPSection anchor="why-c" eyebrow="why c" heading="Why this speed, not some other?">
        <TPBody>
          Why this specific stiffness, giving this specific speed? The
          framework is honest: the microscopic parameters that set the
          pond's stiffness and density aren't <em>derived</em> from anything
          deeper in this work. They're inputs.
        </TPBody>
        <TPBody>
          With those properties in place, and in the smooth, large-scale signal
          regime, the model recovers the familiar result: light has one shared
          speed inside our world, and clocks and rulers made from wave-like
          matter behave the way relativity says.
        </TPBody>
        <TPBody>
          This is a proper scientific stance: the theory explains a route to
          operational Lorentz behavior in the sectors checked so far. It does
          not yet prove that every possible correction channel is invisible,
          and it does not explain why the measured number has its specific
          value. Those remain marked as scope boundaries.
        </TPBody>
      </TPSection>

      <TPSection anchor="consequences" eyebrow="consequences" heading="What follows from the pond being stiff">
        <TPBody>
          Three famous results of relativity have a medium-mechanism in the
          controlled regime:
        </TPBody>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(220px, 100%), 1fr))", gap: 14, margin: "18px 0 6px", maxWidth: 900 }}>
          {[
            { k: "Same c for light signals", v: "In the quiet, long-distance limit, this signal channel has the usual observer-independent propagation law: observers inside the world measure the same c." },
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
          observers inside the world even if the parent medium has a distinguished rest
          frame. The remaining work is to quantify where leakage, dispersion,
          dissipation, or sector mismatch could reintroduce preferred-frame
          signals.
        </TPBody>
      </TPSection>

      <TPSection anchor="dispersion" eyebrow="what's different" heading="Where this picture predicts something new">
        <TPBody>
          If light only had the simple long-range behavior described above,
          the response would stay exactly Maxwell-like at every scale. In this
          picture, very short distances or very high frequencies can wake up
          additional hidden-direction patterns. Those patterns would not change
          ordinary light in everyday conditions, but they could leave small,
          specific deviations in extreme regimes.
        </TPBody>
        <TPBody>
          This is not a prediction currently in tension with experiment. It is
          a place where the framework sticks its neck out: if future
          measurements ever find that light or electric behavior has one of
          those fixed small deviations, the model says to look for
          hidden-direction structure.
        </TPBody>
      </TPSection>

      <TPSection anchor="next" eyebrow="up next" heading="Next: atoms">
        <TPBody>
          Light on its own is one energy-bearing signal channel of the pond. What we
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
