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
          The program's working vocabulary, in one place.
        </TPTitle>

        <TPLede>
          Every topic page assumes a small set of terms — throat, inflow, zero
          mode, closure, the bulk direction <Tex tex="w" />. This is the
          reference desk for all of them. Terms link back to the topic where
          they first appear.
        </TPLede>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 20 }}>
          <Chip>4 sections · ~40 entries</Chip>
          <Chip>notation table at the bottom</Chip>
          <Chip>single-track</Chip>
        </div>
      </section>

      {/* 13.1 — Geometry */}
      <TPSection
        anchor="geometry"
        eyebrow="13.1 · geometry & background"
        heading="The stage and its coordinates."
      >
        <GlossaryList entries={[
          { term: "bulk", aliases: ["4+1 bulk", "ambient"], def: "The full 4+1 dimensional space on which the parent action lives. Four spatial dimensions plus time.", ref: "topic 01" },
          { term: "brane / 3-slice", aliases: ["emergent 3+1"], def: "The 3+1 dimensional subspace where ordinary physics is observed. Emerges as a zero-mode of the bulk.", ref: "topic 03" },
          { term: "bulk direction w", aliases: ["transverse direction"], def: "The extra spatial direction perpendicular to the emergent 3-slice. Never directly observed; integrated out via the zero-mode closure.", ref: "topic 03" },
          { term: "inflow", aliases: ["radial inflow"], def: "Steady radial motion of the fluid into a throat. The mechanical origin of Newtonian gravity.", ref: "topic 05" },
          { term: "throat", aliases: ["wormhole throat", "puncture"], def: "A finite-radius opening in the 3-slice connecting to the bulk. The locus Σ(X,t) = r − R(Ω,w,t) = 0.", ref: "topic 04" },
          { term: "defect", aliases: ["vortex", "topological defect"], def: "A localized singularity of the fluid order parameter. Includes throats as a subclass.", ref: "topic 02" },
        ]} />
      </TPSection>

      {/* 13.2 — Dynamics */}
      <TPSection
        anchor="dynamics"
        eyebrow="13.2 · dynamics & sectors"
        heading="Equations of motion, sectors, and closures."
      >
        <GlossaryList entries={[
          { term: "parent action", aliases: ["bulk action"], def: "The single Lagrangian the whole program sits on. Inviscid, irrotational, stiff polytrope P(ρ) = K ρⁿ with n = 5.", ref: "topic 01" },
          { term: "stiff polytrope", aliases: ["EoS exponent n = 5"], def: "The equation of state of the bulk fluid. n = 5 is fixed (not tuned) by requiring a regular single-throat solution.", ref: "topic 01" },
          { term: "zero-mode closure", aliases: ["zero-mode reduction"], def: "A controlled reduction in which the w-dependence of perturbations is projected onto the lowest transverse mode. Gives a 3+1 effective theory.", ref: "topic 03" },
          { term: "gravity sector", def: "The reduced dynamics of the bulk density ρ and inflow velocity v. Recovers Newton + 1PN + 2PN of GR.", ref: "topic 05" },
          { term: "gauge sector", aliases: ["EM sector"], def: "The reduced dynamics of the throat orientation. Recovers Maxwell's equations in vacuum.", ref: "topic 06" },
          { term: "matter sector", def: "The reduced dynamics of small defects (vortices, bound states). Schrödinger, Dirac in appropriate limits.", ref: "topic 09" },
          { term: "mixed sector", aliases: ["brane-bulk mixed"], def: "Interactions between sectors that don't factor cleanly. Source of g−2 corrections and 2.5PN δ_Z.", ref: "topic 09, 10" },
          { term: "inviscid", def: "No viscous dissipation in the parent action. Dissipation enters only through throat-radiation channels.", ref: "topic 01" },
          { term: "irrotational", def: "∇×v = 0 except at defects. The fluid velocity is a gradient field in the bulk of the flow.", ref: "topic 01" },
        ]} />
      </TPSection>

      {/* 13.3 — Claim-status vocabulary */}
      <TPSection
        anchor="status"
        eyebrow="13.3 · claim-status vocabulary"
        heading="The badges, in formal definitions."
      >
        <StatusTable />
      </TPSection>

      {/* 13.4 — Results-ledger terms */}
      <TPSection
        anchor="ledger"
        eyebrow="13.4 · results-ledger terms"
        heading="Vocabulary that shows up in topic 10."
      >
        <GlossaryList entries={[
          { term: "PN / post-Newtonian", def: "Expansion of GR dynamics in powers of v/c. 1PN ≡ (v/c)², 2PN ≡ (v/c)⁴, etc.", ref: "topic 10" },
          { term: "κ_ρ dressing", aliases: ["density dressing"], def: "A specific dressing of the fluid density that makes the inflow match the GR potential at 1PN. κ_ρ = 1 here is the chosen normalization.", ref: "topic 05, 10" },
          { term: "quadrupole formula", aliases: ["dE/dt|_2.5PN"], def: "GW power at leading order. The fluid picture reproduces the structure; the open scalar δ_Z captures how close the coefficient is to GR's.", ref: "topic 10" },
          { term: "δ_Z", def: "The open dimensionless number that multiplies the GR quadrupole coefficient in the fluid picture. GR has δ_Z = 0.", ref: "topic 10" },
          { term: "radiation reaction", def: "Self-force on a radiating body. Enters at 2.5PN. The 3.5PN correction is open.", ref: "topic 10" },
          { term: "ring-down / QNM", aliases: ["quasi-normal modes"], def: "Characteristic oscillation modes of a perturbed throat. Predicted by topic 11.", ref: "topic 11" },
          { term: "moving-throat PDE", def: "The free-boundary equation for R(Ω,w,t). The program's frontier.", ref: "topic 11" },
        ]} />
      </TPSection>

      {/* 13.5 — Notation table */}
      <TPSection
        anchor="notation"
        eyebrow="13.5 · notation"
        heading="Symbols, in one table."
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
      formal: "An equality that follows from the parent action by a chain of exact identities. No discarded terms, no small-parameter expansion.",
      example: "c² = K·n·ρ^{n-1} (wave speed from the EoS)",
      falsifies: "Disagreement indicates an error in the derivation — not the physics.",
    },
    {
      kind: "closure",
      formal: "An equality that follows within a named closure (zero-mode, stiff polytrope, irrotationality). The closure is stated on the page where the claim is made.",
      example: "Emergent 3+1 Maxwell equations under zero-mode closure.",
      falsifies: "Disagreement may indicate the closure is too restrictive at the regime in question.",
    },
    {
      kind: "reduce",
      formal: "A controlled reduction: an ansatz that is provably consistent at the order claimed, together with an error estimate.",
      example: "Core-scaling ansatz ξ ~ √(K ρ^n)/c_s at O(1) accuracy.",
      falsifies: "Disagreement beyond the stated error bar falsifies the ansatz, not the program.",
    },
    {
      kind: "effect",
      formal: "An effective identity: holds because the dropped terms are parametrically small, with the small parameter identified.",
      example: "Newton's law as the leading-order v/c expansion of the inflow.",
      falsifies: "Disagreement points to the small parameter being less small than assumed.",
    },
    {
      kind: "num",
      formal: "Located numerically: no closed-form derivation, but a number plus uncertainty from a specific procedure.",
      example: "Throat profile R₀(w) located by shooting from regularity conditions.",
      falsifies: "Disagreement beyond stated uncertainty falsifies the numerical method or the closure beneath it.",
    },
    {
      kind: "open",
      formal: "Unresolved: the coefficient, sign, or existence is not known. Bounds and expectations may be stated; a value is not.",
      example: "2.5PN anomaly δ_Z — expected to vanish, not yet proven.",
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
    { sym: "K,\\; n", read: "K, n", means: "EoS coefficient K and exponent n. Stiff polytrope uses n = 5.", where: "topic 01" },
    { sym: "c", read: "c", means: "Wave / sound speed on the bulk. The emergent invariant speed.", where: "topic 08" },
    { sym: "c_s", read: "c-sub-s", means: "Local sound speed c_s² = K·n·ρ^{n-1}. Equals c in the stiff limit.", where: "topic 01, 08" },
    { sym: "w", read: "w", means: "The bulk direction — the 4th spatial dimension.", where: "topic 03" },
    { sym: "X^\\mu", read: "X-mu", means: "3+1 brane coordinates (t, x, y, z).", where: "topic 03" },
    { sym: "\\Sigma(X,t)", read: "Sigma of X, t", means: "The throat locus. Zero set of r − R(Ω,w,t).", where: "topic 04, 11" },
    { sym: "R(\\Omega, w, t)", read: "R of Omega, w, t", means: "Throat radius as a function of angle, bulk depth, and time. The central unknown of the moving-throat PDE.", where: "topic 11" },
    { sym: "v^i", read: "v-i", means: "Fluid velocity. ∇·(ρv) = 0 away from throats.", where: "topic 01, 05" },
    { sym: "\\kappa_\\rho", read: "kappa-rho", means: "Density-dressing parameter. κ_ρ = 1 is the normalization used throughout.", where: "topic 05, 10" },
    { sym: "\\delta_Z", read: "delta-Z", means: "Open scalar multiplying the GR quadrupole coefficient at 2.5PN.", where: "topic 10" },
    { sym: "\\xi", read: "xi", means: "Throat core scale. ξ ~ √(K ρ^n)/c_s.", where: "topic 02, 04" },
    { sym: "\\alpha", read: "alpha", means: "Fine-structure constant. Emerges from EM throat self-energy / mixed sector.", where: "topic 06, 09" },
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
