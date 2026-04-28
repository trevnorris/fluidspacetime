import React from 'react';
import { TopicPage, TPTitle, TPLede, TPSection, TPBody, TPCallout } from '../../components/TopicPage.jsx';
import { Badge, Chip, EqCard, Tex } from '../../components/ui.jsx';
import { ZENODO } from '../../data/citations.js';

// Part II · Topic 08 — Wave Propagation and the Ambient Speed — TECHNICAL

export default function TechnicalLight() {
  const topic = {
    n: "08",
    part: "II",
    partName: "Applications",
    slug: "light",
    title: "Wave Propagation & the Ambient Speed",
  };

  return (
    <TopicPage track="technical" topic={topic}>
      <section style={{ padding: "10px 0 40px" }}>
        <TPTitle>
          Characteristic propagation speed from the 4D matter sector; brane
          electromagnetism from a controlled zero-mode reduction.
        </TPTitle>
        <TPLede>
          The current 4D stack does not rest on the older
          <Tex tex="\chi_\perp,\,\kappa/\rho_0" /> notation as a load-bearing
          result. What is explicit in the papers is: a GNLS matter sector with
          stiff EOS, a localized Maxwell sector weighted by <Tex tex="Z(w)" />,
          a characteristic speed fixed by <Tex tex="dP/d\rho" />, and a
          controlled brane Maxwell limit with KK corrections above it.
        </TPLede>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 20 }}>
          <Badge kind="closure">Characteristic speed from EOS</Badge>
          <Badge kind="reduce">Brane Maxwell limit</Badge>
          <Badge kind="open">Profile-gated KK corrections</Badge>
          <Chip label="4D · Action" href={ZENODO.action.url} />
          <Chip label="4D · 1PN bridge" href={ZENODO.bridge.url} />
          <Chip label="4D · Maxwell" href={ZENODO.maxwell.url} />
        </div>
      </section>

      <TPSection
        anchor="speed"
        eyebrow="characteristic speed"
        heading="The EOS fixes the small-disturbance propagation speed."
      >
        <TPBody>
          In the parent GNLS matter sector the background sound speed is
          determined by the EOS slope:
        </TPBody>

        <EqCard
          label="◇ characteristic speed · parent matter sector"
          plain="This is the carry-forward speed used in the weak-field optical / bridge story."
          tex="c_s^2(\rho_0) \;=\; \frac{1}{m}\,\frac{dP}{d\rho}\Big|_{\rho_0} \;=\; \frac{5K_{\rm EOS}}{m}\,\rho_0^4"
        />

        <TPBody>
          Weak-field optical consistency in the bridge package is what fixes
          <Tex tex="n=5" /> in the current source record. The site should not
          present this as a standalone exact relativistic wave theorem for a
          separate transverse matter field.
        </TPBody>
      </TPSection>

      <TPSection
        anchor="maxwell"
        eyebrow="controlled brane limit"
        heading="The familiar 3+1 propagation law comes from the localized Maxwell zero mode."
      >
        <TPBody>
          The Maxwell paper derives a localized 4+1 gauge sector and shows that,
          for axial gauge plus a brane-dominant zero mode, the brane observer
          sees
        </TPBody>

        <EqCard
          label="◇ brane Maxwell reduction · controlled"
          plain="Standard 3+1 Maxwell on the brane appears only after the stated zero-mode / far-field assumptions."
          tex="\begin{aligned} \partial_\nu f^{\nu\mu} &\;=\; \mu_{0,\rm eff}\,J^\mu_{\rm eff}, \\ \mu_{0,\rm eff} &\;=\; \mu_0 / Z_{\rm int}, \\ q_{\rm eff} &\;=\; q_\star/\sqrt{Z_{\rm int}} \end{aligned}"
        />

        <TPCallout kind="note">
          The mixed channels <Tex tex="(A_w, J^w, F_{\mu w})" /> are suppressed
          only in this controlled far-field limit. The papers are explicit that
          this is a reduction statement, not a statement about microscopic
          ontology.
        </TPCallout>
      </TPSection>

      <TPSection
        anchor="kk"
        eyebrow="KK corrections"
        heading="Profile-dependent deviations appear above the vacuum Maxwell limit."
      >
        <TPBody>
          For a Gaussian localization profile, the Maxwell paper derives a
          discrete tower of transverse masses:
        </TPBody>

        <EqCard
          label="◇ Gaussian-profile KK tower"
          plain="Higher modes produce Yukawa-suppressed static corrections and causal tail terms in time-dependent propagation."
          tex="Z(w)=e^{-w^2/\lambda^2} \qquad \Longrightarrow \qquad m_n^2 = 2n/\lambda^2"
        />

        <TPBody>
          That is the precise current-paper meaning of “UV dispersion” on this
          site: not a finished microscopic prediction for every light-sector
          coefficient, but a controlled departure from pure Maxwell behaviour
          once the KK tower becomes relevant.
        </TPBody>
      </TPSection>

      <TPSection
        anchor="lorentz"
        eyebrow="brane covariance"
        heading="Observer-independent propagation belongs to the controlled brane law."
      >
        <TPBody>
          In the zero-mode Maxwell reduction, the brane-to-brane response depends
          only on the Lorentz scalar <Tex tex="k^2" /> with the retarded
          prescription. That is the current stack's route to brane Lorentz
          covariance in the wave-propagation sector.
        </TPBody>
      </TPSection>

      <TPSection anchor="next" eyebrow="forward reference" heading="What this page supports.">
        <TPBody>
          Topic 09 should treat atomic physics as a carry-forward Coulomb-limit
          target of this reduction, not as a finished precision-hydrogen claim.
          Topic 10 uses the same wave-propagation bookkeeping when discussing
          radiation-zone normalization.
        </TPBody>
      </TPSection>
    </TopicPage>
  );
}
