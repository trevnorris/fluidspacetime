import React from 'react';
import { TopicPage, TPTitle, TPLede, TPSection, TPBody, TPCallout } from '../../components/TopicPage.jsx';

// Part II · Topic 10 — The Post-Newtonian Ledger — PLAIN ENGLISH

export default function PlainPN() {
  const topic = {
    n: "10",
    part: "II",
    partName: "Applications",
    slug: "pn-ledger",
    title: "The Post-Newtonian Ledger",
  };

  return (
    <TopicPage track="plain" topic={topic}>
      <section style={{ padding: "10px 0 40px" }}>
        <TPTitle>
          An honest{" "}
          <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "#e67ac6" }}>ledger</em> —
          what closes in the current hierarchy, and what still waits on the
          moving-throat branch.
        </TPTitle>
        <TPLede>
          The point of this page is not to declare victory. It is to say, as
          cleanly as possible, which post-Newtonian rungs are already packaged
          inside the current 4D hierarchy, and which rungs still depend on one
          shared outgoing quadrupole-normalization problem.
        </TPLede>
      </section>

      <TPSection anchor="ladder" eyebrow="the ladder" heading="How gravity gets stress-tested">
        <TPBody>
          Physicists test gravity rung by rung. Newton handles the first pass.
          Then come the post-Newtonian corrections: 1PN, 2PN, 2.5PN, 3PN, 4PN,
          and beyond. Each rung corresponds to a specific observable effect.
        </TPBody>

        <div style={{ margin: "22px 0", display: "flex", flexDirection: "column", gap: 0 }}>
          {[
            { order: "Newton",  name: "Inverse-square attraction",           who: "Static weak-field regime." },
            { order: "1PN",     name: "Perihelion precession",               who: "Mercury and the first relativistic orbital tests." },
            { order: "2PN",     name: "Higher conservative corrections",     who: "Shapiro delay, lensing, stronger two-body structure." },
            { order: "2.5PN",   name: "Quadrupole radiation loss",           who: "Binary pulsars and inspiral energy balance." },
            { order: "3PN",     name: "Full conservative binary ledger",     who: "Precision compact-binary modelling." },
            { order: "4PN",     name: "Local plus tail conservative sector", who: "High-precision waveform modelling." },
          ].map((row, i) => (
            <div key={row.order} style={{
              display: "grid",
              gridTemplateColumns: "90px 1fr 1.4fr",
              gap: 20, padding: "14px 0",
              borderTop: i === 0 ? "1px solid var(--rule-2)" : "none",
              borderBottom: "1px solid var(--rule)",
              alignItems: "baseline",
            }}>
              <div className="fu-mono" style={{ color: "#7aa2ff", fontSize: 15, letterSpacing: "0.05em" }}>
                {row.order}
              </div>
              <div className="fu-display" style={{ fontSize: 16, color: "var(--ink-1)", fontWeight: 400 }}>
                {row.name}
              </div>
              <div className="fu-small" style={{ color: "var(--ink-3)", fontSize: 15, lineHeight: 1.55 }}>
                {row.who}
              </div>
            </div>
          ))}
        </div>
      </TPSection>

      <TPSection anchor="ledger" eyebrow="the ledger" heading="Where the current source record says the program stands">
        <TPBody>
          The right way to read the stack today is:
        </TPBody>

        <div style={{ margin: "22px 0", display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            { status: "derived",     order: "Newton", note: "Exact projection identities plus a controlled Poisson regime give the Newtonian hook." },
            { status: "derived",     order: "1PN",    note: "The full conservative 1PN sector is derived within the declared closure hierarchy and matched term-by-term to GR." },
            { status: "derived",     order: "2PN",    note: "The full conservative 2PN sector is carried through the same hierarchy." },
            { status: "conditional", order: "2.5PN",  note: "The quadrupole radiation formula is structurally in place, but its final normalization still depends on the passive/outgoing branch." },
            { status: "derived",     order: "3PN",    note: "The conservative 3PN ledger is fully assigned inside the same hierarchy. The open issue is not unfinished 3PN algebra." },
            { status: "conditional", order: "4PN",    note: "The local instantaneous 4PN sector is assembled, and the tail piece waits on the same normalization problem already exposed by 2.5PN." },
            { status: "open",        order: "frontier", note: "Realize the passive/outgoing quadrupole normalization on the moving-throat branch. That is the shared theorem gate." },
          ].map((r) => {
            const colorMap = {
              derived:     { label: "DERIVED",     bar: "#7fc69d", ring: "#7fc69d55", tint: "rgba(127,198,157,0.08)" },
              conditional: { label: "CONDITIONAL", bar: "#7aa2ff", ring: "#7aa2ff55", tint: "rgba(122,162,255,0.08)" },
              open:        { label: "OPEN",        bar: "#e67ac6", ring: "#e67ac655", tint: "rgba(230,122,198,0.08)" },
            };
            const c = colorMap[r.status];
            return (
              <div key={r.order} style={{
                display: "grid",
                gridTemplateColumns: "110px 110px 1fr",
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
                <div className="fu-mono" style={{ color: "var(--ink-1)", fontSize: 15, letterSpacing: "0.05em" }}>
                  {r.order}
                </div>
                <div className="fu-small" style={{ color: "var(--ink-2)", fontSize: 15, lineHeight: 1.55 }}>
                  {r.note}
                </div>
              </div>
            );
          })}
        </div>
      </TPSection>

      <TPSection anchor="normalization" eyebrow="the one shared gap" heading="2.5PN and 4PN are waiting on the same thing">
        <TPBody>
          This is the main correction to the older site wording. The open issue
          is not “some extra 4PN propagator tweak.” The 4PN paper says the local
          conservative block is already assembled inside the hierarchy. What
          remains open is the same passive/outgoing quadrupole normalization
          already isolated by the 2.5PN radiation problem.
        </TPBody>
        <TPBody>
          In plain language: if the moving-throat branch produces the right
          outgoing quadrupole normalization, then 2.5PN and 4PN close together.
          If it does not, both miss together. That is why topic 11 matters so
          much.
        </TPBody>

        <TPCallout kind="note">
          <strong style={{ color: "var(--ink-1)" }}>Stance.</strong> The site
          should describe 2.5PN and 4PN as <em>conditional on one shared branch
          datum</em>, not as two unrelated unfinished calculations.
        </TPCallout>
      </TPSection>

      <TPSection anchor="why" eyebrow="why the ledger matters" heading="The point is honesty about status">
        <TPBody>
          A research program earns trust by keeping exact identities, controlled
          reductions, and open branch data separate. The PN stack is where that
          distinction matters most, because the observational stakes are high
          and the language is easy to overstate.
        </TPBody>
      </TPSection>

      <TPSection anchor="next" eyebrow="up next" heading="Next: the frontier object">
        <TPBody>
          The next chapter is about the moving-throat PDE framework, which is
          where the shared passive/outgoing quadrupole-normalization question is
          supposed to be realized microscopically.
        </TPBody>

      </TPSection>
    </TopicPage>
  );
}
