/* global React, Badge, Chip, EqCard, Tex, HeroDiagram, AtlasPalette */
// Direction C — Atlas visuals + Notebook text approach

function AtlasNotebookDirection({ tweaks }) {
  return (
    <div
      className="fu-root dir-atlas"
      style={{
        "--accent": tweaks.accent || "#7aa2ff",
        height: "100%",
        overflow: "auto",
      }}
    >
      <ACAtmosphere />
      <ACNav />
      <ACHero speed={tweaks.heroSpeed} />
      <ACStartHere />
      <ACFirewall />
      <ACEquations />
      <ACLadder />
      <ACCaution />
      <ACFooter />
    </div>
  );
}

function ACAtmosphere() {
  return (
    <div style={{
      position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
      background: [
        "radial-gradient(ellipse 900px 600px at 15% 6%, rgba(122,162,255,0.11), transparent 62%)",
        "radial-gradient(ellipse 700px 500px at 88% 26%, rgba(184,139,255,0.08), transparent 60%)",
        "radial-gradient(ellipse 600px 400px at 50% 85%, rgba(230,122,198,0.055), transparent 65%)",
      ].join(","),
    }} />
  );
}

function ACNav() {
  const items = ["Start Here", "The Model", "Moving-Throat PDE", "Results Ledger", "Library"];
  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 20,
      background: "rgba(10,13,24,0.78)",
      backdropFilter: "blur(14px)",
      borderBottom: "1px solid var(--rule)",
    }}>
      <div className="fu-wrap" style={{ display: "flex", alignItems: "center", height: 68, gap: 28 }}>
        <a style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <svg width="26" height="26" viewBox="0 0 28 28">
            <defs>
              <radialGradient id="ac-logo" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#e67ac6" stopOpacity="0.9" />
                <stop offset="60%" stopColor="#7aa2ff" stopOpacity="0.4" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
            <circle cx="14" cy="14" r="13" fill="url(#ac-logo)" />
            <ellipse cx="14" cy="14" rx="11" ry="2.5" stroke="#e4e7f5" strokeWidth="0.6" fill="none" opacity="0.55" />
            <path d="M14 3 Q 11 14 14 25 Q 17 14 14 3 Z" fill="none" stroke="#e4e7f5" strokeWidth="0.8" opacity="0.85" />
            <circle cx="14" cy="14" r="1.4" fill="#f0c26b" />
          </svg>
          <span className="fu-mono" style={{ fontSize: 13, letterSpacing: "0.05em", color: "var(--ink-1)" }}>
            fluid<span style={{ color: "var(--accent)" }}>·</span>universe
          </span>
        </a>
        <span className="fu-small" style={{ marginLeft: 4, opacity: 0.5 }}>v0.4</span>
        <div style={{ flex: 1 }} />
        {items.map((x, i) => (
          <a key={i} className="fu-small" style={{ color: "var(--ink-2)", cursor: "pointer" }}>{x}</a>
        ))}
        <a className="fu-small fu-mono" style={{
          padding: "6px 14px",
          border: "1px solid rgba(122,162,255,0.45)",
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

function ACHero({ speed }) {
  return (
    <section style={{ padding: "100px 0 60px", position: "relative" }}>
      <div className="fu-wrap">
        <div style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 60, alignItems: "center" }}>
          {/* LEFT — copy */}
          <div>
            <div className="fu-eyebrow" style={{ marginBottom: 22, color: "var(--accent)" }}>
              ◇ A speculative research program · est. 2024
            </div>
            <h1 className="fu-display fu-h1" style={{ marginBottom: 28, fontWeight: 280 }}>
              Physics, <em style={{
                fontFamily: "var(--font-serif)", fontStyle: "italic",
                background: "linear-gradient(90deg, var(--accent) 0%, #b88bff 60%, #e67ac6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>projected</em>.
              <br/>Particles as moving throats in a 4D fluid.
            </h1>
            <p className="fu-lede" style={{ marginBottom: 36 }}>
              A working atlas for a toy‑model research program that tests whether
              gravity‑like, electromagnetic, plasma and atomic behavior can emerge as
              the <em>measured</em> surface of a deeper four‑dimensional fluid substrate.
            </p>
            <div style={{ display: "flex", gap: 16, marginBottom: 24, flexWrap: "wrap", alignItems: "center" }}>
              <a className="fu-mono" style={{
                fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase",
                padding: "14px 26px", borderRadius: 999,
                background: "linear-gradient(90deg, var(--accent), #b88bff)",
                color: "#0a0d18", fontWeight: 600, cursor: "pointer",
              }}>Start with the picture →</a>
              <a className="fu-mono" style={{
                fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase",
                padding: "14px 22px", borderRadius: 999,
                border: "1px solid var(--rule-2)", color: "var(--ink-1)", cursor: "pointer",
              }}>Read the ledger</a>
            </div>
            <span className="fu-small" style={{ opacity: 0.6 }}>
              ~ 14 min read · 8 source papers indexed
            </span>
          </div>

          {/* RIGHT — compact diagram panel */}
          <div style={{
            border: "1px solid var(--rule-2)",
            borderRadius: 3,
            background: "linear-gradient(180deg, rgba(16,20,42,0.75) 0%, rgba(10,13,24,0.5) 100%)",
            backdropFilter: "blur(8px)",
            overflow: "hidden",
          }}>
            <div style={{
              padding: "12px 18px",
              borderBottom: "1px solid var(--rule)",
              display: "flex", justifyContent: "space-between", alignItems: "center",
            }}>
              <span className="fu-eyebrow">◇ plate 01 · brane–bulk</span>
              <span className="fu-small fu-mono" style={{ color: "var(--ink-3)" }}>
                drag · rotate · scrub
              </span>
            </div>
            <HeroDiagram palette={AtlasPalette} speed={speed} />
            <div style={{
              padding: "10px 18px",
              borderTop: "1px solid var(--rule)",
              display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap",
            }}>
              <LegendGlow color="#e67ac6" label="brane" />
              <LegendGlow color="#b88bff" label="throat" />
              <LegendGlow color="#7aa2ff" label="field" dashed />
              <LegendGlow color="#f0c26b" label="projection" />
            </div>
          </div>
        </div>

        {/* Constants — hairline grid, full width below hero */}
        <div style={{
          marginTop: 64, display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px,1fr))",
          gap: 1, background: "var(--rule)",
          border: "1px solid var(--rule)", borderRadius: 3, overflow: "hidden",
        }}>
          {[
            { k: "n = 5", v: "EoS exponent" },
            { k: "κ_ρ = 1", v: "mass-dressing" },
            { k: "κ_add = ½", v: "added-mass" },
            { k: "β_1PN = 3", v: "precession ledger" },
            { k: "χ_Q = 1", v: "outgoing normalization" },
          ].map(({k,v}, i) => (
            <div key={i} style={{ padding: "20px 22px", background: "rgba(16,20,42,0.5)" }}>
              <div className="fu-mono" style={{ fontSize: 15, color: "var(--ink-1)", marginBottom: 4 }}>{k}</div>
              <div className="fu-small" style={{ color: "var(--ink-3)" }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LegendGlow({ color, label, dashed }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
      {dashed ? (
        <svg width="18" height="4"><line x1="0" y1="2" x2="18" y2="2" stroke={color} strokeDasharray="2 2" strokeWidth="1.2" /></svg>
      ) : (
        <span style={{ width: 9, height: 9, borderRadius: 5, background: color, boxShadow: `0 0 8px ${color}` }} />
      )}
      <span className="fu-small fu-mono" style={{ color: "var(--ink-2)", fontSize: 11 }}>{label}</span>
    </span>
  );
}

function ACStartHere() {
  const panels = [
    {
      num: "01",
      title: "A hidden dimension, used carefully",
      body: "Not a mystical extra space. A bookkeeping device: we ask whether familiar 3D laws might be the projected readout of a deeper fluid field. The hidden axis is called ",
      after: ", and everything about it is declared explicitly — no hand‑waves.",
      tex: "w",
      tint: "var(--accent)",
    },
    {
      num: "02",
      title: "Particles as throats, not points",
      body: "What you see as a particle, the model treats as a localized mouth of a defect whose support continues into ",
      after: ". Earlier closures used two numbers — radius and length. The current PDE upgrade makes the whole moving surface explicit.",
      tex: "R(\\Omega, w, t)",
      tint: "#b88bff",
    },
    {
      num: "03",
      title: "Measurement is a first-class operation",
      body: "A 3D observer sees the bulk through a projection kernel ",
      after: ". Projection and reduction are not the same thing — we keep them distinct on every page.",
      tex: "W(w)",
      tint: "#e67ac6",
    },
  ];

  return (
    <section className="fu-section" style={{ paddingTop: 120, paddingBottom: 80, borderTop: "1px solid var(--rule)" }}>
      <div className="fu-wrap">
        <div style={{ display: "flex", alignItems: "baseline", gap: 20, marginBottom: 72 }}>
          <span className="fu-eyebrow" style={{ color: "var(--accent)" }}>◇ start here</span>
          <span className="fu-small" style={{ color: "var(--ink-3)" }}>
            three pictures before any equations
          </span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 40 }}>
          {panels.map((p, i) => (
            <div key={i} style={{
              borderTop: `1px solid ${p.tint}`,
              paddingTop: 28,
              position: "relative",
            }}>
              <div className="fu-mono" style={{
                fontSize: 52, color: p.tint, fontWeight: 300,
                marginBottom: 20, lineHeight: 1, letterSpacing: "-0.02em",
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

function ACFirewall() {
  return (
    <section className="fu-section" style={{ paddingTop: 100, paddingBottom: 100, borderTop: "1px solid var(--rule)" }}>
      <div className="fu-wrap">
        <div className="fu-eyebrow" style={{ color: "var(--accent)", marginBottom: 18 }}>◇ notation trap</div>
        <h2 className="fu-display fu-h2" style={{ marginBottom: 36, maxWidth: 820, fontWeight: 300 }}>
          Projection is not reduction.
        </h2>
        <p className="fu-lede" style={{ maxWidth: 680, marginBottom: 60 }}>
          Two different operations take us from the bulk to a brane‑facing
          statement. Conflating them is how hidden‑dimension stories go wrong.
          We keep a firewall between them on every technical page.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {[
            {
              kind: "PROJECTION",
              tag: "a measurement",
              accent: "#f0c26b",
              grad: "rgba(240,194,107,0.11)",
              tex: "\\bar{\\varphi}(x) \\;=\\; \\int W(w)\\,\\varphi(x,w)\\,dw",
              copy: "A weighted average through w with a declared kernel W(w). Keeps every channel; simply records what a 3D observer measures. Leakage terms survive.",
              badge: "exact",
              badgeLabel: "Exact identity",
            },
            {
              kind: "REDUCTION",
              tag: "an approximation",
              accent: "#b88bff",
              grad: "rgba(184,139,255,0.11)",
              tex: "\\varphi(x,w) \\;\\approx\\; f_0(w)\\,\\psi(x) \\;+\\; \\text{(dropped modes)}",
              copy: "An effective 3D law obtained under explicit assumptions — zero-mode ansatz, low-frequency limit, small-body selection. Channels may be dropped; the ones that survive look like Maxwell, Poisson, or MHD.",
              badge: "closure",
              badgeLabel: "Exact within closure",
            },
          ].map((c, i) => (
            <div key={i} style={{
              padding: 40,
              borderRadius: 3,
              border: "1px solid var(--rule-2)",
              background: `linear-gradient(160deg, ${c.grad}, rgba(10,13,24,0.4))`,
            }}>
              <div className="fu-mono" style={{ fontSize: 11, letterSpacing: "0.16em", color: c.accent, marginBottom: 12 }}>
                ◇ {c.kind} · {c.tag}
              </div>
              <h3 className="fu-display" style={{ fontSize: 28, fontWeight: 300, marginBottom: 24, color: "var(--ink-1)" }}>
                {c.kind.toLowerCase()}<span style={{ color: "var(--ink-3)", fontStyle: "italic" }}> — {c.tag}</span>
              </h3>
              <div style={{
                padding: "22px 20px",
                background: "rgba(6,9,18,0.55)",
                border: `1px solid ${c.accent}30`,
                borderRadius: 3,
                marginBottom: 22,
                overflow: "auto",
              }}>
                <Tex tex={c.tex} block />
              </div>
              <p className="fu-body" style={{ fontSize: 15, marginBottom: 18 }}>
                {c.copy}
              </p>
              <Badge kind={c.badge}>{c.badgeLabel}</Badge>
            </div>
          ))}
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

function ACEquations() {
  return (
    <section style={{ padding: "60px 0 100px", borderTop: "1px solid var(--rule)" }}>
      <div className="fu-wrap">
        <div className="fu-eyebrow" style={{ color: "var(--accent)", marginBottom: 18 }}>◇ carry-forward identities</div>
        <h2 className="fu-display fu-h2" style={{ marginBottom: 40, maxWidth: 760, fontWeight: 300 }}>
          Five equations do most of the work.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          <EqCard
            label="◇ throat geometry · moving-throat PDE"
            plain="The defect is no longer two numbers; it is a moving surface with angular, bulk-depth, and time structure."
            tex="\Sigma(X,t) = r - R(\Omega,w,t)"
            chips={["moving_throat_pde_program_compact.md"]}
          />
          <EqCard
            label="◇ brane charge · thickness control"
            plain="Electric sign is topological. Measured strength is set by how thickly the gauge field localizes around w = 0."
            tex="q_{\text{eff}} = \frac{q_*}{\sqrt{Z_{\text{int}}}}"
            chips={["4d_em_fields_summary.md"]}
          />
          <EqCard
            label="◇ matter sector · stiff polytrope"
            plain="The bulk matter obeys a stiff equation of state. The exponent n = 5 is fixed by optical consistency and never tuned afterwards."
            tex="P(\rho) = K\,\rho^{5}"
            chips={["4d_summary.md"]}
          />
          <EqCard
            label="◇ Poisson hook · emergent inverse square"
            plain="Gravity-like inverse-square behavior is not postulated. It appears as a longitudinal identity under a controlled quasi-static regime."
            tex="\nabla^2 \Phi = 4\pi G \rho_{\text{eff}}"
            chips={["4d_1pn_full_summary.md"]}
          />
        </div>
      </div>
    </section>
  );
}

function ACLadder() {
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
        <div className="fu-eyebrow" style={{ color: "var(--accent)", marginBottom: 18 }}>◇ post-newtonian stress test</div>
        <h2 className="fu-display fu-h2" style={{ marginBottom: 24, maxWidth: 820, fontWeight: 300 }}>
          The ladder — what has matched, what is narrowed, what remains open.
        </h2>
        <p className="fu-body" style={{ maxWidth: 660, marginBottom: 60 }}>
          If the model is serious, the reduced two‑body dynamics must reproduce
          known gravitational bookkeeping, not just hand‑wave inverse‑square
          behavior. Every rung is labeled honestly.
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "72px 1fr 1fr 180px",
          gap: 0,
          border: "1px solid var(--rule-2)",
          borderRadius: 3, overflow: "hidden",
          background: "rgba(16,20,42,0.5)",
        }}>
          {["rung", "sector", "current status", "badge"].map((h, i) => (
            <div key={i} className="fu-eyebrow" style={{
              padding: "14px 20px", borderBottom: "1px solid var(--rule)",
              background: "rgba(28,34,70,0.7)", color: "var(--ink-3)",
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

function ACCaution() {
  return (
    <section style={{ padding: "100px 0", borderTop: "1px solid var(--rule)" }}>
      <div className="fu-wrap">
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 80, alignItems: "start" }}>
          <div>
            <div className="fu-eyebrow" style={{ color: "#e67ac6", marginBottom: 18 }}>◇ caution</div>
            <h2 className="fu-display fu-h2" style={{ marginBottom: 28, fontWeight: 300 }}>
              What this project is <em style={{
                fontFamily: "var(--font-serif)", fontStyle: "italic",
                background: "linear-gradient(90deg, var(--accent), #e67ac6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>not</em>.
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
            padding: 32, borderRadius: 3,
            background: "linear-gradient(160deg, rgba(184,139,255,0.06), rgba(10,13,24,0.4))",
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
                  <div style={{ minWidth: 155 }}><Badge kind={k} /></div>
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

function ACFooter() {
  return (
    <footer style={{ padding: "60px 0 80px", borderTop: "1px solid var(--rule)" }}>
      <div className="fu-wrap">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div>
            <div className="fu-mono" style={{ fontSize: 12, color: "var(--ink-3)", letterSpacing: "0.08em", marginBottom: 8 }}>
              FLUID UNIVERSE · ATLAS/NOTEBOOK EDITION
            </div>
            <div className="fu-small" style={{ color: "var(--ink-3)", maxWidth: 460 }}>
              The frontier is the moving‑throat PDE — whether the branch it
              selects realizes the reduced finish line already compressed in the
              ledger.
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

Object.assign(window, { AtlasNotebookDirection });
