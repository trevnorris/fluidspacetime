/* global React, TopicPage, TPTitle, TPLede, TPSection, TPBody, TPCallout, TrackToggle */
// Part II · Topic 10 — The Post-Newtonian Ledger — PLAIN ENGLISH

function PlainPN() {
  const topic = {
    n: "10",
    part: "II",
    partName: "Applications",
    slug: "pn-ledger",
    title: "The Post-Newtonian Ledger",
    prev: { title: "09 · Atoms & Anomalies" },
    next: { title: "11 · The Moving-Throat PDE" },
  };

  return (
    <TopicPage track="plain" topic={topic}>
      <section style={{ padding: "10px 0 40px" }}>
        <TPTitle>
          An honest{" "}
          <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "#e67ac6" }}>ledger</em> —
          what's derived, what's reduced, and what's still open.
        </TPTitle>
        <TPLede>
          A century of solar-system tests and a decade of gravitational-wave
          observations have pinned down general relativity with enormous
          precision. Any new picture of gravity has to walk through the same
          checks, ledger-entry by ledger-entry. This chapter is that walk —
          not a claim of having finished it, but a clear account of what's
          landed, what's structurally in place, and what's queued behind
          the next piece of work.
        </TPLede>
      </section>

      <TPSection anchor="ladder" eyebrow="the ladder" heading="How physicists test gravity.">
        <TPBody>
          In orbital mechanics, gravity is tested in a ladder of increasing
          precision. At the bottom sits Newton's law: the inverse-square
          attraction that governs everything except the tiniest corrections.
          Above it sit a sequence of relativistic corrections, each
          suppressed by one more factor of <em>v²/c²</em> — the orbital
          speed divided by the speed of light, squared. These are called
          post-Newtonian orders: 1PN, 2PN, 2.5PN, 3PN, 3.5PN, 4PN, and so
          on. Each step up the ladder corresponds to a specific new
          phenomenon:
        </TPBody>

        <div style={{ margin: "22px 0", display: "flex", flexDirection: "column", gap: 0 }}>
          {[
            { order: "Newton",  name: "Inverse-square attraction",               who: "Everyone since 1687." },
            { order: "1PN",     name: "Perihelion precession of Mercury",        who: "Einstein 1915 — the first quantitative GR victory." },
            { order: "2PN",     name: "Shapiro delay, gravitational lensing",    who: "Light bending by the sun; Cassini probe." },
            { order: "2.5PN",   name: "Gravitational-wave energy loss",          who: "Hulse-Taylor binary; LIGO inspirals." },
            { order: "3PN",     name: "Inner-zone binary dynamics",              who: "Binary black hole / neutron star modelling." },
            { order: "3.5PN",   name: "Radiation-reaction corrections",          who: "Fine-tuning of inspiral waveforms." },
            { order: "4PN",     name: "Next-to-next inspiral corrections",       who: "State-of-the-art current GW analysis." },
          ].map((row, i) => (
            <div key={row.order} style={{
              display: "grid",
              gridTemplateColumns: "90px 1fr 1.4fr",
              gap: 20, padding: "14px 0",
              borderTop: i === 0 ? "1px solid var(--rule-2)" : "none",
              borderBottom: "1px solid var(--rule)",
              alignItems: "baseline",
            }}>
              <div className="fu-mono" style={{ color: "#7aa2ff", fontSize: 13, letterSpacing: "0.05em" }}>
                {row.order}
              </div>
              <div className="fu-display" style={{ fontSize: 15.5, color: "var(--ink-1)", fontWeight: 400 }}>
                {row.name}
              </div>
              <div className="fu-small" style={{ color: "var(--ink-3)", fontSize: 13, lineHeight: 1.55 }}>
                {row.who}
              </div>
            </div>
          ))}
        </div>

        <TPBody>
          General relativity gets every one of these right, to the
          precision experiment can measure. Any alternative picture has to
          walk the same ladder — not just match the bottom rungs and wave
          hands at the upper ones.
        </TPBody>
      </TPSection>

      <TPSection anchor="ledger" eyebrow="the ledger" heading="Where the fluid picture stands.">
        <TPBody>
          Here's an honest, current-state ledger for the framework as it
          stands. Green means "derived and matches GR"; blue means
          "structurally in place under the controlled reductions of topic
          05, so the answer must match, pending a final calculation";
          pink means "open — here's the specific thing that needs to close."
        </TPBody>

        <div style={{ margin: "22px 0", display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            { status: "derived",  order: "Newton", note: "Inverse-square law is the static limit of the projected continuity equation (topic 05). Exact match." },
            { status: "derived",  order: "1PN",    note: "Mercury's perihelion precession matches the GR value. The same metric corrections come out of the projected fluid EoM at v²/c²." },
            { status: "derived",  order: "2PN",    note: "Shapiro delay and light-bending reproduce the GR coefficients. Tested against Cassini; no discrepancy." },
            { status: "reduced",  order: "2.5PN",  note: "Quadrupole energy loss is structurally present. Final normalization factor tied to a mixed-sector integral (topic 06) — in progress but not blocking." },
            { status: "reduced",  order: "3PN",    note: "Inner-zone dynamics; same reduction that gave 1PN/2PN extends, modulo one closed-form integral currently being evaluated." },
            { status: "open",     order: "3.5PN",  note: "Radiation-reaction at 3.5PN requires the mixed-sector outgoing-wave normalization to be closed. This IS the normalization gap." },
            { status: "open",     order: "4PN",    note: "4PN needs the moving-throat PDE (topic 11) to supply the inner-zone propagator correction. Queued." },
          ].map((r) => {
            const colorMap = {
              derived: { label: "DERIVED",  bar: "#7fc69d", ring: "#7fc69d55", tint: "rgba(127,198,157,0.08)" },
              reduced: { label: "REDUCED",  bar: "#7aa2ff", ring: "#7aa2ff55", tint: "rgba(122,162,255,0.08)" },
              open:    { label: "OPEN",     bar: "#e67ac6", ring: "#e67ac655", tint: "rgba(230,122,198,0.08)" },
            };
            const c = colorMap[r.status];
            return (
              <div key={r.order} style={{
                display: "grid",
                gridTemplateColumns: "110px 90px 1fr",
                gap: 18, alignItems: "center",
                padding: "16px 20px",
                border: `1px solid ${c.ring}`,
                borderLeft: `3px solid ${c.bar}`,
                borderRadius: 3,
                background: `linear-gradient(160deg, ${c.tint}, rgba(16,20,42,0.4))`,
              }}>
                <div className="fu-mono fu-small" style={{ color: c.bar, fontSize: 10.5, letterSpacing: "0.14em" }}>
                  {c.label}
                </div>
                <div className="fu-mono" style={{ color: "var(--ink-1)", fontSize: 13, letterSpacing: "0.05em" }}>
                  {r.order}
                </div>
                <div className="fu-small" style={{ color: "var(--ink-2)", fontSize: 13.5, lineHeight: 1.55 }}>
                  {r.note}
                </div>
              </div>
            );
          })}
        </div>
      </TPSection>

      <TPSection anchor="normalization" eyebrow="the normalization gap" heading="The one specific thing that's open.">
        <TPBody>
          When a binary system radiates gravitational waves, the energy
          carried away by those waves has to come out of the orbit. In GR
          there's a standard formula — the quadrupole formula — that
          relates the orbital dynamics to the outgoing power.
        </TPBody>
        <TPBody>
          The fluid picture reproduces the <em>structure</em> of the
          quadrupole formula — same tensor index structure, same scaling —
          but the <em>numerical coefficient</em> is a brane observable that
          depends on a specific bulk integral. At leading order, the integral
          has been evaluated and matches GR. At 2.5PN and 4PN, the integral
          picks up contributions from the mixed-sector channels of topic 06
          that require the moving-throat PDE of topic 11 to close. That's
          the single outstanding piece.
        </TPBody>

        <TPCallout kind="note">
          <strong style={{ color: "var(--ink-1)" }}>Stance.</strong> This
          isn't a disagreement with GR. The structural prediction is
          identical. The question is whether the fluid-picture bookkeeping
          produces the same coefficient GR produces, by a computation we
          haven't yet finished. The expectation is that it does, because
          the reduction is controlled.
        </TPCallout>
      </TPSection>

      <TPSection anchor="why" eyebrow="why go through this" heading="The bet the ledger represents.">
        <TPBody>
          Why walk GR's ladder at all? Two reasons. First: honesty. If a
          framework can't match every test that the existing theory passes,
          it isn't a replacement — it's a conversation piece. Second:
          because the places where the framework has to stretch to match
          are exactly the places that might carry new physics. The mixed-sector
          integrals of topic 06, which supply the 2.5PN and 4PN contributions
          here, are the same integrals that appear in the plasma chapter's
          non-ideal corrections, in the atom chapter's anomaly story, and in
          the UV dispersion correction of the light chapter. Closing any
          one of them closes several at once.
        </TPBody>
        <TPBody>
          The normalization gap is an opportunity. A fully closed ledger
          would be a vindication. Either way, the ledger itself — not the
          narrative — is what an honest framework owes its readers.
        </TPBody>
      </TPSection>

      <TPSection anchor="next" eyebrow="up next" heading="Next: the tool that closes the ledger.">
        <TPBody>
          Almost every open item in this ledger points at the same
          mathematical object: a partial differential equation for
          throats that are actually moving, not just sitting still.
          That equation is the frontier of the program. The final chapter
          is a careful description of what it is, what's been done on it,
          and what it would take to finish it.
        </TPBody>

        <div style={{
          marginTop: 30, padding: "20px 24px",
          border: "1px dashed var(--rule-2)", borderRadius: 3,
          display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap",
        }}>
          <span className="fu-mono" style={{ fontSize: 10.5, letterSpacing: "0.14em", color: "var(--ink-3)", textTransform: "uppercase" }}>
            ◇ technical mirror
          </span>
          <span className="fu-small" style={{ color: "var(--ink-2)", flex: 1, minWidth: 220 }}>
            PN expansion of the projected EoM; exact Newton and 1PN/2PN coefficients; outgoing power integral at 2.5PN.
          </span>
          <TrackToggle track="plain" size="sm" />
        </div>
      </TPSection>
    </TopicPage>
  );
}

Object.assign(window, { PlainPN });
