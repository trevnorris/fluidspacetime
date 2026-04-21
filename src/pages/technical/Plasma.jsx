import React from 'react';
import { TopicPage, TPTitle, TPLede, TPSection, TPBody, TPCallout } from '../../components/TopicPage.jsx';
import { Badge, Chip, EqCard, Tex } from '../../components/ui.jsx';
import { ZENODO } from '../../data/citations.js';

// Part II · Topic 07 — Plasma and Beyond-MHD — TECHNICAL track

export default function TechnicalPlasma() {
  const topic = {
    n: "07",
    part: "II",
    partName: "Applications",
    slug: "plasma",
    title: "Plasma and Beyond-MHD",
  };

  return (
    <TopicPage track="technical" topic={topic}>
      <section style={{ padding: "10px 0 40px" }}>
        <TPTitle>
          Ideal MHD emerges on the brane; non-ideal corrections localize in
          suppressed channels along{" "}
          <span className="fu-mono" style={{ fontSize: "0.68em", color: "#7aa2ff" }}>w</span>.
        </TPTitle>
        <TPLede>
          A multi-species charged medium is assembled from charged throats
          sourcing the 4+1 Maxwell sector of topic 06 and advected by the
          ambient fluid. Under the same zero-mode reduction, the brane sees
          standard ideal MHD. Observed non-ideality — resistivity, Hall
          terms, reconnection energetics — is identified with suppressed
          mixed-sector channels rather than added as ad-hoc brane operators.
        </TPLede>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 20 }}>
          <Badge status="reduction" label="Ideal MHD on Σ" />
          <Badge status="open" label="Projection stress / topology stress" />
          <Badge status="open" label="Reconnection energy budget" />
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
          eyebrow="brane sources · Part II Eq. 7.1"
          tex="\rho_q(x,t) \;=\; \sum_s q_{\text{eff},s}\, n_s, \qquad \mathbf{J}(x,t) \;=\; \sum_s q_{\text{eff},s}\, n_s\, \mathbf{u}_s"
          note="q_eff,s = q_*,s / √Z_int as in topic 06. η_s is embedded in the sign of q_*,s."
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
          <li>the species leakages cancel:{" "}
            <Tex tex="\sum_s q_{\text{eff},s}\, \widehat{J^w}_s \approx 0" />,</li>
          <li>mixed-sector fields are small:{" "}
            <Tex tex="|E_w|, |A_w| \ll |\mathbf{E}|, |\mathbf{A}|" />,</li>
          <li>frequencies are well below the <Tex tex="Z(w)" />-gap to the first{" "}
            <Tex tex="f_{k \geq 1}" /> mode,</li>
        </ul>

        <TPBody>
          the reduced brane equations are ideal MHD:
        </TPBody>

        <EqCard
          eyebrow="ideal MHD · Part II Eq. 7.2"
          tex="\partial_t \mathbf{B} \;=\; \nabla \times (\mathbf{V} \times \mathbf{B}), \qquad \rho\, \big(\partial_t + \mathbf{V}\cdot\nabla\big)\mathbf{V} \;=\; -\nabla p \;+\; \mathbf{J} \times \mathbf{B}"
          note="Flux-freezing and the MHD momentum equation. All standard Maxwell constraints follow from the reduction of topic 06."
        />
      </TPSection>

      <TPSection
        anchor="non-ideal"
        eyebrow="non-ideal corrections · open"
        heading="Every bullet of textbook non-ideality has a mixed-channel representative."
      >
        <TPBody>
          When the three ideal-MHD assumptions fail, specific mixed channels
          of topic 06 re-excite. The program's claim is that the familiar
          non-ideal terms correspond one-to-one with contributions from these
          channels, not with new brane operators:
        </TPBody>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, margin: "14px 0" }}>
          {[
            { mhd: "Resistivity η",       channel: "Finite-Z correction to the zero-mode effective coupling; dissipation of f_k modes into the bulk." },
            { mhd: "Hall term",           channel: "Species-split leakage J^w_s — unequal drainage of positives and negatives into the bulk reservoir." },
            { mhd: "Electron inertia",    channel: "Higher-mode contribution f_{k=1} excited by rapid field variation; carries its own mass gap." },
            { mhd: "Anisotropic pressure",channel: "Throat-stress components from the distributed wall R(Ω,w,t) of topic 11." },
            { mhd: "Bohm / quantum drift",channel: "δρ_⊥ — non-zero-mode density fluctuations in the matter field." },
            { mhd: "Reconnection energy", channel: "Bulk-level topology change whose brane shadow is the abrupt event (see below)." },
          ].map((c) => (
            <div key={c.mhd} style={{
              padding: "18px 20px",
              border: "1px solid var(--rule)", borderRadius: 3,
              background: "rgba(16,20,42,0.45)",
            }}>
              <div className="fu-display" style={{ fontSize: 15, color: "var(--ink-1)", fontWeight: 400, marginBottom: 6 }}>
                {c.mhd}
              </div>
              <div className="fu-small" style={{ color: "var(--ink-3)", fontSize: 13, lineHeight: 1.55 }}>
                {c.channel}
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
          <Badge status="reduction" label="Identification of channels" />
          <Badge status="open" label="Quantitative coefficients" />
        </div>
      </TPSection>

      <TPSection
        anchor="stress"
        eyebrow="projection stress · open"
        heading="An uncompleted term in the brane stress tensor."
      >
        <TPBody>
          The exact projection of the bulk stress-energy tensor onto{" "}
          <Tex tex="\Sigma" /> contains a term that does not appear in either
          the gauge or the matter sector as written. It arises from integrating
          bulk divergences across a non-uniform <Tex tex="W(w)" /> and
          survives even in the zero-mode limit:
        </TPBody>

        <EqCard
          eyebrow="projection stress · open closure"
          tex="\widehat{T}_{\mu\nu}^{\text{proj}} \;=\; \int W(w)\, T^{\text{bulk}}_{\mu\nu}\, dw \;+\; \Theta_{\mu\nu}\!\big[W, \rho, F\big]"
          note="Θ_{μν} is the projection stress. It is structurally required; its closed-form evaluation against a realistic throat ensemble is open."
        />

        <TPBody>
          A closely related open quantity is the <em>topology stress</em>:
          the brane stress contribution associated with configurations of{" "}
          <Tex tex="\psi" /> whose winding structure rearranges during bulk
          evolution. Both are queued against the moving-throat PDE.
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
          smooth, non-sudden bulk reconfiguration in which mixed-sector
          fields <Tex tex="(A_w, F_{\mu w}, E_w)" /> transport energy between
          nearby throat neighbourhoods. The event's apparent rate is
          controlled by the <Tex tex="Z(w)" />-gap between the zero-mode and
          the first higher mode <Tex tex="f_1(w)" />.
        </TPCallout>

        <TPBody>
          This hypothesis is testable in principle — a prediction about the
          relation between reconnection rate and ambient plasma parameters.
          It has not yet been quantitatively derived from the moving-throat
          PDE, and is flagged as open in the results ledger.
        </TPBody>
      </TPSection>

      <TPSection anchor="next" eyebrow="forward reference" heading="What uses this.">
        <TPBody>
          The wave-propagation chapter (topic 08) inherits the same
          zero-mode / higher-mode structure and uses it to derive dispersion
          in dense plasmas. The PN ladder (topic 10) uses the mixed-sector
          identification to normalize the 2.5PN/4PN outgoing quadrupole.
          The moving-throat PDE (topic 11) is what would turn the
          hypothetical channels listed here into concrete coefficients.
        </TPBody>
      </TPSection>
    </TopicPage>
  );
}
