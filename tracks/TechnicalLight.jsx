/* global React, TopicPage, TPTitle, TPLede, TPSection, TPBody, TPCallout, Badge, Chip, EqCard, Tex */
// Part II · Topic 08 — Wave Propagation and the Ambient Speed — TECHNICAL

function TechnicalLight() {
  const topic = {
    n: "08",
    part: "II",
    partName: "Applications",
    slug: "light",
    title: "Wave Propagation & the Ambient Speed",
    prev: { title: "07 · Plasma and Beyond-MHD" },
    next: { title: "09 · Atomic Spectra, g-factors, Anomalies" },
  };

  return (
    <TopicPage track="technical" topic={topic}>
      <section style={{ padding: "10px 0 40px" }}>
        <TPTitle>
          The transverse sector of the linearized pond propagates at{" "}
          <span className="fu-mono" style={{ fontSize: "0.68em", color: "#7aa2ff" }}>
            c = √(κ / ρ₀)
          </span>
          .
        </TPTitle>
        <TPLede>
          Linearizing the bulk action (topic 03) around the ambient vacuum{" "}
          <Tex tex="\rho = \rho_0" />, <Tex tex="\psi = \psi_0" /> produces a
          stratified wave equation for transverse perturbations. The
          zero-mode yields the standard relativistic dispersion{" "}
          <Tex tex="\omega^2 = c^2 k^2" /> with <Tex tex="c^2 = \kappa/\rho_0" />
          . Higher modes supply a controlled UV dispersion gated by the
          <Tex tex="Z(w)" /> profile.
        </TPLede>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 20 }}>
          <Badge status="exact" label="Linearized wave equation" />
          <Badge status="reduction" label="Zero-mode relativistic dispersion" />
          <Badge status="open" label="Microscopic value of c from UV parameters" />
          <Chip label="sector: matter + gauge" />
          <Chip label="4D · Maxwell" href={ZENODO.maxwell.url} />
        </div>
      </section>

      <TPSection
        anchor="linearize"
        eyebrow="linearization"
        heading="Transverse fluctuations decouple from density at leading order."
      >
        <TPBody>
          Write <Tex tex="\rho(x,w,t) = \rho_0 + \delta\rho" /> and{" "}
          <Tex tex="\psi(x,w,t) = \psi_0\, e^{i\theta}(1 + \delta\chi)" />.
          The longitudinal sector <Tex tex="(\delta\rho, \partial_\mu\theta)" />{" "}
          couples to matter-density gradients and reproduces sound-like
          modes; the transverse sector is the amplitude-phase orthogonal
          combination that decouples at <Tex tex="O(\delta^2)" /> and carries
          no net density response.
        </TPBody>

        <EqCard
          eyebrow="transverse EoM · Part II Eq. 8.1"
          tex="\rho_0\, \partial_t^2 \chi_\perp \;-\; \kappa\, \nabla^2 \chi_\perp \;-\; \kappa_w(w)\, \partial_w^2 \chi_\perp \;=\; 0"
          note="χ_⊥ is the transverse mode. κ is the ambient stiffness; κ_w(w) is its profile along the hidden axis, set by the same parameters that set Z(w)."
        />
      </TPSection>

      <TPSection
        anchor="zero-mode"
        eyebrow="zero-mode · relativistic dispersion"
        heading="The 3+1 speed emerges from the stiffness-to-density ratio."
      >
        <TPBody>
          Mode-decompose <Tex tex="\chi_\perp = \sum_k u_k(x,t)\, \phi_k(w)" />{" "}
          against <Tex tex="\kappa_w(w)" />. The zero-mode equation is
        </TPBody>

        <EqCard
          eyebrow="zero-mode dispersion · Part II Eq. 8.2"
          tex="\rho_0\, \partial_t^2 u_0 \;-\; \kappa\, \nabla^2 u_0 \;=\; 0 \quad\Longrightarrow\quad \omega^2 \;=\; c^2\, k^2, \qquad c^2 \;\equiv\; \kappa/\rho_0"
          note="This is Maxwell's free-field dispersion, with c derived rather than posited. All zero-mode transverse excitations share it."
        />

        <TPCallout kind="note">
          <strong style={{ color: "var(--ink-1)" }}>Stance on c.</strong>{" "}
          The program <em>derives</em> that all zero-mode transverse modes
          share one speed <Tex tex="c = \sqrt{\kappa/\rho_0}" />, that the
          speed is observer-independent, and that Lorentz invariance is
          emergent on <Tex tex="\Sigma" />. It <em>does not</em> derive the
          numerical value of <Tex tex="c" /> from deeper inputs —{" "}
          <Tex tex="\kappa" /> and <Tex tex="\rho_0" /> are UV parameters of
          the bulk action. This is flagged in the ledger.
        </TPCallout>
      </TPSection>

      <TPSection
        anchor="lorentz"
        eyebrow="emergent Lorentz"
        heading="Relativity as a property of the pond, not an axiom."
      >
        <TPBody>
          The zero-mode wave equation and the stress-tensor structure of
          (topic 05 + topic 06) are jointly Lorentz-invariant on the brane.
          All matter processes are at base ripples in the same pond, so all
          matter processes obey the same Lorentz symmetry. Time dilation,
          length contraction, and the observer-independence of{" "}
          <Tex tex="c" /> follow from this as standard consequences.
        </TPBody>

        <TPBody>
          The subtle case is precisely the mixed-sector corrections of
          (topic 06 + topic 07): these can carry small Lorentz-violating
          signatures when the zero-mode reduction is pushed outside its
          regime. They are controlled, suppressed, and contribute to the
          ledger entries below.
        </TPBody>
      </TPSection>

      <TPSection
        anchor="uv"
        eyebrow="UV dispersion · open"
        heading="Z(w)-controlled deviation at very high energies."
      >
        <TPBody>
          For <Tex tex="k^2 \lesssim m_1^2/c^2" />, where{" "}
          <Tex tex="m_1^2" /> is the gap to the first higher mode{" "}
          <Tex tex="\phi_1(w)" />, the dispersion is exactly{" "}
          <Tex tex="\omega^2 = c^2 k^2" />. Above that scale, the first
          higher mode contributes and the dispersion becomes
        </TPBody>

        <EqCard
          eyebrow="UV-corrected dispersion · Part II Eq. 8.3"
          tex="\omega^2(k) \;=\; c^2 k^2 \;+\; \alpha_Z\, (c^2 k^2)^2 / M_Z^2 \;+\; \ldots, \qquad M_Z \sim \langle Z \rangle^{-1/2}"
          note="α_Z is a dimensionless coefficient set by the detailed Z(w) profile. M_Z is the UV scale at which the hidden-direction structure starts to matter."
        />

        <TPBody>
          Because all current laboratory and astrophysical measurements
          operate at <Tex tex="k c \ll M_Z" />, this correction is not in
          tension with any existing bound — but it is a falsifiable
          prediction of the framework at future energies. Its coefficient{" "}
          <Tex tex="\alpha_Z" /> is queued against a closure of the profile.
        </TPBody>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
          <Badge status="open" label="α_Z from profile closure" />
          <Chip label="consumed by: PN ledger · cosmological constraints" />
        </div>
      </TPSection>

      <TPSection
        anchor="polarization"
        eyebrow="polarizations"
        heading="Two transverse modes; gauge sector interaction."
      >
        <TPBody>
          In 3+1, the transverse sector of <Tex tex="\chi_\perp" /> carries
          two independent modes — the two polarizations. Coupling to the
          zero-mode gauge field <Tex tex="a_\mu" /> (topic 06) happens
          through the matter current and reproduces standard QED at
          tree-level. The combined transverse matter + gauge system is what
          a brane observer perceives as electromagnetic radiation.
        </TPBody>

        <EqCard
          eyebrow="coupled zero-mode system · Part II Eq. 8.4"
          tex="\big(\Box + m_{\text{eff}}^2\big)\, \chi_\perp \;=\; q_\text{eff}\, a^\mu\, \partial_\mu \chi_\perp + \ldots, \qquad \Box a_\mu \;=\; q_\text{eff}\, j_\mu^{(\chi)}"
          note="Box = ∂_t²/c² − ∇². The quadratic truncation; higher-order couplings generate the anomaly corrections of topic 09."
        />
      </TPSection>

      <TPSection anchor="next" eyebrow="forward reference" heading="What uses this.">
        <TPBody>
          Topic 09 (atoms & anomalies) uses the coupled tree-level system
          above plus specified one-loop corrections to reproduce the
          hydrogen spectrum and the electron anomaly. Topic 10 (the PN
          ledger) uses the zero-mode wave equation to define the radiation
          zone and normalize outgoing power. The UV dispersion correction
          of §8.4 appears in the PN normalization gap for <Tex tex="P_\text{out}" />.
        </TPBody>
      </TPSection>
    </TopicPage>
  );
}

Object.assign(window, { TechnicalLight });
