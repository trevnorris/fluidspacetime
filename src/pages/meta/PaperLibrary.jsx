import React from 'react';
import { TopicPage, TPTitle, TPLede, TPSection, TPBody } from '../../components/TopicPage.jsx';
import { Badge, Chip } from '../../components/ui.jsx';
import { ZENODO } from '../../data/citations.js';

// Part III · Topic 14 — Paper Library
// Indexes the published Zenodo records. Two sections:
//   A. Current 4D program (9 papers + PDE ledger archive + PDE draft)
//   B. Prior work — superfluid-defect toy model era (6 papers)

export default function MetaPaperLibrary() {
  const topic = {
    n: "14",
    part: "III",
    partName: "Meta",
    slug: "paper-library",
    title: "Paper Library",
  };

  return (
    <TopicPage track="technical" topic={topic} meta>
      <section style={{ padding: "10px 0 40px" }}>
        <TPTitle>
          The published record, plus the draft/ledger context behind the
          newest pages.
        </TPTitle>

        <TPLede>
          The program has two vintages. The <em>current 4D toy model</em> —
          nine preprints, from the parent action through 4PN, plus a published
          moving-throat derivation archive — is the backbone of the reviewed
          topic pages. Some newer claims also rely on draft/future-note
          material, especially the moving-throat, atom, and anomaly pages. An
          earlier round of{" "}
          <em>superfluid-defect toy model</em> papers established the
          ingredients that carried forward: n = 5, the throat ontology, the
          initial EM and 1PN derivations. The published records are indexed
          below.
        </TPLede>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 20 }}>
          <Chip>9 current · PDE archive · 6 prior</Chip>
          <Chip>all Zenodo · open access</Chip>
          <Chip href="https://zenodo.org/communities/">search Zenodo</Chip>
          <Chip>PDE paper draft in prep</Chip>
        </div>
      </section>

      {/* 14.1 — Reading order */}
      <TPSection
        anchor="reading-order"
        eyebrow="14.1 · reading order"
        heading="The canonical path through the current program"
      >
        <TPBody>
          The 4D papers build a tower. A first reader should take the path
          below — start with the parent action, add gauge and plasma as
          specializations, then walk the PN ladder order by order.
        </TPBody>

        <ReadingOrderDiagram />
      </TPSection>

      {/* 14.2 — Current 4D program */}
      <TPSection
        anchor="current-program"
        eyebrow="14.2 · current 4D program"
        heading="The canonical backbone — nine preprints plus one derivation archive"
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 20, marginTop: 24 }}>
          <PaperCard
            index="01"
            rec={ZENODO.action}
            scope="The parent action, projection-defined brane observables, exact leakage identities, the longitudinal Poisson-hook identity, and the controlled EM reduction. It is the base file for the current 4D stack."
            status={[{ kind: "exact", label: "Parent action" }, { kind: "closure", label: "Zero-mode reduction" }]}
            feeds={["01", "02", "03", "04", "05", "11"]}
            highlight
          />

          <PaperCard
            index="02"
            rec={ZENODO.bridge}
            scope="The bridge from the 4D parent theory to Newtonian, optical, and first-PN observables. This is the carry-forward paper that fixes n = 5 by weak-field optical consistency and assembles the first coefficient ledger."
            status={[{ kind: "reduce", label: "Bridge paper" }, { kind: "closure", label: "Coefficient ledger" }]}
            feeds={["01", "05", "08", "10"]}
          />

          <PaperCard
            index="03"
            rec={ZENODO.maxwell}
            scope="Localized 4+1 Maxwell dynamics and the controlled far-field zero-mode reduction to brane Maxwell. Includes Kaluza–Klein/Yukawa/threshold corrections above the zero-mode limit."
            status={[{ kind: "exact", label: "Localized Maxwell" }, { kind: "closure", label: "Zero-mode reduction" }]}
            feeds={["06", "08", "09", "11"]}
          />

          <PaperCard
            index="04"
            rec={ZENODO.plasma}
            scope="4+1D plasma dynamics with a controlled MHD limit and explicit hidden-channel corrections/diagnostics beyond the ideal zero-mode reduction."
            status={[{ kind: "closure", label: "MHD limit" }, { kind: "effect", label: "4D corrections" }]}
            feeds={["07"]}
          />

          <PaperCard
            index="05"
            rec={ZENODO.pn1}
            scope="The full first post-Newtonian sector derived within the declared closure hierarchy. Recovers GR's 1PN two-body Lagrangian term-by-term."
            status={[{ kind: "reduce", label: "Full 1PN" }]}
            feeds={["05", "10"]}
          />

          <PaperCard
            index="06"
            rec={ZENODO.pn2}
            scope="The full conservative 2PN sector within the same declared hierarchy. The first major two-body test at this order in the 4D program."
            status={[{ kind: "reduce", label: "Full 2PN conservative" }]}
            feeds={["10"]}
          />

          <PaperCard
            index="07"
            rec={ZENODO.pn25}
            scope="A conditional derivation of the 2.5PN point-particle sector. The surviving branch is narrowed to the STF quadrupole channel; the passive/outgoing normalization remains an open branch-data gate."
            status={[{ kind: "closure", label: "Conditional 2.5PN" }, { kind: "open", label: "Quadrupole gate" }]}
            feeds={["10"]}
          />

          <PaperCard
            index="08"
            rec={ZENODO.pn3}
            scope="The full conservative 3PN two-body sector within the declared hierarchy. Matches GR and closes the conservative 3PN bookkeeping."
            status={[{ kind: "reduce", label: "Full 3PN conservative" }]}
            feeds={["10"]}
          />

          <PaperCard
            index="09"
            rec={ZENODO.pn4}
            scope="A conditional 4PN assembly. The local instantaneous sector is separated from the inherited tail bridge, whose remaining gate is the same passive/outgoing quadrupole normalization isolated at 2.5PN."
            status={[{ kind: "closure", label: "Conditional 4PN" }, { kind: "open", label: "Shared normalization gate" }]}
            feeds={["10"]}
          />
        </div>

        <ArchiveCard />
        <InPrepCard />
      </TPSection>

      {/* 14.3 — Prior work */}
      <TPSection
        anchor="prior-work"
        eyebrow="14.3 · prior work"
        heading="The superfluid-defect toy model — six foundational preprints"
      >
        <TPBody>
          Before the unified 4D program, an earlier round of papers
          established the pieces that carried forward: the throat ontology,
          the first EM derivation, spin and vorticity, the N-body dynamics,
          and a hybrid 1PN calculation that motivated the full PN ladder.
          These records are the historical backbone, but the current status of
          public claims should be read from the 4D papers and audit notes above.
        </TPBody>

        <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 28 }}>
          <PriorPaperCard rec={ZENODO.priorNewtonian1pn}
            scope="Newtonian and 1PN orbital dynamics in the earlier superfluid-defect toy model. Historical precursor, not the current PN proof." />
          <PriorPaperCard rec={ZENODO.priorOptics}
            scope="Gravitational optics and soliton geodesics. Early light-bending and null-trajectory calculations in the defect picture." />
          <PriorPaperCard rec={ZENODO.priorSpinVorticity}
            scope="Spin, vorticity, and N-body dynamics — mechanical scaffolding behind later matter-sector ideas." />
          <PriorPaperCard rec={ZENODO.priorEM}
            scope="EM fields and charged defects in the pre-4D picture. Antecedent to the current localized Maxwell paper." />
          <PriorPaperCard rec={ZENODO.priorThroatOntology}
            scope="The brane-bulk throat ontology. Historical source for throats-as-defects, updated by the current open-conduit audit." />
          <PriorPaperCard rec={ZENODO.priorHybrid1pn}
            scope="Hybrid 1PN orbital dynamics plus the acoustic-horizon construction. Precursor to the current 1PN full-sector paper." />
        </div>
      </TPSection>

      {/* 14.4 — Topic → source map */}
      <TPSection
        anchor="topic-map"
        eyebrow="14.4 · topic → source"
        heading="Which topic pages lean on which published current 4D paper"
      >
        <TPBody>
          Topic 11 additionally leans on the published moving-throat derivation
          archive and the in-prep PDE framework, which are not part of the
          nine-preprint matrix below.
        </TPBody>
        <TopicSourceMatrix />
      </TPSection>

      {/* 14.5 — Conventions */}
      <TPSection
        anchor="conventions"
        eyebrow="14.5 · conventions"
        heading="How to cite back into the library"
      >
        <TPBody>
          Every technical-track page carries one or more{" "}
          <span className="fu-mono" style={{ color: "var(--accent)" }}>source:</span>{" "}
          chips that link to the Zenodo record behind the claim on the page.
          Click any chip on this site to open the canonical preprint.
          Equation numbers and section references use the preprint's own
          numbering — if a topic page says{" "}
          <span className="fu-mono" style={{ color: "var(--accent)" }}>
            (Eq. 3.4, 4D · Action)
          </span>
          , that means equation 3.4 of the <em>Action, Projections, and
          Controlled Brane Limits</em> preprint.
        </TPBody>

        <div style={{
          marginTop: 28,
          padding: "24px 26px",
          border: "1px dashed var(--rule)",
          borderRadius: 3,
          background: "rgba(215,201,161,0.03)",
        }}>
          <div className="fu-mono fu-small" style={{
            color: "#d7c9a1", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10,
          }}>
            ◇ a note on this site
          </div>
          <div className="fu-small" style={{ color: "var(--ink-2)", lineHeight: 1.65 }}>
            Topic pages are written for humans; the preprints are where claims
            are actually defended. If a topic page says something surprising,
            open the cited record and check the claim in context. The
            claim-status badges exist precisely so this check is cheap.
          </div>
        </div>
      </TPSection>
    </TopicPage>
  );
}

