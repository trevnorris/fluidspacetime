/* global React, Badge, Chip, Tex, EqCard */
// Shared page chrome for all topic pages — nav, footer, prev/next, cross-track link

// ─── Track toggle ────────────────────────────────────────────────
// Segmented control that LOOKS like a switch but actually navigates.
// Active side is filled with the track's tint; inactive side is a live link.
function TrackToggle({ track, size = "sm" }) {
  const isPlain = track === "plain";
  const plainTint = "#e67ac6";
  const techTint = "#7aa2ff";
  const activeTint = isPlain ? plainTint : techTint;

  const small = size === "sm";
  const pad = small ? "5px 12px" : "8px 16px";
  const fontSize = small ? 10.5 : 12;
  const gap = small ? 2 : 3;

  const pillBase = {
    fontFamily: "var(--font-mono)",
    fontSize,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    padding: pad,
    borderRadius: 999,
    cursor: "pointer",
    transition: "color 0.15s, background 0.15s",
    lineHeight: 1,
    display: "inline-flex",
    alignItems: "center",
    whiteSpace: "nowrap",
    userSelect: "none",
  };

  return (
    <div
      role="tablist"
      aria-label="Reading track"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap,
        padding: 3,
        border: `1px solid ${activeTint}44`,
        background: "rgba(10,13,24,0.55)",
        borderRadius: 999,
      }}
    >
      <a
        role="tab"
        aria-selected={isPlain}
        style={{
          ...pillBase,
          background: isPlain ? plainTint : "transparent",
          color: isPlain ? "#0a0d18" : "var(--ink-2)",
          fontWeight: isPlain ? 600 : 400,
        }}
      >
        Plain
      </a>
      <a
        role="tab"
        aria-selected={!isPlain}
        style={{
          ...pillBase,
          background: !isPlain ? techTint : "transparent",
          color: !isPlain ? "#0a0d18" : "var(--ink-2)",
          fontWeight: !isPlain ? 600 : 400,
        }}
      >
        Technical
      </a>
    </div>
  );
}

