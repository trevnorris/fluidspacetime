import React from 'react';
import { TopicPage, TPTitle, TPLede, TPSection, TPBody, TPCallout } from '../../components/TopicPage.jsx';

// Part II · Topic 05 — Gravity as Inflow — PLAIN ENGLISH

export default function PlainGravity() {
  const topic = {
    n: "05",
    part: "II",
    partName: "Applications",
    slug: "gravity",
    title: "Gravity as Inflow",
  };

  return (
    <TopicPage track="plain" topic={topic}>
      <section style={{ padding: "10px 0 40px" }}>
        <TPTitle>
          In this picture, gravity isn't a force reaching across space. It's the pond
          <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "#e67ac6" }}>
            {" "}noticing{" "}
          </em>
          that something is draining it.
        </TPTitle>
        <TPLede>
          We have throats, and the gravity-side branch treats them as
          sink-like sources for projected flow. This chapter explains the
          proposal that this inflow is what we experience as gravity — not as a
          mysterious pull across distance, but as a shift in the pond's flow
          pattern that other throat branches can feel in the controlled
          Newtonian regime.
        </TPLede>
      </section>

      <TPSection anchor="drain" eyebrow="the drain" heading="A bathtub drain curves the water around it.">
        <TPBody>
          Fill a bathtub; pull the plug. The water doesn't sit still and
          disappear at a point — it flows inward toward the drain from every
          direction. A toy boat floating anywhere in the tub gets carried with
          the current, a little at a time. It looks, to a naive observer, like
          the drain is reaching out and pulling the boat. Really, the boat is
          just riding the flow.
        </TPBody>
        <TPBody>
          In the model, a throat can act like a sink for the projected brane
          flow. In the simple Newtonian limit, that source sets up a gentle,
          steady longitudinal current in the surrounding pond. Another throat
          sitting nearby is itself made of the pond; in the reduced picture, it
          responds to that local current. That is the route to{" "}
          <em>gravitational attraction</em>.
        </TPBody>
      </TPSection>

      <TPSection anchor="why-inverse" eyebrow="why the inverse square" heading="Why does it fall off like 1/r²?">
        <TPBody>
          The inverse-square law of gravity — and of almost every radial
          pull in physics — is a consequence of geometry, not of something
          special about gravity. Imagine the inflow spreading out from a
          distant throat. Far enough away, the flow looks like it's coming from
          a single point. At distance <em>r</em> from that point, the flow has
          to spread over the surface of a sphere of radius <em>r</em>. That
          surface grows like <em>r</em>². So the flow through any small patch
          on it has to thin out like 1/<em>r</em>². That's the inverse-square
          law, dropping out for free.
        </TPBody>

        <TPCallout kind="note">
          The inverse-square isn't a law; it's accounting. A fixed amount of
          fluid spreading over spheres of growing surface area. Newton's law
          of gravity, Coulomb's law of electrostatics — both get the same
          geometric dilution, for the same reason.
        </TPCallout>
      </TPSection>

      <TPSection anchor="longitudinal" eyebrow="the quiet current" heading="The flow has two parts, and only one of them does gravity.">
        <TPBody>
          Here's a subtlety that pays off later. The pond's flow near a throat
          can be split into two kinds: a part that spreads
          <em> outward or inward</em> (like water flowing straight toward a
          drain) and a part that swirls <em>around</em> it (like a whirlpool).
          The first part is the one the brane reads as gravity. The second
          part — the swirling — becomes important when we get to
          electromagnetism and to light.
        </TPBody>
        <TPBody>
          In the technical language, the first part is called
          <em> longitudinal</em> and the second is called
          <em> transverse</em>. A key result of the program is that, when you
          do the math carefully, the longitudinal part satisfies an exact
          bookkeeping identity, and in a controlled slow-motion regime that
          identity reduces to the Poisson equation Newton used for gravity.
          The force-law picture is a limit, not the starting point.
        </TPBody>
      </TPSection>

      <TPSection anchor="mass" eyebrow="what mass means here" heading="Mass is tied to source strength.">
        <TPBody>
          In ordinary physics, mass is one of those words everyone uses but
          nobody defines — it's just a number attached to a particle. In the
          fluid picture, the Newtonian mass of a throat branch is tied to its
          localized source strength: the density/source bookkeeping and the
          inflow data that the brane projection reads near the mouth.
        </TPBody>
        <TPBody>
          For the positive-mass throat branches used in the Newtonian and PN
          ladder, the effective source is sink-like, so the resulting
          longitudinal flow points inward. That is the branch this website is
          describing. It is not a theorem here about every mathematically
          possible exotic source one could write down.
        </TPBody>
      </TPSection>

      <TPSection anchor="caveats" eyebrow="honest caveats" heading="What this chapter does and doesn't claim.">
        <TPBody>
          The Fluid Spacetime program has a specific, computable version of
          this story. Under a carefully declared set of assumptions — slow
          motion, throats much smaller than the distances between them, and a
          stable background pond — the brane's projected flow equation
          becomes a Poisson equation for a potential that looks and acts like
          Newtonian gravity.
        </TPBody>
        <TPBody>
          It does <em>not</em> automatically give you full general relativity.
          The program climbs toward relativistic corrections one rung at a
          time through a ladder of post-Newtonian approximations
          (topic 10), and the climb is only partly closed. What we have is a
          principled answer to "why 1/<em>r</em>²" and why the modeled
          positive-mass branch is attractive, earned rather than imposed.
        </TPBody>

      </TPSection>

      <TPSection anchor="next" eyebrow="up next" heading="Coming up: the other behaviour of the same throat.">
        <TPBody>
          Gravity came from one throat channel — projected inflow. The next
          chapter is about the electromagnetic channel: puncture orientation,
          localized Maxwell fields, and the controlled brane limit. Same finite
          object, different brane-readable channel.
        </TPBody>
      </TPSection>
    </TopicPage>
  );
}
