/* global React, TopicPage, TPTitle, TPLede, TPSection, TPBody, TPCallout, TrackToggle */
// Part II · Topic 11 — The Moving-Throat PDE — PLAIN ENGLISH

function PlainMovingThroat() {
  const topic = {
    n: "11",
    part: "II",
    partName: "Applications",
    slug: "moving-throat",
    title: "The Moving-Throat PDE",
    prev: { title: "10 · The Post-Newtonian Ledger" },
    next: null,
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
          motion accurately is the single mathematical task most of the
          open ledger items are waiting on. This chapter is about what the
          equation for a moving throat looks like, why it's hard, and what
          closing it would buy.
        </TPLede>
      </section>

      <TPSection anchor="what" eyebrow="what's on the page" heading="A moving boundary is a hard problem.">
        <TPBody>
          The simplest way to describe a throat is as a boundary in the
          pond — a tube-shaped region where the fluid's order parameter
          goes to zero. Outside the tube, the pond is in its normal state;
          inside, it isn't. The <em>shape</em> of that tube is a function
          of angular position around it, depth along the hidden direction,
          and time. Call it <em>R(Ω, w, t)</em>, where <em>Ω</em> is the
          angular coordinate and <em>w</em> is the depth.
        </TPBody>
        <TPBody>
          In every previous chapter, we treated <em>R</em> as approximately
          constant — the throat's walls are smooth, static, and rigid enough
          that we can ignore their dynamics. The moving-throat PDE is what
          you get when you <em>stop</em> making that approximation. It's a
          partial differential equation for the full shape function, with
          the pond's equations of motion providing the forcing.
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

      <TPSection anchor="why-hard" eyebrow="why it's hard" heading="Three kinds of difficulty stacked.">
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
              v: "The behaviour at the mouth (where the throat meets the brane) and at the interior (deep in the bulk) both have to be specified, and neither is fully obvious.",
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

      <TPSection anchor="what-closes" eyebrow="what it closes" heading="Every open item in one place.">
        <TPBody>
          Here's why this chapter matters out of proportion to its length.
          Nearly every <em>open</em> entry from earlier in the program
          points back at the moving-throat PDE:
        </TPBody>

        <div style={{ margin: "20px 0", display: "flex", flexDirection: "column", gap: 8 }}>
          {[
            { where: "Topic 06", what: "Mixed-sector coefficients in the zero-mode reduction" },
            { where: "Topic 07", what: "Non-ideal MHD terms and the reconnection energy budget" },
            { where: "Topic 08", what: "UV dispersion coefficient α_Z" },
            { where: "Topic 09", what: "Higher-order electron anomaly terms; muon g−2; Lamb shift" },
            { where: "Topic 10", what: "2.5PN normalization δ_Z; 3.5PN radiation reaction; 4PN inspiral" },
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
          Closing the PDE in a controlled way — even approximately, even in
          specific regimes — retires multiple ledger entries at once.
          That's why it's the active front of the program, and it's why
          progress here is worth more than progress elsewhere.
        </TPBody>
      </TPSection>

      <TPSection anchor="progress" eyebrow="progress" heading="What's been done.">
        <TPBody>
          Three reductions have been worked out:
        </TPBody>

        <ul style={{ color: "var(--ink-2)", lineHeight: 1.8, paddingLeft: 24, fontSize: 16 }}>
          <li>
            <strong style={{ color: "var(--ink-1)" }}>Static limit</strong> —
            the <em>R</em> profile is time-independent. Gives the exact
            Coulomb and Newtonian limits. This is what underwrote chapters
            5 through 9.
          </li>
          <li>
            <strong style={{ color: "var(--ink-1)" }}>Rigid-body limit</strong> —
            the throat translates as a whole without changing shape. Gives
            1PN and 2PN corrections, and the clean emergence of effective
            metric + gauge field descriptions.
          </li>
          <li>
            <strong style={{ color: "var(--ink-1)" }}>Linearized perturbation</strong> —
            small deviations from a static throat. Gives the leading-order
            radiation formula at 2.5PN, and the structural reproduction of
            quantum scattering in the atomic chapter.
          </li>
        </ul>

        <TPBody>
          The remaining frontier — the nonlinear, large-amplitude, dynamic
          regime — is partially characterized but not closed. Current work
          is on asymptotic expansions near specific configurations (slow
          inspiral, near-equilibrium oscillation) and on matching to
          numerical solutions in the bulk regions where analytic methods
          fail.
        </TPBody>
      </TPSection>

      <TPSection anchor="stance" eyebrow="honest stance" heading="Where the program sits.">
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
            <em>R(Ω, w, t)</em> coupled to the surrounding pond. Everything
            else downstream follows.
          </div>
        </div>
      </TPSection>

      <TPSection anchor="end" eyebrow="end of the book" heading="Where the thread ends.">
        <TPBody>
          That's the whole argument, start to finish. A stiff pond; some
          defects in it; a single hidden direction; the rules you already
          know fall out as reductions; the open questions point at one
          equation. Eleven chapters, two tracks, one story.
        </TPBody>
        <TPBody>
          The value of telling it this way — plain and technical,
          side-by-side, with a clear ledger — is that readers of any
          background can check the same claims against their own tools.
          The plain-English track is accountable to the mathematics. The
          technical track is accountable to intuition. Neither is primary.
          Both have to agree.
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
            Formal statement of the free-boundary PDE for R(Ω, w, t); linearized spectrum; known reductions and match conditions.
          </span>
          <TrackToggle track="plain" size="sm" />
        </div>
      </TPSection>
    </TopicPage>
  );
}

Object.assign(window, { PlainMovingThroat });
