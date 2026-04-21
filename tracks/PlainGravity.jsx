/* global React, TopicPage, TPTitle, TPLede, TPSection, TPBody, TPCallout, TrackToggle */
// Part II · Topic 05 — Gravity as Inflow — PLAIN ENGLISH

function PlainGravity() {
  const topic = {
    n: "05",
    part: "II",
    partName: "Applications",
    slug: "gravity",
    title: "Gravity as Inflow",
    prev: { title: "04 · Throats — Defects That Connect" },
    next: { title: "06 · Electromagnetism as Puncture" },
  };

  return (
    <TopicPage track="plain" topic={topic}>
      <section style={{ padding: "10px 0 40px" }}>
        <TPTitle>
          Gravity isn't a force reaching across space. It's the pond
          <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "#e67ac6" }}>
            {" "}noticing{" "}
          </em>
          that something is draining it.
        </TPTitle>
        <TPLede>
          We have throats, and throats drink fluid from the bulk. This chapter
          is the claim that the <em>drinking</em> is what we experience as
          gravity — not as a mysterious pull across distance, but as a shift
          in the pond's flow pattern that every other throat can feel.
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
          Our pond has drains too — throats. Each throat lets fluid seep down
          into the hidden direction. That draining sets up a gentle, steady
          flow in the surrounding pond, all pointing inward. Another throat
          sitting nearby is itself made of the pond; it drifts with the local
          current. We call that drift <em>gravitational attraction</em>.
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
          do the math carefully, the longitudinal part of the brane's flow
          obeys exactly the equation Newton wrote down for his gravitational
          potential — but it comes from fluid accounting, not from a force
          postulate.
        </TPBody>
      </TPSection>

      <TPSection anchor="mass" eyebrow="what mass actually is" heading="Mass is how much the pond gets depleted.">
        <TPBody>
          In ordinary physics, mass is one of those words everyone uses but
          nobody defines — it's just a number attached to a particle. In the
          fluid picture, it's concrete: <strong style={{ color: "var(--ink-1)" }}>
          the mass of a throat is how much fluid is missing from its vicinity
          compared to undisturbed pond</strong>. More depletion, more mass.
        </TPBody>
        <TPBody>
          This also explains why mass is always positive. You can't have
          <em> less</em> than no density. The pond can be undisturbed or
          depleted, never overfull beyond its natural level in the throat's
          neighbourhood. So every throat gravitates the same way — inward.
          There's no anti-gravity in this picture, because there's no
          anti-drain.
        </TPBody>
      </TPSection>

      <TPSection anchor="caveats" eyebrow="honest caveats" heading="What this chapter does and doesn't claim.">
        <TPBody>
          The Fluid Universe program has a specific, computable version of
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
          (topic 10), and the climb is not finished. What we have is a
          principled answer to "why 1/<em>r</em>² and why always attractive,"
          earned rather than imposed.
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
            Projected continuity with a leakage source, Helmholtz split, and the Poisson hook.
          </span>
          <TrackToggle track="plain" size="sm" />
        </div>
      </TPSection>

      <TPSection anchor="next" eyebrow="up next" heading="Coming up: the other behaviour of the same throat.">
        <TPBody>
          Gravity came from one of the two things a throat does — drinking.
          The next chapter is about the other — puncturing through. That
          behaviour is what the brane reads as electromagnetism. Same
          object, same geometry, different channel of the pond responding.
        </TPBody>
      </TPSection>
    </TopicPage>
  );
}

Object.assign(window, { PlainGravity });
