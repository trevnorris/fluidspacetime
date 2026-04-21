/* global React, TopicPage, TPTitle, TPLede, TPSection, TPBody, TPCallout, TrackToggle, Badge, Chip, EqCard, Tex */
// Part II · Topic 05 — Gravity as Brane-Inflow — TECHNICAL track

function TechnicalGravity() {
  const topic = {
    n: "05",
    part: "II",
    partName: "Applications",
    slug: "gravity",
    title: "Gravity as Brane-Inflow",
    prev: { title: "04 · Throat Defects" },
    next: { title: "06 · Localized 4+1 Maxwell" },
  };

  return (
    <TopicPage track="technical" topic={topic}>
      <section style={{ padding: "10px 0 40px" }}>
        <TPTitle>
          The Poisson hook: longitudinal brane inflow under a controlled
          quasi-static reduction.
        </TPTitle>
        <TPLede>
          Start from the exact projected continuity equation with a leakage
          source. Apply a Helmholtz decomposition to the brane velocity.
          Under declared assumptions — quasi-static motion, small velocities
          relative to <Tex tex="c" />, and a stable background — the
          longitudinal component satisfies a Poisson equation whose source
          is the brane-integrated inflow through <Tex tex="w" />. The solution
          reproduces Newtonian gravity with <Tex tex="\kappa_\rho = 1" />.
        </TPLede>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 20 }}>
          <Badge status="exact" label="Projected continuity" />
          <Badge status="reduction" label="Quasi-static Poisson hook" />
          <Badge status="reduction" label="κ_ρ = 1 dressing" />
          <Chip label="sector: gravity" />
          <Chip label="4D · 1PN full" href={ZENODO.pn1.url} />
          <Chip label="4D · 2PN conservative" href={ZENODO.pn2.url} />
        </div>
      </section>

      <TPSection
        anchor="continuity"
        eyebrow="exact projected continuity"
        heading="Brane-integrated mass balance with a bulk leakage term."
      >
        <TPBody>
          Let <Tex tex="\rho(x,w,t)" /> be the bulk density and{" "}
          <Tex tex="\mathbf{u}(x,w,t)" /> the bulk velocity. Integrating the
          bulk continuity equation against the projection kernel{" "}
          <Tex tex="W(w)" /> of topic 03 gives an exact identity for the
          brane-integrated density <Tex tex="\widehat{\rho}(x,t)" />:
        </TPBody>

        <EqCard
          eyebrow="projected continuity · Part II Eq. 5.1"
          tex="\partial_t\, \widehat{\rho} \;+\; \nabla_3 \!\cdot\! \widehat{(\rho\, \mathbf{u}_3)} \;=\; -\,\widehat{J^w}, \qquad \widehat{J^w}(x,t) \;\equiv\; \int W'(w)\, (\rho\, u_w)(x,w,t)\, dw"
          note="Exact under only the definition of projection. J_w is the leakage source — a throat pushes a fraction of its inflow down the w-axis."
        />

        <TPBody>
          The leakage <Tex tex="\widehat{J^w}" /> is not a subtraction. It is
          an exact consequence of integrating by parts once in <Tex tex="w" />
          {" "}against a non-constant kernel. For a throat located on the
          brane, this quantity is non-zero, localized, and computable.
        </TPBody>
      </TPSection>

      <TPSection
        anchor="helmholtz"
        eyebrow="Helmholtz split"
        heading="Decompose the brane velocity into longitudinal and transverse parts."
      >
        <TPBody>
          Write the brane-projected velocity as
        </TPBody>

        <EqCard
          eyebrow="Helmholtz decomposition · Part II Eq. 5.2"
          tex="\widehat{(\rho\, \mathbf{u}_3)} \;=\; \nabla_3 \Phi_L \;+\; \nabla_3 \times \mathbf{A}_T, \qquad \nabla_3 \cdot \mathbf{A}_T = 0"
          note="Φ_L is the longitudinal (curl-free) potential; A_T carries the transverse (divergence-free) content. Only Φ_L sources the density balance."
        />

        <TPBody>
          Substituting back into the projected continuity equation
          annihilates the transverse component (its divergence is zero) and
          leaves an equation for <Tex tex="\Phi_L" /> alone:
        </TPBody>

        <EqCard
          eyebrow="longitudinal equation · Part II Eq. 5.3"
          tex="\partial_t\, \widehat{\rho} \;+\; \nabla_3^2 \Phi_L \;=\; -\,\widehat{J^w}"
          note="This identity is still exact. The reduction enters in the next step."
        />

        <TPBody>
          The transverse component <Tex tex="\mathbf{A}_T" /> is what carries
          the magnetic/vortical sector of the matter field (topic 06) and the
          speed-<Tex tex="c" /> radiation of topic 08. It is not negligible —
          just not part of the gravitational bookkeeping.
        </TPBody>
      </TPSection>

      <TPSection
        anchor="quasi-static"
        eyebrow="quasi-static reduction · controlled"
        heading="Drop the time derivative under declared assumptions."
      >
        <TPBody>
          Introduce the quasi-static limit: throat velocities are small
          relative to <Tex tex="c" />, the background density <Tex tex="\rho_\infty" />{" "}
          is stable, and all dynamics are slow compared to the ambient sound
          time. Then <Tex tex="\partial_t \widehat{\rho}" /> is parametrically
          smaller than <Tex tex="\nabla_3^2 \Phi_L" /> and may be dropped:
        </TPBody>

        <EqCard
          eyebrow="Poisson hook · Part II Eq. 5.4"
          tex="\nabla_3^2 \Phi_L \;=\; -\,\widehat{J^w}(x,t)"
          note="Poisson equation. The source is the brane-integrated leakage. Sign conventions chosen so that an inflow throat has J^w > 0, sourcing an attractive potential."
        />

        <TPBody>
          Identifying <Tex tex="\Phi_L = -\Phi_N" /> with the Newtonian
          potential and <Tex tex="\widehat{J^w} = 4\pi G\, \rho_m" /> gives a
          Newtonian law with <Tex tex="G" /> fixed by{" "}
          <Tex tex="\kappa_\rho = 1" /> (the mass-dressing coefficient) and
          the throat's inflow normalization. This is the Poisson hook.
        </TPBody>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 18 }}>
          <Badge status="reduction" label="∂_t ρ ≪ ∇²Φ_L" />
          <Badge status="reduction" label="|u|/c ≪ 1" />
          <Chip label="consumed by: topic 10 (1PN ledger)" />
        </div>
      </TPSection>

      <TPSection
        anchor="throat-source"
        eyebrow="source from throat geometry"
        heading="What J^w evaluates to for a single static throat."
      >
        <TPBody>
          For a static throat of radius <Tex tex="R_0" /> and length{" "}
          <Tex tex="L" /> (topic 04), the brane-integrated leakage localizes
          to a compact support on <Tex tex="\Sigma" /> near the mouth:
        </TPBody>

        <EqCard
          eyebrow="throat-localized source · controlled reduction"
          tex="\widehat{J^w}(x,t) \;=\; 4\pi G\, M(R_0, L)\, \delta^{(3)}(x - x_0(t)) \;+\; O(R_0/r)"
          note="M(R₀, L) is the brane-observed mass. The O(R₀/r) tail is subleading outside the throat's immediate neighbourhood; it is tracked in topic 10 as finite-size corrections."
        />

        <TPBody>
          The key claim: <Tex tex="M" /> is not a free parameter. It is
          determined by the throat's geometry and the EoS exponent{" "}
          <Tex tex="n = 5" /> of topic 01. Up to the moving-wall corrections
          of topic 11, two throats with identical <Tex tex="(R_0, L)" /> have
          identical masses. This is the program's version of the equivalence
          principle: inertial and gravitational mass are both brane readings
          of the same geometry.
        </TPBody>

        <TPCallout kind="note">
          <strong style={{ color: "var(--ink-1)" }}>Carry-forward constants.</strong>{" "}
          The 1PN ledger of topic 10 uses several derived coefficients that
          sit downstream of this reduction:{" "}
          <Tex tex="\kappa_\rho = 1" />,{" "}
          <Tex tex="\kappa_\text{add} = 1/2" />,{" "}
          <Tex tex="\kappa_\text{PV} = 3/2" />, and{" "}
          <Tex tex="\beta_{1\text{PN}} = 3" />. Each is a computed value of
          the underlying throat response; none is an adjustable knob.
        </TPCallout>
      </TPSection>

      <TPSection
        anchor="scope"
        eyebrow="scope · what this doesn't claim"
        heading="The Poisson hook is only the first rung of a PN ladder."
      >
        <TPBody>
          This derivation gives a Newtonian law on the brane and nothing
          more. General-relativistic corrections appear systematically at
          post-Newtonian order, via the interplay of the longitudinal sector
          with throat-localized currents, retarded potentials in the full
          projected equation, and the transverse channel of topic 06. The PN
          ladder (topic 10) is the apparatus for climbing:
        </TPBody>

        <ul style={{ color: "var(--ink-2)", lineHeight: 1.8, paddingLeft: 24, fontSize: 16 }}>
          <li><strong>1PN:</strong> EIH two-body conservative sector — closed within the hierarchy.</li>
          <li><strong>2PN:</strong> ADM Hamiltonian generic-frame — closed within the hierarchy.</li>
          <li><strong>2.5PN:</strong> radiative quadrupole — passive/outgoing normalization gap isolated.</li>
          <li><strong>3PN:</strong> fixed-ADM-chart conservative sector — closed.</li>
          <li><strong>4PN:</strong> local instantaneous sector closed; same normalization gap as 2.5PN.</li>
          <li><strong>5PN / finish-line:</strong> branch-realization condition on the moving-throat PDE.</li>
        </ul>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
          <Badge status="reduction" label="1PN–4PN closures" />
          <Badge status="open" label="Outgoing quadrupole normalization" />
          <Badge status="open" label="PDE branch realization" />
        </div>
      </TPSection>

      <TPSection anchor="next" eyebrow="forward reference" heading="What uses this.">
        <TPBody>
          The Poisson hook is the input for topic 10 (PN ladder and two-body
          dynamics) and topic 09 (atomic bound states, where the Coulomb
          analog replaces the Newtonian potential but the same longitudinal
          machinery applies). The transverse sector dropped here is picked
          up by topic 06 (electromagnetism) and topic 08 (wave propagation).
        </TPBody>
      </TPSection>
    </TopicPage>
  );
}

Object.assign(window, { TechnicalGravity });
