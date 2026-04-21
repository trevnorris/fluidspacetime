/* global React, TopicPage, TPTitle, TPLede, TPSection, TPBody, TPCallout, Badge, Chip, EqCard, Tex */
// Part II · Topic 09 — Atomic Spectra, g-factors, Anomalies — TECHNICAL

function TechnicalAtoms() {
  const topic = {
    n: "09",
    part: "II",
    partName: "Applications",
    slug: "atoms",
    title: "Atomic Spectra, g-factors, Anomalies",
    prev: { title: "08 · Wave Propagation & the Ambient Speed" },
    next: { title: "10 · The Post-Newtonian Ledger" },
  };

  return (
    <TopicPage track="technical" topic={topic}>
      <section style={{ padding: "10px 0 40px" }}>
        <TPTitle>
          Coulomb-limit Schrödinger for{" "}
          <span className="fu-mono" style={{ fontSize: "0.68em", color: "#7aa2ff" }}>ψ⊥</span>{" "}
          recovers hydrogen. Anomalies as form-factor corrections from the
          {" "}<span className="fu-mono" style={{ fontSize: "0.68em", color: "#7aa2ff" }}>Z(w)</span>{" "}profile.
        </TPTitle>
        <TPLede>
          In the non-relativistic Coulomb limit the transverse matter-field
          equation (topic 08) reduces to the hydrogen Schrödinger problem
          with Rydberg <Tex tex="R_\infty = m_e\, e^4 / (8 \varepsilon_0^2 h^3 c)" />
          matching experiment. Magnetic moments receive an <Tex tex="O(a_*)" />
          geometric form-factor correction identified with the leading QED
          anomaly term. Higher-order <Tex tex="a" /> and muon <Tex tex="g-2" /> are
          open.
        </TPLede>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 20 }}>
          <Badge status="exact" label="Hydrogen spectrum · exact" />
          <Badge status="reduction" label="Schrödinger from zero-mode" />
          <Badge status="open" label="g−2 matching to QED precision" />
          <Chip label="sector: matter + gauge" />
          <Chip label="4D · Maxwell" href={ZENODO.maxwell.url} />
          <Chip label="Prior · spin & vorticity" href={ZENODO.priorSpinVorticity.url} />
        </div>
      </section>

      <TPSection
        anchor="coulomb"
        eyebrow="Coulomb limit"
        heading="Static zero-mode gauge field sourced by a throat at the origin."
      >
        <TPBody>
          A nucleus is modeled as a charged throat at <Tex tex="r=0" /> with
          observable charge <Tex tex="Z e_\text{eff}" />, where{" "}
          <Tex tex="e_\text{eff} = e_* / \sqrt{Z_\text{int}}" /> from topic 06.
          In the static limit, the zero-mode gauge field <Tex tex="a_\mu" />{" "}
          has only a Coulomb component:
        </TPBody>

        <EqCard
          eyebrow="static Coulomb · Part II Eq. 9.1"
          tex="a_0(r) \;=\; -\frac{Z\, e_\text{eff}}{4\pi\varepsilon_0\, r}, \qquad \mathbf{a}(r) = 0"
          note="Standard Coulomb potential, with e_eff set by the zero-mode reduction. ε_0 = 1/(μ_{0,eff} c²)."
        />

        <TPBody>
          A slow electron approaching this nucleus is described by the
          non-relativistic limit of topic 08's coupled transverse equation.
          Setting <Tex tex="i \partial_t \chi \;=\; (E + m_e c^2)\, \chi" /> and
          expanding to leading order in <Tex tex="v/c" /> yields
        </TPBody>

        <EqCard
          eyebrow="Schrödinger equation · Part II Eq. 9.2"
          tex="i \hbar\, \partial_t \chi \;=\; \left[\, -\frac{\hbar^2}{2 m_e}\,\nabla^2 \;-\; \frac{Z\, e_\text{eff}^2}{4\pi\varepsilon_0\, r}\, \right]\, \chi"
          note="Derived, not postulated. χ is the slowly-varying envelope of the transverse zero-mode. Spherically symmetric Coulomb problem."
        />
      </TPSection>

      <TPSection
        anchor="spectrum"
        eyebrow="hydrogen spectrum"
        heading="Bound-state energies — exact reproduction."
      >
        <TPBody>
          The bound-state spectrum of (9.2) is the standard Bohr ladder:
        </TPBody>

        <EqCard
          eyebrow="bound-state energies · Part II Eq. 9.3"
          tex="E_n \;=\; -\frac{m_e\, Z^2\, e_\text{eff}^4}{2\,(4\pi\varepsilon_0)^2\, \hbar^2\, n^2}, \qquad n \in \mathbb{Z}^+"
          note="For Z = 1, n = 1 gives the hydrogen ground state at −13.6057… eV. The Rydberg R_∞ derived here agrees with the CODATA value to the precision set by e_eff's determination."
        />

        <TPBody>
          Relativistic corrections to (9.2) reproduce fine structure in the
          usual Sommerfeld expansion. Spin-orbit and Zeeman terms emerge
          from the mixed-sector channels <Tex tex="(A_w, E_w)" /> of topic 06
          in the non-relativistic limit, with the <Tex tex="O(v^2/c^2)" />{" "}
          coefficient matching Dirac theory. Hyperfine couplings arise from
          the nucleus's magnetic form factor, itself a geometric observable
          of the throat profile.
        </TPBody>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
          <Badge status="exact" label="Gross spectrum" />
          <Badge status="reduction" label="Fine structure · Sommerfeld" />
          <Badge status="open" label="Lamb shift · geometric closure" />
        </div>
      </TPSection>

      <TPSection
        anchor="gfactor"
        eyebrow="g-factor from form factor"
        heading="The anomaly is a deviation from a point-charge response."
      >
        <TPBody>
          An electron-throat at rest in an external magnetic field{" "}
          <Tex tex="\mathbf{B}" /> develops a magnetic moment{" "}
          <Tex tex="\boldsymbol{\mu} = g (e_\text{eff}/2 m_e)\, \mathbf{S}" />.
          At the tree-level (point-throat) approximation <Tex tex="g = 2" />.
          The electron, however, has finite internal structure — its profile{" "}
          <Tex tex="f(r/R_\text{el})" /> extends over a length{" "}
          <Tex tex="R_\text{el}" /> and its <Tex tex="w" />-support extends
          through <Tex tex="Z(w)" />. This produces a <em>form factor</em>:
        </TPBody>

        <EqCard
          eyebrow="g-factor with form factor · Part II Eq. 9.4"
          tex="g \;=\; 2\,\big[\, 1 + a_*(k R_\text{el},\, Z_\text{int}) \,\big], \qquad a_* \to \alpha/2\pi \text{ at leading order}"
          note="a_* is the geometric form-factor correction — the analogue of the Schwinger term. Its leading piece matches α/(2π) when evaluated against the declared Z(w) profile."
        />

        <TPBody>
          The leading-order identification{" "}
          <Tex tex="a_*^{(1)} = \alpha / 2\pi" /> is a <em>consistency</em>{" "}
          check — it tells us that the profile-integral structure is the
          right shape, given the <Tex tex="\alpha" /> inherited from topic 06.
          The non-trivial claim is that <em>higher</em> orders in the QED
          series {" "}<Tex tex="a = \alpha/2\pi + C_2 (\alpha/\pi)^2 + \ldots" />{" "}
          are reproduced by specific multi-loop geometric contributions from
          the same profile. That calculation is open.
        </TPBody>

        <TPCallout kind="warn">
          <strong style={{ color: "#e67ac6" }}>Anomaly ledger.</strong>{" "}
          <em>Leading term a_*^(1) = α/(2π)</em> — claimed to follow from
          the Z-profile closure. <em>Higher-order terms</em> — queued;
          require the throat profile to be specified to enough precision
          that multi-loop-equivalent geometric integrals can be evaluated.
          No disagreement with QED is claimed — the program's aim is to
          reproduce the same numbers by a different bookkeeping.
        </TPCallout>
      </TPSection>

      <TPSection
        anchor="mug2"
        eyebrow="muon anomaly · open hypothesis"
        heading="A mass-scale-dependent candidate for the BSM residue."
      >
        <TPBody>
          The long-standing muon <Tex tex="(g-2)_\mu" /> discrepancy between
          experiment and Standard-Model calculation is, in conventional
          terms, a ~4σ residual attributed to hadronic vacuum polarization
          or beyond-SM physics. The fluid picture has a structural
          candidate: the muon's heavier mass puts it in a regime where the
          higher-mode <Tex tex="f_k(w)" /> suppression of topic 06 is
          weaker. The mixed-sector contribution to the form-factor integral
          picks up a mass-scaled enhancement:
        </TPBody>

        <EqCard
          eyebrow="muon-scale enhancement · Eq. 9.5 · hypothesis"
          tex="\Delta a_\mu \;\sim\; \big(m_\mu / M_Z\big)^2 \cdot \mathcal{F}\big[Z(w)\big]"
          note="M_Z is the UV scale from topic 08's dispersion correction. 𝓕 is a profile functional. The coefficient is open; the scaling structure is structural."
        />

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
          <Badge status="open" label="(g−2)_μ hypothesis" />
          <Chip label="consumed by: precision-physics programme" />
        </div>
      </TPSection>

      <TPSection
        anchor="lamb"
        eyebrow="Lamb shift · reduction sketch"
        heading="Finite-size corrections to the Coulomb integral."
      >
        <TPBody>
          The Lamb shift (the 2s₁/₂ / 2p₁/₂ splitting in hydrogen, ~1057 MHz)
          is attributed in QED to vacuum polarization and self-energy
          corrections. In the fluid picture these correspond to:
        </TPBody>

        <ul style={{ color: "var(--ink-2)", lineHeight: 1.8, paddingLeft: 24, fontSize: 16 }}>
          <li>finite-<Tex tex="Z_\text{int}" /> corrections to{" "}
            <Tex tex="e_\text{eff}" /> at the probe scale (running coupling),</li>
          <li>mixed-sector <Tex tex="f_{k=1}" /> mode contributions to the
            Coulomb kernel at short distance,</li>
          <li>electron-profile self-overlap terms from the{" "}
            <Tex tex="f(r/R_\text{el})" /> shape.</li>
        </ul>

        <TPBody>
          Organizing these into a single geometric integral that matches the
          measured ~1057 MHz is an open milestone — listed as a target, not
          yet a completion. Progress on it is gated by the same profile
          specification that gates the higher-order <Tex tex="a" /> terms.
        </TPBody>
      </TPSection>

      <TPSection anchor="next" eyebrow="forward reference" heading="What uses this.">
        <TPBody>
          The precision-physics programme rests on this chapter. Topic 10
          (the PN ledger) uses the same form-factor machinery in the
          radiation-zone context. Topic 11 (the moving-throat PDE) is what
          would close the higher-order form-factor integrals — when it's
          solved, the g−2 and Lamb-shift targets become explicit numbers.
        </TPBody>
      </TPSection>
    </TopicPage>
  );
}

Object.assign(window, { TechnicalAtoms });
