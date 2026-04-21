/* global React, Badge, Chip, EqCard, Tex, HeroDiagram, NotebookPalette */
// Direction A — Field Notebook

function NotebookDirection({ tweaks }) {
  const scrollRef = React.useRef(null);
  return (
    <div
      ref={scrollRef}
      className="fu-root dir-notebook"
      style={{
        "--accent": tweaks.accent || "#d9a441",
        height: "100%",
        overflow: "auto",
      }}
    >
      <div className="fu-grain" />
      <NotebookNav />
      <NotebookHero speed={tweaks.heroSpeed} />
      <NotebookStartHere />
      <NotebookScrollStory />
      <NotebookResultsStrip />
      <NotebookFooter />
    </div>
  );
}

function NotebookNav() {
  const items = ["Start Here", "The Model", "Moving-Throat PDE", "Results Ledger", "Library"];
  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 20,
      background: "rgba(21,19,15,0.82)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid var(--rule)",
    }}>
      <div className="fu-wrap" style={{ display: "flex", alignItems: "center", height: 64, gap: 28 }}>
        <a style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.25">
            <ellipse cx="12" cy="12" rx="10" ry="3.5" />
            <path d="M12 2 Q 9 12 12 22 Q 15 12 12 2 Z" />
            <circle cx="12" cy="12" r="1.1" fill="var(--accent)" />
          </svg>
          <span className="fu-mono" style={{ fontSize: 13, letterSpacing: "0.05em", color: "var(--ink-1)" }}>
            fluid<span style={{ color: "var(--accent)" }}>·</span>universe
          </span>
        </a>
        <span className="fu-small" style={{ marginLeft: 4, opacity: 0.5 }}>v0.4 · notebook ed.</span>
        <div style={{ flex: 1 }} />
        {items.map((x, i) => (
          <a key={i} className="fu-small" style={{ color: "var(--ink-2)", cursor: "pointer" }}>{x}</a>
        ))}
        <a className="fu-small fu-mono" style={{
          padding: "6px 12px",
          border: "1px solid var(--accent)",
          color: "var(--accent)",
          borderRadius: 2,
          fontSize: 11,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}>Library →</a>
      </div>
    </nav>
  );
}

