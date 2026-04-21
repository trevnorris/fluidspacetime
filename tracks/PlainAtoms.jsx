/* global React, TopicPage, TPTitle, TPLede, TPSection, TPBody, TPCallout, TrackToggle */
// Part II · Topic 09 — Atoms, g-factors & Anomalies — PLAIN ENGLISH

function PlainAtoms() {
  const topic = {
    n: "09",
    part: "II",
    partName: "Applications",
    slug: "atoms",
    title: "Atoms, g-factors & Anomalies",
    prev: { title: "08 · Light, Waves & the Speed Limit" },
    next: { title: "10 · The Post-Newtonian Ledger" },
  };

  return (
    <TopicPage track="plain" topic={topic}>
      <section style={{ padding: "10px 0 40px" }}>
        <TPTitle>
          An atom is a{" "}
          <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "#e67ac6" }}>standing wave</em> of the pond —
          pinned by a throat, rung by the gauge field.
        </TPTitle>
        <TPLede>
          Three things meet in an atom: a charged throat (the nucleus), a
          cloud of charged throats in standing-wave patterns (the electrons),
          and the pond itself, which supplies the gauge field that binds
          them. This chapter shows the picture reproducing the hydrogen
          spectrum, and asks where the electron's anomalous magnetic moment
          — the most precisely measured number in physics — comes from when
          you derive it from pond geometry rather than postulate it from QED.
        </TPLede>
      </section>

      <TPSection anchor="standing" eyebrow="the standing wave" heading="Why bound states exist at all.">
        <TPBody>
          A charged throat on the brane pulls electrons toward it the same
          way an ordinary Coulomb attractor would. But the electron, in
          this picture, isn't a tiny ball. It's itself a throat — a
          standing-wave configuration of the matter field — and those
          configurations are <em>large</em> in the sense that they have a
          minimum size set by the pond's stiffness.
        </TPBody>
        <TPBody>
          So what you get, when an electron-throat approaches a
          nucleus-throat, isn't a collision. It's a standing wave pattern:
          the electron's phase field wraps around the nucleus in a discrete
          set of closed modes. Those modes are the atomic orbitals. Their
          energies are quantized because only certain wavelengths fit the
          boundary conditions. The pond supplies the physics; the
          mathematics is the same mathematics a piano supplies for its
          strings.
        </TPBody>

        <TPCallout kind="note">
          <strong style={{ color: "var(--ink-1)" }}>Orbital quantization
          without Schrödinger as a postulate.</strong> Schrödinger's
          equation, in this picture, is the linearized pond equation for
          matter-field fluctuations around a Coulomb background. You don't
          postulate it; you derive it.
        </TPCallout>
      </TPSection>

      <TPSection anchor="spectrum" eyebrow="the spectrum" heading="Balmer, Lyman, and the hydrogen ladder.">
        <TPBody>
          Work out the bound states of a single electron in the Coulomb
          field of a proton, and the energy levels match the textbook
          hydrogen spectrum exactly, including the famous Rydberg constant.
          This is the first non-trivial quantitative success of the
          framework in the atomic sector — a known, precise set of numbers
          that falls out without adjustable parameters.
        </TPBody>
        <TPBody>
          The corrections to this basic spectrum — fine structure, hyperfine
          structure, the Lamb shift — are where things get subtle. Some
          come from pond geometry that the naive calculation missed. Others
          involve the mixed-sector channels of topic 06. Others would be
          called "QED loop effects" in conventional language. The program's
          bet is that <em>all</em> of these corrections can be organized as
          geometric quantities in the fluid picture, with QED emerging as
          the effective perturbation theory that results.
        </TPBody>
      </TPSection>

      <TPSection anchor="g-factor" eyebrow="the electron anomaly" heading="The most precise number in physics.">
        <TPBody>
          Every charged particle has a magnetic moment. For a simple
          rotating charge, elementary electrodynamics predicts
          <em> g = 2</em>, where <em>g</em> is the dimensionless proportionality
          between spin and magnetic moment. For the real electron, the
          measured value is not 2. It's slightly larger:{" "}
          <em>g = 2 × (1 + a)</em> where <em>a</em> is the famous{" "}
          <em>electron anomaly</em>, known experimentally to twelve
          significant figures. QED predicts <em>a</em> from an infinite
          series of "loop corrections" and matches experiment spectacularly.
        </TPBody>
        <TPBody>
          In the fluid picture, <em>a</em> isn't a loop series. It's a
          geometric correction that arises because the electron isn't a
          point — it's a throat with a specific shape, which couples to
          the gauge field in a way that's not quite "charge × spin" at
          finite distance. The anomaly is the leading deviation from the
          point-particle answer, organized around the ratio of the
          electron's internal scale to the wavelength of the probing field.
        </TPBody>

        <div style={{
          margin: "22px 0", padding: "22px 26px",
          border: "1px solid #e67ac655", borderRadius: 3,
          background: "linear-gradient(160deg, rgba(230,122,198,0.08), rgba(16,20,42,0.5))",
        }}>
          <div className="fu-mono fu-small" style={{
            color: "#e67ac6", letterSpacing: "0.14em", textTransform: "uppercase",
            marginBottom: 10, fontSize: 10.5,
          }}>
            the program's claim
          </div>
          <div className="fu-body" style={{ fontSize: 16.5, color: "var(--ink-1)", lineHeight: 1.65 }}>
            If the fluid picture is right, then the electron anomaly{" "}
            <em>a = (g − 2)/2 ≈ 0.001159…</em> is computable from throat
            geometry plus the localization profile of topic 06. Specific
            terms in the QED series should map onto specific geometric
            contributions. Getting this calculation to match at high
            precision is an open, in-progress milestone — currently an
            item in the results ledger.
          </div>
        </div>
      </TPSection>

      <TPSection anchor="anomalies" eyebrow="what else is on the list" heading="Other anomalies under the same umbrella.">
        <TPBody>
          The electron anomaly is the most precisely known, but the same
          kind of geometric reinterpretation applies to several other
          "anomalies" in atomic and subatomic physics:
        </TPBody>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, margin: "18px 0 6px", maxWidth: 820 }}>
          {[
            { k: "Muon g−2",         v: "A persistent discrepancy between QED prediction and experiment. In the fluid picture, candidate contributions come from the hidden-direction mixed-sector channels at the muon's energy scale." },
            { k: "Lamb shift",       v: "Small splitting of hydrogen levels that QED attributes to vacuum fluctuations. Here: geometric finite-size corrections to the Coulomb integral." },
            { k: "Hyperfine structure", v: "Coupling between electronic and nuclear magnetic moments — both are geometric in the fluid picture, so this coupling is doubly geometric." },
            { k: "Proton radius puzzle", v: "Disagreement over the proton's effective size when measured electronically vs muonically. The puzzle sharpens the question of what 'size' even means for a throat." },
          ].map((c) => (
            <div key={c.k} style={{
              padding: "18px 20px",
              border: "1px solid var(--rule-2)",
              borderRadius: 3,
              background: "rgba(16,20,42,0.5)",
            }}>
              <div className="fu-display" style={{ fontSize: 15, color: "var(--ink-1)", fontWeight: 400, marginBottom: 6 }}>{c.k}</div>
              <div className="fu-small" style={{ color: "var(--ink-2)", lineHeight: 1.6 }}>{c.v}</div>
            </div>
          ))}
        </div>

        <TPBody>
          None of these are claimed to be solved yet. They are listed as
          the targets the program is aiming at, with specific geometric
          mechanisms in mind. "Aiming at" is the honest verb here; "has
          landed" would overstate the current state.
        </TPBody>
      </TPSection>

      <TPSection anchor="stance" eyebrow="honest stance" heading="QED isn't replaced — it's re-derived.">
        <TPBody>
          Nothing in this chapter is hostile to QED. QED works. It makes
          predictions that match experiment to heroic precision, and any
          framework that claims to describe the real world has to reproduce
          its numbers. The question is <em>what QED is a theory of</em>. The
          fluid picture answers: QED is the effective perturbation theory
          that emerges from geometric corrections to the pond's zero-mode
          gauge field. The loops you compute in textbook QED correspond to
          specific geometric corrections you could also compute directly.
        </TPBody>
        <TPBody>
          This is the same stance we took with gravity, with EM, and with
          relativity: the known theory is recovered as an effective
          description. The bet is that once you compute the underlying
          geometry carefully, the known theory's parameters and
          renormalization structure start to look like bookkeeping about
          the bulk rather than fundamental inputs.
        </TPBody>
      </TPSection>

      <TPSection anchor="next" eyebrow="up next" heading="Next: the ledger.">
        <TPBody>
          Atomic physics was historically the test bench that sharpened
          quantum mechanics to its current precision. Orbital mechanics, on
          larger scales, was the test bench that sharpened general
          relativity. The next chapter works through the post-Newtonian
          ladder — the specific corrections to Newton that GR predicts and
          experiment confirms — and asks how far the fluid picture gets
          against it.
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
            Coulomb limit of the reduction, hydrogen spectrum derivation, anomaly as a geometric form factor.
          </span>
          <TrackToggle track="plain" size="sm" />
        </div>
      </TPSection>
    </TopicPage>
  );
}

Object.assign(window, { PlainAtoms });