function TopicPage({ track, topic, meta = false, children }) {
  // track: "plain" | "technical"
  // meta: true for Part III single-track pages (no plain mirror)
  // topic: { n, title, partName, slug, prev, next }
  const isPlain = track === "plain";
  const trackColor = meta ? "#d7c9a1" : (isPlain ? "#e67ac6" : "#7aa2ff");

  return (
    <div className="fu-root dir-atlas" style={{ minHeight: "100%", overflow: "auto" }}>
      <TPAtmosphere />
      <TPNav track={track} trackColor={trackColor} meta={meta} />

      {/* Topic header */}
      <section style={{ padding: "60px 0 20px", position: "relative" }}>
        <div className="fu-wrap-narrow" style={{ maxWidth: 820 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 18, marginBottom: 18 }}>
            <div className="fu-mono" style={{
              fontSize: 52, color: trackColor, fontWeight: 300, lineHeight: 1, letterSpacing: "-0.02em",
            }}>
              {topic.n}
            </div>
            <div className="fu-eyebrow" style={{ color: "var(--ink-3)" }}>
              ◇ part {topic.part} · {topic.partName.toLowerCase()}
            </div>
          </div>
        </div>
      </section>

      {children}

      {/* Cross-track bridge + prev/next */}
      <section style={{ padding: "80px 0", borderTop: "1px solid var(--rule)" }}>
        <div className="fu-wrap-narrow" style={{ maxWidth: 820 }}>
          {/* Cross-track — now a toggle CTA, no URL */}
          {!meta && (
          <div style={{
            padding: "22px 26px",
            border: `1px dashed ${trackColor}55`,
            borderRadius: 3,
            background: `linear-gradient(160deg, ${trackColor}0c, rgba(10,13,24,0.3))`,
            display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20,
            flexWrap: "wrap", marginBottom: 40,
          }}>
            <div>
              <div className="fu-mono" style={{
                fontSize: 10, letterSpacing: "0.14em", color: "var(--ink-3)",
                textTransform: "uppercase", marginBottom: 6,
              }}>◇ switch tracks</div>
              <div className="fu-body" style={{ fontSize: 15.5, color: "var(--ink-1)" }}>
                Same section, same anchors — switch any time.
              </div>
            </div>
            <TrackToggle track={track} size="md" />
          </div>
          )}

          {meta && (
          <div style={{
            padding: "18px 22px",
            border: "1px solid var(--rule-2)",
            borderRadius: 3,
            background: "rgba(215,201,161,0.04)",
            marginBottom: 40,
          }}>
            <span className="fu-mono fu-small" style={{
              color: "#d7c9a1",
              letterSpacing: "0.12em", textTransform: "uppercase", fontSize: 10.5,
              marginRight: 14,
            }}>◇ meta</span>
            <span className="fu-small" style={{ color: "var(--ink-2)" }}>
              Part III pages are single-track. They describe the program itself rather than a topic within it — no plain mirror.
            </span>
          </div>
          )}

          {/* Prev / Next within track */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <a style={{
              padding: "22px 24px", border: "1px solid var(--rule-2)", borderRadius: 3,
              background: "rgba(16,20,42,0.4)", cursor: "pointer",
              display: "flex", flexDirection: "column", gap: 6,
            }}>
              <span className="fu-mono fu-small" style={{
                color: "var(--ink-3)", letterSpacing: "0.1em", textTransform: "uppercase", fontSize: 10.5,
              }}>← previous</span>
              <span className="fu-body" style={{ color: "var(--ink-3)", fontSize: 14, fontStyle: "italic" }}>
                {topic.prev ? topic.prev.title : "You're at the start."}
              </span>
            </a>
            <a style={{
              padding: "22px 24px", border: "1px solid var(--rule-2)", borderRadius: 3,
              background: "rgba(16,20,42,0.4)", cursor: "pointer",
              display: "flex", flexDirection: "column", gap: 6, textAlign: "right",
            }}>
              <span className="fu-mono fu-small" style={{
                color: trackColor, letterSpacing: "0.1em", textTransform: "uppercase", fontSize: 10.5,
              }}>next →</span>
              <span className="fu-body" style={{ color: "var(--ink-1)", fontSize: 14 }}>
                {topic.next ? topic.next.title : "—"}
              </span>
            </a>
          </div>
        </div>
      </section>

      <TPFooter track={track} />
    </div>
  );
}

function TPAtmosphere() {
  return (
    <div style={{
      position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
      background: [
        "radial-gradient(ellipse 800px 500px at 15% 5%, rgba(122,162,255,0.09), transparent 62%)",
        "radial-gradient(ellipse 600px 400px at 85% 40%, rgba(184,139,255,0.06), transparent 60%)",
      ].join(","),
    }} />
  );
}

function TPNav({ track, trackColor, meta = false }) {
  const items = ["Start Here", "The Model", "Moving-Throat PDE", "Results Ledger", "Library"];
  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 20,
      background: "rgba(10,13,24,0.78)",
      backdropFilter: "blur(14px)",
      borderBottom: "1px solid var(--rule)",
    }}>
      <div className="fu-wrap" style={{ display: "flex", alignItems: "center", height: 68, gap: 24 }}>
        <a style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <svg width="26" height="26" viewBox="0 0 28 28">
            <defs>
              <radialGradient id={`tp-logo-${track}`} cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#e67ac6" stopOpacity="0.9" />
                <stop offset="60%" stopColor="#7aa2ff" stopOpacity="0.4" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
            <circle cx="14" cy="14" r="13" fill={`url(#tp-logo-${track})`} />
            <ellipse cx="14" cy="14" rx="11" ry="2.5" stroke="#e4e7f5" strokeWidth="0.6" fill="none" opacity="0.55" />
            <path d="M14 3 Q 11 14 14 25 Q 17 14 14 3 Z" fill="none" stroke="#e4e7f5" strokeWidth="0.8" opacity="0.85" />
            <circle cx="14" cy="14" r="1.4" fill="#f0c26b" />
          </svg>
          <span className="fu-mono" style={{ fontSize: 13, letterSpacing: "0.05em", color: "var(--ink-1)" }}>
            fluid<span style={{ color: "var(--accent)" }}>·</span>universe
          </span>
        </a>
        {/* Track toggle — segmented control; clicking the inactive side navigates */}
        {meta ? (
          <span className="fu-mono" style={{
            fontSize: 10.5,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            padding: "5px 12px",
            borderRadius: 999,
            border: "1px solid #d7c9a166",
            color: "#d7c9a1",
            background: "rgba(215,201,161,0.08)",
            lineHeight: 1,
          }}>
            Meta
          </span>
        ) : (
          <TrackToggle track={track} size="sm" />
        )}
        <div style={{ flex: 1 }} />
        {items.map((x, i) => (
          <a key={i} className="fu-small" style={{ color: "var(--ink-2)", cursor: "pointer" }}>{x}</a>
        ))}
      </div>
    </nav>
  );
}

