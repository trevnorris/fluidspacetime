import React from 'react';
import { TopicPage, TPTitle, TPLede, TPSection, TPBody, TPCallout } from '../../components/TopicPage.jsx';
import { Badge, Chip, EqCard, Tex } from '../../components/ui.jsx';

// Part 1 · Topic 04 — Throat Defects — TECHNICAL track

export default function TechnicalThroats() {
  const topic = {
    n: "04",
    part: "I",
    partName: "Foundations",
    slug: "throats",
    title: "Throat Defects",
  };

  return (
    <TopicPage track="technical" topic={topic}>
      <section style={{ padding: "10px 0 40px" }}>
        <TPTitle>
          A throat is a brane-anchored zero of{" "}
          <span className="fu-mono" style={{ fontSize: "0.68em", color: "#7aa2ff" }}>ψ</span>{" "}
          with non-trivial profile along{" "}
          <span className="fu-mono" style={{ fontSize: "0.68em", color: "#7aa2ff" }}>w</span>.
        </TPTitle>
        <TPLede>
          The particle-analog of the program is the <em>throat</em>: a defect
          of the complex order parameter whose zero-locus meets the brane
          transversely at an isolated point and extends as a smooth curve into
          the bulk. Early closures parameterize a throat by a <em>radius</em>
          and a <em>length</em>; the upgrade treats it as a distributed
          moving wall <Tex tex="R(\Omega, w, t)" /> (topic 11).
        </TPLede>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 20 }}>
          <Badge kind="exact">Throat ansatz</Badge>
          <Badge kind="reduce">Static radius/length</Badge>
          <Badge kind="open">Moving-wall R(Ω,w,t)</Badge>
          <Chip label="sector: geometry + matter" />
        </div>
      </section>

      <TPSection
        anchor="ansatz"
        eyebrow="throat ansatz"
        heading="Cylindrical symmetry about the mouth."
      >
        <TPBody>
          Place the mouth at the origin of the brane,{" "}
          <Tex tex="(x_0, 0) \in \Sigma" />. Use coordinates{" "}
          <Tex tex="(r, \Omega, w)" /> where <Tex tex="r = |x - x_0|" /> and{" "}
          <Tex tex="\Omega \in S^2" /> is the angular part on the brane slice.
          The throat ansatz is
        </TPBody>

        <EqCard
          label="◇ throat ansatz · Part I Eq. 4.1"
          plain="f is a monotone profile with f(0)=0 and f(∞)=√ρ_∞. R(w) is the throat radius; n ∈ ℤ is the winding; φ specifies angular phase and w-twist."
          tex="\psi_\text{throat}(r, \Omega, w) \;=\; f\!\big(r/R(w)\big)\, e^{\,i n\,\varphi(\Omega,w)}"
        />

        <TPBody>
          The <em>radius</em> <Tex tex="R(w)" /> is the scale below which
          density is depleted at depth <Tex tex="w" />. Two limits are
          particularly useful:
        </TPBody>

        <ul style={{ color: "var(--ink-2)", lineHeight: 1.8, paddingLeft: 24, fontSize: 16 }}>
          <li>
            <strong style={{ color: "var(--ink-1)" }}>Static closure.</strong>{" "}
            <Tex tex="R(w) = R_0" /> constant up to a neck at{" "}
            <Tex tex="w = w_*" /> where the throat closes, with total length{" "}
            <Tex tex="L" />.
          </li>
          <li>
            <strong style={{ color: "var(--ink-1)" }}>Moving-wall closure.</strong>{" "}
            <Tex tex="R(\Omega, w, t)" /> is a dynamical field on the
            throat's cylindrical coordinates, satisfying its own PDE —
            currently <em>open</em>.
          </li>
        </ul>
      </TPSection>

      <TPSection
        anchor="charges"
        eyebrow="two integer charges"
        heading="A throat carries both a winding and an electric sign."
      >
        <TPBody>
          The winding integer <Tex tex="n \in \mathbb{Z}" /> counts the phase
          change of <Tex tex="\psi" /> around the throat axis — the same
          homotopy invariant introduced in topic 02. Independently, the
          throat carries an electric sign
        </TPBody>

        <EqCard
          label="◇ charge sign · Part I Eq. 4.2"
          plain="q_* is the microscopic branch coupling; q_eff is the observable brane charge. The factor 1/√Z_int dresses q_* through the EM localization integral."
          tex="\begin{aligned} \eta_Q &\;\in\; \{+1,\,-1\}, \\ q_* &\;=\; \eta_Q\, e_*, \\ q_\text{eff} &\;=\; q_* \,\big/\, \sqrt{Z_\text{int}} \end{aligned}"
        />

        <TPBody>
          It is a load-bearing feature of the framework that these two
          integers are <em>independent</em>. Circulation (winding) and electric
          sign are distinct geometric attributes of the throat. In particular:
        </TPBody>

        <TPCallout kind="warn">
          <strong style={{ color: "#e67ac6" }}>Firewall.</strong>{" "}
          Electric charge is <em>not</em> circulation. Circulation belongs to
          the magnetic / vortical sector of the matter field; the electric
          sign <Tex tex="\eta_Q" /> lives in the gauge sector's response along
          <Tex tex="\ w" />. The historical identifier <Tex tex="q = 1" /> on the
          gravity side is now <Tex tex="\kappa_\rho = 1" /> — a mass-dressing
          coefficient, not an electric charge. See §6.5 of the brief.
        </TPCallout>
      </TPSection>

      <TPSection
        anchor="bcs"
        eyebrow="boundary conditions"
        heading="Mouth, neck, and asymptotic profile."
      >
        <TPBody>
          A throat is specified by boundary data at three locations:
        </TPBody>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(220px, 100%), 1fr))", gap: 14, margin: "14px 0 4px" }}>
          {[
            { k: "Mouth", sym: "(x_0, 0)", v: "ψ regular on the brane; density profile f matches the smooth-pond boundary condition at r → ∞." },
            { k: "Neck",  sym: "w = w_*",  v: "R(w) attains its minimum R_min; density is maximally depleted. Sets the throat's dominant inverse length scale." },
            { k: "Interior tail", sym: "w → ∞", v: "Throat either closes smoothly (ψ → √ρ_∞) or extends indefinitely in the moving-wall case." },
          ].map((c) => (
            <div key={c.k} style={{
              padding: "18px 20px",
              border: "1px solid var(--rule)", borderRadius: 3,
              background: "rgba(16,20,42,0.45)",
            }}>
              <div className="fu-display" style={{ fontSize: 15, color: "var(--ink-1)", fontWeight: 400, marginBottom: 4 }}>
                {c.k}
              </div>
              <div className="fu-mono" style={{ color: "#7aa2ff", fontSize: 11.5, marginBottom: 8 }}>
                {c.sym}
              </div>
              <div className="fu-small" style={{ color: "var(--ink-3)", lineHeight: 1.55 }}>{c.v}</div>
            </div>
          ))}
        </div>
      </TPSection>

      <TPSection
        anchor="projected"
        eyebrow="brane projection of a throat"
        heading="What the brane observer reads."
      >
        <TPBody>
          Applying the projection of topic 03 to a throat produces a pair of
          localized brane densities: a density deficit{" "}
          <Tex tex="\widehat{\delta\rho}(r)" /> (read as mass) and an inflow
          current <Tex tex="\widehat{J^w}(r)" /> (read in topic 05 as the
          source of Newtonian attraction). Under the stiff EoS{" "}
          <Tex tex="P = K\rho^5" />, the projected mass is finite.
        </TPBody>

        <EqCard
          label="◇ brane observables · Part I Eq. 4.3"
          plain="M_brane is the brane-observed mass. Its dependence on (R_0, L) is the content of the Part II gravity chapters."
          tex="\begin{aligned} \widehat{\delta\rho}(r) &\;=\; \int W(w)\,\big(|\psi_\text{throat}|^2 - \rho_\infty\big)\, dw, \\ M_\text{brane} &\;=\; \int \widehat{\delta\rho}(r)\, d^3x \end{aligned}"
        />

        <TPBody>
          The electric sector reads{" "}
          <Tex tex="\widehat{A}_\mu, \widehat{F}_{\mu\nu}" /> through the
          localization profile <Tex tex="Z(w)" />, producing standard-looking
          3+1 Maxwell theory with{" "}
          <Tex tex="\mu_{0,\text{eff}} = \mu_0 / Z_\text{int}" /> and{" "}
          <Tex tex="q_\text{eff} = q_*/\sqrt{Z_\text{int}}" />. The derivation
          is the job of topic 06.
        </TPBody>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 18 }}>
          <Badge kind="reduce">Projected mass (static throat)</Badge>
          <Badge kind="reduce">Zero-mode EM coupling</Badge>
          <Badge kind="open">Moving-wall mass correction</Badge>
        </div>
      </TPSection>

      <TPSection
        anchor="mixed"
        eyebrow="mixed channels resurface here"
        heading="Mixed sector near a throat is not negligible."
      >
        <TPBody>
          The suppressed channels of topic 03 — <Tex tex="A_w,\ J^w,\ F_{\mu w},\ E_w,\ C_a = F_{a w}" /> —
          do not vanish near a throat. The near-field geometry sets a scale
          (the neck radius <Tex tex="R_\text{min}" />) below which the
          zero-mode ansatz breaks down. This is the locus of:
        </TPBody>

        <ul style={{ color: "var(--ink-2)", lineHeight: 1.8, paddingLeft: 24, fontSize: 16 }}>
          <li>brane–bulk leakage — matter and charge moving between <Tex tex="\Sigma" /> and the bulk,</li>
          <li>plasma non-ideality corrections in dense throat ensembles,</li>
          <li>outgoing quadrupole normalization for moving-throat radiation,</li>
          <li>the g-factor / anomaly channel for bound-throat configurations.</li>
        </ul>

        <TPBody>
          None of these corrections are claimed to be resolved here. They are
          queued against the moving-throat PDE (topic 11) and the results
          ledger.
        </TPBody>
      </TPSection>

      <TPSection anchor="next" eyebrow="end of part I" heading="What Part II does with this.">
        <TPBody>
          Part II will run the throat through each of the familiar force
          sectors. Gravity (topic 05) reads the projected inflow{" "}
          <Tex tex="\widehat{J^w}" />. Electromagnetism (topic 06) reads the
          projected Maxwell sector with its localization. Light (topic 08)
          reads the linearized ambient fluid's ripple. Atoms (topic 09) read
          bound throat–antithroat pairs. Two-body PN (topic 10) reads
          throat–throat response at large separation. The moving-throat
          frontier (topic 11) is the uncompleted PDE that ties it together.
        </TPBody>
      </TPSection>
    </TopicPage>
  );
}