function NotebookHero({ speed }) {
  return (
    <section style={{ padding: "80px 0 40px", position: "relative" }}>
      <div className="fu-wrap">
        {/* Margin annotations */}
        <div style={{
          position: "absolute", top: 100, right: 60,
          fontFamily: "var(--font-mono)", fontSize: 11,
          color: "var(--ink-3)", letterSpacing: "0.05em",
          textAlign: "right", lineHeight: 1.6, maxWidth: 200,
        }}>
          <div style={{ color: "var(--accent)", marginBottom: 4 }}>fig. 1</div>
          <div>brane–bulk schematic, open<br/>sheet intersecting localized<br/>throat defect at w = 0</div>
        </div>

        <div className="fu-eyebrow" style={{ marginBottom: 20 }}>
          ■ A speculative research program · est. 2024
        </div>
        <h1 className="fu-display fu-h1" style={{ maxWidth: 1000, marginBottom: 28 }}>
          Physics, <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--accent)" }}>projected</em>.
          <br/>Particles as moving<br/>throats in a 4D fluid.
        </h1>
        <p className="fu-lede" style={{ maxWidth: 680, marginBottom: 48 }}>
          A working notebook for a toy‑model research program that tests whether
          gravity‑like, electromagnetic, plasma and atomic behavior can emerge as
          the <em>measured</em> surface of a deeper four‑dimensional fluid substrate.
        </p>

        <div style={{ display: "flex", gap: 24, marginBottom: 60, alignItems: "center" }}>
          <a className="fu-mono" style={{
            fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase",
            padding: "14px 24px", background: "var(--accent)", color: "var(--bg-0)",
            fontWeight: 600, cursor: "pointer",
          }}>Start with the picture →</a>
          <a className="fu-mono" style={{
            fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase",
            padding: "14px 24px", border: "1px solid var(--rule-2)",
            color: "var(--ink-1)", cursor: "pointer",
          }}>Read the ledger</a>
          <span className="fu-small" style={{ opacity: 0.6 }}>
            ~ 14 min read · 8 source papers indexed
          </span>
        </div>

        {/* Diagram */}
        <div style={{
          border: "1px solid var(--rule)",
          background: "linear-gradient(180deg, var(--bg-1) 0%, var(--bg-0) 100%)",
          position: "relative",
        }}>
          <div style={{
            padding: "14px 20px",
            borderBottom: "1px solid var(--rule)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
            <span className="fu-eyebrow">figure 01 · brane–bulk cross-section</span>
            <span className="fu-small fu-mono" style={{ color: "var(--ink-3)" }}>
              drag to rotate · projection scrub ↓
            </span>
          </div>
          <HeroDiagram palette={NotebookPalette} speed={speed} />
          <div style={{
            padding: "12px 20px",
            borderTop: "1px solid var(--rule)",
            display: "flex",
            gap: 24,
            alignItems: "center",
            flexWrap: "wrap",
          }}>
            <LegendDot color="rgba(217,164,65,0.7)" label="brane (x,y,z)" />
            <LegendDot color="rgba(237,229,212,0.7)" label="throat defect" />
            <LegendDot color="rgba(200,189,166,0.5)" label="bulk field lines" dashed />
            <LegendDot color="var(--accent)" label="projection disk" />
            <span style={{ flex: 1 }} />
            <span className="fu-small fu-mono" style={{ color: "var(--ink-3)" }}>
              not to scale · schematic only
            </span>
          </div>
        </div>

        {/* Carry-forward constants strip */}
        <div style={{
          marginTop: 48, display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px,1fr))",
          gap: 1, background: "var(--rule)",
          border: "1px solid var(--rule)",
        }}>
          {[
            { k: "n = 5", v: "EoS exponent" },
            { k: "κ_ρ = 1", v: "mass-dressing" },
            { k: "κ_add = ½", v: "added-mass" },
            { k: "β_1PN = 3", v: "precession ledger" },
            { k: "χ_Q = 1", v: "outgoing normalization" },
          ].map(({k,v}, i) => (
            <div key={i} style={{ padding: "20px 22px", background: "var(--bg-1)" }}>
              <div className="fu-mono" style={{ fontSize: 15, color: "var(--ink-1)", marginBottom: 4 }}>{k}</div>
              <div className="fu-small" style={{ color: "var(--ink-3)" }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LegendDot({ color, label, dashed }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
      {dashed ? (
        <svg width="18" height="4"><line x1="0" y1="2" x2="18" y2="2" stroke={color} strokeDasharray="2 2" strokeWidth="1.2" /></svg>
      ) : (
        <span style={{ width: 10, height: 10, borderRadius: 5, background: color, display: "inline-block" }} />
      )}
      <span className="fu-small fu-mono" style={{ color: "var(--ink-2)", fontSize: 11 }}>{label}</span>
    </span>
  );
}

// ─── Start Here — three-panel explanation ──────────────────────
function NotebookStartHere() {
  const panels = [
    {
      num: "01",
      title: "A hidden dimension, used carefully",
      body: "Not a mystical extra space. A bookkeeping device: we ask whether familiar 3D laws might be the projected readout of a deeper fluid field. The hidden axis is called ",
      after: ", and everything about it is declared explicitly — no hand-waves.",
      tex: "w",
    },
    {
      num: "02",
      title: "Particles as throats, not points",
      body: "What you see as a particle, the model treats as a localized mouth of a defect whose support continues into ",
      after: ". Earlier closures used two numbers — radius and length. The current PDE upgrade makes the whole moving surface explicit.",
      tex: "R(\\Omega, w, t)",
    },
    {
      num: "03",
      title: "Measurement is a first-class operation",
      body: "A 3D observer sees the bulk through a projection kernel ",
      after: ". Projection and reduction are not the same thing — we keep them distinct on every page.",
      tex: "W(w)",
    },
  ];

  return (
    <section className="fu-section" style={{ paddingTop: 120, paddingBottom: 80, borderTop: "1px solid var(--rule)" }}>
      <div className="fu-wrap">
        <div style={{ display: "flex", alignItems: "baseline", gap: 20, marginBottom: 80 }}>
          <span className="fu-eyebrow" style={{ color: "var(--accent)" }}>§ start here</span>
          <span className="fu-small" style={{ color: "var(--ink-3)" }}>
            three pictures before any equations
          </span>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 48,
        }}>
          {panels.map((p, i) => (
            <div key={i} style={{ borderTop: "1px solid var(--rule-2)", paddingTop: 32 }}>
              <div className="fu-mono" style={{
                fontSize: 52, color: "var(--accent)",
                fontWeight: 300, marginBottom: 20, lineHeight: 1,
                letterSpacing: "-0.02em",
              }}>{p.num}</div>
              <h3 className="fu-display fu-h3" style={{ marginBottom: 16, color: "var(--ink-1)" }}>
                {p.title}
              </h3>
              <p className="fu-body" style={{ fontSize: 15.5 }}>
                {p.body}<Tex tex={p.tex} />{p.after}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Scroll story — projection vs reduction + PN ladder ───────
function NotebookScrollStory() {
  return (
    <>
      <ProjectionVsReduction />
      <NotebookEquations />
      <PNLadder />
    </>
  );
}

function ProjectionVsReduction() {
  return (
    <section className="fu-section" style={{ paddingTop: 100, paddingBottom: 100, borderTop: "1px solid var(--rule)" }}>
      <div className="fu-wrap">
        <div className="fu-eyebrow" style={{ color: "var(--accent)", marginBottom: 18 }}>§ notation trap</div>
        <h2 className="fu-display fu-h2" style={{ marginBottom: 40, maxWidth: 820 }}>
          Projection is not reduction.
        </h2>
        <p className="fu-lede" style={{ maxWidth: 680, marginBottom: 60 }}>
          Two different operations take us from the bulk to a brane-facing statement.
          Conflating them is how hidden-dimension stories go wrong. We keep a firewall
          between them on every technical page.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "var(--rule)", border: "1px solid var(--rule)" }}>
          {/* PROJECTION */}
          <div style={{ padding: 40, background: "var(--bg-1)" }}>
            <div className="fu-mono" style={{ fontSize: 11, letterSpacing: "0.14em", color: "var(--accent)", marginBottom: 16 }}>
              PROJECTION · a measurement
            </div>
            <svg viewBox="0 0 400 220" style={{ width: "100%", marginBottom: 24 }}>
              {/* bulk field */}
              <defs>
                <linearGradient id="pr-wash" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(217,164,65,0.3)" />
                  <stop offset="100%" stopColor="rgba(217,164,65,0)" />
                </linearGradient>
              </defs>
              <rect x="20" y="20" width="220" height="180" fill="url(#pr-wash)" />
              <text x="30" y="40" fill="var(--ink-3)" fontFamily="JetBrains Mono" fontSize="10">bulk quantity · φ(x,w)</text>
              {/* vertical arrow */}
              <g stroke="var(--accent)" strokeWidth="1.2" fill="none">
                <line x1="250" y1="110" x2="330" y2="110" />
                <path d="M325 105 L335 110 L325 115" />
              </g>
              <text x="255" y="100" fill="var(--accent)" fontFamily="JetBrains Mono" fontSize="10">∫ W(w) dw</text>
              {/* brane line */}
              <line x1="340" y1="40" x2="340" y2="180" stroke="var(--ink-1)" strokeWidth="1.5" />
              <text x="348" y="110" fill="var(--ink-1)" fontFamily="JetBrains Mono" fontSize="10">φ̄(x)</text>
            </svg>
            <p className="fu-body" style={{ fontSize: 15 }}>
              Exact. A weighted average through <Tex tex="w" /> with a declared
              kernel <Tex tex="W(w)" />. Keeps all channels; simply records what a
              3D observer measures. Leakage terms survive.
            </p>
            <div style={{ marginTop: 16 }}><Badge kind="exact">Exact identity</Badge></div>
          </div>
          {/* REDUCTION */}
          <div style={{ padding: 40, background: "var(--bg-1)" }}>
            <div className="fu-mono" style={{ fontSize: 11, letterSpacing: "0.14em", color: "var(--accent)", marginBottom: 16 }}>
              REDUCTION · an approximation
            </div>
            <svg viewBox="0 0 400 220" style={{ width: "100%", marginBottom: 24 }}>
              <rect x="20" y="20" width="220" height="180" fill="url(#pr-wash)" />
              <text x="30" y="40" fill="var(--ink-3)" fontFamily="JetBrains Mono" fontSize="10">bulk theory · full action</text>
              {/* zero-mode ansatz */}
              <g stroke="var(--accent-soft)" strokeWidth="1" strokeDasharray="3 3" fill="none">
                <path d="M30 70 Q 130 50 240 70" />
                <path d="M30 90 Q 130 110 240 90" />
                <path d="M30 110 Q 130 130 240 110" />
              </g>
              <text x="30" y="170" fill="var(--ink-3)" fontFamily="JetBrains Mono" fontSize="9">+ zero-mode ansatz</text>
              <text x="30" y="184" fill="var(--ink-3)" fontFamily="JetBrains Mono" fontSize="9">+ low-freq. limit</text>
              <g stroke="var(--accent)" strokeWidth="1.2" fill="none">
                <line x1="250" y1="110" x2="330" y2="110" />
                <path d="M325 105 L335 110 L325 115" />
              </g>
              <text x="250" y="100" fill="var(--accent)" fontFamily="JetBrains Mono" fontSize="10">closure</text>
              <line x1="340" y1="40" x2="340" y2="180" stroke="var(--ink-1)" strokeWidth="1.5" />
              <text x="348" y="110" fill="var(--ink-1)" fontFamily="JetBrains Mono" fontSize="10">eff. 3D law</text>
            </svg>
            <p className="fu-body" style={{ fontSize: 15 }}>
              An effective 3D law obtained under explicit assumptions — ansatz,
              low‑frequency limit, zero‑mode selection. Channels may be dropped;
              the ones that <em>survive</em> look like familiar Maxwell, Poisson,
              or MHD.
            </p>
            <div style={{ marginTop: 16 }}><Badge kind="closure">Exact within closure</Badge></div>
          </div>
        </div>

        <div style={{ marginTop: 24, display: "flex", gap: 6, flexWrap: "wrap" }}>
          <Chip>4d_summary.md</Chip>
          <Chip>4d_em_fields_summary.md</Chip>
          <Chip>4d_plasma_summary.md</Chip>
        </div>
      </div>
    </section>
  );
}

function NotebookEquations() {
  return (
    <section style={{ padding: "60px 0 100px", borderTop: "1px solid var(--rule)" }}>
      <div className="fu-wrap">
        <div className="fu-eyebrow" style={{ color: "var(--accent)", marginBottom: 18 }}>§ carry-forward identities</div>
        <h2 className="fu-display fu-h2" style={{ marginBottom: 40, maxWidth: 760 }}>
          Five equations do most of the work.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          <EqCard
            label="throat geometry · moving-throat PDE"
            plain="The defect is no longer two numbers; it is a moving surface with angular, bulk-depth, and time structure."
            tex="\Sigma(X,t) = r - R(\Omega,w,t)"
            chips={["moving_throat_pde_program_compact.md"]}
          />
          <EqCard
            label="brane charge · thickness control"
            plain="Electric sign is topological. Measured strength is set by how thickly the gauge field localizes around w = 0."
            tex="q_{\text{eff}} = \frac{q_*}{\sqrt{Z_{\text{int}}}}"
            chips={["4d_em_fields_summary.md"]}
          />
          <EqCard
            label="matter sector · stiff polytrope"
            plain="The bulk matter obeys a stiff equation of state. The exponent n = 5 is fixed by optical consistency and never tuned afterwards."
            tex="P(\rho) = K\,\rho^{5}"
            chips={["4d_summary.md"]}
          />
          <EqCard
            label="Poisson hook · emergent inverse square"
            plain="Gravity-like inverse-square behavior is not postulated. It appears as a longitudinal identity under a controlled quasi-static regime."
            tex="\nabla^2 \Phi = 4\pi G \rho_{\text{eff}}"
            chips={["4d_1pn_full_summary.md"]}
          />
        </div>
      </div>
    </section>
  );
}

// ─── PN ladder scroll-linked component ────────────────────────
function PNLadder() {
  const rungs = [
    { rung: "0PN",  title: "Newtonian",            status: "exact",   note: "Inverse-square from Poisson hook." },
    { rung: "1PN",  title: "EIH two-body ledger",  status: "closure", note: "Matches within declared closure hierarchy." },
    { rung: "2PN",  title: "ADM Hamiltonian",      status: "closure", note: "Generic-frame match through 2PN." },
    { rung: "2.5PN",title: "Radiative quadrupole", status: "reduce",  note: "Retarded branch narrowed; normalization gap isolated." },
    { rung: "3PN",  title: "Grouped P₂ closure",   status: "closure", note: "Conservative ledger closed in fixed ADM chart." },
    { rung: "4PN",  title: "Local instantaneous",  status: "closure", note: "Local sector closed; same quadrupole gap remains." },
    { rung: "5PN",  title: "Branch realization",   status: "open",    note: "Compressed to PDE-selected moving-throat branch." },
  ];
  return (
    <section className="fu-section" style={{ paddingTop: 100, paddingBottom: 120, borderTop: "1px solid var(--rule)" }}>
      <div className="fu-wrap">
        <div className="fu-eyebrow" style={{ color: "var(--accent)", marginBottom: 18 }}>§ post-newtonian stress test</div>
        <h2 className="fu-display fu-h2" style={{ marginBottom: 24, maxWidth: 820 }}>
          The ladder — what has matched, what is narrowed, what remains open.
        </h2>
        <p className="fu-body" style={{ maxWidth: 660, marginBottom: 60 }}>
          If the model is serious, the reduced two-body dynamics must reproduce
          known gravitational bookkeeping, not just hand-wave inverse-square
          behavior. Every rung is labeled honestly.
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "72px 1fr 1fr 180px",
          gap: 0,
          border: "1px solid var(--rule)",
          background: "var(--bg-1)",
        }}>
          {/* header */}
          {["rung", "sector", "current status", "badge"].map((h, i) => (
            <div key={i} className="fu-eyebrow" style={{
              padding: "14px 20px", borderBottom: "1px solid var(--rule)",
              background: "var(--bg-2)", color: "var(--ink-3)",
            }}>{h}</div>
          ))}
          {rungs.map((r, i) => (
            <React.Fragment key={i}>
              <div className="fu-mono" style={{
                padding: "22px 20px", borderBottom: i < rungs.length - 1 ? "1px solid var(--rule)" : "none",
                color: "var(--accent)", fontSize: 14, fontWeight: 500, letterSpacing: "0.02em",
              }}>{r.rung}</div>
              <div className="fu-display" style={{
                padding: "22px 20px", borderBottom: i < rungs.length - 1 ? "1px solid var(--rule)" : "none",
                fontSize: 18, color: "var(--ink-1)",
              }}>{r.title}</div>
              <div className="fu-body" style={{
                padding: "22px 20px", borderBottom: i < rungs.length - 1 ? "1px solid var(--rule)" : "none",
                fontSize: 14, color: "var(--ink-2)",
              }}>{r.note}</div>
              <div style={{
                padding: "22px 20px", borderBottom: i < rungs.length - 1 ? "1px solid var(--rule)" : "none",
                display: "flex", alignItems: "center",
              }}><Badge kind={r.status} /></div>
            </React.Fragment>
          ))}
        </div>

        <div style={{ marginTop: 24, display: "flex", gap: 6, flexWrap: "wrap" }}>
          <Chip>4d_1pn_full_summary.md</Chip>
          <Chip>4d_2pn_summary.md</Chip>
          <Chip>4d_2_5pn_summary.md</Chip>
          <Chip>4d_3pn_summary.md</Chip>
          <Chip>4d_4pn_summary.md</Chip>
          <Chip>4d_5pn_summary.md</Chip>
        </div>
      </div>
    </section>
  );
}

// ─── Results strip / caution ──────────────────────────────────
function NotebookResultsStrip() {
  return (
    <section style={{ padding: "100px 0", borderTop: "1px solid var(--rule)", background: "var(--bg-1)" }}>
      <div className="fu-wrap">
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 80, alignItems: "start" }}>
          <div>
            <div className="fu-eyebrow" style={{ color: "var(--accent)", marginBottom: 18 }}>§ caution</div>
            <h2 className="fu-display fu-h2" style={{ marginBottom: 28 }}>
              What this project is <em style={{ color: "var(--accent)" }}>not</em>.
            </h2>
            <p className="fu-body" style={{ marginBottom: 28 }}>
              Fluid Universe is a speculative, falsification‑first research program — not
              established physics and not a theory of everything. We will not claim to
              have derived the Standard Model, replaced general relativity, or solved
              the moving‑throat PDE. The program tests whether a precise higher‑dimensional
              defect model can reproduce known structures under transparent assumptions,
              and identifies where it fails.
            </p>
            <p className="fu-small" style={{ fontStyle: "italic", color: "var(--ink-3)" }}>
              Every result on this site carries one of six status badges. No hype, no checkmarks where there should be a narrowed or an open.
            </p>
          </div>
          <div style={{
            border: "1px solid var(--rule-2)",
            padding: 32,
            background: "var(--bg-0)",
          }}>
            <div className="fu-eyebrow" style={{ color: "var(--ink-3)", marginBottom: 20 }}>status system</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                ["exact",   "Follows from the parent action."],
                ["closure", "Holds inside a stated reduced family."],
                ["reduce",  "Requires an explicit controlled limit."],
                ["effect",  "Physically motivated model choice."],
                ["num",     "Defined exactly; value from numerics."],
                ["open",    "Awaits PDE branch or theorem gap."],
              ].map(([k, d]) => (
                <div key={k} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{ minWidth: 150 }}><Badge kind={k} /></div>
                  <div className="fu-small" style={{ color: "var(--ink-2)" }}>{d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NotebookFooter() {
  return (
    <footer style={{ padding: "60px 0 80px", borderTop: "1px solid var(--rule)" }}>
      <div className="fu-wrap">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div>
            <div className="fu-mono" style={{ fontSize: 12, color: "var(--ink-3)", letterSpacing: "0.08em", marginBottom: 8 }}>
              FLUID UNIVERSE · NOTEBOOK EDITION
            </div>
            <div className="fu-small" style={{ color: "var(--ink-3)", maxWidth: 440 }}>
              A working notebook. Pages will grow. Claims are labeled. The frontier is
              the moving‑throat PDE — whether the branch it selects realizes the reduced
              finish line already compressed in the ledger.
            </div>
          </div>
          <div className="fu-small fu-mono" style={{ color: "var(--ink-4)" }}>
            last indexed · Apr 2026
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { NotebookDirection });
