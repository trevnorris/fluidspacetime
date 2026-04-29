import React from 'react';
import { TopicPage, TPTitle, TPLede, TPSection, TPBody, TPCallout } from '../../components/TopicPage.jsx';
import { MagnetismCirculationSim } from '../../components/MagnetismCirculationSim.jsx';

// Part II · Topic 06 — Electromagnetism: Charge & Circulation — PLAIN ENGLISH

export default function PlainEM() {
  const topic = {
    n: "06",
    part: "II",
    partName: "Applications",
    slug: "electromagnetism",
    title: "Electromagnetism: Charge & Circulation",
  };

  return (
    <TopicPage track="plain" topic={topic}>
      <section style={{ padding: "10px 0 40px" }}>
        <TPTitle>
          Electromagnetism has two different throat-side stories: charge is
          which way a throat{" "}
          <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "#e67ac6" }}>punctures</em>,
          while magnetism is circulation{" "}
          <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "#e67ac6" }}>around</em>{" "}
          it
        </TPTitle>
        <TPLede>
          A throat doesn't only drain fluid on the brane. It also opens,
          topologically, into <em>one side</em> of the hidden direction —
          either the +w half or the −w half. Which side it opens into is
          what the brane reads as the sign of electric charge. Magnetism is
          not that puncture sign; it belongs to circulation and the
          magnetic/vortical sector around the throat. The broader
          electromagnetic field behavior comes from the localized Maxwell
          sector: in the far-field, zero-mode brane limit, it gives the
          Maxwell equations we measure.
        </TPLede>
      </section>

      <TPSection anchor="firewall" eyebrow="charge and magnetism" heading="Two electromagnetic channels, not one">
        <TPBody>
          Before the details, keep the map simple. Electric charge and
          magnetic circulation both belong on the electromagnetism page, but
          they are not the same throat feature:
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
              The puncture channel. Its sign comes from which way the throat
              opens into the hidden direction, and its strength is the fixed
              charge unit carried by that branch.
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
              The swirl channel. It is fluid motion <em>around</em> the throat
              in the brane itself, and belongs to the magnetic or vortical
              side of the model.
            </div>
          </div>
        </div>

        <TPBody>
          The page keeps these channels separate. Electric charge does not
          come from the swirl, and magnetic circulation does not set the
          electric charge sign.
        </TPBody>
      </TPSection>

      <TPSection anchor="puncture" eyebrow="the puncture, not the drain" heading="A different way a throat can behave">
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

      </TPSection>

      <TPSection anchor="how-much" eyebrow="charge strength" heading="A bigger throat is not a bigger electric charge">
        <TPBody>
          Electric charge has two parts. The first is the sign: which way the
          puncture opens into the hidden direction. One orientation reads as
          positive; the opposite orientation reads as negative.
        </TPBody>
        <TPBody>
          The second is the strength: a puncture carries a fixed electric
          charge unit. Making the throat larger does not make it more
          electrically charged. Throat size belongs to other parts of the
          model, like mass and inflow. Charge comes from the puncture branch
          itself.
        </TPBody>
      </TPSection>

      <TPSection anchor="circulation" eyebrow="magnetic circulation" heading="Magnetism is the swirl channel, not the puncture sign">
        <TPBody>
          The magnetic side of the story is different from electric charge.
          Electric charge is the throat's orientation along the hidden
          direction. Magnetic circulation is fluid motion <em>around</em> the
          throat on the brane. The schematic below treats the picture as a
          top-down view of two side-by-side circulating defects, not as a pair
          of magnetic monopoles. Circulation around a throat is not enough, by
          itself, to determine the force between two throats. In the simplified
          current-like branch used here, same top-down circulation repels,
          while opposite top-down circulation attracts. The tracers also drift
          slowly inward so the objects read as throat defects taking in the
          superfluid, not as passive markers.
        </TPBody>

        <MagnetismCirculationSim />

        <TPCallout kind="note">
          <strong style={{ color: "var(--ink-1)" }}>What this is allowed to
          mean:</strong> this is a simplified picture of how circulation could
          create an attraction-or-repulsion tendency in this model. It is not
          claiming that swirl by itself automatically gives the full force law,
          and it is not a complete simulation of magnetized fluid dynamics. The
          moving dots show two things at once: they circle around each throat
          to show the magnetic/circulation channel, and they drift inward to
          show that each object is still a throat taking in fluid. The
          attraction and repulsion arrows show the simplified circulation rule
          used here; they are not computed from a full fluid simulation. The
          swirl toggle is not an electric charge switch. Electric charge sign
          remains the separate puncture-orientation branch.
        </TPCallout>
      </TPSection>

      <TPSection anchor="maxwell" eyebrow="from bulk gauge rules to Maxwell" heading="When Maxwell's equations appear">
        <TPBody>
          Our brane is like the surface of the ocean. We can describe what
          happens by watching the surface water: how it flows, ripples,
          circles, or gets pulled toward a whirlpool. The simplified equations
          are about that surface-readable motion. They are not trying to
          describe every detail of what the water does after it dives down into
          the whirlpool.
        </TPBody>
        <TPBody>
          Maxwell's equations are like the clean surface rules. If the
          disturbance stays readable on the ocean surface, and the deeper
          motion through the whirlpool is quiet enough not to dominate the
          surface pattern, then a surface observer can use familiar electric
          and magnetic laws: Coulomb's law, Ampere's law, Faraday's law, and
          the displacement current. If the disturbance dives strongly into the
          hidden direction, the simple surface law is no longer the whole
          story.
        </TPBody>
      </TPSection>

      <TPSection anchor="next" eyebrow="up next" heading="Coming up: when you have many charged and circulating throats">
        <TPBody>
          A single charged or circulating throat is instructive. A whole
          population of them — interacting with each other and with the
          ambient pond — is a plasma. The next chapter asks what the fluid
          picture says about many-body plasma physics, and where ordinary
          magnetohydrodynamics comes from and where it starts to deviate.
        </TPBody>

      </TPSection>
    </TopicPage>
  );
}