function TPFooter({ track }) {
  return (
    <footer style={{ padding: "60px 0 80px", borderTop: "1px solid var(--rule)" }}>
      <div className="fu-wrap">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 20, flexWrap: "wrap" }}>
          <div>
            <div className="fu-mono" style={{ fontSize: 12, color: "var(--ink-3)", letterSpacing: "0.08em", marginBottom: 8 }}>
              FLUID UNIVERSE · {track === "plain" ? "PLAIN ENGLISH" : "TECHNICAL"} TRACK
            </div>
            <div className="fu-small" style={{ color: "var(--ink-3)", maxWidth: 460 }}>
              A speculative research program. Every claim carries its own badge; no hype, no placeholders.
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

// ─── Shared in-page layout primitives (same on both tracks) ──────
function TPTitle({ children }) {
  return (
    <div className="fu-wrap-narrow" style={{ maxWidth: 820 }}>
      <h1 className="fu-display" style={{
        fontSize: "clamp(44px, 5.5vw, 72px)", fontWeight: 300,
        lineHeight: 1.05, letterSpacing: "-0.025em",
        marginBottom: 28, color: "var(--ink-1)",
      }}>
        {children}
      </h1>
    </div>
  );
}

function TPLede({ children }) {
  return (
    <div className="fu-wrap-narrow" style={{ maxWidth: 760, marginBottom: 72 }}>
      <p className="fu-lede" style={{ fontSize: "clamp(18px, 1.5vw, 22px)" }}>{children}</p>
    </div>
  );
}

function TPSection({ anchor, eyebrow, heading, children }) {
  return (
    <section id={anchor} style={{ padding: "60px 0", borderTop: "1px solid var(--rule)" }}>
      <div className="fu-wrap-narrow" style={{ maxWidth: 820 }}>
        <div className="fu-eyebrow" style={{ color: "var(--accent)", marginBottom: 14 }}>
          ◇ {eyebrow}
        </div>
        <h2 className="fu-display" style={{
          fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 300,
          lineHeight: 1.1, letterSpacing: "-0.02em",
          marginBottom: 32, color: "var(--ink-1)",
        }}>
          {heading}
        </h2>
        {children}
      </div>
    </section>
  );
}

function TPBody({ children }) {
  return (
    <div className="fu-body" style={{
      fontSize: 17, lineHeight: 1.75, color: "var(--ink-2)",
      marginBottom: 24, maxWidth: 720,
    }}>
      {children}
    </div>
  );
}

// Pull-quote / callout (plain side uses this for flavor; technical reuses for asides)
function TPCallout({ kind = "note", children }) {
  const tint = kind === "warn" ? "#e67ac6" : "var(--accent)";
  return (
    <aside style={{
      margin: "28px 0 32px",
      padding: "20px 24px",
      borderLeft: `2px solid ${tint}`,
      background: "rgba(16,20,42,0.35)",
      color: "var(--ink-1)",
    }}>
      <div className="fu-body" style={{ fontSize: 16, fontStyle: "italic", color: "var(--ink-1)", margin: 0 }}>
        {children}
      </div>
    </aside>
  );
}

Object.assign(window, { TopicPage, TPTitle, TPLede, TPSection, TPBody, TPCallout, TrackToggle });
