import React from 'react';
import { TopicPage, TPTitle, TPLede, TPSection, TPBody, TPCallout } from '../../components/TopicPage.jsx';
import { Badge, Chip, EqCard, Tex } from '../../components/ui.jsx';
import { ZENODO } from '../../data/citations.js';

// Part II · Topic 06 — Localized 4+1 Maxwell — TECHNICAL track

export default function TechnicalEM() {
  const topic = {
    n: "06",
    part: "II",
    partName: "Applications",
    slug: "electromagnetism",
    title: "Localized 4+1 Maxwell",
  };

  return (
    <TopicPage track="technical" topic={topic}>
      <section style={{ padding: "10px 0 40px" }}>
        <TPTitle>
          A real gauge field on{" "}
          <span className="fu-mono" style={{ fontSize: "0.68em", color: "#7aa2ff" }}>
            ℝ³ × ℝ<sub>w</sub> × ℝ<sub>t</sub>
          </span>{" "}
          with a localization profile{" "}
          <span className="fu-mono" style={{ fontSize: "0.68em", color: "#7aa2ff" }}>Z(w)</span>.
        </TPTitle>
        <TPLede>
          The EM sector is a 4+1 Maxwell theory carrying a localization
          envelope along <Tex tex="w" />. Under a zero-mode reduction it
          produces standard 3+1 Maxwell theory on the brane with an effective
          coupling <Tex tex="\mu_{0,\text{eff}} = \mu_0 / Z_\text{int}" /> and
          a thickness-dressed observable charge{" "}
          <Tex tex="q_\text{eff} = q_*/\sqrt{Z_\text{int}}" />. Higher modes
          and mixed channels <Tex tex="A_w, F_{\mu w}, E_w" /> are suppressed
          in the far-field but remain microscopically active.
        </TPLede>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 20 }}>
          <Badge kind="exact">Parent 4+1 action</Badge>
          <Badge kind="reduce">Zero-mode 3+1 Maxwell</Badge>
          <Badge kind="open">Mixed-sector finite-Z corrections</Badge>
          <Chip label="sector: gauge" />
          <Chip label="4D · Maxwell" href={ZENODO.maxwell.url} />
          <Chip label="Prior · EM & charged defects" href={ZENODO.priorEM.url} />
        </div>
      </section>

      <TPSection
        anchor="parent"
        eyebrow="parent 4+1 action"
        heading="Maxwell kinetic term, weighted by a localization profile."
      >
        <TPBody>
          Introduce a real gauge potential <Tex tex="A_M(x,w,t)" /> with{" "}
          <Tex tex="M \in \{\mu, w\}" />, field strength{" "}
          <Tex tex="F_{MN} = \partial_M A_N - \partial_N A_M" />, and a
          fixed localization envelope <Tex tex="Z(w) \geq 0" /> with{" "}
          <Tex tex="\int Z(w)\, dw = Z_\text{int}" />. The parent action is
        </TPBody>

        <EqCard
          label="◇ parent action · exact"
          plain="The current Maxwell paper includes both a gauge-fixing term and an external-source term. Minimal coupling to matter supplies the dynamical brane current bookkeeping downstream."
          tex="S_{\text{EM}} \;=\; \int d^3x\,dw\,dt\left[-\frac{Z(w)}{4\mu_0}F_{MN}F^{MN}-\frac{1}{2\xi\,\mu_0}\big(\partial\!\cdot\!A\big)^2 + A_M J_{\rm ext}^M\right]"
        />

        <TPBody>
          Two limits of <Tex tex="Z(w)" /> bracket the physical picture. In
          the <em>thin-brane</em> limit <Tex tex="Z(w) \to \delta(w)" />, the
          gauge field is confined entirely to the brane and 3+1 Maxwell is
          exact. In the <em>uniform</em> limit <Tex tex="Z(w) = \text{const}" />{" "}
          the theory is a homogeneous 4+1 Maxwell — all <Tex tex="w" /> layers
          equivalent. The program treats a physical regime between these:
          localized but not degenerate.
        </TPBody>
      </TPSection>

      <TPSection
        anchor="zero-mode"
        eyebrow="zero-mode reduction · controlled"
        heading="Ansatz for the brane-localized gauge modes."
      >
        <TPBody>
          Decompose the potential into a zero-mode and transverse residuals:
        </TPBody>

        <EqCard
          label="◇ zero-mode ansatz · controlled reduction"
          plain="f_0 is the lowest transverse mode against the localization profile Z(w). Higher f_k are suppressed by the profile gap; A_w remains part of the microscopic mixed sector."
          tex="A_\mu(x,w,t) \;=\; a_\mu(x,t)\, f_0(w) \;+\; \sum_{k \geq 1} a_\mu^{(k)}(x,t)\, f_k(w), \qquad A_w(x,w,t) \;=\; \phi_w(x,t)\, g(w) + \ldots"
        />

        <TPBody>
          Substituting into the parent action, integrating out <Tex tex="w" />{" "}
          against <Tex tex="Z(w)" />, and keeping only the zero-mode yields a
          3+1 Maxwell kinetic term
        </TPBody>

        <EqCard
          label="◇ reduced 3+1 Maxwell · controlled reduction"
          plain="f_{μν} = ∂_μ a_ν − ∂_ν a_μ is the brane-level field strength. The effective permeability is rescaled by the localization integral."
          tex="S_{\text{EM},0} \;=\; -\frac{Z_\text{int}}{4\mu_0} \int f_{\mu\nu}\, f^{\mu\nu}\; d^3x\, dt, \qquad \mu_{0,\text{eff}} \;=\; \mu_0 \,\big/\, Z_\text{int}"
        />

        <TPBody>
          Brane observers, using <Tex tex="\mu_{0,\text{eff}}" /> in place of
          the microscopic <Tex tex="\mu_0" />, recover exactly Maxwell's
          equations in their standard 3+1 form.
        </TPBody>
      </TPSection>

      <TPSection
        anchor="charge"
        eyebrow="observable charge"
        heading="Thickness-controlled coupling."
      >
        <TPBody>
          A throat with microscopic branch coupling{" "}
          <Tex tex="q_* = \eta_Q\, e_*" /> (topic 04) sources the parent
          current <Tex tex="J^M" />. The brane-observed charge couples to the
          zero-mode gauge field through the square-root of the localization
          integral:
        </TPBody>

        <EqCard
          label="◇ observable charge · controlled reduction"
          plain="The sign η_Q is topological — set by which half of w the throat punctures into (+w or −w). The magnitude is set by canonical zero-mode normalization through Z_int."
          tex="q_\text{eff} \;=\; q_* \,\big/\, \sqrt{Z_\text{int}}, \qquad \eta_Q \in \{+1,-1\}"
        />

        <TPBody>
          This factorization has two important consequences. First: the
          electron's elementary charge, in the framework, is not a free
          parameter of the theory. It is{" "}
          <Tex tex="e_* / \sqrt{Z_\text{int}}" /> where{" "}
          <Tex tex="e_*" /> is the microscopic branch coupling and{" "}
          <Tex tex="Z_\text{int}" /> is set by the declared localization
          profile. Second: if the brane's thickness varied cosmologically,
          observable coupling strengths would track — a testable but not
          currently claimed prediction.
        </TPBody>

        <TPCallout kind="warn">
          <strong style={{ color: "#e67ac6" }}>Charge firewall.</strong>{" "}
          Electric charge <Tex tex="\eta_Q" /> is the topological sign of
          the throat's puncture orientation along <Tex tex="w" /> — which
          half-bulk (<Tex tex="+w" /> or <Tex tex="-w" />) the throat opens
          into. It is <em>not</em> the matter field's circulation on the
          brane. Circulation belongs to the magnetic/vortical sector and
          lives in the matter order parameter's phase field. See §6.5 of
          the brief.
        </TPCallout>
      </TPSection>

      <TPSection
        anchor="mixed"
        eyebrow="mixed channels"
        heading="What the zero-mode reduction leaves out."
      >
        <TPBody>
          The zero-mode closure suppresses several channels that are not
          removed from the microscopic theory. Writing them as brane
          observables:
        </TPBody>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))", gap: 12, margin: "14px 0 6px" }}>
          {[
            { sym: "A_w", role: "Gauge potential in w — brane–bulk leakage current" },
            { sym: "F_{μw}", role: "Mixed field strength — electric drift along w" },
            { sym: "E_w", role: "w-component of the electric field — moving-throat response" },
            { sym: "C_a = F_{aw}", role: "Chiral mixed component — g-factor channel" },
            { sym: "J^w", role: "Charge current along w — exchange with bulk reservoir" },
            { sym: "a_μ^{(k≥1)}", role: "Higher-f_k modes — cut off by Z-profile gap" },
          ].map((c) => (
            <div key={c.sym} style={{
              padding: "16px 18px", border: "1px solid var(--rule)", borderRadius: 3,
              background: "rgba(16,20,42,0.45)",
            }}>
              <div className="fu-mono" style={{ color: "#7aa2ff", fontSize: 15, marginBottom: 4 }}>
                {c.sym}
              </div>
              <div className="fu-small" style={{ color: "var(--ink-3)", fontSize: 14, lineHeight: 1.5 }}>
                {c.role}
              </div>
            </div>
          ))}
        </div>

        <TPBody>
          These channels matter in four downstream contexts: plasma
          non-ideality (topic 07), outgoing quadrupole normalization at
          2.5PN and 4PN (topic 10), near-throat leakage under moving-wall
          dynamics (topic 11), and the g-factor / anomaly program for bound
          configurations (topic 09). In each case, the relevant channel
          re-excites because an assumption of the zero-mode reduction fails —
          strong fields, rapid w-dynamics, or resonance with a higher mode.
        </TPBody>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
          <Badge kind="reduce">Zero-mode Maxwell (far-field)</Badge>
          <Badge kind="open">Mixed-channel corrections</Badge>
          <Chip label="consumed by: topic 07, 09, 10, 11" />
        </div>
      </TPSection>

      <TPSection
        anchor="gauge"
        eyebrow="gauge structure"
        heading="Choice of gauge on Σ is free; mixed gauge is not."
      >
        <TPBody>
          The brane-reduced action is gauge-invariant under{" "}
          <Tex tex="a_\mu \to a_\mu + \partial_\mu \Lambda(x,t)" />, so the
          full machinery of Lorenz and Coulomb gauges applies on <Tex tex="\Sigma" />.
          At the parent level, however, there is a larger gauge group
          including w-dependent transformations{" "}
          <Tex tex="A_M \to A_M + \partial_M \Lambda(x,w,t)" />. The
          zero-mode ansatz partially fixes this extended gauge by demanding
          alignment with the profile <Tex tex="f_0(w)" />.
        </TPBody>

        <TPBody>
          Gauge transformations that re-excite higher modes (i.e. that vary
          non-trivially in <Tex tex="w" />) are not available to the
          brane observer without leaving the reduction. This is the precise
          statement of how the zero-mode reduction trades microscopic gauge
          freedom for brane-side predictability.
        </TPBody>
      </TPSection>

      <TPSection anchor="next" eyebrow="forward reference" heading="What uses this.">
        <TPBody>
          The plasma chapter (topic 07) lifts the single-throat charge to a
          multi-species charged medium and asks how MHD emerges. The light
          chapter (topic 08) uses the transverse sector of the matter field
          plus the zero-mode <Tex tex="f_{\mu\nu}" /> to obtain wave
          propagation at <Tex tex="c" />. Atomic chapter (topic 09) uses the
          Coulomb limit of this reduction. The 2.5PN / 4PN ledger (topic 10)
          uses the outgoing zero-mode for radiation and flags the mixed
          channel as the normalization gap.
        </TPBody>
      </TPSection>
    </TopicPage>
  );
}
