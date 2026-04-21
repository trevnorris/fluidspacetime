/* global React, Badge, Chip, EqCard, Tex, HeroDiagram, AtlasPalette */
// Direction B — Fluid Atlas

function AtlasDirection({ tweaks }) {
  return (
    <div
      className="fu-root dir-atlas"
      style={{
        "--accent": tweaks.accent || "#7aa2ff",
        height: "100%",
        overflow: "auto",
      }}
    >
      <div className="fu-grain" />
      <AtlasAtmosphere />
      <AtlasNav />
      <AtlasHero speed={tweaks.heroSpeed} />
      <AtlasStartHere />
      <AtlasProjection />
      <AtlasEquations />
      <AtlasPN />
      <AtlasCaution />
      <AtlasFooter />
    </div>
  );
}

// Background atmosphere — painterly gradient hints (justified by brane/mixed-sector metaphor)
function AtlasAtmosphere() {
  return (
    <div style={{
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      zIndex: 0,
      background: [
        "radial-gradient(ellipse 900px 600px at 20% 8%, rgba(122,162,255,0.10), transparent 60%)",
        "radial-gradient(ellipse 700px 500px at 85% 30%, rgba(184,139,255,0.08), transparent 60%)",
        "radial-gradient(ellipse 600px 400px at 50% 80%, rgba(230,122,198,0.06), transparent 65%)",
      ].join(","),
    }} />
  );
}

