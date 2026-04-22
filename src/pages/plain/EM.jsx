import React from 'react';
import { TopicPage, TPTitle, TPLede, TPSection, TPBody, TPCallout } from '../../components/TopicPage.jsx';

// Part II · Topic 06 — Electromagnetism as Puncture — PLAIN ENGLISH

export default function PlainEM() {
  const topic = {
    n: "06",
    part: "II",
    partName: "Applications",
    slug: "electromagnetism",
    title: "Electromagnetism as Puncture",
  };

  return (
    <TopicPage track="plain" topic={topic}>
      <section style={{ padding: "10px 0 40px" }}>
        <TPTitle>
          If gravity is how the pond{" "}
          <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "#e67ac6" }}>drains</em>,
          electromagnetism is how it{" "}
          <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "#e67ac6" }}>punctures</em> through.
        </TPTitle>
        <TPLede>
          A throat doesn't only drain fluid on the brane. It also opens,
          topologically, into <em>one side</em> of the hidden direction —
          either the +w half or the −w half. Which side it opens into is
          what the brane reads as the sign of electric charge. And because
          the pond is the same pond, the rules governing those punctures
          end up looking exactly like Maxwell's equations.
        </TPLede>
      </section>

      <TPSection anchor="puncture" eyebrow="the puncture, not the drain" heading="A different way a throat can behave.">
        <TPBody>
          Picture the hidden direction as a two-sided axis: there's a +w
          half above the brane and a −w half below. A plain gravitational
          throat drains locally without preference — it's symmetric about
          the brane, opening equally to both sides. A <em>charged</em> throat
          is different. It punctures through the brane and opens into one
          side in particular. Either the +w half, or the −w half. Never
          neither. Never a little of both.
        </TPBody>
        <TPBody>
          That's a topological choice, and a topological choice has no
          middle ground. The brane reads the two options as{" "}
          <strong style={{ color: "var(--ink-1)" }}>positive and negative
          charge</strong>. Anti-particles, in this picture, are throats
          that opened into the opposite half of the hidden direction from
          their particle counterparts.
        </TPBody>

        <TPCallout kind="note">
          <strong style={{ color: "var(--ink-1)" }}>Electric sign is
          topological.</strong> It isn't "how much" charge — it's which
          half of the hidden direction the throat opens into. The{" "}
          <em>amount</em> of charge we measure, on the other hand, depends
          on how thin the brane is. Two separate numbers, two separate
          stories.
        </TPCallout>
      </TPSection>

      <TPSection anchor="how-much" eyebrow="how much charge?" heading="Thickness sets the strength; sign sets the direction.">
        <TPBody>
          The brane isn't infinitely thin. It has a little thickness along
          the hidden direction — a kind of blurring profile that determines
          how much of the bulk's activity we actually feel. A thicker brane
          samples deeper into the puncture's field and reads a larger
          charge. A thinner brane reads less.
        </TPBody>
        <TPBody>
          So the <em>observable</em> electric charge we measure in experiments
          isn't the raw puncture coupling of the throat. It's the puncture
          <em> as sampled through our brane's thickness</em>. This factor shows up over and
          over in the technical notation as a simple denominator attached to
          the charge: the thinner the brane relative to the throat, the
          weaker the apparent coupling. In particular, the observable charge
          scales with the brane's thickness in a very specific, predictable
          way.
        </TPBody>
      </TPSection>

      <TPSection anchor="maxwell" eyebrow="from pond rules to Maxwell" heading="Why Maxwell's equations fall out.">
        <TPBody>
          This is where it gets unreasonable. If you start with a simple
          higher-dimensional rulebook for how the pond's gauge field behaves
          — essentially the same kind of rule that applies to any flexible
          medium that stores energy in its distortions — and then ask what a
          brane observer would measure, the answer is not "something
          vaguely like Maxwell's equations." The answer is Maxwell's
          equations. Coulomb's law, Ampere's law, Faraday's law, the
          displacement current — all of them, in their standard 3D form,
          emerge from the brane's view of the bulk gauge sector, sourced by
          the punctures.
        </TPBody>
        <TPBody>
          The work is in showing that the emergence is clean. Under the same
          kind of controlled-reduction assumptions we saw for gravity — the
          brane is thin enough, the fields vary slowly compared to some
          reference scale — the bulk's rules, projected down, match Maxwell's.
          This is not a coincidence; it's a structural feature of how any
          gauge-like field theory on a higher-dimensional background reduces
          to its lower-dimensional observable sector.
        </TPBody>
      </TPSection>

      <TPSection anchor="firewall" eyebrow="the charge firewall" heading="One thing that is easy to get confused about.">
        <TPBody>
          The fluid picture has two quite different things that both
          <em> could</em> be called "charge" if you're not careful. They
          are not the same. One lives along the hidden direction, the
          other lives entirely on the brane:
        </TPBody>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))", gap: 16, margin: "18px 0 14px", maxWidth: 820 }}>
          <div style={{
            padding: "22px 24px",
            border: "1px solid #e67ac655",
            borderRadius: 3,
            background: "linear-gradient(160deg, rgba(230,122,198,0.08), rgba(16,20,42,0.5))",
          }}>
            <div className="fu-mono fu-small" style={{ color: "#e67ac6", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 8, fontSize: 10.5 }}>
              electric charge
            </div>
            <div className="fu-body" style={{ fontSize: 15.5, color: "var(--ink-1)", lineHeight: 1.65 }}>
              A topological puncture <em>along the hidden direction</em>.
              Two options: opens into +w, or opens into −w. Sign, not
              magnitude.
            </div>
          </div>

          <div style={{
            padding: "22px 24px",
            border: "1px solid #7aa2ff55",
            borderRadius: 3,
            background: "linear-gradient(160deg, rgba(122,162,255,0.08), rgba(16,20,42,0.5))",
          }}>
            <div className="fu-mono fu-small" style={{ color: "#7aa2ff", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 8, fontSize: 10.5 }}>
              circulation (magnetic)
            </div>
            <div className="fu-body" style={{ fontSize: 15.5, color: "var(--ink-1)", lineHeight: 1.65 }}>
              The fluid actually moving in a loop <em>around</em> the throat
              in the brane itself. An integer number of turns. Gives magnetic
              moments and spin-like effects.
            </div>
          </div>
        </div>

        <TPBody>
          These are distinct channels. A throat can carry charge without
          circulation, or circulation without charge, or both. In earlier
          drafts of the program these two were sometimes written with the
          same letter <em>q</em>; the current, corrected vocabulary keeps them
          strictly apart.
        </TPBody>
      </TPSection>

      <TPSection anchor="next" eyebrow="up next" heading="Coming up: when you have many charged throats.">
        <TPBody>
          A single charged throat is instructive. A whole population of them
          — interacting with each other and with the ambient pond — is a
          plasma. The next chapter asks what the fluid picture says about
          plasma physics, and where ordinary magnetohydrodynamics comes from
          and where it starts to deviate.
        </TPBody>

      </TPSection>
    </TopicPage>
  );
}