// ─── Reading-order diagram ──────────────────────────────────
function ReadingOrderDiagram() {
  const steps = [
    { n: "01", rec: ZENODO.action, note: "start here — parent action" },
    { n: "02", rec: ZENODO.bridge, note: "bridge to optical / PN observables" },
    { n: "03", rec: ZENODO.maxwell, note: "side branch · add gauge" },
    { n: "04", rec: ZENODO.plasma, note: "side branch · MHD limit" },
    { n: "05", rec: ZENODO.pn1, note: "work out 1PN" },
    { n: "06", rec: ZENODO.pn2, note: "… then 2PN conservative" },
    { n: "07", rec: ZENODO.pn25, note: "conditional 2.5PN" },
    { n: "08", rec: ZENODO.pn3, note: "… then 3PN conservative" },
    { n: "09", rec: ZENODO.pn4, note: "conditional 4PN — same normalization gate" },
    { n: "10", rec: ZENODO.pdeLedger, note: "derivation archive · moving-throat companion" },
  ];
  return (
    <div style={{ marginTop: 32 }}>
      {steps.map((s, i) => (
        <a
          key={s.n}
          href={s.rec.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "grid",
            gridTemplateColumns: "56px 1fr 300px",
            gap: 20,
            alignItems: "center",
            padding: "18px 0",
            borderTop: "1px solid var(--rule-2)",
            borderBottom: i === steps.length - 1 ? "1px solid var(--rule-2)" : "none",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          <div className="fu-mono" style={{
            fontSize: 24, color: "#d7c9a1", fontWeight: 300, lineHeight: 1,
          }}>
            {s.n}
          </div>
          <div>
            <div className="fu-mono" style={{ fontSize: 12, color: "#d7c9a1", letterSpacing: "0.08em", marginBottom: 4 }}>
              {s.rec.short}
            </div>
            <div style={{
              fontFamily: "var(--font-display)",
              fontSize: 16, color: "var(--ink-1)", fontStyle: "italic", lineHeight: 1.35,
            }}>
              {s.rec.title}
            </div>
          </div>
          <div className="fu-small" style={{
            color: "var(--ink-3)", fontStyle: "italic", textAlign: "right",
          }}>
            {s.note}
          </div>
        </a>
      ))}
    </div>
  );
}

// ─── Paper card (current program) ──────────────────────────
function PaperCard({ index, rec, scope, status, feeds, highlight }) {
  return (
    <div style={{
      padding: "26px 30px",
      border: "1px solid var(--rule)",
      borderLeft: `2px solid ${highlight ? "#7fc69d" : "#d7c9a1"}`,
      background: highlight
        ? "linear-gradient(180deg, rgba(127,198,157,0.04), rgba(255,255,255,0.01))"
        : "rgba(255,255,255,0.012)",
      borderRadius: 2,
      display: "grid",
      gridTemplateColumns: "70px 1fr",
      gap: 26,
    }}>
      <div style={{
        fontFamily: "var(--font-mono)",
        fontSize: 32,
        fontWeight: 300,
        color: highlight ? "#7fc69d" : "#d7c9a1",
        lineHeight: 1,
      }}>
        {index}
      </div>
      <div>
        <div style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          gap: 16,
          flexWrap: "wrap",
          marginBottom: 10,
        }}>
          <div className="fu-mono" style={{
            fontSize: 12, color: "#d7c9a1", fontWeight: 500, letterSpacing: "0.06em",
          }}>
            {rec.short}
          </div>
          <a href={rec.url} target="_blank" rel="noopener noreferrer"
             className="fu-mono fu-small" style={{
            color: "var(--accent)", fontSize: 10.5, letterSpacing: "0.06em",
            textDecoration: "none",
          }}>
            doi: {rec.id}  ↗
          </a>
        </div>

        <a href={rec.url} target="_blank" rel="noopener noreferrer"
           style={{ textDecoration: "none" }}>
          <div style={{
            fontFamily: "var(--font-display)",
            fontSize: 19,
            fontWeight: 400,
            fontStyle: "italic",
            color: "var(--ink-1)",
            marginBottom: 14,
            lineHeight: 1.3,
          }}>
            {rec.title}
          </div>
        </a>

        <div className="fu-small" style={{
          color: "var(--ink-2)",
          lineHeight: 1.65,
          marginBottom: 18,
        }}>
          {scope}
        </div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 }}>
          {status.map((s, i) => (
            <Badge key={i} kind={s.kind}>{s.label}</Badge>
          ))}
        </div>

        <div style={{
          display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap",
          paddingTop: 12, borderTop: "1px solid var(--rule-2)",
        }}>
          <span className="fu-mono fu-small" style={{
            color: "var(--ink-4)", fontSize: 10, letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}>
            feeds topics
          </span>
          {feeds.map((t) => (
            <span key={t} style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              padding: "3px 9px",
              border: "1px solid var(--rule)",
              borderRadius: 2,
              color: "var(--ink-2)",
              background: "rgba(10,13,24,0.5)",
            }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Prior-work paper card (lighter, shorter) ──────────────
function PriorPaperCard({ rec, scope }) {
  return (
    <a href={rec.url} target="_blank" rel="noopener noreferrer" style={{
      display: "block",
      padding: "18px 22px",
      border: "1px solid var(--rule-2)",
      borderLeft: "2px solid #8a8aa866",
      borderRadius: 2,
      background: "rgba(255,255,255,0.008)",
      textDecoration: "none",
    }}>
      <div style={{
        display: "flex", alignItems: "baseline",
        justifyContent: "space-between", gap: 16, flexWrap: "wrap",
        marginBottom: 8,
      }}>
        <div style={{
          fontFamily: "var(--font-display)",
          fontSize: 16.5,
          fontStyle: "italic",
          color: "var(--ink-1)",
          lineHeight: 1.3,
        }}>
          {rec.title}
        </div>
        <div className="fu-mono fu-small" style={{
          color: "var(--ink-4)", fontSize: 10, letterSpacing: "0.06em",
        }}>
          {rec.id}  ↗
        </div>
      </div>
      <div className="fu-small" style={{ color: "var(--ink-3)", lineHeight: 1.55 }}>
        {scope}
      </div>
    </a>
  );
}

// ─── Archive / in-prep callouts ────────────────────────────
function ArchiveCard() {
  return (
    <a href={ZENODO.pdeLedger.url} target="_blank" rel="noopener noreferrer" style={{
      marginTop: 24,
      padding: "22px 26px",
      border: "1px solid var(--rule)",
      borderRadius: 3,
      background: "rgba(127,198,157,0.035)",
      display: "flex", gap: 20, alignItems: "baseline", flexWrap: "wrap",
      textDecoration: "none",
    }}>
      <span className="fu-mono" style={{
        color: "#7fc69d", fontSize: 10.5,
        letterSpacing: "0.12em", textTransform: "uppercase",
      }}>
        ◇ published archive
      </span>
      <div className="fu-small" style={{ color: "var(--ink-2)", flex: 1, minWidth: 280, lineHeight: 1.55 }}>
        <span style={{ color: "var(--ink-1)" }}>{ZENODO.pdeLedger.title}</span>{" "}
        is the Zenodo derivation companion for the moving-throat PDE ledger and
        Topic 11 branch-realization machinery.
      </div>
      <span className="fu-mono fu-small" style={{ color: "var(--ink-4)", fontSize: 10 }}>
        {ZENODO.pdeLedger.id} ↗
      </span>
    </a>
  );
}

function InPrepCard() {
  return (
    <div style={{
      marginTop: 24,
      padding: "22px 26px",
      border: "1px dashed var(--rule)",
      borderRadius: 3,
      background: "rgba(122,162,255,0.04)",
      display: "flex", gap: 20, alignItems: "baseline", flexWrap: "wrap",
    }}>
      <span className="fu-mono" style={{
        color: "#7aa2ff", fontSize: 10.5,
        letterSpacing: "0.12em", textTransform: "uppercase",
      }}>
        ◇ in preparation
      </span>
      <div className="fu-small" style={{ color: "var(--ink-2)", flex: 1, minWidth: 280, lineHeight: 1.55 }}>
        The full PDE paper — the moving-throat free-boundary framework
        underpinning Topic 11 — remains a draft/in-prep record. The published
        archive above is a derivation companion, not a replacement for the
        final paper.
      </div>
    </div>
  );
}

// ─── Topic × source matrix ─────────────────────────────────
function TopicSourceMatrix() {
  // Columns: 9 current 4D papers. Rows: topics 01–11.
  const cols = [
    { i: "01", rec: ZENODO.action },
    { i: "02", rec: ZENODO.bridge },
    { i: "03", rec: ZENODO.maxwell },
    { i: "04", rec: ZENODO.plasma },
    { i: "05", rec: ZENODO.pn1 },
    { i: "06", rec: ZENODO.pn2 },
    { i: "07", rec: ZENODO.pn25 },
    { i: "08", rec: ZENODO.pn3 },
    { i: "09", rec: ZENODO.pn4 },
  ];

  const map = {
    "01": ["01", "02"],
    "02": ["01"],
    "03": ["01"],
    "04": ["01"],
    "05": ["01", "02", "05"],
    "06": ["03"],
    "07": ["04"],
    "08": ["02", "03"],
    "09": ["03"],
    "10": ["02", "05", "06", "07", "08", "09"],
    "11": ["01", "03"],
  };

  const topics = [
    { n: "01", t: "The Universe as a Fluid" },
    { n: "02", t: "Defects" },
    { n: "03", t: "A Hidden Direction" },
    { n: "04", t: "Throats" },
    { n: "05", t: "Gravity as Inflow" },
    { n: "06", t: "EM as Puncture" },
    { n: "07", t: "Plasma & MHD" },
    { n: "08", t: "Light & the Speed Limit" },
    { n: "09", t: "Atoms, g-factors" },
    { n: "10", t: "PN Ledger" },
    { n: "11", t: "Moving-Throat PDE" },
  ];

  return (
    <div style={{
      marginTop: 24,
      border: "1px solid var(--rule)",
      background: "rgba(255,255,255,0.012)",
      borderRadius: 4,
      overflowX: "auto",
    }}>
      {/* Header */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "240px repeat(9, 1fr)",
        padding: "12px 18px",
        borderBottom: "1px solid var(--rule)",
        fontFamily: "var(--font-mono)",
        fontSize: 10,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: "var(--ink-4)",
      }}>
        <div>topic ↓   paper →</div>
        {cols.map((c) => (
          <div key={c.i} style={{ textAlign: "center" }}>
            <div style={{ color: "var(--ink-3)" }}>{c.i}</div>
            <div style={{ fontSize: 9, marginTop: 2, textTransform: "none", letterSpacing: "0.04em", color: "var(--ink-4)" }}>
              {c.rec.short.replace("4D · ", "")}
            </div>
          </div>
        ))}
      </div>
      {/* Rows */}
      {topics.map((t, i) => (
        <div key={t.n} style={{
          display: "grid",
          gridTemplateColumns: "240px repeat(9, 1fr)",
          padding: "10px 18px",
          borderTop: i === 0 ? "none" : "1px solid var(--rule-2)",
          alignItems: "center",
        }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
            <span className="fu-mono" style={{ color: "#7aa2ff", fontSize: 15 }}>{t.n}</span>
            <span className="fu-small" style={{ color: "var(--ink-2)", fontSize: 14, fontStyle: "italic" }}>
              {t.t}
            </span>
          </div>
          {cols.map((c) => {
            const hit = map[t.n].includes(c.i);
            return (
              <div key={c.i} style={{ textAlign: "center" }}>
                {hit ? (
                  <span style={{
                    display: "inline-block",
                    width: 10,
                    height: 10,
                    borderRadius: 2,
                    background: "#d7c9a1",
                    boxShadow: "0 0 8px rgba(215,201,161,0.4)",
                  }} />
                ) : (
                  <span style={{
                    display: "inline-block",
                    width: 10,
                    height: 10,
                    borderRadius: 2,
                    background: "transparent",
                    border: "1px solid var(--rule-2)",
                  }} />
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
