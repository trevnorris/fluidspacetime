import React from 'react';
import { TopicPage, TPTitle, TPLede, TPSection, TPBody } from '../../components/TopicPage.jsx';
import { Badge, Chip, Tex } from '../../components/ui.jsx';

// Part III · Topic 13 — Glossary & Notation
// Single-track meta page. The reference desk.

export default function MetaGlossary() {
  const topic = {
    n: "13",
    part: "III",
    partName: "Meta",
    slug: "glossary",
    title: "Glossary & Notation",
  };

  return (
    <TopicPage track="technical" topic={topic} meta>
      <section style={{ padding: "10px 0 40px" }}>
        <TPTitle>
          The program's working vocabulary, in one place
        </TPTitle>

        <TPLede>
          Every topic page assumes a small set of terms — throat, inflow, zero
          mode, closure, the bulk direction <Tex tex="w" />. This is the
          reference desk for all of them. Terms link back to the topic where
          they first appear.
        </TPLede>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 20 }}>
          <Chip>5 sections · working entries</Chip>
          <Chip>notation table at the bottom</Chip>
          <Chip>single-track</Chip>
        </div>
      </section>

      {/* 13.1 — Geometry */}
      <TPSection
        anchor="geometry"
        eyebrow="13.1 · geometry & background"
        heading="The stage and its coordinates"
      >
        <GlossaryList entries={[
          { term: "bulk", aliases: ["4+1 bulk", "ambient"], def: "The full 4+1 dimensional space on which the parent action lives. Four spatial dimensions plus time.", ref: "topic 01" },
          { term: "brane / 3-slice", aliases: ["emergent 3+1"], def: "The projection-defined 3+1 subspace where ordinary physics is read off from the 4+1 parent theory.", ref: "topic 03" },
          { term: "bulk direction w", aliases: ["transverse direction"], def: "The extra spatial direction perpendicular to the brane. It is sampled by projection and reduced to a zero mode only in controlled far-field limits.", ref: "topic 03" },
          { term: "inflow", aliases: ["radial inflow"], def: "Projected flow into a positive-mass throat branch. In the controlled Newtonian regime it supplies the effective source used for the gravity analogy.", ref: "topic 05" },
          { term: "throat", aliases: ["bulk conduit", "puncture"], def: "A finite-radius opening in the 3-slice connecting to an open brane-bulk conduit. In the effective geometry lift its surface is Σ(X,t) = r − R(Ω,w,t) = 0.", ref: "topic 04" },
          { term: "defect", aliases: ["vortex", "topological defect"], def: "A localized nontrivial configuration of the fluid/order-parameter system. Throats are finite brane-bulk defects; vortical circulation is a separate topological sector.", ref: "topic 02" },
        ]} />
      </TPSection>

      {/* 13.2 — Dynamics */}
      <TPSection
        anchor="dynamics"
        eyebrow="13.2 · dynamics & sectors"
        heading="Equations of motion, sectors, and closures"
      >
        <GlossaryList entries={[
          { term: "parent action", aliases: ["bulk action"], def: "The declared 4+1 action for the GNLS / inviscid, irrotational fluid sector, with localized Maxwell added where used. Autonomous wall dynamics require an additional promoted S_Σ action.", ref: "topic 01, 11" },
          { term: "stiff polytrope", aliases: ["EoS exponent n = 5"], def: "The equation of state of the bulk fluid. In the current carry-forward story, n = 5 is fixed by weak-field optical consistency rather than by downstream fitting.", ref: "topic 01" },
          { term: "zero-mode closure", aliases: ["zero-mode reduction"], def: "A controlled reduction in which only the lowest transverse w-mode is retained. Gives a 3+1 effective theory in the stated far-field regime.", ref: "topic 03" },
          { term: "gravity sector", def: "The projected density / velocity sector. It gives exact brane identities first, then a controlled Newtonian regime and the carried PN hierarchy within a declared closure package.", ref: "topic 05, 10" },
          { term: "gauge sector", aliases: ["EM sector"], def: "A localized 4+1 gauge field with profile Z(w). Its far-field zero mode gives a controlled 3+1 Maxwell reduction on the brane.", ref: "topic 06" },
          { term: "matter sector", def: "The parent complex order-parameter sector and its reduced defect / bound-state targets. Atomic precision claims remain partly open in the current source stack.", ref: "topic 01, 09" },
          { term: "mixed sector", aliases: ["brane-bulk mixed"], def: "Interactions between the brane zero mode and off-brane channels such as A_w, J^w, F_μw, E_w, and C_a. Source of finite-profile corrections, outgoing-normalization data, and conditional anomaly packets.", ref: "topic 06, 09, 10, 11" },
          { term: "inviscid", def: "No viscosity term in the parent fluid action. Effective dissipation, when present, belongs to reductions, collisions, leakage/work ledgers, or outgoing ports rather than parent viscosity.", ref: "topic 01" },
          { term: "irrotational", def: "∇×v = 0 except at defects. The fluid velocity is a gradient field in the bulk of the flow.", ref: "topic 01" },
        ]} />
      </TPSection>

      {/* 13.3 — Claim-status vocabulary */}
      <TPSection
        anchor="status"
        eyebrow="13.3 · claim-status vocabulary"
        heading="The badges, in formal definitions"
      >
        <StatusTable />
      </TPSection>

      {/* 13.4 — Results-ledger terms */}
      <TPSection
        anchor="ledger"
        eyebrow="13.4 · results-ledger terms"
        heading="Vocabulary that shows up in topic 10"
      >
        <GlossaryList entries={[
          { term: "PN / post-Newtonian", def: "Expansion of GR dynamics in powers of v/c. 1PN ≡ (v/c)², 2PN ≡ (v/c)⁴, etc.", ref: "topic 10" },
          { term: "κ_ρ dressing", aliases: ["density dressing"], def: "A gravity-side density/mass dressing used in the Newtonian/PN ladder. κ_ρ = 1 is not electric charge.", ref: "topic 05, 10" },
          { term: "quadrupole formula", aliases: ["dE/dt|_2.5PN"], def: "GW power at leading order. The fluid picture narrows the surviving branch to the STF quadrupole channel, with the coefficient still gated by passive/outgoing normalization.", ref: "topic 10" },
          { term: "δ_Q / δ_tail", def: "Residual diagnostics for the 2.5PN / 4PN interface: δ_Q is the quadrupole-normalization miss and δ_tail is the tail-transport or scattering miss.", ref: "topic 10" },
          { term: "radiation reaction", def: "Self-force on a radiating body. The leading odd sector is isolated at 2.5PN; higher outgoing corrections remain downstream targets.", ref: "topic 10" },
          { term: "ring-down / QNM", aliases: ["quasi-normal modes"], def: "Characteristic oscillation modes of a perturbed throat. A realized moving-throat branch would have to return them; topic 11 does not yet publish a finished spectrum.", ref: "topic 11" },
          { term: "moving-throat PDE", def: "The free-boundary framework for R(Ω,w,t). It is an effective wall/throat closure unless the autonomous throat action S_Σ is promoted and frozen.", ref: "topic 11" },
        ]} />
      </TPSection>

      {/* 13.5 — Notation table */}
      <TPSection
        anchor="notation"
        eyebrow="13.5 · notation"
        heading="Symbols, in one table"
      >
        <NotationTable />
      </TPSection>
    </TopicPage>
  );
}

