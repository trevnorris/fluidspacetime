import React from 'react';
import { TopicPage, TPTitle, TPLede, TPSection, TPBody, TPCallout } from '../../components/TopicPage.jsx';
import { Badge, Chip, EqCard, Tex } from '../../components/ui.jsx';
import { ZENODO } from '../../data/citations.js';

// Part 1 · Topic 03 — A Hidden Extra Dimension — TECHNICAL track

export default function TechnicalHiddenDirection() {
  const topic = {
    n: "03",
    part: "I",
    partName: "Foundations",
    slug: "hidden-direction",
    title: "A Hidden Extra Dimension",
  };

  return (
    <TopicPage track="technical" topic={topic}>
      <section style={{ padding: "10px 0 40px" }}>
        <TPTitle>
          The ambient arena is{" "}
          <span className="fu-mono" style={{ fontSize: "0.68em", color: "#7aa2ff" }}>
            ℝ³ × ℝ<sub>w</sub>
          </span>. The brane is the hypersurface{" "}
          <span className="fu-mono" style={{ fontSize: "0.68em", color: "#7aa2ff" }}>
            w = 0
          </span>.
        </TPTitle>
        <TPLede>
          A brane observer measures the fluid through a projection in{" "}
          <Tex tex="w" /> — not a coordinate restriction. We make the
          distinction between <em>projection</em> (exact, defined by a kernel)
          and <em>reduction</em> (approximate, defined by a limit) explicit,
          because the rest of the program depends on keeping them apart.
        </TPLede>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 20 }}>
          <Badge status="exact" label="Ambient geometry" />
          <Badge status="exact" label="Projection kernel" />
          <Badge status="reduction" label="Zero-mode closure" />
          <Chip label="sector: geometry" />
          <Chip label="4D · Action & Projections" href={ZENODO.action.url} />
        </div>
      </section>

      <TPSection
        anchor="arena"
        eyebrow="ambient geometry"
        heading="The spatial arena is four-dimensional; time is a real line."
      >
        <TPBody>
          The parent theory lives on the flat manifold{" "}
          <Tex tex="\mathcal{M} = \mathbb{R}^3_{\mathbf{x}} \times \mathbb{R}_w \times \mathbb{R}_t" />{" "}
          with Euclidean signature on spatial factors. The extra spatial
          coordinate is labelled <Tex tex="w" />. No compactification is
          imposed: <Tex tex="w \in \mathbb{R}" /> and boundary conditions are
          asymptotic flatness of the fluid. The brane is the embedded
          hypersurface
        </TPBody>

        <EqCard
          eyebrow="brane embedding · Part I Eq. 3.1"
          tex="\Sigma \;=\; \{\, (x,w,t) \in \mathcal{M} \,:\, w = 0 \,\},\qquad \dim \Sigma = 3+1"
          note="Σ is a static, flat 3+1 slice in this volume of the program. Moving-throat extensions promote Σ to a distributed profile in topic 11."
        />

        <TPBody>
          Quantities on <Tex tex="\mathcal{M}" /> will be decorated with the
          argument <Tex tex="w" />. Quantities on <Tex tex="\Sigma" /> will be
          denoted with a <Tex tex="\hat{\cdot}" /> or an explicit{" "}
          <Tex tex="w = 0" /> evaluation. This is a notational choice only; no
          physical claim is embedded in it.
        </TPBody>
      </TPSection>

      <TPSection
        anchor="projection"
        eyebrow="projection kernel · exact"
        heading="What the brane measures is the w-average against a fixed kernel W(w)."
      >
        <TPBody>
          Let <Tex tex="\Phi(x,w,t)" /> denote any bulk field. The brane's
          measurement of <Tex tex="\Phi" /> is defined as the projected field
        </TPBody>

        <EqCard
          eyebrow="projection · Part I Eq. 3.2"
          tex="\widehat{\Phi}(x,t) \;=\; \int_{-\infty}^{\infty} W(w)\, \Phi(x,w,t)\, dw, \qquad \int W(w)\, dw = 1,\ \ W \geq 0"
          note="W(w) is part of the data of the theory, not an approximation. It declares how the brane samples w."
        />

        <TPBody>
          Two projections of particular importance are the <em>normalization
          integral</em>{" "}
          <Tex tex="W_\text{int} = \int W(w)^2\, dw" /> (which weights density
          couplings on the brane) and the gauge localization integral{" "}
          <Tex tex="Z_\text{int} = \int Z(w)\, dw" /> — appearing in the EM
          sector of topic 06 and setting the observable coupling{" "}
          <Tex tex="\mu_{0,\text{eff}} = \mu_0 / Z_\text{int}" />.
        </TPBody>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
          <Badge status="exact" label="W(w) given a priori" />
          <Chip label="consumed by: topic 06 (EM)" />
          <Chip label="consumed by: topic 05 (inflow)" />
        </div>
      </TPSection>

      <TPSection
        anchor="reduction"
        eyebrow="reduction ≠ projection · controlled limit"
        heading="Brane reduction is an approximation with explicit assumptions."
      >
        <TPBody>
          Many of the brane-side equations used downstream are not the exact
          projection of the parent PDE, but its <em>reduction</em> under a
          declared limit. A typical reduction assumes low-frequency motion in{" "}
          <Tex tex="w" />, writes <Tex tex="\Phi(x,w,t) \approx \phi_0(x,t)\,f(w)" />{" "}
          for some profile <Tex tex="f(w)" />, and integrates out <Tex tex="w" />{" "}
          against <Tex tex="f" /> to obtain a closed brane equation for{" "}
          <Tex tex="\phi_0" />.
        </TPBody>

        <EqCard
          eyebrow="zero-mode ansatz · controlled reduction"
          tex="\Phi(x,w,t) \;\approx\; \phi_0(x,t)\, f(w) \;+\; \delta\Phi_\perp(x,w,t), \qquad \langle f,\, \delta\Phi_\perp\rangle_w = 0"
          note="δΦ_⊥ is the suppressed higher-mode residual. Its neglect is the content of the reduction badge."
        />

        <TPBody>
          The program keeps these two operations notationally and
          epistemically distinct. A reduction that is also a projection (i.e.
          the zero-mode captures the entire projected quantity) is signalled
          with the stronger <em>exact</em> badge. A reduction that requires
          the zero-mode hypothesis carries the <em>controlled reduction</em>{" "}
          badge. Open residuals — e.g. the moving-throat PDE's non-local{" "}
          <Tex tex="A_w, J^w" /> channels of topic 11 — are labelled{" "}
          <em>open</em>.
        </TPBody>

        <TPCallout kind="warn">
          <strong style={{ color: "#e67ac6" }}>Notation trap.</strong>{" "}
          The historical literature occasionally conflates projection with
          reduction. In this project's ledger they are two different objects.
          The honesty rail flags which is in play.
        </TPCallout>
      </TPSection>

      <TPSection
        anchor="modes"
        eyebrow="mode structure"
        heading="Suppressed channels along w."
      >
        <TPBody>
          The zero-mode closure suppresses — but does not remove — several
          bulk channels that reappear in downstream topics. We list them here
          to reserve vocabulary:
        </TPBody>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12,
          margin: "16px 0 4px",
        }}>
          {[
            { sym: "A_w", role: "Gauge potential component in w — enters brane leakage" },
            { sym: "J^w", role: "Matter current along w — brane–bulk exchange" },
            { sym: "F_{μw}", role: "Mixed field-strength — electric drift in w" },
            { sym: "E_w", role: "Electric component in w — moving-throat response" },
            { sym: "C_a = F_{aw}", role: "Chiral mixed component — g-factor channel" },
            { sym: "δρ_⊥", role: "Non-zero-mode density — plasma non-ideality" },
          ].map((c) => (
            <div key={c.sym} style={{
              padding: "16px 18px", border: "1px solid var(--rule)", borderRadius: 3,
              background: "rgba(16,20,42,0.45)",
            }}>
              <div className="fu-mono" style={{ color: "#7aa2ff", fontSize: 13, marginBottom: 4 }}>
                {c.sym}
              </div>
              <div className="fu-small" style={{ color: "var(--ink-3)", fontSize: 12.5, lineHeight: 1.5 }}>
                {c.role}
              </div>
            </div>
          ))}
        </div>

        <TPBody>
          These channels are suppressed in the far-field brane Maxwell limit
          (topic 06) but cannot be removed from the microscopic theory. Any
          physical context that breaks the zero-mode hypothesis — strong
          fields, rapid w-dynamics, near-throat geometry — will re-excite them.
        </TPBody>
      </TPSection>

      <TPSection anchor="next" eyebrow="forward reference" heading="What this sets up.">
        <TPBody>
          The machinery defined here is applied immediately in topic 04:
          throats are brane-anchored defect geometries whose full profile
          extends into <Tex tex="w" />, and whose brane trace is read via the
          projection kernel above. Gravity (topic 05) comes from the projected
          inflow current{" "}
          <Tex tex="\widehat{J^w}" /> into a throat. Electromagnetism (topic
          06) comes from the projected circulation of a 4+1 Maxwell sector with
          its own localization profile <Tex tex="Z(w)" />.
        </TPBody>
      </TPSection>
    </TopicPage>
  );
}
