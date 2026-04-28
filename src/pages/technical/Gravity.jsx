import React from 'react';
import { TopicPage, TPTitle, TPLede, TPSection, TPBody, TPCallout } from '../../components/TopicPage.jsx';
import { Badge, Chip, EqCard, Tex } from '../../components/ui.jsx';
import { ZENODO } from '../../data/citations.js';

// Part II · Topic 05 — Gravity as Brane-Inflow — TECHNICAL track

export default function TechnicalGravity() {
  const topic = {
    n: "05",
    part: "II",
    partName: "Applications",
    slug: "gravity",
    title: "Gravity as Brane-Inflow",
  };

  return (
    <TopicPage track="technical" topic={topic}>
      <section style={{ padding: "10px 0 40px" }}>
        <TPTitle>
          The Poisson hook: an exact projected identity plus a controlled
          Newtonian regime.
        </TPTitle>
        <TPLede>
          The current 4D paper does not postulate Newton's law. It derives an
          exact projected continuity equation with leakage, then an exact
          longitudinal identity for the brane velocity potential. A Poisson
          equation and inverse-square scaling emerge only after clearly stated
          quasi-static and weak-correction assumptions.
        </TPLede>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 20 }}>
          <Badge kind="exact">Projected continuity + leakage</Badge>
          <Badge kind="exact">Longitudinal identity</Badge>
          <Badge kind="reduce">Poisson regime</Badge>
          <Chip label="sector: gravity" />
          <Chip label="4D · Action & Projections" href={ZENODO.action.url} />
          <Chip label="4D · 1PN bridge" href={ZENODO.bridge.url} />
        </div>
      </section>

      <TPSection
        anchor="continuity"
        eyebrow="exact projected continuity"
        heading="Projection introduces a leakage source; it does not close to a 3D fluid automatically."
      >
        <TPBody>
          Given a normalized projection kernel <Tex tex="W(w)" />, the paper
          defines projected brane density and flux and derives the exact
          projected continuity identity
        </TPBody>

        <EqCard
          label="◇ projected continuity · exact"
          plain="Exact projected continuity with the full leakage source."
          tex="\begin{aligned} \partial_t \rho_{\rm brane} \;+\; \nabla_3\!\cdot\!\mathbf j_{\rm brane} &\;=\; S_{\rm leak}, \\ S_{\rm leak} &\;=\; -\big[W\,j^w\big]_{-\infty}^{+\infty} + \int_{-\infty}^{+\infty} W'(w)\,j^w\,dw \end{aligned}"
        />

        <TPBody>
          This is the paper's first gravity-side firewall: the brane does not
          inherit a closed 3D fluid theory for free. Leakage and correction
          terms are intrinsic to the projected observables.
        </TPBody>
      </TPSection>

      <TPSection
        anchor="helmholtz"
        eyebrow="Helmholtz split"
        heading="The Poisson hook starts as an exact identity for the brane velocity potential."
      >
        <TPBody>
          Where <Tex tex="\rho_{\rm brane} > 0" />, define the brane velocity
          by <Tex tex="\mathbf v_{\rm brane} = \mathbf j_{\rm brane}/\rho_{\rm brane}" />
          and decompose it as
        </TPBody>

        <EqCard
          label="◇ Helmholtz decomposition · exact"
          plain="The Poisson hook is built from the brane velocity potential ϕ, not from the parent matter field."
          tex="\begin{aligned} \mathbf v_{\rm brane} &\;=\; \nabla_3 \varphi \;+\; \mathbf v_T, \\ \nabla_3\!\cdot\!\mathbf v_T &\;=\; 0 \end{aligned}"
        />

        <TPBody>
          Substituting this split into projected continuity yields the exact
          longitudinal identity
        </TPBody>

        <EqCard
          label="◇ longitudinal identity · exact"
          plain="This is exact. A Poisson equation follows only after a controlled regime reduction."
          tex="\rho_{\rm brane}\,\nabla_3^2\varphi \;=\; S_{\rm leak} - \partial_t \rho_{\rm brane} - \nabla_3 \rho_{\rm brane}\!\cdot\!(\nabla_3\varphi + \mathbf v_T)"
        />
      </TPSection>

      <TPSection
        anchor="quasi-static"
        eyebrow="Poisson regime · controlled"
        heading="Newtonian behaviour appears when the explicit correction terms are parametrically small."
      >
        <TPBody>
          In the quasi-static, longitudinal-dominant regime with slowly varying
          <Tex tex="\rho_{\rm brane}" />, the right-hand correction terms are
          suppressed and one gets the standard Poisson form
        </TPBody>

        <EqCard
          label="◇ Poisson hook · regime statement"
          plain="Poisson and inverse-square are controlled regime statements, not exact laws."
          tex="\begin{aligned} \nabla_3^2 \varphi &\;\approx\; \frac{1}{\rho_{\rm ref}}\,S_{\rm eff}(\mathbf x,t), \\ \mathbf v_L \;\equiv\; \nabla_3\varphi &\;\sim\; \frac{1}{r^2}\,\hat{\mathbf r} \end{aligned}"
        />

        <TPCallout kind="note">
          <strong style={{ color: "var(--ink-1)" }}>Interpretational boundary.</strong>{" "}
          The paper derives inverse-square scaling for the longitudinal brane
          velocity field. Turning that into a force law for test bodies is part
          of the downstream closure hierarchy, not part of the exact identity
          itself.
        </TPCallout>
      </TPSection>

      <TPSection
        anchor="throat-source"
        eyebrow="localized source regime"
        heading="A throat enters the Newtonian limit through a localized effective source."
      >
        <TPBody>
          In the localized-source regime one writes
        </TPBody>

        <EqCard
          label="◇ localized source schematic"
          plain="Localized effective source in the Newtonian regime."
          tex="S_{\rm eff}(\mathbf x) \;\approx\; \mathcal S\,\delta^{(3)}(\mathbf x - \mathbf x_0)"
        />

        <TPBody>
          The carry-forward coefficient package used downstream is
          <Tex tex="\kappa_\rho = 1" />, <Tex tex="\kappa_{\rm add} = 1/2" />,
          <Tex tex="\kappa_{\rm PV} = 3/2" />, and <Tex tex="\beta_{1{\rm PN}} = 3" />.
          These are derived within the declared hierarchy; they are not tuning
          knobs attached ad hoc to the Newtonian limit.
        </TPBody>
      </TPSection>

      <TPSection
        anchor="scope"
        eyebrow="scope · what this actually supports"
        heading="The Poisson hook is the first rung of the PN story, not the whole ladder."
      >
        <TPBody>
          The current source record supports the following reading:
        </TPBody>

        <ul style={{ color: "var(--ink-2)", lineHeight: 1.8, paddingLeft: 24, fontSize: 16 }}>
          <li><strong>Newtonian regime:</strong> exact projection identities plus a controlled Poisson reduction.</li>
          <li><strong>1PN / 2PN / 3PN:</strong> full conservative sectors derived within one declared closure hierarchy.</li>
          <li><strong>2.5PN / 4PN:</strong> conditional on the shared passive/outgoing quadrupole normalization.</li>
          <li><strong>Moving-throat frontier:</strong> the remaining theorem gap is branch realization, not another round of local Newtonian algebra.</li>
        </ul>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
          <Badge kind="exact">Projection identities</Badge>
          <Badge kind="reduce">Newtonian regime</Badge>
          <Badge kind="open">Shared quadrupole-normalization gate</Badge>
        </div>
      </TPSection>

      <TPSection anchor="next" eyebrow="forward reference" heading="What uses this.">
        <TPBody>
          Topic 10 takes the Newtonian hook and climbs the declared PN ladder.
          Topic 06 gives the analogous controlled brane reduction for
          electromagnetism. Topic 11 is where the remaining outgoing
          normalization question is meant to be settled.
        </TPBody>
      </TPSection>
    </TopicPage>
  );
}
