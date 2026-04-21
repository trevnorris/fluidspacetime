/* global React, TopicPage, TPTitle, TPLede, TPSection, TPBody, TPCallout, Badge, Chip, EqCard, Tex, ZENODO */
// Part II · Topic 10 — The Post-Newtonian Ledger — TECHNICAL

function TechnicalPN() {
  const topic = {
    n: "10",
    part: "II",
    partName: "Applications",
    slug: "pn-ledger",
    title: "The Post-Newtonian Ledger",
    prev: { title: "09 · Atomic Spectra, g-factors, Anomalies" },
    next: { title: "11 · The Moving-Throat PDE" },
  };

  return (
    <TopicPage track="technical" topic={topic}>
      <section style={{ padding: "10px 0 40px" }}>
        <TPTitle>
          Newton · 1PN · 2PN · 3PN — derived. 2.5PN · 4PN — conditional,
          closure gated by the moving-throat PDE.
        </TPTitle>
        <TPLede>
          The post-Newtonian expansion of the brane-projected EoM (topic 05)
          reproduces the full conservative sectors of GR through 3PN. Two
          conditional results sit on top of this ladder: the 2.5PN
          point-particle quadrupole formula, and the full conservative 4PN
          sector. Both are <em>conditional</em> — they rest on a stated
          closure that will be resolved when the moving-throat PDE
          (topic 11) is closed. This page states the ledger as a table of
          coefficients with Zenodo sources on every row.
        </TPLede>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 20 }}>
          <Badge status="exact" label="Newton · 1PN · 2PN · 3PN" />
          <Badge status="reduction" label="2.5PN · 4PN (conditional)" />
          <Chip label="4D · 1PN" href={ZENODO.pn1.url} />
          <Chip label="4D · 2PN" href={ZENODO.pn2.url} />
          <Chip label="4D · 2.5PN" href={ZENODO.pn25.url} />
          <Chip label="4D · 3PN" href={ZENODO.pn3.url} />
          <Chip label="4D · 4PN" href={ZENODO.pn4.url} />
        </div>
      </section>

      <TPSection
        anchor="setup"
        eyebrow="setup"
        heading="PN expansion of the projected Einstein equations."
      >
        <TPBody>
          Linearize the projected EoM of topic 05 about a flat ambient
          brane. Expand in <Tex tex="\varepsilon = v/c" /> and organize by
          powers of <Tex tex="\varepsilon" />:
        </TPBody>

        <EqCard
          eyebrow="metric expansion · Eq. 10.1"
          tex="\widehat{g}_{\mu\nu} \;=\; \eta_{\mu\nu} \;+\; h^{(2)}_{\mu\nu} \,\varepsilon^2 \;+\; h^{(3)}_{\mu\nu}\,\varepsilon^3 \;+\; h^{(4)}_{\mu\nu}\,\varepsilon^4 \;+\; \ldots"
          note="h^(n) is the n-th PN metric perturbation. Odd-n terms carry radiation; even-n terms carry conservative dynamics."
        />

        <TPBody>
          The EoM at each order is a linear Poisson-type equation in{" "}
          <Tex tex="h^{(n)}" />, sourced by a combination of lower-order{" "}
          <Tex tex="h^{(k &lt; n)}" /> and the matter stress tensor. The
          fluid-picture modification is a specific correction to this
          source:
        </TPBody>

        <EqCard
          eyebrow="modified source · Eq. 10.2"
          tex="\Box\, h^{(n)}_{\mu\nu} \;=\; -16\pi G \, T^{\text{brane}}_{\mu\nu} \;+\; \Theta^{(n)}_{\mu\nu}\big[W, Z, \rho, F\big]"
          note="Θ^{(n)} is the projection/mixed-sector correction at order n. Θ^{(n)} = 0 for n ≤ 4 under the controlled reduction, except at n = 5 (2.5PN) and n = 7 (3.5PN) where mixed-channel contributions survive."
        />
      </TPSection>

      <TPSection
        anchor="ledger"
        eyebrow="the ledger · coefficients"
        heading="One row per PN order."
      >
        <div style={{ margin: "14px 0" }}>
          {[
            {
              status: "exact",
              order: "Newton (0PN)",
              quantity: "Φ = −GM/r",
              coeff: "G matches Newton's constant via G = (throat integral) / (4π ρ₀)",
              source: "topic 05 · Eq. 5.3",
            },
            {
              status: "exact",
              order: "1PN (full)",
              quantity: "Full first post-Newtonian sector",
              coeff: "Full 1PN two-body Lagrangian derived under the controlled reduction; term-by-term match to GR",
              source: "4D · 1PN full  ·  zenodo.19450102",
            },
            {
              status: "exact",
              order: "2PN (conservative)",
              quantity: "Full conservative 2PN sector",
              coeff: "All conservative terms at O(v⁴/c⁴) derived; match to GR verified",
              source: "4D · 2PN conservative  ·  zenodo.19450284",
            },
            {
              status: "reduction",
              order: "2.5PN (conditional)",
              quantity: "Point-particle quadrupole radiation",
              coeff: "dE/dt reproduces the GR quadrupole formula under a stated closure; the closure is itself conditional",
              source: "4D · 2.5PN conditional  ·  zenodo.19492270",
            },
            {
              status: "exact",
              order: "3PN (conservative)",
              quantity: "Full conservative 3PN sector",
              coeff: "All conservative terms at O(v⁶/c⁶) derived and matched to GR — the strongest cross-check to date",
              source: "4D · 3PN conservative  ·  zenodo.19501724",
            },
            {
              status: "reduction",
              order: "4PN (conditional)",
              quantity: "Full conservative 4PN sector",
              coeff: "All conservative terms at O(v⁸/c⁸) derived conditional on (i) the 2.5PN closure and (ii) assumptions carried from 3PN",
              source: "4D · 4PN conditional  ·  zenodo.19561056",
            },
            {
              status: "open",
              order: "radiation reaction (2.5PN+)",
              quantity: "Closure of the conditional 2.5PN branch",
              coeff: "Conditionality of 2.5PN and 4PN will be resolved by the moving-throat PDE (topic 11)",
              source: "gated by in-prep PDE paper",
            },
          ].map((row, i) => {
            const colorMap = {
              exact:     { bar: "#7fc69d", ring: "#7fc69d55", tint: "rgba(127,198,157,0.07)" },
              reduction: { bar: "#7aa2ff", ring: "#7aa2ff55", tint: "rgba(122,162,255,0.07)" },
              open:      { bar: "#e67ac6", ring: "#e67ac655", tint: "rgba(230,122,198,0.07)" },
            };
            const c = colorMap[row.status];
            return (
              <div key={row.order} style={{
                marginBottom: 8,
                padding: "14px 18px",
                border: `1px solid ${c.ring}`,
                borderLeft: `3px solid ${c.bar}`,
                borderRadius: 3,
                background: `linear-gradient(160deg, ${c.tint}, rgba(16,20,42,0.4))`,
                display: "grid",
                gridTemplateColumns: "140px 1fr 1fr",
                gap: 16, alignItems: "baseline",
              }}>
                <div>
                  <div className="fu-mono fu-small" style={{ color: c.bar, fontSize: 10, letterSpacing: "0.14em", marginBottom: 4 }}>
                    {row.status.toUpperCase()}
                  </div>
                  <div className="fu-mono" style={{ color: "var(--ink-1)", fontSize: 12.5 }}>
                    {row.order}
                  </div>
                </div>
                <div>
                  <div className="fu-display" style={{ fontSize: 14, color: "var(--ink-1)", fontWeight: 400, marginBottom: 4 }}>
                    {row.quantity}
                  </div>
                  <div className="fu-small fu-mono" style={{ color: "var(--ink-3)", fontSize: 11.5, lineHeight: 1.5 }}>
                    {row.source}
                  </div>
                </div>
                <div className="fu-small" style={{ color: "var(--ink-2)", fontSize: 12.5, lineHeight: 1.55 }}>
                  {row.coeff}
                </div>
              </div>
            );
          })}
        </div>
      </TPSection>

      <TPSection
        anchor="gap"
        eyebrow="the normalization gap"
        heading="A single bulk integral gates 2.5PN → 4PN."
      >
        <TPBody>
          The 2.5PN quadrupole formula reproduces GR's point-particle
          expression, but only under a closure on a mixed-sector scalar
          integral. Write the power as
        </TPBody>

        <EqCard
          eyebrow="δ_Z · Eq. 10.3 · conditional"
          tex="\frac{dE}{dt}\bigg|_{\text{2.5PN}} \;=\; -\,\frac{G}{5 c^5}\,\langle \dddot Q_{jk}\, \dddot Q^{jk} \rangle \cdot (1 + \delta_Z), \qquad \delta_Z \;=\; \mathcal{I}_{\text{mix}}\!\big[Z,\,\partial_w F\big]"
          note="𝓘_mix is a scalar integral over the brane-bulk mixed-sector channels of topic 06, evaluated in the radiation zone. GR predicts δ_Z = 0. The 4D · 2.5PN manuscript derives the GR quadrupole formula conditional on δ_Z = 0; the closure itself is gated by the moving-throat PDE."
        />

        <TPCallout kind="note">
          <strong style={{ color: "var(--ink-1)" }}>Why this must hold.</strong>{" "}
          The Hulse–Taylor binary's orbital decay agrees with GR to{" "}
          <Tex tex="\sim 0.1\%" />. Any <Tex tex="|\delta_Z|" /> larger
          than about <Tex tex="10^{-3}" /> is already ruled out. The open
          question is whether the fluid picture <em>derives</em>{" "}
          <Tex tex="\delta_Z = 0" /> from topic 11, or whether{" "}
          <Tex tex="\delta_Z = 0" /> must be imposed as a constraint on
          the closure. The program expects the former; the 2.5PN and 4PN
          manuscripts currently assume it, which is what "conditional"
          means on this page.
        </TPCallout>

        <TPBody>
          The 4PN conservative sector inherits the same{" "}
          <Tex tex="\delta_Z" /> closure plus additional assumptions on
          the inner-zone propagator carried forward from 3PN. Both
          conditional rungs are downstream of topic 11.
        </TPBody>
      </TPSection>

      <TPSection
        anchor="tests"
        eyebrow="experimental cross-checks"
        heading="What the ledger is measured against."
      >
        <TPBody>
          The rungs of the ladder correspond to distinct experimental
          regimes. In order of historical precision:
        </TPBody>

        <ul style={{ color: "var(--ink-2)", lineHeight: 1.8, paddingLeft: 24, fontSize: 15.5 }}>
          <li>Mercury perihelion advance — 1PN (sub-arcsec/century),</li>
          <li>Shapiro delay (Cassini 2003) — 2PN (<Tex tex="\gamma - 1 = 2.1 \pm 2.3 \times 10^{-5}" />),</li>
          <li>Light bending (VLBI) — 2PN (<Tex tex="10^{-4}" /> fractional),</li>
          <li>Hulse–Taylor binary decay — 2.5PN (~0.1% agreement with GR),</li>
          <li>Double pulsar J0737−3039 — 2.5PN / 3PN (<Tex tex="10^{-4}" />),</li>
          <li>LIGO/Virgo inspirals — 3PN–4PN coefficients cross-checked against template waveforms.</li>
        </ul>

        <TPBody>
          The fluid picture must match all of these to the same precision
          GR matches them. That's the task the ledger encodes.
        </TPBody>
      </TPSection>

      <TPSection anchor="next" eyebrow="forward reference" heading="What uses this.">
        <TPBody>
          This chapter is the driver for topic 11. The two{" "}
          <span className="fu-mono" style={{ color: "#7aa2ff" }}>REDUCTION</span>{" "}
          rows (2.5PN and 4PN) are function of the moving-throat PDE, and
          closing the PDE would retire both conditionalities at once. The
          program's current front is the PDE closure of{" "}
          <Tex tex="\mathcal{I}_{\text{mix}}" />.
        </TPBody>
      </TPSection>
    </TopicPage>
  );
}

Object.assign(window, { TechnicalPN });
