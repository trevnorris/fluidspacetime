import React from 'react';
import { TopicPage, TPTitle, TPLede, TPSection, TPBody, TPCallout } from '../../components/TopicPage.jsx';

// Part II · Topic 09 — Atoms, g-factors & Anomalies — PLAIN ENGLISH

export default function PlainAtoms() {
  const topic = {
    n: "09",
    part: "II",
    partName: "Applications",
    slug: "atoms",
    title: "Atoms, g-factors & Anomalies",
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
          Three things meet in an atom: a charged throat, a cloud of
          standing-wave matter around it, and the gauge field that binds the
          whole pattern together. The honest current status is that the program
          has a clear reduced Coulomb-limit story for the Bohr scale and
          binding scale, plus a narrowed anomaly bookkeeping story. What it
          should not do is present the full hydrogen spectrum or the electron
          anomaly as already re-derived exactly from the finished stack.
        </TPLede>
      </section>

      <TPSection anchor="standing" eyebrow="the standing wave" heading="Why bound states are the natural target">
        <TPBody>
          The intuition still goes through. A charged throat plays the role of a
          Coulomb centre. An electron-like defect is a spread-out wave
          configuration, not a hard little ball. Bring the two together and the
          natural question becomes: what standing-wave patterns fit around the
          centre?
        </TPBody>

        <TPCallout kind="note">
          <strong style={{ color: "var(--ink-1)" }}>What is actually supported.</strong>{" "}
          The current source stack supports a reduced zero-mode Coulomb sector
          in which the Bohr-scale bound-state minimum appears from the reduced
          action. It does not, as the site previously implied, document a
          finished all-level precision-hydrogen theorem in the current 4D
          papers.
        </TPCallout>
      </TPSection>

      <TPSection anchor="spectrum" eyebrow="the spectrum" heading="Hydrogen has a reduced Bohr-scale result, not a finished full-spectrum theorem">
        <TPBody>
          The right claim for this page is modest but still interesting: in the
          Coulomb limit, the reduced action produces the familiar Bohr radius
          and binding scale as an energy minimum. The repo also isolates
          correction channels from finite localization, finite throat response,
          and inherited GNLS stiffness. But the site should stop saying the
          whole spectrum has already been reproduced exactly and without
          qualification.
        </TPBody>
        <TPBody>
          That does not mean the atomic story is empty. It means the landed
          claim is the reduced hydrogenic sector and Bohr scale; the complete
          precision spectrum remains a target.
        </TPBody>
      </TPSection>

      <TPSection anchor="g-factor" eyebrow="the electron anomaly" heading="The anomaly story has narrowed, but it is not finished">
        <TPBody>
          The idea is still the same: the electron is not truly pointlike in the
          fluid picture, so its magnetic response should differ slightly from the
          point-particle answer. The site's older wording jumped too quickly
          from that idea to a finished leading-order result.
        </TPBody>
        <TPBody>
          What the current package really says is subtler: most of the anomaly
          bookkeeping has collapsed to one narrow microscopic branch-selection
          datum. That's progress, but it is not the same thing as saying the
          measured electron anomaly has already been derived here once and for
          all.
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
            the program's honest claim
          </div>
          <div className="fu-body" style={{ fontSize: 16.5, color: "var(--ink-1)", lineHeight: 1.65 }}>
            The anomaly looks increasingly like a geometric / outgoing branch
            problem rather than a wide-open fit problem. But one final branch
            datum is still open, so the site should describe the result as an
            in-progress target, not as a closed derivation.
          </div>
        </div>
      </TPSection>

      <TPSection anchor="anomalies" eyebrow="what else is on the list" heading="Other targets under the same umbrella">
        <TPBody>
          Once the remaining branch and finite-size data are under control, the
          same machinery is supposed to feed several precision observables:
        </TPBody>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))", gap: 14, margin: "18px 0 6px", maxWidth: 820 }}>
          {[
            { k: "Muon g−2", v: "A candidate precision target, not yet a closed prediction." },
            { k: "Lamb shift", v: "A geometric short-distance correction target, still open." },
            { k: "Hyperfine structure", v: "A natural downstream target once the bound-state bookkeeping is stabilized." },
            { k: "Atomic precision tests", v: "The place the framework would have to cash out its Coulomb-limit story quantitatively." },
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
      </TPSection>

      <TPSection anchor="stance" eyebrow="honest stance" heading="QED is the benchmark this page still owes">
        <TPBody>
          QED already owns this terrain experimentally. So the right standard
          for the fluid picture is severe: if it wants to talk about atoms and
          anomalies, it has to reproduce the same numbers. This page should read
          as a map of the reduced foothold and the remaining target, not as a
          declaration that the target has already been fully hit.
        </TPBody>
      </TPSection>

      <TPSection anchor="next" eyebrow="up next" heading="Next: the ledger">
        <TPBody>
          The next chapter does the same honesty exercise for gravity: which PN
          rungs are already closed in the current hierarchy, and which still
          wait on the moving-throat branch.
        </TPBody>

      </TPSection>
    </TopicPage>
  );
}
