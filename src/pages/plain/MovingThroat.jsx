import React from 'react';
import { TopicPage, TPTitle, TPLede, TPSection, TPBody, TPCallout } from '../../components/TopicPage.jsx';

// Part II · Topic 11 — The Moving-Throat PDE — PLAIN ENGLISH

export default function PlainMovingThroat() {
  const topic = {
    n: "11",
    part: "II",
    partName: "Applications",
    slug: "moving-throat",
    title: "The Moving-Throat PDE",
  };

  return (
    <TopicPage track="plain" topic={topic}>
      <section style={{ padding: "10px 0 40px" }}>
        <TPTitle>
          The{" "}
          <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "#e67ac6" }}>frontier</em> —
          an equation for throats that don't sit still.
        </TPTitle>
        <TPLede>
          Almost everything in the rest of the program was done in a specific
          idealization: a throat that isn't moving, or is moving only as a
          rigid whole. Real throats deform. Their walls ripple; their necks
          breathe; they shed energy into the pond and back. Describing that
          motion accurately is one of the main mathematical tasks the
          open ledger items are waiting on. This chapter is about what the
          equation for a moving throat looks like, why it's hard, and what
          closing it would buy.
        </TPLede>
      </section>

      <TPSection anchor="what" eyebrow="what's on the page" heading="A moving boundary is a hard problem">
        <TPBody>
          The simplest way to describe a throat is as a moving boundary in the
          pond — a finite opening from the brane into a bulk conduit. Outside
          that surface is the brane-side fluid region; inside is the throat's
          support and interior region. The <em>shape</em> of that surface is a
          function of angular position around it, depth along the hidden
          direction, and time. Call it <em>R(Ω, w, t)</em>, where <em>Ω</em> is
          the angular coordinate and <em>w</em> is the depth.
        </TPBody>
        <TPBody>
          In every previous chapter, we treated <em>R</em> as approximately
          constant — the throat's walls are smooth, static, and rigid enough
          that we can ignore their dynamics. The moving-throat framework is
          what you get when you <em>stop</em> making that approximation. It is
          a partial differential equation, or effective wall closure, for the
          full shape function, with the pond's matter and gauge equations
          providing the forcing once the wall data are specified.
        </TPBody>

        <TPCallout kind="note">
          <strong style={{ color: "var(--ink-1)" }}>Free-boundary problem.</strong>{" "}
          What makes this hard is that the pond's equations depend on where
          the wall is, <em>and</em> the wall's motion depends on the pond's
          state. The geometry and the dynamics are coupled. In
          mathematics, this kind of situation is called a free-boundary
          problem, and they're famously subtle.
        </TPCallout>
      </TPSection>

      <TPSection anchor="why-hard" eyebrow="why it's hard" heading="Three kinds of difficulty stacked">
        <TPBody>
          The moving-throat PDE isn't hard for one reason — it's hard for
          several at once:
        </TPBody>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 10, margin: "18px 0 6px", maxWidth: 840 }}>
          {[
            {
              k: "Nonlinearity",
              v: "The pond's equations aren't linear when the throat's amplitude is large — which it is, inside the throat. Standard perturbation methods apply only in limits.",
            },
            {
              k: "Non-locality along w",
              v: "The throat lives in the hidden direction as well as on the brane. Motion at one depth couples to motion at every other depth through the bulk's stiffness.",
            },
            {
              k: "Boundary conditions",
              v: "The behaviour at the mouth (where the throat meets the brane) and at the open finite exit both have to be specified as branch data.",
            },
            {
              k: "Topology change",
              v: "Throats can merge, split, or pinch off. A PDE on a fixed topology doesn't handle those transitions directly; extra work is needed at the moments of change.",
            },
          ].map((c) => (
            <div key={c.k} style={{
              padding: "18px 22px",
              border: "1px solid var(--rule-2)",
              borderLeft: "3px solid #7aa2ff",
              borderRadius: 3,
              background: "rgba(16,20,42,0.5)",
            }}>
              <div className="fu-display" style={{ fontSize: 17, color: "var(--ink-1)", marginBottom: 6, fontWeight: 400 }}>{c.k}</div>
              <div className="fu-small" style={{ color: "var(--ink-2)", lineHeight: 1.65 }}>{c.v}</div>
            </div>
          ))}
        </div>
      </TPSection>

      <TPSection anchor="what-closes" eyebrow="what it closes" heading="Many open items pass through the same gate">
        <TPBody>
          Here's why this chapter matters out of proportion to its length.
          Many <em>open</em> entries from earlier in the program point back at
          the same moving-throat branch problem:
        </TPBody>

        <div style={{ margin: "20px 0", display: "flex", flexDirection: "column", gap: 8 }}>
          {[
            { where: "Topic 06", what: "Mixed-sector coefficients in the zero-mode reduction" },
            { where: "Topic 07", what: "Non-ideal MHD terms and the reconnection energy budget" },
            { where: "Topic 08", what: "KK/Yukawa threshold and localization-tail light-sector corrections" },
            { where: "Topic 09", what: "Higher-order electron anomaly terms; muon g−2; Lamb shift" },
            { where: "Topic 10", what: "Shared 2.5PN / 4PN outgoing quadrupole normalization" },
          ].map((r) => (
            <div key={r.where} style={{
              display: "grid",
              gridTemplateColumns: "120px 1fr",
              gap: 16,
              padding: "12px 18px",
              border: "1px solid var(--rule)",
              borderRadius: 3,
              background: "rgba(16,20,42,0.35)",
            }}>
              <div className="fu-mono fu-small" style={{ color: "#e67ac6", fontSize: 11, letterSpacing: "0.14em" }}>
                {r.where}
              </div>
              <div className="fu-small" style={{ color: "var(--ink-2)", lineHeight: 1.5 }}>
                {r.what}
              </div>
            </div>
          ))}
        </div>

        <TPBody>
          A realized branch that closes this system in a controlled way — even
          approximately, even in specific regimes — would settle or sharpen
          multiple ledger entries at once. That's why it is the active front of
          the program.
        </TPBody>
      </TPSection>

      <TPSection anchor="progress" eyebrow="progress" heading="What's been done">
        <TPBody>
          Three partial windows are already on the table:
        </TPBody>

        <ul style={{ color: "var(--ink-2)", lineHeight: 1.8, paddingLeft: 24, fontSize: 16 }}>
          <li>
            <strong style={{ color: "var(--ink-1)" }}>Static limit</strong> —
            the <em>R</em> profile is time-independent. This underwrites the
            source bookkeeping and controlled Coulomb / Newtonian regimes used
            earlier on the site, but it is not itself a full nonlinear
            moving-throat theorem.
          </li>
          <li>
            <strong style={{ color: "var(--ink-1)" }}>Rigid-body limit</strong> —
            the throat translates as a whole without changing shape. This is
            the collective-motion regime behind the lower-order bridge and PN
            bookkeeping, and behind the effective metric and gauge-field
            language used earlier on the site.
          </li>
          <li>
            <strong style={{ color: "var(--ink-1)" }}>Linearized perturbation</strong> —
            small deviations from a stationary throat. This gives the first
            wall/support/gauge response problem and the first observables the
            PDE framework asks a realized branch to return.
          </li>
        </ul>

        <TPBody>
          The remaining frontier — the nonlinear, large-amplitude, dynamic
          regime — is partially characterized but not closed. Current work is
          on asymptotic expansions near specific configurations and on the
          branch data needed to connect those reductions to an actual realized
          moving-throat solution.
        </TPBody>
      </TPSection>

      <TPSection anchor="stance" eyebrow="honest stance" heading="Where the program sits">
        <TPBody>
          The framework is in the shape a good physics program should be in
          at this stage: the structure is laid out, large sections are
          derived and match known physics, the open questions are
          specific, and closing them is hard but not vague. The
          moving-throat PDE is what you'd point at if asked "what would you
          most like to solve next?"
        </TPBody>
        <TPBody>
          This is not a "theory of everything is almost done" claim. It's
          a "here are the questions that remain, stated precisely" claim.
          That distinction is the whole value of organizing the work as a
          ledger.
        </TPBody>

        <div style={{
          margin: "22px 0 0", padding: "24px 28px",
          border: "1px solid #e67ac666", borderRadius: 3,
          background: "linear-gradient(160deg, rgba(230,122,198,0.08), rgba(16,20,42,0.5))",
        }}>
          <div className="fu-mono fu-small" style={{
            color: "#e67ac6", letterSpacing: "0.14em", textTransform: "uppercase",
            marginBottom: 10, fontSize: 10.5,
          }}>
            the frontier, stated plainly
          </div>
          <div className="fu-body" style={{ fontSize: 17, color: "var(--ink-1)", lineHeight: 1.6 }}>
            Solve — or close in a controlled expansion — the partial
            differential equation governing a throat's wall{" "}
            <em>R(Ω, w, t)</em> coupled to the surrounding pond, then freeze
            the branch data before comparing to the target ledger.
          </div>
        </div>
      </TPSection>

      <TPSection anchor="end" eyebrow="end of the book" heading="Where the thread ends">
        <TPBody>
          That's the whole argument, start to finish. A stiff pond; some
          defects in it; a single hidden direction; familiar rules appearing as
          controlled reductions; the open questions pointing at one
          branch-realization problem. Eleven chapters, two tracks, one story.
        </TPBody>
        <TPBody>
          The value of telling it this way — plain and technical,
          side-by-side, with a clear ledger — is that readers of any
          background can check the same claims against their own tools.
          The plain-English track is accountable to the mathematics. The
          technical track is accountable to intuition. Neither is primary.
          Both have to agree.
        </TPBody>

      </TPSection>
    </TopicPage>
  );
}