function AtlasNav() {
  const items = ["Atlas", "The Model", "Moving-Throat PDE", "Ledger", "Library"];
  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 20,
      background: "rgba(10,13,24,0.75)",
      backdropFilter: "blur(14px)",
      borderBottom: "1px solid var(--rule)",
    }}>
      <div className="fu-wrap" style={{ display: "flex", alignItems: "center", height: 68, gap: 28 }}>
        <a style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <svg width="28" height="28" viewBox="0 0 28 28">
            <defs>
              <radialGradient id="atlas-logo" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#e67ac6" stopOpacity="0.9" />
                <stop offset="60%" stopColor="#7aa2ff" stopOpacity="0.4" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
            <circle cx="14" cy="14" r="13" fill="url(#atlas-logo)" />
            <ellipse cx="14" cy="14" rx="11" ry="2.5" stroke="#e4e7f5" strokeWidth="0.6" fill="none" opacity="0.55" />
            <path d="M14 3 Q 11 14 14 25 Q 17 14 14 3 Z" fill="none" stroke="#e4e7f5" strokeWidth="0.8" opacity="0.85" />
            <circle cx="14" cy="14" r="1.4" fill="#f0c26b" />
          </svg>
          <div style={{ lineHeight: 1.05 }}>
            <div className="fu-display" style={{ fontSize: 18, fontWeight: 400, letterSpacing: "-0.015em" }}>
              Fluid Universe
            </div>
            <div className="fu-mono" style={{ fontSize: 10, color: "var(--ink-3)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
              atlas edition · v0.4
            </div>
          </div>
        </a>
        <div style={{ flex: 1 }} />
        {items.map((x, i) => (
          <a key={i} className="fu-small" style={{ color: "var(--ink-2)", cursor: "pointer" }}>{x}</a>
        ))}
        <a className="fu-small fu-mono" style={{
          padding: "8px 14px",
          border: "1px solid rgba(122,162,255,0.4)",
          background: "rgba(122,162,255,0.08)",
          color: "var(--accent)",
          borderRadius: 999,
          fontSize: 11,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}>Open ledger</a>
      </div>
    </nav>
  );
}

function AtlasHero({ speed }) {
  return (
    <section style={{ padding: "100px 0 60px", position: "relative" }}>
      <div className="fu-wrap">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
          <div>
            <div className="fu-eyebrow" style={{ marginBottom: 24, color: "var(--accent)" }}>
              ◇ 4+1 brane–bulk research program
            </div>
            <h1 className="fu-display fu-h1" style={{ marginBottom: 32, fontWeight: 250 }}>
              An atlas of a <span style={{
                background: "linear-gradient(90deg, var(--accent) 0%, #b88bff 40%, #e67ac6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>fluid</span> universe.
            </h1>
            <p className="fu-lede" style={{ marginBottom: 40 }}>
              A speculative, falsification‑first program mapping how
              gravity‑like, electromagnetic and particle‑like behavior may
              emerge as the projected surface of a deeper four‑dimensional
              fluid substrate.
            </p>
            <div style={{ display: "flex", gap: 16, marginBottom: 28 }}>
              <a className="fu-mono" style={{
                fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase",
                padding: "14px 26px", borderRadius: 999,
                background: "linear-gradient(90deg, var(--accent), #b88bff)",
                color: "#0a0d18", fontWeight: 600, cursor: "pointer",
              }}>Enter the atlas →</a>
              <a className="fu-mono" style={{
                fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase",
                padding: "14px 22px", borderRadius: 999,
                border: "1px solid var(--rule-2)", color: "var(--ink-1)", cursor: "pointer",
              }}>Technical ledger</a>
            </div>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              <span className="fu-small fu-mono" style={{ color: "var(--ink-3)" }}>8 source papers · 6 status tiers · 1 PDE frontier</span>
            </div>
          </div>
          <div>
            <div style={{
              border: "1px solid var(--rule-2)",
              borderRadius: 3,
              background: "linear-gradient(180deg, rgba(16,20,42,0.75), rgba(10,13,24,0.5))",
              backdropFilter: "blur(8px)",
              overflow: "hidden",
              position: "relative",
            }}>
              <div style={{
                padding: "12px 18px",
                borderBottom: "1px solid var(--rule)",
                display: "flex", justifyContent: "space-between", alignItems: "center",
              }}>
                <span className="fu-eyebrow">◇ plate 01</span>
                <span className="fu-small fu-mono" style={{ color: "var(--ink-3)" }}>drag · rotate · scrub</span>
              </div>
              <HeroDiagram palette={AtlasPalette} speed={speed} />
              <div style={{
                padding: "12px 18px",
                borderTop: "1px solid var(--rule)",
                display: "flex", gap: 18, flexWrap: "wrap", alignItems: "center",
              }}>
                <LegendAtlas color="#e67ac6" label="brane" />
                <LegendAtlas color="#b88bff" label="throat" />
                <LegendAtlas color="#7aa2ff" label="field" dashed />
                <LegendAtlas color="#f0c26b" label="projection" />
              </div>
            </div>
          </div>
        </div>

        {/* Constants ribbon */}
        <div style={{
          marginTop: 80,
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: 16,
        }}>
          {[
            { k: "n=5", v: "stiff EoS", c: "var(--accent)" },
            { k: "κ_ρ=1", v: "mass-dressing", c: "#b88bff" },
            { k: "κ_add=½", v: "added-mass", c: "#b88bff" },
            { k: "β_1PN=3", v: "precession", c: "#e67ac6" },
            { k: "χ_Q=1", v: "outgoing norm.", c: "#f0c26b" },
          ].map(({ k, v, c }, i) => (
            <div key={i} style={{
              padding: "20px 22px",
              border: "1px solid var(--rule-2)",
              borderRadius: 3,
              background: "rgba(16,20,42,0.5)",
              position: "relative",
              overflow: "hidden",
            }}>
              <div style={{ position: "absolute", inset: 0, background: `radial-gradient(circle at 0% 0%, ${c}18, transparent 70%)` }} />
              <div className="fu-mono" style={{ fontSize: 16, color: "var(--ink-1)", marginBottom: 4, position: "relative" }}>{k}</div>
              <div className="fu-small" style={{ color: "var(--ink-3)", position: "relative" }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LegendAtlas({ color, label, dashed }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
      {dashed ? (
        <svg width="18" height="4"><line x1="0" y1="2" x2="18" y2="2" stroke={color} strokeDasharray="2 2" strokeWidth="1.2" /></svg>
      ) : (
        <span style={{ width: 8, height: 8, borderRadius: 4, background: color, boxShadow: `0 0 8px ${color}` }} />
      )}
      <span className="fu-small fu-mono" style={{ color: "var(--ink-2)", fontSize: 11 }}>{label}</span>
    </span>
  );
}

function AtlasStartHere() {
  const panels = [
    { roman: "i",   title: "The bulk",   body: "A 4D spatial arena with an extra direction w. Everything speculative starts here — stated explicitly, not hidden.", tint: "var(--accent)" },
    { roman: "ii",  title: "The brane",  body: "A 3D slice we call ordinary space. The brane observer never touches the bulk directly — only a projected reading of it.", tint: "#e67ac6" },
    { roman: "iii", title: "The throat", body: "A defect whose visible mouth sits on the brane and whose support extends into w. What looks like a particle.", tint: "#b88bff" },
  ];
  return (
    <section className="fu-section" style={{ paddingTop: 140, paddingBottom: 100 }}>
      <div className="fu-wrap">
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <div className="fu-eyebrow" style={{ color: "var(--accent)", marginBottom: 18 }}>◇ before any equations</div>
          <h2 className="fu-display fu-h2" style={{ fontWeight: 300 }}>Three pictures, in order.</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
          {panels.map((p, i) => (
            <div key={i} style={{
              padding: "40px 32px",
              border: "1px solid var(--rule-2)",
              borderRadius: 3,
              background: "rgba(16,20,42,0.4)",
              position: "relative",
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute", top: -1, left: -1, right: -1, height: 2,
                background: `linear-gradient(90deg, ${p.tint}, transparent)`,
              }} />
              <div className="fu-mono" style={{
                fontSize: 13, letterSpacing: "0.16em",
                color: p.tint, textTransform: "uppercase", marginBottom: 20,
              }}>· {p.roman} ·</div>
              <h3 className="fu-display fu-h3" style={{ marginBottom: 16 }}>{p.title}</h3>
              <p className="fu-body" style={{ fontSize: 15.5 }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AtlasProjection() {
  return (
    <section className="fu-section" style={{ paddingTop: 100, paddingBottom: 100 }}>
      <div className="fu-wrap">
        <div style={{ maxWidth: 820, marginBottom: 56 }}>
          <div className="fu-eyebrow" style={{ color: "var(--accent)", marginBottom: 18 }}>◇ firewall · projection ≠ reduction</div>
          <h2 className="fu-display fu-h2" style={{ marginBottom: 24, fontWeight: 300 }}>
            One is measurement. The other is modeling.
          </h2>
          <p className="fu-lede">
            Hidden‑dimension stories usually blur the two. The atlas keeps them
            separate because one keeps every channel, while the other drops
            channels under explicit assumptions.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {[
            {
              kind: "PROJECTION",
              tag: "measurement",
              badge: "exact",
              copy: "A weighted average through w with a declared kernel W(w). Records what a 3D observer sees without throwing anything away. Leakage terms survive into the brane equations.",
              grad: "rgba(240,194,107,0.18)",
              accent: "#f0c26b",
            },
            {
              kind: "REDUCTION",
              tag: "approximation",
              badge: "closure",
              copy: "An effective 3D law obtained under zero-mode ansatz, low-frequency limit, or small-body assumptions. Channels may be dropped. Surviving ones look like Maxwell, Poisson, or MHD.",
              grad: "rgba(184,139,255,0.18)",
              accent: "#b88bff",
            },
          ].map((c, i) => (
            <div key={i} style={{
              padding: 40,
              borderRadius: 3,
              border: "1px solid var(--rule-2)",
              background: `linear-gradient(160deg, ${c.grad}, rgba(10,13,24,0.4))`,
              position: "relative",
            }}>
              <div className="fu-mono" style={{
                fontSize: 11, letterSpacing: "0.16em",
                color: c.accent, marginBottom: 10,
              }}>◇ {c.kind}</div>
              <h3 className="fu-display" style={{ fontSize: 30, fontWeight: 300, marginBottom: 16 }}>
                {c.kind.toLowerCase()} · <span style={{ color: "var(--ink-3)", fontStyle: "italic" }}>{c.tag}</span>
              </h3>
              <p className="fu-body" style={{ marginBottom: 24 }}>{c.copy}</p>
              <Badge kind={c.badge} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AtlasEquations() {
  return (
    <section className="fu-section" style={{ paddingTop: 100, paddingBottom: 100 }}>
      <div className="fu-wrap">
        <div className="fu-eyebrow" style={{ color: "var(--accent)", marginBottom: 18 }}>◇ carry-forward identities</div>
        <h2 className="fu-display fu-h2" style={{ marginBottom: 48, fontWeight: 300 }}>
          Equations as design objects.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          <EqCard
            label="◇ moving-throat geometry"
            plain="The defect is no longer two numbers — it is a moving surface with angular, bulk-depth, and time structure."
            tex="\Sigma(X,t) = r - R(\Omega,w,t)"
            chips={["moving_throat_pde_program_compact.md"]}
          />
          <EqCard
            label="◇ brane charge · thickness control"
            plain="Electric sign is topological; measured strength is set by how thickly the gauge field localizes around w = 0."
            tex="q_{\text{eff}} = \frac{q_*}{\sqrt{Z_{\text{int}}}}"
            chips={["4d_em_fields_summary.md"]}
          />
          <EqCard
            label="◇ stiff polytrope · EoS"
            plain="The bulk matter field obeys a stiff equation of state. The exponent n = 5 is fixed by optical consistency."
            tex="P(\rho) = K\,\rho^{5}"
            chips={["4d_summary.md"]}
          />
          <EqCard
            label="◇ Poisson hook · emergent gravity"
            plain="Inverse-square behavior is not postulated — it appears as a longitudinal identity under a quasi-static regime."
            tex="\nabla^{2}\Phi = 4\pi G\,\rho_{\text{eff}}"
            chips={["4d_1pn_full_summary.md"]}
          />
        </div>
      </div>
    </section>
  );
}

function AtlasPN() {
  const rungs = [
    { rung: "0PN",   title: "Newtonian",           note: "Inverse-square from Poisson hook.",                  status: "exact"   },
    { rung: "1PN",   title: "EIH two-body",        note: "Matches within declared closure hierarchy.",         status: "closure" },
    { rung: "2PN",   title: "ADM Hamiltonian",     note: "Generic-frame match through 2PN.",                   status: "closure" },
    { rung: "2.5PN", title: "Radiative quadrupole",note: "Retarded branch narrowed; normalization gap isolated.", status: "reduce" },
    { rung: "3PN",   title: "Grouped P₂ closure",  note: "Conservative ledger closed in fixed ADM chart.",     status: "closure" },
    { rung: "4PN",   title: "Local instantaneous", note: "Local sector closed; same quadrupole gap remains.",  status: "closure" },
    { rung: "5PN",   title: "Branch realization",  note: "Compressed to PDE-selected moving-throat branch.",   status: "open"    },
  ];
  return (
    <section className="fu-section" style={{ paddingTop: 120, paddingBottom: 120 }}>
      <div className="fu-wrap">
        <div className="fu-eyebrow" style={{ color: "var(--accent)", marginBottom: 18 }}>◇ post-newtonian stress test</div>
        <h2 className="fu-display fu-h2" style={{ marginBottom: 32, maxWidth: 860, fontWeight: 300 }}>
          A stress test, labeled rung by rung.
        </h2>
        <p className="fu-body" style={{ maxWidth: 660, marginBottom: 72 }}>
          If the toy model is serious, it has to reproduce standard two‑body
          gravitational bookkeeping. Matched, narrowed, and open — no checkmarks
          where there should be a question mark.
        </p>

        <div style={{ position: "relative", paddingLeft: 32 }}>
          {/* vertical thread */}
          <div style={{
            position: "absolute", left: 11, top: 8, bottom: 8,
            width: 1, background: "linear-gradient(180deg, var(--accent), #b88bff 50%, var(--ink-4))",
            opacity: 0.5,
          }} />
          {rungs.map((r, i) => (
            <div key={i} style={{
              display: "grid",
              gridTemplateColumns: "120px 1fr 180px",
              gap: 32, padding: "20px 0",
              borderBottom: i < rungs.length - 1 ? "1px solid var(--rule)" : "none",
              alignItems: "center",
              position: "relative",
            }}>
              <div style={{
                position: "absolute", left: -32, top: 28,
                width: 22, height: 22, borderRadius: 11,
                background: "var(--bg-0)",
                border: `1.5px solid var(--accent)`,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <div style={{ width: 7, height: 7, borderRadius: 4, background: "var(--accent)" }} />
              </div>
              <div className="fu-mono" style={{ fontSize: 14, color: "var(--accent)", fontWeight: 500 }}>{r.rung}</div>
              <div>
                <div className="fu-display" style={{ fontSize: 20, color: "var(--ink-1)", marginBottom: 4 }}>{r.title}</div>
                <div className="fu-small" style={{ color: "var(--ink-2)" }}>{r.note}</div>
              </div>
              <div style={{ justifySelf: "end" }}><Badge kind={r.status} /></div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 32, display: "flex", gap: 6, flexWrap: "wrap" }}>
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

function AtlasCaution() {
  return (
    <section style={{ padding: "100px 0", borderTop: "1px solid var(--rule)" }}>
      <div className="fu-wrap">
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 80, alignItems: "start" }}>
          <div>
            <div className="fu-eyebrow" style={{ color: "#e67ac6", marginBottom: 18 }}>◇ what this is not</div>
            <h2 className="fu-display fu-h2" style={{ marginBottom: 28, fontWeight: 300 }}>
              Transparency is part of the brand.
            </h2>
            <p className="fu-body" style={{ marginBottom: 28 }}>
              Fluid Universe is a speculative toy‑model research program. It does
              not replace general relativity, has not derived the Standard Model,
              and has not solved the moving‑throat PDE. The goal is to test whether
              a precise higher‑dimensional defect model reproduces known
              structures under transparent assumptions — and to name where it
              fails.
            </p>
            <p className="fu-small" style={{ color: "var(--ink-3)", fontStyle: "italic" }}>
              Every result on this site carries one of six status tiers.
            </p>
          </div>
          <div style={{
            border: "1px solid var(--rule-2)",
            padding: 32,
            borderRadius: 3,
            background: "linear-gradient(160deg, rgba(184,139,255,0.06), rgba(10,13,24,0.4))",
          }}>
            <div className="fu-eyebrow" style={{ color: "var(--ink-3)", marginBottom: 20 }}>status tiers</div>
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

function AtlasFooter() {
  return (
    <footer style={{ padding: "60px 0 80px", borderTop: "1px solid var(--rule)" }}>
      <div className="fu-wrap">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 40 }}>
          <div>
            <div className="fu-mono" style={{ fontSize: 12, color: "var(--ink-3)", letterSpacing: "0.08em", marginBottom: 8 }}>
              FLUID UNIVERSE · ATLAS EDITION
            </div>
            <div className="fu-small" style={{ color: "var(--ink-3)", maxWidth: 460 }}>
              An atlas of a program in progress. The frontier is the moving‑throat
              PDE — whether the branch it selects realizes the reduced finish line
              already compressed in the ledger.
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

Object.assign(window, { AtlasDirection });
