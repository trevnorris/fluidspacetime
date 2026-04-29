import React from 'react';
import { TopicPage, TPTitle, TPLede, TPSection, TPBody, TPCallout } from '../../components/TopicPage.jsx';
import { Badge, Chip, EqCard, Tex } from '../../components/ui.jsx';
import { ZENODO } from '../../data/citations.js';

// Part 1 · Topic 02 — Defects — TECHNICAL track

export default function TechnicalDefects() {
  const topic = {
    n: "02",
    part: "I",
    partName: "Foundations",
    slug: "defects",
    title: "Defects and Topological Stability",
  };

  return (
    <TopicPage track="technical" topic={topic}>
      <section style={{ padding: "10px 0 40px" }}>
        <TPTitle>
          Zero-locus defects of the complex order parameter{" "}
          <span className="fu-mono" style={{ fontSize: "0.68em", color: "#7aa2ff" }}>ψ(x,w,t)</span>{" "}
          are topologically protected
        </TPTitle>
        <TPLede>
          The parent matter field is introduced as a complex scalar{" "}
          <Tex tex="\psi: \mathbb{R}^3 \times \mathbb{R}_w \times \mathbb{R}_t \to \mathbb{C}" />{" "}
          of finite <Tex tex="L^2" /> norm away from background. Zeros of{" "}
          <Tex tex="\psi" /> — where both real and imaginary parts vanish — form
          codimension-2 submanifolds in the spatial slice and carry integer
          winding that is stable under smooth deformation.
        </TPLede>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 20 }}>
          <Badge kind="exact">Winding invariance</Badge>
          <Badge kind="reduce">3D slice homotopy</Badge>
          <Chip label="sector: matter" />
          <Chip label="4D · Action & Projections" href={ZENODO.action.url} />
          <Chip label="Prior · throat ontology" href={ZENODO.priorThroatOntology.url} />
        </div>
      </section>

      <TPSection
        anchor="order-param"
        eyebrow="matter sector · order parameter"
        heading="ψ is a complex scalar; ρ = |ψ|² is the hydrodynamic density"
      >
        <TPBody>
          Following the Madelung decomposition{" "}
          <Tex tex="\psi = \sqrt{\rho}\, e^{i\theta}" />, the matter sector
          resolves into a density <Tex tex="\rho = |\psi|^2" /> and a phase{" "}
          <Tex tex="\theta" /> whose gradient defines a velocity potential.
          Regions with <Tex tex="\rho > 0" /> are ordinary fluid. Points at which{" "}
          <Tex tex="\rho = 0" /> are singular for the phase — <em>there is no
          phase without a density</em> — and it is precisely at such points that
          nontrivial topology can be hosted.
        </TPBody>

        <EqCard
          label="◇ matter decomposition · Part I Eq. 2.1"
          plain="θ is multi-valued in the presence of defects; it lives on the universal cover of the punctured domain."
          tex="\begin{aligned} \psi(x,w,t) &\;=\; \sqrt{\rho(x,w,t)}\; e^{i\theta(x,w,t)}, \\ \rho &\;\geq\; 0,\ \theta \in \mathbb{R}/2\pi\mathbb{Z} \end{aligned}"
        />

        <TPCallout kind="note">
          The “defect” terminology follows condensed-matter convention: a
          defect is a configuration of <Tex tex="\psi" /> that cannot be
          continuously deformed to a uniform reference without passing through
          <Tex tex="\rho = 0" /> or changing winding.
        </TPCallout>
      </TPSection>

      <TPSection
        anchor="winding"
        eyebrow="winding invariant · π₁(S¹)"
        heading="The winding integer is a homotopy invariant"
      >
        <TPBody>
          Let <Tex tex="\gamma" /> be a small closed loop in a 2D slice
          transverse to the defect, encircling exactly one zero of{" "}
          <Tex tex="\psi" /> and lying entirely in the smooth region{" "}
          <Tex tex="\rho > 0" />. The winding number
        </TPBody>

        <EqCard
          label="◇ winding invariant · Part I Eq. 2.2"
          plain="Integer-valued by virtue of π₁(S¹) = ℤ. Independent of the representative loop within the defect's homotopy class."
          tex="n(\gamma) \;=\; \frac{1}{2\pi}\oint_\gamma d\theta \;\in\; \mathbb{Z}"
        />

        <TPBody>
          Because <Tex tex="n(\gamma)" /> takes discrete values, it is a
          <em> conserved winding</em> of the smooth sector: any continuous
          deformation of <Tex tex="\psi" /> that keeps <Tex tex="\gamma" />{" "}
          inside <Tex tex="\rho > 0" /> preserves <Tex tex="n" />. The only way
          to change <Tex tex="n" /> locally is for a second defect of opposite
          winding to be pulled through the loop — a non-smooth event in the
          reduced sense.
        </TPBody>

        <TPBody>
          In the three-dimensional brane slice{" "}
          <Tex tex="\Sigma_3 = \{w=0\}" />, the zero set of <Tex tex="\psi" />{" "}
          is generically a one-dimensional submanifold — a curve, or a family of
          curves — whose transverse winding profile defines the local defect
          structure. Closed curves produce <em>ring</em>-type defects; curves
          ending on the bulk define the <em>throat</em>-type defects handled in
          topic 04.
        </TPBody>
      </TPSection>

      <TPSection
        anchor="stab"
        eyebrow="stability"
        heading="Stability is kinematic, not dynamical"
      >
        <TPBody>
          A crucial feature: the persistence of an isolated winding defect is a
          kinematic statement about the smooth sector. No potential barrier, no
          binding energy, and no exotic force is needed for the winding integer
          to be invariant under continuous deformations that keep the loop in{" "}
          <Tex tex="\rho > 0" />. Under those regularity assumptions, an
          isolated winding-1 defect cannot be erased by a local smooth motion.
        </TPBody>

        <TPBody>
          Annihilation of defect pairs, by contrast, is allowed: a winding-1
          defect and a winding-(−1) defect can meet and vanish, with total
          winding conserved. This gives one allowed channel by which bound
          defect structures — relevant to the atom sector in topic 09 — can
          decay, and by which the brane can absorb configurations into smooth
          field radiation.
        </TPBody>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))", gap: 16, margin: "24px 0 4px" }}>
          {[
            { k: "Allowed", v: "n ↔ n + 0 (smooth motion); n + (−n) → 0 (pair annihilation); curve reconnections preserving total winding." },
            { k: "Forbidden", v: "n → n + 1 or n → 0 by a single smooth deformation; creation of a single isolated defect from the vacuum." },
          ].map((c) => (
            <div key={c.k} style={{
              padding: "20px 22px",
              border: "1px solid var(--rule-2)",
              borderRadius: 3,
              background: "rgba(16,20,42,0.5)",
            }}>
              <div className="fu-display" style={{ fontSize: 17, color: "var(--ink-1)", marginBottom: 8, fontWeight: 400 }}>{c.k}</div>
              <div className="fu-small" style={{ color: "var(--ink-2)", lineHeight: 1.6 }}>{c.v}</div>
            </div>
          ))}
        </div>
      </TPSection>

      <TPSection
        anchor="energy"
        eyebrow="energetics · controlled reduction"
        heading="Core energetics are a controlled scaling target"
      >
        <TPBody>
          The current source record supports order-of-magnitude energetics for
          controlled defect and throat reductions, not a unique generic core
          profile theorem. In the prior brane-bulk throat ontology, the
          cylindrical throat modes have the scaling
        </TPBody>

        <EqCard
          label="◇ throat-mode scaling · prior ontology"
          plain="At fixed mode amplitude, energy scales with transverse and bulk wave numbers; at fixed mode normalization, lower wave-number modes are energetically preferred."
          tex="\begin{aligned} \mathcal E_{mn} &\;\propto\; A_{mn}^{2}(k_r^2+k_w^2)a^2L, \\ \mathcal Q_{mn} &\;\propto\; A_{mn}^{2}a^2L \end{aligned}"
        />

        <TPBody>
          The exponent <Tex tex="n = 5" /> in the EoS is inherited from the
          parent weak-field optical matching discussed in topic 01; it is{" "}
          <em>not</em> chosen to set a defect size. Profile uniqueness and the
          full moving-wall realization remain open issues rather than settled
          consequences of the stiff EoS alone.
        </TPBody>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 18 }}>
          <Badge kind="reduce">Mode scaling</Badge>
          <Badge kind="open">Profile uniqueness</Badge>
          <Chip label="consumed by: topic 05 (inflow), topic 09 (atoms)" />
        </div>
      </TPSection>

      <TPSection anchor="next" eyebrow="forward reference" heading="What this does not yet include">
        <TPBody>
          Two essential refinements remain. First, defects acquire structure
          along a direction that is not part of the brane's 3D slice — the
          hidden <Tex tex="w" /> axis of topic 03. Second, a distinguished
          class of defects — <em>throats</em> — has support on the brane but
          extends into the bulk with a non-trivial profile; these are the
          proper geometric setting for particle-like configurations, and are
          handled in topic 04.
        </TPBody>
      </TPSection>
    </TopicPage>
  );
}