// ─── Glossary list ─────────────────────────────────────────
function GlossaryList({ entries }) {
  return (
    <div style={{
      marginTop: 24,
      border: "1px solid var(--rule)",
      background: "rgba(255,255,255,0.012)",
      borderRadius: 4,
    }}>
      {entries.map((e, i) => (
        <div key={e.term} style={{
          display: "grid",
          gridTemplateColumns: "220px 1fr 90px",
          gap: 22,
          padding: "18px 22px",
          borderTop: i === 0 ? "none" : "1px solid var(--rule-2)",
          alignItems: "start",
        }}>
          <div>
            <div style={{
              fontFamily: "var(--font-display)",
              fontSize: 16.5,
              fontStyle: "italic",
              color: "var(--ink-1)",
              lineHeight: 1.3,
            }}>
              {e.term}
            </div>
            {e.aliases && (
              <div className="fu-mono fu-small" style={{
                color: "var(--ink-4)",
                fontSize: 10,
                letterSpacing: "0.06em",
                marginTop: 4,
                lineHeight: 1.4,
              }}>
                = {e.aliases.join(" · ")}
              </div>
            )}
          </div>
          <div className="fu-small" style={{
            color: "var(--ink-2)",
            lineHeight: 1.6,
          }}>
            {e.def}
          </div>
          <div className="fu-mono fu-small" style={{
            color: "var(--ink-4)",
            fontSize: 10,
            letterSpacing: "0.06em",
            textAlign: "right",
            paddingTop: 2,
          }}>
            → {e.ref}
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Status table (badges + formal definitions) ────────────
function StatusTable() {
  const rows = [
    {
      kind: "exact",
      formal: "An equality that follows from the declared action, exact definitions, or exact algebra. No discarded terms, no small-parameter expansion.",
      example: "∂tρ_brane + ∇·j_brane = S_leak (projected continuity with leakage)",
      falsifies: "Disagreement indicates an error in the derivation — not the physics.",
    },
    {
      kind: "closure",
      formal: "An equality that follows within a named closure or declared branch. The closure is stated on the page where the claim is made.",
      example: "The carried 1PN / 2PN / 3PN ledger inside the declared closure package.",
      falsifies: "Disagreement may indicate the closure is too restrictive at the regime in question.",
    },
    {
      kind: "reduce",
      formal: "A controlled reduction: an ansatz that is provably consistent at the order claimed, together with an error estimate.",
      example: "Far-field zero-mode Maxwell reduction with higher w-modes suppressed by the profile gap.",
      falsifies: "Disagreement beyond the stated error bar falsifies the ansatz, not the program.",
    },
    {
      kind: "effect",
      formal: "An effective identity: holds because the dropped terms are parametrically small, with the small parameter identified.",
      example: "The Poisson hook obtained from exact brane identities in the quasi-static weak-field regime.",
      falsifies: "Disagreement points to the small parameter being less small than assumed.",
    },
    {
      kind: "num",
      formal: "Located numerically: no closed-form derivation, but a number plus uncertainty from a specific procedure.",
      example: "A realized stationary branch returning R₀(w) or outgoing DtN data numerically.",
      falsifies: "Disagreement beyond stated uncertainty falsifies the numerical method or the closure beneath it.",
    },
    {
      kind: "open",
      formal: "Unresolved: the coefficient, sign, or existence is not known. Bounds and expectations may be stated; a value is not.",
      example: "The shared 2.5PN / 4PN outgoing normalization or the g−2 common branch packet.",
      falsifies: "Resolution — in either direction — is a result. Disagreement with an expectation is not falsification.",
    },
  ];

  return (
    <div style={{ marginTop: 24 }}>
      {rows.map((r, i) => (
        <div key={r.kind} style={{
          marginTop: i === 0 ? 0 : 18,
          padding: "22px 24px",
          border: "1px solid var(--rule)",
          borderLeft: "2px solid var(--accent)",
          background: "rgba(255,255,255,0.012)",
          borderRadius: 2,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
            <Badge kind={r.kind} />
            <span className="fu-mono fu-small" style={{
              color: "var(--ink-4)", letterSpacing: "0.08em", fontSize: 10.5,
            }}>
              formal definition
            </span>
          </div>
          <div className="fu-small" style={{ color: "var(--ink-1)", lineHeight: 1.65, marginBottom: 12 }}>
            {r.formal}
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "100px 1fr",
            gap: 16,
            paddingTop: 12,
            borderTop: "1px solid var(--rule-2)",
          }}>
            <div className="fu-mono fu-small" style={{
              color: "var(--ink-4)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", paddingTop: 2,
            }}>
              example
            </div>
            <div className="fu-small" style={{ color: "var(--ink-2)", fontFamily: "var(--font-mono)", fontSize: 12.5 }}>
              {r.example}
            </div>
            <div className="fu-mono fu-small" style={{
              color: "var(--ink-4)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", paddingTop: 2,
            }}>
              falsify
            </div>
            <div className="fu-small" style={{ color: "var(--ink-3)", lineHeight: 1.55 }}>
              {r.falsifies}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Notation table ────────────────────────────────────────
function NotationTable() {
  const rows = [
    { sym: "\\rho", read: "rho", means: "Bulk fluid density.", where: "parent action · topic 01" },
    { sym: "\\rho_\\infty", read: "rho-infinity", means: "Asymptotic / vacuum density far from defects.", where: "topic 01" },
    { sym: "K,\\; n", read: "K, n", means: "EoS coefficient K and exponent n. The carried weak-field branch uses n = 5.", where: "topic 01" },
    { sym: "\\psi", read: "psi", means: "Complex parent order parameter. The density is ρ = |ψ|².", where: "topic 01" },
    { sym: "c", read: "c", means: "Brane-facing light/signal speed used in reductions. Its material relation is branch-dependent.", where: "topic 08" },
    { sym: "c_s", read: "c-sub-s", means: "Local sound speed; in the frozen n = 5 EOS, c_s² = (1/m) dP/dρ = 5Kρ⁴/m.", where: "topic 01, 08" },
    { sym: "w", read: "w", means: "The bulk direction — the 4th spatial dimension.", where: "topic 03" },
    { sym: "X^\\mu", read: "X-mu", means: "3+1 brane coordinates (t, x, y, z).", where: "topic 03" },
    { sym: "\\Sigma(X,t)", read: "Sigma of X, t", means: "Effective throat-surface variable: zero set of r − R(Ω,w,t).", where: "topic 04, 11" },
    { sym: "R(\\Omega, w, t)", read: "R of Omega, w, t", means: "Throat radius as a function of angle, bulk depth, and time. The central shape variable of the moving-throat framework.", where: "topic 11" },
    { sym: "v^i", read: "v-i", means: "Bulk fluid velocity.", where: "topic 01, 05" },
    { sym: "\\varphi", read: "varphi", means: "Brane velocity potential in the longitudinal Helmholtz split v_brane = ∇varphi + v_T.", where: "topic 05" },
    { sym: "\\kappa_\\rho", read: "kappa-rho", means: "Gravity-side density/mass dressing parameter. κ_ρ = 1 is not electric charge.", where: "topic 05, 10" },
    { sym: "\\eta_Q", read: "eta-Q", means: "Electric charge-orientation branch sign, η_Q = ±1.", where: "topic 04, 06" },
    { sym: "q_\\star,\\;q_{\\rm eff}", read: "q-star, q-eff", means: "Microscopic branch charge and observed brane charge after localization normalization, q_eff = q_star / sqrt(Z_int).", where: "topic 06" },
    { sym: "Z_{\\rm int}", read: "Z-int", means: "Localization integral ∫ Z(w) dw controlling the zero-mode charge normalization.", where: "topic 06" },
    { sym: "\\delta_Q,\\;\\delta_{\\rm tail}", read: "delta-Q, delta-tail", means: "Quadrupole-normalization and tail-transport residual diagnostics.", where: "topic 10" },
    { sym: "\\xi", read: "xi", means: "A reduced healing/profile scale in older or auxiliary defect bookkeeping; not the final throat radius.", where: "topic 02, 04" },
    { sym: "\\alpha", read: "alpha", means: "Fine-structure constant. A target observable of the EM localization / mixed sector, with precision matching still branch-sensitive.", where: "topic 06, 09" },
    { sym: "Q_{jk}", read: "Q-j-k", means: "Mass quadrupole tensor of a source. Appears in the GW power formula.", where: "topic 10" },
  ];

  return (
    <div style={{
      marginTop: 24,
      border: "1px solid var(--rule)",
      background: "rgba(255,255,255,0.012)",
      borderRadius: 4,
    }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "150px 160px 1fr 200px",
        gap: 20,
        padding: "14px 22px",
        borderBottom: "1px solid var(--rule)",
        fontFamily: "var(--font-mono)",
        fontSize: 10.5,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: "var(--ink-4)",
      }}>
        <div>symbol</div>
        <div>read as</div>
        <div>meaning</div>
        <div style={{ textAlign: "right" }}>first used</div>
      </div>
      {rows.map((r, i) => (
        <NotationRow key={i} row={r} />
      ))}
    </div>
  );
}

function NotationRow({ row }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "150px 160px 1fr 200px",
      gap: 20,
      padding: "16px 22px",
      borderTop: "1px solid var(--rule-2)",
      alignItems: "baseline",
    }}>
      <div style={{ fontSize: 18, color: "var(--ink-1)" }}><Tex tex={row.sym} /></div>
      <div className="fu-mono fu-small" style={{ color: "var(--ink-3)", fontSize: 12 }}>
        {row.read}
      </div>
      <div className="fu-small" style={{ color: "var(--ink-2)", lineHeight: 1.55 }}>
        {row.means}
      </div>
      <div className="fu-mono fu-small" style={{
        color: "var(--ink-4)", fontSize: 10, textAlign: "right", letterSpacing: "0.06em",
      }}>
        {row.where}
      </div>
    </div>
  );
}
