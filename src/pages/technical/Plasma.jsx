import React from 'react';
import { TopicPage, TPTitle, TPLede, TPSection, TPBody, TPCallout } from '../../components/TopicPage.jsx';
import { Badge, Chip, EqCard, Tex } from '../../components/ui.jsx';
import { ZENODO } from '../../data/citations.js';

// Part II · Topic 07 — Magnetism, Plasma and Beyond-MHD — TECHNICAL track

export default function TechnicalPlasma() {
  const topic = {
    n: "07",
    part: "II",
    partName: "Applications",
    slug: "plasma",
    title: "Magnetism, Plasma and Beyond-MHD",
  };

  return (
    <TopicPage track="technical" topic={topic}>
      <section style={{ padding: "10px 0 40px" }}>
        <TPTitle>
          Ideal MHD emerges on the brane; beyond-MHD ledgers live in
          transverse channels along{" "}
          <span className="fu-mono" style={{ fontSize: "0.68em", color: "#7aa2ff" }}>w</span>.
        </TPTitle>
        <TPLede>
          A multi-species charged medium is assembled from charged throats
          sourcing the 4+1 Maxwell sector of topic 06 and advected by the
          ambient fluid. With zero-mode Maxwell, negligible transverse current,
          quasi-neutral two-fluid ordering, and electron-inertia suppression,
          the brane recovers standard ideal MHD. The beyond-MHD content is not
          a replacement for Hall, pressure, inertia, or collisional closures;
          it is the additional topology EMF, leakage, and mixed-sector ledger
          exposed when the suppressed 4D channels are retained.
        </TPLede>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 20 }}>
          <Badge kind="reduce">Ideal MHD on Σ</Badge>
          <Badge kind="open">Projection stress / topology stress</Badge>
          <Badge kind="open">Reconnection energy budget</Badge>
          <Chip label="sector: gauge + matter" />
          <Chip label="4D · Plasma / MHD" href={ZENODO.plasma.url} />
        </div>
      </section>

      <TPSection
        anchor="species"
        eyebrow="multi-species setup"
        heading="A brane plasma is a collection of charged throats advected by the ambient fluid."
      >
        <TPBody>
          Label species by <Tex tex="s" /> with charge sign <Tex tex="\eta_s" />,
          brane density <Tex tex="n_s(x,t)" />, and bulk velocity{" "}
          <Tex tex="\mathbf{u}_s(x,t)" />. Each species contributes to the
          brane-level charge and current densities
        </TPBody>

        <EqCard
          label="◇ brane sources · Part II Eq. 7.1"
          plain="q_eff,s = q_*,s / √Z_int as in topic 06. η_s is embedded in the sign of q_*,s."
          tex="\begin{aligned} \rho_q(x,t) &\;=\; \sum_s q_{\text{eff},s}\, n_s, \\ \mathbf{J}(x,t) &\;=\; \sum_s q_{\text{eff},s}\, n_s\, \mathbf{u}_s \end{aligned}"
        />

        <TPBody>
          Each species satisfies a projected continuity equation (topic 05)
          with its own leakage source <Tex tex="\widehat{J^w}_s" />, and is
          subject to the Lorentz-like force from the reduced brane fields{" "}
          <Tex tex="\mathbf{E}, \mathbf{B}" />.
        </TPBody>
      </TPSection>

      <TPSection
        anchor="ideal"
        eyebrow="ideal MHD limit · controlled reduction"
        heading="Frozen-in flux emerges when the leakage channel is quiet."
      >
        <TPBody>
          Collapse the two-species plasma to a single-fluid description by
          defining the mass-weighted velocity <Tex tex="\mathbf{V}" /> and
          the relative drift <Tex tex="\mathbf{J}/(n q)" />. Under the
          assumptions
        </TPBody>

        <ul style={{ color: "var(--ink-2)", lineHeight: 1.8, paddingLeft: 24, fontSize: 16 }}>
          <li>the projected species leakages are negligible at the measurement scale:{" "}
            <Tex tex="\mathcal{S}_{\mathrm{leak}}^{(s)} \approx 0" />,</li>
          <li>mixed-sector fields are small:{" "}
            <Tex tex="F_{\mu w}\approx 0,\; J^w\approx 0" />,</li>
          <li>frequencies are well below the transverse-mode gap set by <Tex tex="Z(w)" /> and the first{" "}
            <Tex tex="f_{k \geq 1}" /> mode,</li>
          <li>the usual two-fluid-to-MHD ordering holds: quasi-neutrality, electron-inertia
            suppression, and optional low-frequency Ampere closure,</li>
        </ul>

        <TPBody>
          the reduced brane equations are ideal MHD:
        </TPBody>

        <EqCard
          label="◇ ideal MHD · Part II Eq. 7.2"
          plain="Flux-freezing and the MHD momentum equation. All standard Maxwell constraints follow from the reduction of topic 06."
          tex="\begin{aligned} \partial_t \mathbf{B} &\;=\; \nabla \times (\mathbf{V} \times \mathbf{B}), \\ \rho\, \big(\partial_t + \mathbf{V}\cdot\nabla\big)\mathbf{V} &\;=\; -\nabla p \;+\; \mathbf{J} \times \mathbf{B} \end{aligned}"
        />
      </TPSection>

      <TPSection
        anchor="non-ideal"
        eyebrow="non-ideal corrections · open"
        heading="Standard closures stay standard; 4D adds a diagnostic topology EMF."
      >
        <TPBody>
          When the ideal-MHD assumptions fail, the familiar extended-MHD terms
          still arise in the usual way from two-fluid algebra and chosen
          closures. The new claim is narrower and more useful: the parent 4D
          model adds explicit, computable terms from projection covariance,
          mixed fields, transverse current, and mode storage:
        </TPBody>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))", gap: 14, margin: "14px 0" }}>
          {[
            { mhd: "Collisional resistivity η", channel: "A standard drag closure R_e. The 4D ledger separates true heating from energy/topology export into transverse channels." },
            { mhd: "Hall drift",                channel: "The usual J × B/(en) term from electron-ion drift. Projection adds covariance residuals when drift and fields vary across w." },
            { mhd: "Electron inertia",          channel: "A chosen brane closure I_e plus a projection residual E_I; higher transverse modes can carry the unresolved part." },
            { mhd: "Pressure / anisotropy",     channel: "Standard pressure closures plus E_p residuals from projecting ratios and gradients through W(w)." },
            { mhd: "Mixed-sector EMF",          channel: "The direct 4D topology-EMF term -overline(v_e^w C), with C_a = F_aw, absent in strict 3+1 Maxwell." },
            { mhd: "Leakage and mode storage",  channel: "Projected sources S_leak^(s), J^w E_w work, mixed-field energy, and n ≥ 1 mode energy track conservative export." },
          ].map((c) => (
            <div key={c.mhd} style={{
              padding: "18px 20px",
              border: "1px solid var(--rule)", borderRadius: 3,
              background: "rgba(16,20,42,0.45)",
            }}>
              <div className="fu-display" style={{ fontSize: 15, color: "var(--ink-1)", fontWeight: 400, marginBottom: 6 }}>
                {c.mhd}
              </div>
              <div className="fu-small" style={{ color: "var(--ink-3)", fontSize: 15, lineHeight: 1.55 }}>
                {c.channel}
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
          <Badge kind="reduce">Identification of channels</Badge>
          <Badge kind="open">Quantitative coefficients</Badge>
        </div>
      </TPSection>

      <TPSection
        anchor="stress"
        eyebrow="projection stress · open"
        heading="An uncompleted term in the brane stress tensor."
      >
        <TPBody>
          The exact projection of a bulk equation onto{" "}
          <Tex tex="\Sigma" /> generally contains residual terms because
          projection does not commute with products, ratios, nonlinear
          closures, or unresolved <Tex tex="w" />-structure. These terms vanish
          in the strict controlled limit, but away from that limit they act as
          brane-facing non-ideal sources:
        </TPBody>

        <EqCard
          label="◇ projection stress · open closure"
          plain="Θ is the projection/topology residual. It is explicit in projected identities, but a closed stress-tensor form for a realistic throat ensemble is open."
          tex="\widehat{T}_{\mu\nu}^{\text{proj}} \;=\; \int W(w)\, T^{\text{bulk}}_{\mu\nu}\, dw \;+\; \Theta_{\mu\nu}\!\big[W, \mathrm{Cov}_W, J^w, F_{\mu w}\big]"
        />

        <TPBody>
          In the plasma paper this same bookkeeping appears most explicitly as
          the topology EMF:
          <Tex tex="\mathcal{E}_{\rm topo}=\mathcal{E}_{\rm cov}+\mathcal{E}_w+\mathcal{E}_{\rm proj}" />.
          A closed topology-stress form for realistic throat ensembles is
          still queued against the moving-throat PDE.
        </TPBody>
      </TPSection>

      <TPSection
        anchor="reconnection"
        eyebrow="reconnection · hypothesis"
        heading="A geometric candidate for fast reconnection."
      >
        <TPBody>
          In ideal MHD the magnetic flux of topic 06's zero-mode is frozen
          into <Tex tex="\mathbf{V}" />. Observed reconnection events
          transport energy from field to fluid at rates that ideal MHD
          structurally cannot supply. The program's working hypothesis:
        </TPBody>

        <TPCallout kind="note">
          <strong style={{ color: "var(--ink-1)" }}>Hypothesis.</strong>{" "}
          The observed sudden rearrangement is the brane's projection of a
          smoother bulk reconfiguration in which mixed-sector fields{" "}
          <Tex tex="(A_w, F_{\mu w}, E_w, C_a)" />, transverse current{" "}
          <Tex tex="J^w" />, and higher modes transport energy and helicity
          between nearby throat neighborhoods. The event should correlate with
          the localization scale, mode spectrum, and topology-EMF diagnostics,
          but no universal rate law has been derived.
        </TPCallout>

        <TPBody>
          This hypothesis is testable in simulations through correlations
          between reconnection proxies and hidden-channel activity:{" "}
          <Tex tex="J^wE_w" /> work, mixed-field energy, mode-energy growth, and
          leakage measures. It has not yet been quantitatively derived from the
          moving-throat PDE, and is flagged as open in the results ledger.
        </TPBody>
      </TPSection>

      <TPSection anchor="next" eyebrow="forward reference" heading="What uses this.">
        <TPBody>
          The wave-propagation chapter (topic 08) inherits the same
          zero-mode / higher-mode structure and uses it to discuss controlled
          dispersion corrections. The PN ladder (topic 10) reuses the same
          outgoing-channel bookkeeping with its own normalization gates. The
          moving-throat PDE (topic 11) is what would turn the hypothetical
          channels listed here into concrete coefficients.
        </TPBody>
      </TPSection>
    </TopicPage>
  );
}
