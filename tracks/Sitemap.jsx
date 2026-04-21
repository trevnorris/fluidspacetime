/* global React, TrackToggle */
// Artboard 1 — Sitemap diagram

function SitemapArtboard() {
  // Three parts shared by both tracks
  const parts = [
    {
      num: "I",
      name: "Foundations",
      topics: [
        { n: "01", t: "The Universe as a Fluid" },
        { n: "02", t: "Defects — When Perfection Breaks" },
        { n: "03", t: "A Hidden Direction" },
        { n: "04", t: "Throats — Defects That Connect" },
      ],
    },
    {
      num: "II",
      name: "Applications",
      topics: [
        { n: "05", t: "Gravity as Inflow" },
        { n: "06", t: "Electromagnetism as Puncture" },
        { n: "07", t: "Plasma & MHD" },
        { n: "08", t: "Light, Waves & the Speed Limit" },
        { n: "09", t: "Atoms, g-factors & Anomalies" },
        { n: "10", t: "The Post-Newtonian Ledger" },
        { n: "11", t: "The Moving-Throat PDE" },
      ],
    },
    {
      num: "III",
      name: "Meta",
      topics: [
        { n: "12", t: "What This Is Not" },
        { n: "13", t: "Glossary & Notation" },
        { n: "14", t: "Paper Library" },
      ],
    },
  ];

  return (
    <div className="fu-root dir-atlas" style={{ minHeight: "100%", padding: "60px 0 80px" }}>
      <ACAtmosphereSitemap />
      <div className="fu-wrap">
        {/* Header */}
        <div style={{ marginBottom: 56 }}>
          <div className="fu-eyebrow" style={{ color: "var(--accent)", marginBottom: 18 }}>
            ◇ information architecture · v0.5
          </div>
          <h1 className="fu-display fu-h2" style={{ marginBottom: 18, fontWeight: 300, maxWidth: 900 }}>
            Site map — two parallel tracks, one structure.
          </h1>
          <p className="fu-lede" style={{ maxWidth: 760 }}>
            Every topic exists twice: a plain-English page for the curious reader,
            a technical page for the working physicist. Same sections, same
            diagrams, same anchor IDs. A single <em>Plain ↔ Technical</em> toggle
            in the page chrome lets readers swap voices at any time.
          </p>
        </div>

        {/* Top: entry + fork */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 48 }}>
          <SMNode label="Start Here" variant="entry" />
          <SMConnector height={54} />
          <div className="fu-mono fu-small" style={{
            color: "var(--ink-3)", marginBottom: 10, letterSpacing: "0.08em",
          }}>
            reader chooses a track
          </div>
          <SMForkLines />
        </div>

        {/* Track headers */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 40,
          marginBottom: 36,
        }}>
          <SMTrackHeader
            kind="plain"
            title="Plain English"
            subtitle="Metaphor-first. No equations in body copy."
            audience="curious readers · students · science writers"
            color="#e67ac6"
          />
          <SMTrackHeader
            kind="technical"
            title="Technical"
            subtitle="Formal notation, equations inline, claim-status badges."
            audience="working physicists · graduate readers · referees"
            color="#7aa2ff"
          />
        </div>

        {/* Three parts — each part is a row with two columns (plain | technical) */}
        <div style={{
          border: "1px solid var(--rule-2)",
          borderRadius: 3,
          background: "linear-gradient(180deg, rgba(16,20,42,0.4), rgba(10,13,24,0.2))",
          overflow: "hidden",
        }}>
          {parts.map((p, i) => (
            <div key={p.num} style={{
              display: "grid",
              gridTemplateColumns: "120px 1fr 1fr",
              borderBottom: i < parts.length - 1 ? "1px solid var(--rule)" : "none",
            }}>
              {/* Part label column */}
              <div style={{
                padding: "28px 22px",
                borderRight: "1px solid var(--rule)",
                background: "rgba(28,34,70,0.35)",
              }}>
                <div className="fu-mono" style={{
                  fontSize: 11, letterSpacing: "0.14em",
                  color: "var(--ink-3)", marginBottom: 6,
                }}>
                  PART {p.num}
                </div>
                <div className="fu-display" style={{
                  fontSize: 17, color: "var(--ink-1)", lineHeight: 1.2,
                }}>{p.name}</div>
              </div>
              {/* Plain column */}
              <SMTopicColumn topics={p.topics} color="#e67ac6" />
              {/* Technical column */}
              <SMTopicColumn topics={p.topics} color="#7aa2ff" borderLeft />
            </div>
          ))}
        </div>

        {/* Cross-track bridge callout */}
        <div style={{
          marginTop: 42,
          padding: "28px 32px",
          border: "1px dashed var(--rule-2)",
          borderRadius: 3,
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          gap: 32,
          alignItems: "center",
        }}>
          <div>
            <div className="fu-eyebrow" style={{ color: "#e67ac6", marginBottom: 8 }}>◇ track toggle</div>
            <div className="fu-small" style={{ color: "var(--ink-2)" }}>
              Persistent in the page chrome. Swapping voices keeps your place in the topic.
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <TrackToggle track="plain" size="md" />
          </div>
          <div className="fu-small" style={{ color: "var(--ink-3)", textAlign: "right" }}>
            Same anchor IDs on both sides, so in-page links survive the swap.
          </div>
        </div>

        {/* Shared chrome spec */}
        <div style={{ marginTop: 56 }}>
          <div className="fu-eyebrow" style={{ color: "var(--accent)", marginBottom: 14 }}>
            ◇ shared page chrome · both tracks
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 1,
            background: "var(--rule)",
            border: "1px solid var(--rule)",
            borderRadius: 3,
            overflow: "hidden",
          }}>
            {[
              { t: "Top nav", d: "Logo · Start Here · The Model · PDE · Ledger · Library" },
              { t: "Track toggle", d: "Segmented Plain ↔ Technical in the nav. Tapping the other side navigates." },
              { t: "Prev / Next", d: "Within-track navigation at page foot — follows part order" },
              { t: "End-of-page switch", d: "A second toggle at page foot invites the reader to try the other voice." },
            ].map((c) => (
              <div key={c.t} style={{ padding: "18px 20px", background: "rgba(16,20,42,0.5)" }}>
                <div className="fu-mono" style={{ fontSize: 12, color: "var(--ink-1)", marginBottom: 6 }}>{c.t}</div>
                <div className="fu-small" style={{ color: "var(--ink-3)", lineHeight: 1.5 }}>{c.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ACAtmosphereSitemap() {
  return (
    <div style={{
      position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
      background: [
        "radial-gradient(ellipse 800px 500px at 20% 5%, rgba(122,162,255,0.08), transparent 60%)",
        "radial-gradient(ellipse 700px 500px at 80% 30%, rgba(230,122,198,0.06), transparent 60%)",
      ].join(","),
    }} />
  );
}

function SMNode({ label, variant }) {
  const entry = variant === "entry";
  return (
    <div style={{
      padding: entry ? "18px 32px" : "12px 20px",
      border: "1px solid var(--rule-2)",
      borderRadius: 3,
      background: entry
        ? "linear-gradient(160deg, rgba(122,162,255,0.12), rgba(184,139,255,0.08))"
        : "rgba(16,20,42,0.7)",
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      position: "relative",
      zIndex: 2,
    }}>
      <div className="fu-display" style={{ fontSize: entry ? 22 : 15, color: "var(--ink-1)", fontWeight: 300 }}>
        {label}
      </div>
    </div>
  );
}

function SMConnector({ height = 32 }) {
  return (
    <svg width="2" height={height} style={{ display: "block" }}>
      <line x1="1" y1="0" x2="1" y2={height} stroke="#2a3160" strokeWidth="1" strokeDasharray="3 3" />
    </svg>
  );
}

function SMForkLines() {
  return (
    <svg width="600" height="60" viewBox="0 0 600 60" style={{ display: "block" }}>
      <path d="M300 0 L300 24 L150 24 L150 60" stroke="#2a3160" strokeWidth="1" strokeDasharray="3 3" fill="none" />
      <path d="M300 0 L300 24 L450 24 L450 60" stroke="#2a3160" strokeWidth="1" strokeDasharray="3 3" fill="none" />
      {/* arrow heads */}
      <path d="M147 56 L150 60 L153 56" stroke="#e67ac6" strokeWidth="1.2" fill="none" />
      <path d="M447 56 L450 60 L453 56" stroke="#7aa2ff" strokeWidth="1.2" fill="none" />
    </svg>
  );
}

function SMTrackHeader({ kind, title, subtitle, audience, color }) {
  return (
    <div style={{
      padding: "24px 26px",
      border: `1px solid ${color}55`,
      borderRadius: 3,
      background: `linear-gradient(160deg, ${color}14, rgba(10,13,24,0.3))`,
    }}>
      <div className="fu-mono" style={{
        fontSize: 11, letterSpacing: "0.14em", color, marginBottom: 10, textTransform: "uppercase",
      }}>
        ◇ {kind} track
      </div>
      <div className="fu-display" style={{
        fontSize: 26, color: "var(--ink-1)", fontWeight: 300, marginBottom: 8,
      }}>{title}</div>
      <div className="fu-small" style={{ color: "var(--ink-2)", marginBottom: 14 }}>{subtitle}</div>
      <div className="fu-small" style={{ color: "var(--ink-3)", fontStyle: "italic" }}>
        for: {audience}
      </div>
    </div>
  );
}

function SMTopicColumn({ topics, color, borderLeft }) {
  return (
    <div style={{
      padding: "18px 22px",
      borderLeft: borderLeft ? "1px solid var(--rule)" : "none",
      display: "flex", flexDirection: "column", gap: 2,
    }}>
      {topics.map((t) => (
        <div key={t.n} style={{
          display: "flex",
          alignItems: "baseline",
          gap: 14,
          padding: "9px 10px",
          borderRadius: 2,
          cursor: "default",
        }}>
          <span className="fu-mono" style={{ color, fontSize: 11, minWidth: 22 }}>{t.n}</span>
          <span className="fu-body" style={{ fontSize: 14, color: "var(--ink-1)", flex: 1 }}>{t.t}</span>
        </div>
      ))}
    </div>
  );
}

Object.assign(window, { SitemapArtboard });
