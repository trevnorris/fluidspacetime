/* global React, TopicPage, TPTitle, TPLede, TPSection, TPBody, TPCallout, Badge, Chip, EqCard, Tex */
// Part II · Topic 11 — The Moving-Throat PDE — TECHNICAL

function TechnicalMovingThroat() {
  const topic = {
    n: "11",
    part: "II",
    partName: "Applications",
    slug: "moving-throat",
    title: "The Moving-Throat PDE",
    prev: { title: "10 · The Post-Newtonian Ledger" },
    next: null,
  };

  return (
    <TopicPage track="technical" topic={topic}>
      <section style={{ padding: "10px 0 40px" }}>
        <TPTitle>
          A free-boundary PDE for{" "}
          <span className="fu-mono" style={{ fontSize: "0.68em", color: "#7aa2ff" }}>R(Ω, w, t)</span>{" "}
          coupled to the bulk order parameter and gauge field.
        </TPTitle>
        <TPLede>
          The wall dynamics of a single throat are governed by a
          free-boundary PDE derived from the bulk action (topic 03) plus
          matching conditions at the mouth and interior. Known reductions
          (static, rigid-body, linearized) are consequences. The full
          nonlinear, multi-throat problem is the frontier; closing it — or
          a controlled expansion — retires the mixed-sector integral{" "}
          <Tex tex="\mathcal{I}_\text{mix}[Z]" />, the higher-order anomaly
          coefficients, 2.5PN/3.5PN/4PN ledger entries, and the reconnection
          energetics of topic 07.
        </TPLede>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 20 }}>
          <Badge status="reduction" label="Linearized spectrum · known" />
          <Badge status="open" label="Nonlinear large-amplitude regime" />
          <Badge status="open" label="Multi-throat coupling" />
          <Chip label="4D · Action & Projections" href={ZENODO.action.url} />
          <Chip label="Prior · throat ontology" href={ZENODO.priorThroatOntology.url} />
        </div>
      </section>

      <TPSection
        anchor="derivation"
        eyebrow="derivation"
        heading="From the bulk action to a free-boundary condition."
      >
        <TPBody>
          Model the throat as a moving domain{" "}
          <Tex tex="\Omega_\text{th}(t) \subset \mathbb{R}^3 \times \mathbb{R}_w" />{" "}
          inside which the order parameter satisfies{" "}
          <Tex tex="\psi = 0" />, separated from the ambient region (where{" "}
          <Tex tex="|\psi| = \psi_\infty" />) by a thin transition layer
          modeled as a sharp wall at <Tex tex="r = R(\Omega, w, t)" />.
          Action is
        </TPBody>

        <EqCard
          eyebrow="parent action · Part II Eq. 11.1"
          tex="S \;=\; \int \mathcal{L}_\psi + \mathcal{L}_A + \mathcal{L}_\text{wall} \, d^3x\, dw\, dt, \qquad \mathcal{L}_\text{wall} \;=\; \sigma(w)\, \sqrt{1 + |\nabla R|^2 + (\partial_t R/c)^2}\, \delta\big(r - R\big)"
          note="σ(w) is the wall tension per unit area. The square root is the relativistic wall area element. Standard matching across the wall supplies boundary conditions for ψ and A_M."
        />

        <TPBody>
          Varying <Tex tex="S" /> with respect to <Tex tex="R(\Omega, w, t)" />{" "}
          gives the moving-throat equation:
        </TPBody>

        <EqCard
          eyebrow="moving-throat PDE · Eq. 11.2"
          tex="\sigma(w)\, \mathcal{K}[R] \;=\; \big[\, T^{\psi} + T^{A} \,\big]_\text{in}^\text{out} \cdot \hat n + \Lambda_w\, R"
          note="𝓚[R] is the (w-generalized) mean curvature of the wall. The right side is the jump in the bulk stress tensor across the wall, projected onto the normal n̂. Λ_w is a cosmological-constant-like term coming from the w-profile."
        />
      </TPSection>

      <TPSection
        anchor="structure"
        eyebrow="structure of the PDE"
        heading="Key properties."
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, margin: "14px 0" }}>
          {[
            { k: "Order", v: "Second-order in time, second-order in spatial angular coords, second-order in w. Hyperbolic in t." },
            { k: "Nonlinearity", v: "Nonlinear in R (curvature) and in the coupled ψ, A_M. Standard tools (maximum principle, energy estimates) adapt partially." },
            { k: "Nonlocality", v: "Coupling to bulk ψ and A_M makes the effective R-equation nonlocal in w after the bulk is eliminated." },
            { k: "Constraint", v: "Topological constraint: winding number n on the boundary circles is preserved. Discontinuous only at explicit topology-change events." },
            { k: "Symmetries", v: "Rotational symmetry around w-axis at rest. Broken by orbital motion; restored in the center-of-mass frame." },
            { k: "Conservation", v: "Energy, momentum, angular momentum, and q_* charge — all exactly conserved under smooth evolution." },
          ].map((c) => (
            <div key={c.k} style={{
              padding: "16px 18px",
              border: "1px solid var(--rule)",
              borderRadius: 3,
              background: "rgba(16,20,42,0.45)",
            }}>
              <div className="fu-display" style={{ fontSize: 14, color: "var(--ink-1)", fontWeight: 400, marginBottom: 6 }}>{c.k}</div>
              <div className="fu-small" style={{ color: "var(--ink-3)", lineHeight: 1.55, fontSize: 12.5 }}>{c.v}</div>
            </div>
          ))}
        </div>
      </TPSection>

      <TPSection
        anchor="reductions"
        eyebrow="known reductions"
        heading="What's already derived."
      >
        <TPBody>
          <strong style={{ color: "var(--ink-1)" }}>Static limit.</strong>{" "}
          Setting <Tex tex="\partial_t R = 0" /> and solving in the rotationally
          symmetric sector reduces (11.2) to an ODE for <Tex tex="R(w)" />.
          Its solutions underwrite the Coulomb/Newtonian limits of topics
          05–09.
        </TPBody>
        <TPBody>
          <strong style={{ color: "var(--ink-1)" }}>Rigid-body motion.</strong>{" "}
          Set <Tex tex="R(\Omega, w, t) = R_0(\Omega, w - w_0(t)) + \delta R" />{" "}
          and expand in <Tex tex="\delta R" />. The center-of-mass motion
          <Tex tex="\mathbf{X}(t)" /> obeys a geodesic equation in the
          effective metric (topic 05), reproducing Newton/1PN/2PN. This is
          what the PN ledger through 2PN rests on.
        </TPBody>
        <TPBody>
          <strong style={{ color: "var(--ink-1)" }}>Linearized spectrum.</strong>{" "}
          Small oscillations <Tex tex="\delta R" /> about a static background
          satisfy a linear wave equation whose spectrum is computable. Three
          families appear:
        </TPBody>

        <EqCard
          eyebrow="linearized spectrum · Eq. 11.3"
          tex="\omega_\ell^2(k_w) \;=\; c_\sigma^2\, \ell(\ell+1)/R_0^2 \;+\; c^2 k_w^2 \;+\; m_\ell^2 + \text{couplings to}~(\delta\rho, \delta A_M)"
          note="ℓ is the angular multipole, k_w is the w-wavenumber. c_σ is the wall's transverse sound speed, set by σ(w). Couplings produce the mixed-sector channels of topic 06."
        />

        <TPBody>
          This linearized regime is what gives the 2.5PN structural
          quadrupole formula. Moving to the nonlinear, large-amplitude
          regime is what would close its normalization.
        </TPBody>
      </TPSection>

      <TPSection
        anchor="frontier"
        eyebrow="the frontier"
        heading="Nonlinear + multi-throat + topology."
      >
        <TPBody>
          Three extensions sit beyond the linearized regime. Each is a
          distinct problem, each is queued:
        </TPBody>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 10, margin: "18px 0 6px" }}>
          {[
            {
              k: "Nonlinear large-amplitude regime",
              v: "Beyond quadratic in δR. Required for strong-field radiation-reaction (3.5PN) and for the δ_Z integral's closure.",
              badges: ["open", "gates 3.5PN", "gates δ_Z"],
            },
            {
              k: "Multi-throat coupling",
              v: "Two or more throats in mutual motion. The effective two-body problem at all PN orders lives here. Currently handled by PN expansion + matched asymptotics; the PDE form is cleaner but harder.",
              badges: ["open", "gates 4PN", "gates binary inspiral"],
            },
            {
              k: "Topology change",
              v: "Throat merger, pinch-off, threading. The wall equation on a fixed topology does not govern the instant of change; extra matching conditions are needed. Partial results exist for axisymmetric pinch-off.",
              badges: ["open", "reconnection candidate"],
            },
          ].map((c) => (
            <div key={c.k} style={{
              padding: "20px 22px",
              border: "1px solid #e67ac655",
              borderLeft: "3px solid #e67ac6",
              borderRadius: 3,
              background: "linear-gradient(160deg, rgba(230,122,198,0.06), rgba(16,20,42,0.45))",
            }}>
              <div className="fu-display" style={{ fontSize: 16, color: "var(--ink-1)", fontWeight: 400, marginBottom: 6 }}>
                {c.k}
              </div>
              <div className="fu-small" style={{ color: "var(--ink-2)", lineHeight: 1.6, marginBottom: 10, fontSize: 13 }}>
                {c.v}
              </div>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {c.badges.map((b) => (
                  <span key={b} className="fu-mono fu-small" style={{
                    fontSize: 9.5, color: "#e67ac6", letterSpacing: "0.14em", textTransform: "uppercase",
                    padding: "3px 8px", border: "1px solid #e67ac633", borderRadius: 999,
                  }}>
                    {b}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </TPSection>

      <TPSection
        anchor="ledger"
        eyebrow="program ledger · what this closes"
        heading="Downstream dependencies."
      >
        <TPBody>
          The PDE is a gate for several open entries elsewhere. A single
          closure of <Tex tex="\mathcal{I}_\text{mix}[Z]" /> — even a
          controlled numerical estimate — retires the following at once:
        </TPBody>

        <ul style={{ color: "var(--ink-2)", lineHeight: 1.8, paddingLeft: 24, fontSize: 15.5 }}>
          <li>Topic 06 · mixed-sector finite-<Tex tex="Z" /> corrections,</li>
          <li>Topic 07 · non-ideal MHD coefficients, reconnection energy budget,</li>
          <li>Topic 08 · UV dispersion <Tex tex="\alpha_Z" />,</li>
          <li>Topic 09 · higher-order <Tex tex="a" />, muon <Tex tex="(g-2)_\mu" />, Lamb shift,</li>
          <li>Topic 10 · 2.5PN <Tex tex="\delta_Z" />, 3.5PN radiation reaction, 4PN inspiral.</li>
        </ul>

        <TPCallout kind="note">
          <strong style={{ color: "var(--ink-1)" }}>Why one equation
          gates so much.</strong> Every open entry above reduces to a
          specific scalar integral of the wall geometry <Tex tex="R(\Omega, w, t)" />
          against a known weight derived from <Tex tex="Z(w)" />. Knowing
          the geometry — even approximately — gives all the integrals at
          once. That's structural, not a coincidence.
        </TPCallout>
      </TPSection>

      <TPSection anchor="end" eyebrow="end of the program" heading="Where the work currently stands.">
        <TPBody>
          This chapter is the program's honest frontier. The bookkeeping
          upstream is as clean as a serious research programme gets at this
          stage; the open items are specific and reduce to a well-posed
          mathematical object; progress on that object is the active
          research program. Readers of the plain track will have received
          a narrative; readers of the technical track have received a
          ledger. Both agree, and both say: <em>here</em>.
        </TPBody>
      </TPSection>
    </TopicPage>
  );
}

Object.assign(window, { TechnicalMovingThroat });
