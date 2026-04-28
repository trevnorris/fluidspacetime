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
          the model includes a localized Maxwell sector, the far-field,
          zero-mode brane limit gives the Maxwell equations we measure.
        </TPLede>
      </section>

      <TPSection anchor="puncture" eyebrow="the puncture, not the drain" heading="A different way a throat can behave.">
        <TPBody>
          Picture the hidden direction as a two-sided axis: there's a +w
          half above the brane and a −w half below. A plain gravitational
          throat drains locally without using the electric charge branch. A{" "}
          <em>charged</em> throat is different. It carries an orientation
          label tied to the puncture branch: either the +w half, or the −w
          half, once a sign convention is fixed.
        </TPBody>
        <TPBody>
          That's a topological choice, and a topological choice has no
          middle ground. The brane reads the two options as{" "}
          <strong style={{ color: "var(--ink-1)" }}>positive and negative
          charge sign</strong>. In this picture, an opposite-charge partner is
          represented by the opposite orientation branch.
        </TPBody>

        <TPCallout kind="note">
          <strong style={{ color: "var(--ink-1)" }}>Electric sign is
          topological.</strong> It isn't "how much" charge — it's which
          half of the hidden direction the throat opens into. The{" "}
          <em>amount</em> of charge we measure, on the other hand, depends on
          the localization normalization of the brane gauge mode. Two separate
          numbers, two separate stories.
        </TPCallout>
      </TPSection>

      <TPSection anchor="how-much" eyebrow="how much charge?" heading="Thickness sets the strength; sign sets the direction.">
        <TPBody>
          The brane isn't infinitely thin. It has a little thickness along
          the hidden direction — a localization profile that determines how
          the zero-mode gauge field is normalized on the brane. For the
          Gaussian profile used in the source paper, a thicker localization
          gives a larger normalization integral, so the brane-observed charge
          coupling is weaker.
        </TPBody>
        <TPBody>
          So the <em>observable</em> electric charge we measure in experiments
          isn't the raw puncture coupling of the throat. It's the puncture
          <em> as sampled through our brane's thickness</em>. This factor shows up over and
          over in the technical notation as a simple denominator attached to
          the charge: q_eff is the microscopic branch charge divided
          by the square root of the localization integral. In particular, the
          observable coupling scales with localization thickness in a specific
          way.
        </TPBody>
      </TPSection>

      <TPSection anchor="maxwell" eyebrow="from bulk gauge rules to Maxwell" heading="When Maxwell's equations appear.">
        <TPBody>
          The model starts this sector with a localized 4+1 Maxwell field. If
          the brane-facing gauge field is dominated by its zero mode, and if
          transverse current is negligible, then a brane observer sees the
          ordinary 3+1 Maxwell equations with a rescaled coupling. Coulomb's
          law, Ampere's law, Faraday's law, and the displacement current are
          the far-field brane limit of that localized gauge sector.
        </TPBody>
        <TPBody>
          The work is in showing that the emergence is clean. Under the same
          kind of controlled-reduction assumptions we saw for gravity — the
          brane is thin enough, the fields vary slowly compared to some
          reference scale, and mixed w-channels are suppressed — the bulk
          gauge rules reduce to Maxwell's equations on the brane. Outside that
          regime, the same source record keeps the higher modes and mixed
          channels as real microscopic structure.
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
              A branch sign tied to puncture orientation{" "}
              <em>along the hidden direction</em>. Two options: opens into +w,
              or opens into −w. Sign, not
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
              in the brane itself. An integer number of turns. This belongs to
              the magnetic or vortical sector; spin-like structure is a later
              mixed-sector question.
            </div>
          </div>
        </div>

        <TPBody>
          These are distinct channels. The current vocabulary does not let you
          infer electric charge from circulation, or circulation from electric
          charge. In earlier drafts of the program these two were sometimes
          written with the same letter <em>q</em>; the current, corrected
          vocabulary keeps them strictly apart.
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
