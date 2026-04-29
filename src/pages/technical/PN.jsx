import React from 'react';
import { TopicPage, TPTitle, TPLede, TPSection, TPBody, TPCallout } from '../../components/TopicPage.jsx';
import { Badge, Chip, EqCard, Tex } from '../../components/ui.jsx';
import { ZENODO } from '../../data/citations.js';

// Part II · Topic 10 — The Post-Newtonian Ledger — TECHNICAL

export default function TechnicalPN() {
  const topic = {
    n: "10",
    part: "II",
    partName: "Applications",
    slug: "pn-ledger",
    title: "The Post-Newtonian Ledger",
  };

  return (
    <TopicPage track="technical" topic={topic}>
      <section style={{ padding: "10px 0 40px" }}>
        <TPTitle>
          Newton through 3PN sit inside one declared hierarchy. 2.5PN and 4PN
          share one outgoing quadrupole-normalization gate.
        </TPTitle>
        <TPLede>
          The current 4D program does not phrase the PN story as a fresh set of
          projected Einstein equations. It builds a carried two-body ledger
          inside a declared closure hierarchy: Newtonian matching, the 1PN
          bridge package, the full conservative 1PN/2PN/3PN sectors, then the
          conditional 2.5PN and 4PN bridges. The remaining open datum is not a
          new 4PN constant; it is the same passive/outgoing quadrupole
          normalization already isolated by 2.5PN.
        </TPLede>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 20 }}>
          <Badge kind="reduce">1PN · 2PN · 3PN within hierarchy</Badge>
          <Badge kind="closure">2.5PN · 4PN share one gate</Badge>
          <Chip label="4D · Action" href={ZENODO.action.url} />
          <Chip label="4D · 1PN bridge" href={ZENODO.bridge.url} />
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
        heading="The ledger lives inside a declared closure hierarchy"
      >
        <TPBody>
          The bridge and full 1PN papers freeze the lower-order data carried by
          the rest of the PN stack:
        </TPBody>

        <EqCard
          label="◇ carry-forward closure package"
          plain="The bridge / 1PN package freezes the lower-order data used throughout the PN stack."
          tex="\begin{aligned} n &\;=\; 5, \\ \kappa_\rho &\;=\; 1, \\ \kappa_{\rm add} &\;=\; \tfrac12, \\ \kappa_{\rm PV} &\;=\; \tfrac32, \\ \beta_{1{\rm PN}} &\;=\; 3 \end{aligned}"
        />

        <TPBody>
          That is the sense in which the site should use words like
          <em> derived</em> and <em>closed</em>: exact within the named
          hierarchy, not assumption-free theorems of a fully solved moving-throat
          PDE.
        </TPBody>
      </TPSection>

      <TPSection
        anchor="ledger"
        eyebrow="the ledger · coefficients"
        heading="One row per PN rung"
      >
        <div style={{ margin: "14px 0" }}>
          {[
            {
              status: "effect",
              order: "Newtonian regime",
              quantity: "Poisson / inverse-square hook",
              coeff: "Exact projection identities plus a controlled Poisson regime; downstream matching fixes κ_ρ = 1 in the bridge package.",
              source: "4D · Action + 4D · 1PN bridge",
            },
            {
              status: "reduction",
              order: "1PN (full)",
              quantity: "Full first post-Newtonian sector",
              coeff: "Full conservative 1PN two-body ledger derived within the declared hierarchy; term-by-term match to GR.",
              source: "4D · 1PN full · zenodo.19450102",
            },
            {
              status: "reduction",
              order: "2PN (conservative)",
              quantity: "Full conservative 2PN sector",
              coeff: "All conservative terms at O(v⁴/c⁴) fixed within the same hierarchy and matched to the standard target.",
              source: "4D · 2PN conservative · zenodo.19450284",
            },
            {
              status: "closure",
              order: "2.5PN (conditional)",
              quantity: "Point-particle quadrupole radiation",
              coeff: "Structure and coefficient match GR subject to the passive/outgoing quadrupole normalization.",
              source: "4D · 2.5PN conditional · zenodo.19492270",
            },
            {
              status: "reduction",
              order: "3PN (conservative)",
              quantity: "Full conservative 3PN sector",
              coeff: "The conservative 3PN ledger is fully assigned in the fixed ADM chart inside the declared hierarchy.",
              source: "4D · 3PN conservative · zenodo.19501724",
            },
            {
              status: "closure",
              order: "4PN (conditional)",
              quantity: "Local 4PN plus inherited tail bridge",
              coeff: "The local instantaneous 4PN sector is assembled inside the hierarchy; the remaining gate is the same quadrupole-normalization / tail bridge already isolated by 2.5PN.",
              source: "4D · 4PN conditional · zenodo.19561056",
            },
            {
              status: "open",
              order: "frontier",
              quantity: "Passive/outgoing quadrupole normalization",
              coeff: "This is the live theorem target carried jointly by 2.5PN and 4PN. 4PN does not open a second independent normalization datum.",
              source: "moving-throat branch realization",
            },
          ].map((row) => {
            const colorMap = {
              effect:    { bar: "#d7c9a1", ring: "#d7c9a155", tint: "rgba(215,201,161,0.07)" },
              reduction: { bar: "#7aa2ff", ring: "#7aa2ff55", tint: "rgba(122,162,255,0.07)" },
              closure:   { bar: "#7fc69d", ring: "#7fc69d55", tint: "rgba(127,198,157,0.07)" },
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
                gridTemplateColumns: "150px 1fr 1fr",
                gap: 16,
                alignItems: "baseline",
              }}>
                <div>
                  <div className="fu-mono fu-small" style={{ color: c.bar, fontSize: 10, letterSpacing: "0.14em", marginBottom: 4 }}>
                    {row.status.toUpperCase()}
                  </div>
                  <div className="fu-mono" style={{ color: "var(--ink-1)", fontSize: 14 }}>
                    {row.order}
                  </div>
                </div>
                <div>
                  <div className="fu-display" style={{ fontSize: 15, color: "var(--ink-1)", fontWeight: 400, marginBottom: 4 }}>
                    {row.quantity}
                  </div>
                  <div className="fu-small fu-mono" style={{ color: "var(--ink-3)", fontSize: 13, lineHeight: 1.5 }}>
                    {row.source}
                  </div>
                </div>
                <div className="fu-small" style={{ color: "var(--ink-2)", fontSize: 14, lineHeight: 1.55 }}>
                  {row.coeff}
                </div>
              </div>
            );
          })}
        </div>
      </TPSection>

      <TPSection
        anchor="gap"
        eyebrow="the shared gate"
        heading="2.5PN and 4PN wait on the same outgoing quadrupole normalization"
      >
        <TPBody>
          The 2.5PN paper writes the odd sector as the standard quadrupole
          branch with one open normalization factor, while the 4PN paper shows
          that the hereditary tail coefficient is controlled by that same
          scalar:
        </TPBody>

        <EqCard
          label="◇ shared normalization gate · conditional"
          plain="2.5PN odd radiation and the 4PN tail coefficient wait on the same outgoing quadrupole normalization."
          tex="\begin{aligned} \gamma_{\rm quad}^{\rm eff} &\;=\; \hat m_0^2\Gamma_5, \\ \gamma_{\rm quad}^{\rm eff}\big|_{\rm GR} &\;=\; \frac{2G}{5c^5}, \\ C_{\rm tail} &\;=\; \frac{GM}{2c^3}\,\gamma_{\rm quad}^{\rm eff} \end{aligned}"
        />

        <TPCallout kind="note">
          <strong style={{ color: "var(--ink-1)" }}>Strategic point.</strong>{" "}
          The open problem is no longer more local 4PN algebra. It is the
          branch-realization problem for the passive/outgoing quadrupole
          normalization on the moving-throat side.
        </TPCallout>
      </TPSection>

      <TPSection
        anchor="tests"
        eyebrow="experimental cross-checks"
        heading="What this ledger must eventually answer to"
      >
        <TPBody>
          Each rung is anchored to familiar tests:
        </TPBody>

        <ul style={{ color: "var(--ink-2)", lineHeight: 1.8, paddingLeft: 24, fontSize: 15.5 }}>
          <li>Mercury perihelion advance — 1PN.</li>
          <li>Shapiro delay and light-bending — bridge / 1PN / 2PN carry-forward sector.</li>
          <li>Hulse–Taylor and double-pulsar timing — 2.5PN normalization test.</li>
          <li>LIGO/Virgo inspirals — 3PN and conditional 4PN waveform coefficients.</li>
        </ul>
      </TPSection>

      <TPSection anchor="next" eyebrow="forward reference" heading="What actually remains to be done">
        <TPBody>
          Topic 11 is not waiting to invent a new 4PN constant. It is waiting
          to realize the passive/outgoing quadrupole normalization on the
          moving-throat branch. That is the one gate this page should keep in
          view.
        </TPBody>
      </TPSection>
    </TopicPage>
  );
}
