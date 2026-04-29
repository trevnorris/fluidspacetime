import React from 'react';
import { TopicPage, TPTitle, TPLede, TPSection, TPBody, TPCallout } from '../../components/TopicPage.jsx';
import { Badge, Chip, EqCard, Tex } from '../../components/ui.jsx';
import { ZENODO } from '../../data/citations.js';

// Part II · Topic 11 — The Moving-Throat PDE — TECHNICAL

export default function TechnicalMovingThroat() {
  const topic = {
    n: "11",
    part: "II",
    partName: "Applications",
    slug: "moving-throat",
    title: "The Moving-Throat PDE",
  };

  return (
    <TopicPage track="technical" topic={topic}>
      <section style={{ padding: "10px 0 40px" }}>
        <TPTitle>
          A framework paper for <Tex tex="R(\Omega,w,t)" />,
          not a solved nonlinear throat theorem.
        </TPTitle>
        <TPLede>
          The current moving-throat paper is explicit about its status. It lifts
          the old collective variables <Tex tex="(a,L)" /> to a distributed
          moving surface, writes a linearized coupled wall/support/gauge problem,
          and isolates the observables any realized branch must compute. It does
          <em> not</em> claim a completed first-principles solution of the full
          nonlinear moving-throat PDE or a finished proof that the canonical
          passive/outgoing branch has already been realized.
        </TPLede>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 20 }}>
          <Badge kind="exact">Geometry lift as confinement argument</Badge>
          <Badge kind="reduce">Linearized wall/support/gauge system</Badge>
          <Badge kind="open">Branch realization</Badge>
          <Chip label="4D · Action" href={ZENODO.action.url} />
          <Chip label="4D · Maxwell" href={ZENODO.maxwell.url} />
          <Chip label="Prior · throat ontology" href={ZENODO.priorThroatOntology.url} />
        </div>
      </section>

      <TPSection
        anchor="lift"
        eyebrow="geometry lift"
        heading="The first framework move is to represent the throat as a moving surface"
      >
        <TPBody>
          The framework paper's starting point is the geometry lift
        </TPBody>

        <EqCard
          label="◇ geometry lift · confinement argument"
          plain="The old collective variables a(t) and L(t) survive only as collective moments of this distributed open interface."
          tex="\Sigma(\mathbf X,t) \;=\; r - R(\Omega,w,t)"
        />

        <TPBody>
          As a confinement argument, <Tex tex="\Sigma/R" /> belongs to the
          exact matter-sector bookkeeping. As an autonomous dynamical wall
          field, it remains an effective closure unless a throat action{" "}
          <Tex tex="S_\Sigma" /> is promoted into the parent action. The branch
          geometry used for realization tests is also open:{" "}
          <Tex tex="R_0(0)=a_0" /> and <Tex tex="R_0(L_0)>0" />, not a hard cap.
        </TPBody>
      </TPSection>

      <TPSection
        anchor="reduced"
        eyebrow="what the paper actually fixes"
        heading="The paper fixes a linearized coupled response language and the branch data it needs"
      >
        <TPBody>
          The moving-throat framework is best read as a map from a candidate
          stationary branch to the reduced data needed for later PN and anomaly
          tests:
        </TPBody>

        <EqCard
          label="◇ branch data set · operational input"
          plain="These are frozen branch data, not fit knobs. The paper is explicit that they are not yet supplied by a solved nonlinear theorem."
          tex="\begin{aligned} \mathfrak B \;=\; \big\{\ &\text{parent-action status},\ R_0,\ R_{\rm exit}>0, \\ &\text{wall/material data},\ \text{support spectrum}, \\ &\text{mixed/outgoing ports},\ \text{source normalization}\ \big\} \end{aligned}"
        />

        <TPBody>
          The framework then organizes those data into conservative operator
          moments, outgoing-transfer moments, and grouped isotropy diagnostics.
        </TPBody>
      </TPSection>

      <TPSection
        anchor="outputs"
        eyebrow="operational outputs"
        heading="The first two observables are the isotropic normalization test and the weak-axisymmetric slope"
      >
        <EqCard
          label="◇ first framework outputs"
          plain="These are the reader-facing observables singled out by the PDE program, in the stated source/port convention."
          tex="\hat m_0^{\,2} P_0 \;=\; \frac{54Gc_s^5}{5a^5c^5}, \qquad \Xi_1 \;=\; P_1/P_0"
        />

        <TPBody>
          On the isotropic branch, the first quantity is the outgoing
          quadrupole-normalization target. Around that branch,{" "}
          <Tex tex="\Xi_1" /> is the first weak-axisymmetric observable. That is
          the current paper's precise meaning of “what the PDE must compute”.
        </TPBody>
      </TPSection>

      <TPSection
        anchor="nonclaims"
        eyebrow="non-claims"
        heading="What the current paper explicitly refuses to claim"
      >
        <ul style={{ color: "var(--ink-2)", lineHeight: 1.8, paddingLeft: 24, fontSize: 15.5 }}>
          <li>No complete first-principles solution of the nonlinear moving-throat PDE.</li>
          <li>No autonomous parent-level wall PDE unless <Tex tex="S_\Sigma" /> is promoted and frozen.</li>
          <li>No proof that the passive/outgoing quadrupole branch is already realized on the true defect solution.</li>
          <li>No post-residual tuning of wall, material, source, or outgoing coefficients.</li>
          <li>No finished ring-down catalogue that can simply be compared to LIGO/LISA data today.</li>
        </ul>

        <TPCallout kind="note">
          Topic 11 should therefore be framed as a framework / reduced-system
          page. It should not read like a parent-complete wall action plus
          explicit nonlinear spectrum page.
        </TPCallout>
      </TPSection>

      <TPSection
        anchor="ledger"
        eyebrow="downstream use"
        heading="Why this still gates so much"
      >
        <TPBody>
          Once a real target-blind branch returns the frozen data in{" "}
          <Tex tex="\mathfrak B" />, the same output bundle feeds the 2.5PN /
          4PN normalization question, the anomaly package, and the mixed-sector
          finite-profile corrections elsewhere on the site. A stable branch can
          pass or fail those residuals; it is not repaired after the comparison.
        </TPBody>
      </TPSection>
    </TopicPage>
  );
}
