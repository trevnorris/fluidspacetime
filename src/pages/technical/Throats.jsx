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
          A throat is a finite-radius brane-bulk opening represented by{" "}
          <span className="fu-mono" style={{ fontSize: "0.68em", color: "#7aa2ff" }}>
            Σ = r - R(Ω,w,t)
          </span>.
        </TPTitle>
        <TPLede>
          The particle analog of the program is the <em>throat</em>: a finite
          brane-bulk defect, or puncture/open conduit, whose brane-side mouth is
          only the entrance cross-section. The interior carries support,
          wall, Maxwell/mixed, and outgoing-port degrees of freedom. Early
          closures parameterize a throat by a <em>radius</em> and a{" "}
          <em>length</em>; the distributed moving-wall lift uses{" "}
          <Tex tex="R(\Omega, w, t)" /> but remains an effective closure until
          the promoted parent wall action is supplied.
        </TPLede>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 20 }}>
          <Badge kind="exact">Physical ontology</Badge>
          <Badge kind="reduce">Effective wall closure</Badge>
          <Badge kind="open">Moving-wall R(Ω,w,t)</Badge>
          <Chip label="sector: geometry + matter" />
        </div>
      </section>

      <TPSection
        anchor="ansatz"
        eyebrow="effective throat geometry"
        heading="The throat is a surface/open conduit, not a pointlike zero"
      >
        <TPBody>
          Place the mouth near <Tex tex="x_0" /> on the brane and use local
          coordinates <Tex tex="(r,\Omega,w)" />, where{" "}
          <Tex tex="r = |x-x_0|" /> and <Tex tex="\Omega" /> labels direction
          on the brane-side mouth sphere. The current ontology represents the
          finite throat by a level-set or shape-field closure:
        </TPBody>

        <EqCard
          label="◇ throat surface · ontology closure"
          plain="The mouth is at w = 0 with radius a. The open-exit condition is R(L) > 0; a hard cap R(L) = 0 is obsolete except as a negative-control toy model."
          tex="\begin{aligned} \Sigma(\mathbf X,t) &\;=\; r - R(\Omega,w,t), \\ \Sigma(\mathbf X,t) &\;=\;0, \\ R(0) &\;=\; a,\qquad R(L) > 0 \end{aligned}"
        />

        <TPBody>
          Axisymmetric or static reductions may collapse{" "}
          <Tex tex="R(\Omega,w,t)" /> to a simpler radial profile or to the
          coarse parameters <Tex tex="(a,L)" />. Those variables are useful
          branch data, but the current strict parent action does not yet contain
          an autonomous wall PDE unless an explicit wall/throat action{" "}
          <Tex tex="S_\Sigma" /> is added.
        </TPBody>

        <ul style={{ color: "var(--ink-2)", lineHeight: 1.8, paddingLeft: 24, fontSize: 16 }}>
          <li>
            <strong style={{ color: "var(--ink-1)" }}>Static closure.</strong>{" "}
            The branch is summarized by a finite mouth radius{" "}
            <Tex tex="a" />, a finite depth <Tex tex="L" />, and an open exit{" "}
            <Tex tex="R(L)>0" />.
          </li>
          <li>
            <strong style={{ color: "var(--ink-1)" }}>Moving-wall closure.</strong>{" "}
            <Tex tex="R(\Omega, w, t)" /> is a dynamical field on the
            throat's coordinates in an effective wall/throat closure; its
            strict parent-level promotion is currently <em>open</em>.
          </li>
        </ul>
      </TPSection>

      <TPSection
        anchor="charges"
        eyebrow="winding and charge branch"
        heading="Winding and electric sign are separate data"
      >
        <TPBody>
          The winding integer <Tex tex="n \in \mathbb{Z}" /> counts the phase
          change of <Tex tex="\psi" /> around the throat axis — the same
          homotopy invariant introduced in topic 02. Independently, a charged
          throat branch carries an electric sign:
        </TPBody>

        <EqCard
          label="◇ charge sign · Part I Eq. 4.2"
          plain="q_* is the microscopic branch coupling; q_eff is the observable brane charge. The factor 1/√Z_int dresses q_* through the EM localization integral."
          tex="\begin{aligned} \eta_Q &\;\in\; \{+1,\,-1\}, \\ q_* &\;=\; \eta_Q\, e_*, \\ q_\text{eff} &\;=\; q_* \,\big/\, \sqrt{Z_\text{int}} \end{aligned}"
        />

        <TPBody>
          It is a load-bearing feature of the framework that these two pieces
          of branch data are <em>independent</em>. Circulation (winding) and
          electric sign are distinct throat-sector labels. In particular:
        </TPBody>

        <TPCallout kind="warn">
          <strong style={{ color: "#e67ac6" }}>Firewall.</strong>{" "}
          Electric charge is <em>not</em> circulation. Circulation belongs to
          the magnetic / vortical sector of the matter field; the electric
          sign <Tex tex="\eta_Q" /> is the puncture-orientation branch, and the
          observed brane coupling is the localization-dressed{" "}
          <Tex tex="q_\text{eff}" />. The historical identifier{" "}
          <Tex tex="q = 1" /> on the
          gravity side is now <Tex tex="\kappa_\rho = 1" /> — a mass-dressing
          coefficient, not an electric charge.
        </TPCallout>
      </TPSection>

      <TPSection
        anchor="bcs"
        eyebrow="boundary conditions"
        heading="Mouth, interior support, and open exit"
      >
        <TPBody>
          A throat is specified by boundary data at three locations:
        </TPBody>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(220px, 100%), 1fr))", gap: 14, margin: "14px 0 4px" }}>
          {[
            { k: "Mouth", sym: "w = 0, R(0)=a", v: "The brane-side cross-section. It is the observable entrance geometry, not the whole defect." },
            { k: "Interior support",  sym: "Σ < 0",  v: "The bulk throat/cavity region carrying support, wall, Maxwell/mixed, and outgoing-port degrees of freedom." },
            { k: "Open exit", sym: "w = L, R(L)>0", v: "The finite-radius outlet into unconfined bulk. A hard cap R(L)=0 is obsolete except as an explicit negative control." },
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
        heading="What the brane observer reads"
      >
        <TPBody>
          Applying the projection of topic 03 to a throat produces a pair of
          localized brane profiles: density/source bookkeeping such as{" "}
          <Tex tex="\widehat{\delta\rho}(r)" /> and transverse current data
          such as <Tex tex="\widehat{J^w}(r)" />. Topic 05 uses the projected
          inflow channel in the Newtonian regime; the amplitudes are branch
          data rather than a completed generic throat theorem.
        </TPBody>

        <EqCard
          label="◇ projected throat data · bookkeeping"
          plain="These projected quantities are readouts of a frozen branch; they are not the full physical ontology of the throat."
          tex="\begin{aligned} \widehat{\delta\rho}(r) &\;=\; \int W(w)\,\big(\rho(r,w)-\rho_\infty\big)\, dw, \\ \widehat{J^w}(r) &\;=\; \int W(w)\,J^w(r,w)\,dw \end{aligned}"
        />

        <TPBody>
          The electric far-field sector is a controlled reduction of the
          localized 4+1 Maxwell system. Under the zero-mode assumptions, the
          localization profile <Tex tex="Z(w)" /> produces standard-looking
          3+1 Maxwell theory with{" "}
          <Tex tex="\mu_{0,\text{eff}} = \mu_0 / Z_\text{int}" /> and{" "}
          <Tex tex="q_\text{eff} = q_*/\sqrt{Z_\text{int}}" />. The derivation
          is the job of topic 06.
        </TPBody>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 18 }}>
          <Badge kind="reduce">Projected source profiles</Badge>
          <Badge kind="reduce">Zero-mode EM coupling</Badge>
          <Badge kind="open">Moving-wall branch amplitudes</Badge>
        </div>
      </TPSection>

      <TPSection
        anchor="mixed"
        eyebrow="mixed channels resurface here"
        heading="Mixed sector near a throat is not negligible"
      >
        <TPBody>
          The suppressed channels of topic 03 — <Tex tex="A_w,\ J^w,\ F_{\mu w},\ E_w,\ C_a = F_{a w}" /> —
          are generically expected near a charged throat. The zero-mode ansatz
          suppresses them only in the controlled far-field brane limit. This is
          the locus of:
        </TPBody>

        <ul style={{ color: "var(--ink-2)", lineHeight: 1.8, paddingLeft: 24, fontSize: 16 }}>
          <li>brane–bulk leakage and transverse current exchange,</li>
          <li>plasma non-ideality corrections in dense throat ensembles,</li>
          <li>outgoing quadrupole normalization targets for moving-throat radiation,</li>
          <li>conditional g-factor / anomaly channels for bound-throat configurations.</li>
        </ul>

        <TPBody>
          None of these corrections are claimed to be resolved here. They are
          queued against the moving-throat PDE (topic 11) and the results
          ledger.
        </TPBody>
      </TPSection>

      <TPSection anchor="next" eyebrow="end of part I" heading="What Part II does with this">
        <TPBody>
          Part II will run the throat through each of the familiar force
          sectors. Gravity (topic 05) reads the projected inflow{" "}
          <Tex tex="\widehat{J^w}" />. Electromagnetism (topic 06) reads the
          localized Maxwell sector through its zero-mode reduction. Light (topic 08)
          reads the linearized ambient fluid's ripple. Atoms (topic 09) read
          reduced bound-throat configurations. Two-body PN (topic 10) reads
          finite-throat response at large separation. The moving-throat
          frontier (topic 11) is the effective closure whose strict parent
          promotion and branch realization remain open.
        </TPBody>
      </TPSection>
    </TopicPage>
  );
}
