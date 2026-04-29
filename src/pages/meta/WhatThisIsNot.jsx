import React from 'react';
import { TopicPage, TPTitle, TPLede, TPSection, TPBody, TPCallout } from '../../components/TopicPage.jsx';
import { Badge, Chip } from '../../components/ui.jsx';

// Part III · Topic 12 — What This Is Not
// Single-track meta page. Defines what kind of object the program is,
// what it claims, and what it explicitly does NOT claim.

export default function MetaWhatThisIsNot() {
  const topic = {
    n: "12",
    part: "III",
    partName: "Meta",
    slug: "what-this-is-not",
    title: "What This Is Not",
  };

  return (
    <TopicPage track="technical" topic={topic} meta>
      <section style={{ padding: "10px 0 40px" }}>
        <TPTitle>
          A program, not a theory; a fluid picture, not a replacement for
          general relativity or quantum field theory
        </TPTitle>

        <TPLede>
          This page exists to prevent the three most common misreadings of the
          Fluid Spacetime program. If you take away only one thing, take away
          this: every claim on every topic page carries a{" "}
          <em>claim-status badge</em>. The badges are the whole point. Read the
          badges before you read the text.
        </TPLede>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 20 }}>
          <Chip>this is a meta page</Chip>
          <Chip>single-track · no plain mirror</Chip>
          <Chip>read before you cite</Chip>
        </div>
      </section>

      {/* 12.1 — What this IS */}
      <TPSection
        anchor="what-it-is"
        eyebrow="12.1 · what this program is"
        heading="A single parent action, and a ledger of what follows from it"
      >
        <TPBody>
          The program starts from one declared object: a 4+1 dimensional
          inviscid, irrotational fluid action with a stiff polytropic equation
          of state, plus the localized Maxwell, projection, and geometry
          structures named where they are used. That starting point is not
          renegotiated downstream. Everything else on the site — gravity as
          inflow, EM as puncture-localized Maxwell, atoms as reduced bound
          states, the PN ledger — is a <em>claim about that object</em>. The
          badges say how strong each claim is.
        </TPBody>

        <MetaClaimLegend />
      </TPSection>

      {/* 12.2 — What this is NOT */}
      <TPSection
        anchor="what-it-is-not"
        eyebrow="12.2 · the three misreadings"
        heading="Three ways to misread this program, and how to avoid them"
      >
        <MisreadingRow
          n="01"
          wrong="“It replaces general relativity.”"
          right={
            <>
              It doesn't. GR is the comparison target throughout the weak-field
              inflow and PN program. The current carry-forward reaches the
              conservative 3PN ladder within a declared hierarchy, and the 4PN
              local sector is separated from the inherited tail bridge; 2.5PN
              radiation reaction and the full 4PN tail remain conditional on
              one shared outgoing quadrupole normalization. If a prediction
              disagrees with GR inside GR's tested domain after the same
              assumptions are applied, the program is wrong, not GR.
            </>
          }
        />

        <MisreadingRow
          n="02"
          wrong="“It's a metaphor.”"
          right={
            <>
              The fluid is not a picture-language for something else. It's
              the object the parent action is written down on. Topics 02–11
              are claims about that object at different strengths: some are
              exact projection identities, some are controlled reductions, and
              some are open branch-data targets. The Plain English track
              <em> is</em> metaphor-first, and the Technical track strips the
              metaphor away — but the underlying object is the same on both
              tracks, and it is mathematical, not verbal.
            </>
          }
        />

        <MisreadingRow
          n="03"
          wrong="“Every equation here is derived from first principles.”"
          right={
            <>
              Not yet. Several central equations are{" "}
              <em>controlled reductions</em> or named closures (zero-mode
              closure, finite-throat support branch, effective wall dynamics)
              or carry open branch data (the shared 2.5PN / 4PN outgoing
              normalization, the g−2 branch-selection residue). The
              moving-throat PDE — the program's frontier — is a{" "}
              <em>framework and reduced-system statement</em>, not a closed
              nonlinear solution.
              Treat the badges as the contract. <Badge kind="exact" />{" "}
              means exact. <Badge kind="open" /> means unresolved.
            </>
          }
        />
      </TPSection>

      {/* 12.3 — What would falsify it */}
      <TPSection
        anchor="falsifiers"
        eyebrow="12.3 · falsifiers"
        heading="What experiments or calculations would retire this program?"
      >
        <TPBody>
          A program that cannot be wrong is not a program. Here are the four
          places the Fluid Spacetime picture is most exposed.
        </TPBody>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))",
          gap: 16,
          marginTop: 24,
        }}>
          <FalsifierCard
            tag="F-1 · binary pulsar"
            heading="Quadrupole residual outside bounds"
            body={<>
              The current source record narrows the radiation problem to an
              outgoing quadrupole normalization residual, with the 4PN tail
              diagnostic split as <span className="fu-mono">δ_Q + δ_tail</span>{" "}
              at linear order. Once a frozen branch returns those quantities,
              binary-pulsar or gravitational-wave damping data can test them
              directly. A confirmed mismatch outside observational bounds would
              falsify the fluid route to quadrupole radiation.
            </>}
            crossref="topic 10"
          />

          <FalsifierCard
            tag="F-2 · ring-down"
            heading="Realized throat-response spectrum"
            body={<>
              Topic 11 does not yet supply a finished ring-down spectrum.
              What it does supply is the framework and branch-data contract
              that a realized throat solution would have to turn into one.
              Once that branch is fixed, gravitational-wave spectra that
              exclude its predicted response would rule out that
              throat-identification route.
            </>}
            crossref="topic 11"
          />

          <FalsifierCard
            tag="F-3 · anomalous moment"
            heading="g−2 branch when completed"
            body={<>
              The current anomaly package organizes the residue into a
              common quotient / prefactor-slope branch packet; it does not yet
              justify claiming that the published stack has already derived
              the full electron or muon anomaly series. If the completed
              branch realization yields the wrong sign or wrong series shape
              against experiment, that would falsify the geometric-anomaly
              route.
            </>}
            crossref="topic 09"
          />

          <FalsifierCard
            tag="F-4 · EoS exponent"
            heading="n ≠ 5 from an independent constraint"
            body={<>
              The weak-field / PN carry-forward sits on the stiff polytrope
              exponent <span className="fu-mono">n = 5</span>. In the current
              source record this is fixed by weak-field optical consistency,
              not by downstream fitting. An independent calculation that
              forced the same branch to use a different{" "}
              <span className="fu-mono">n</span> would force a rebuild or
              demotion of the picture.
            </>}
            crossref="topic 01"
          />
        </div>
      </TPSection>

      {/* 12.4 — Scope */}
      <TPSection
        anchor="scope"
        eyebrow="12.4 · scope"
        heading="What the program does not address"
      >
        <TPBody>
          The program is a mechanical-fluid picture of{" "}
          <em>gravity, EM, plasma, bound states, and post-Newtonian
          corrections</em>. It does not — at the current stage — address the
          following. Their absence here is deliberate.
        </TPBody>

        <div style={{ marginTop: 20 }}>
          <ScopeRow label="Weak-interaction sector" note="No derivation of W/Z bosons or flavor structure. Out of scope." />
          <ScopeRow label="Color / QCD confinement" note="No derivation of SU(3) gauge structure from the fluid. Out of scope." />
          <ScopeRow label="Cosmological constant" note="Addressed only obliquely as a vacuum-pressure term. The Λ-problem in GR is not solved here." />
          <ScopeRow label="Neutrino masses, mixing, CP violation" note="Silent. Not claimed, not derived." />
          <ScopeRow label="Dark matter" note="No realistic dark-matter or cosmological model is derived here. Possible large-scale or remnant interpretations are speculative." />
          <ScopeRow label="Dark energy as inflow boundary" note="Speculative scaling argument only. No claim." />
        </div>
      </TPSection>

      {/* 12.5 — Tone */}
      <TPSection
        anchor="tone"
        eyebrow="12.5 · tone"
        heading="One last disclaimer, about tone"
      >
        <TPCallout>
          Parts of this site read like a physics textbook. They are not. They
          are a working exposition of a specific research program whose
          central PDE is not yet closed. If you are a referee, start at the{" "}
          <span className="fu-mono">source:</span> chips and read the{" "}
          cited preprints and summaries directly. If you are a physicist
          evaluating whether to spend time on this, read topic 10 (the
          ledger) before anything else — it states exactly what is and
          isn't derived.
        </TPCallout>
      </TPSection>
    </TopicPage>
  );
}

// ─── Claim-status legend ────────────────────────────────────
function MetaClaimLegend() {
  const rows = [
    { kind: "exact", text: "Follows from the declared action, exact definitions, or exact algebra with no discarded terms. If the premises are right, this is right." },
    { kind: "closure", text: "Follows within a stated closure assumption (zero-mode, stiff-polytrope, irrotationality). The closure is named on the page." },
    { kind: "reduce", text: "A controlled reduction: an ansatz that is provably consistent at the order claimed, but not derived from a deeper principle." },
    { kind: "effect", text: "An effective identity that holds because the dropped terms are parametrically small. Bound stated." },
    { kind: "num", text: "Located numerically. No closed form yet. The number and its uncertainty are quoted." },
    { kind: "open", text: "Open — the coefficient, the sign, or the existence is unresolved. Bounds and expectations may be stated, but not a value." },
  ];

  return (
    <div style={{
      marginTop: 32,
      border: "1px solid var(--rule)",
      background: "rgba(255,255,255,0.015)",
      borderRadius: 4,
    }}>
      <div style={{
        padding: "14px 22px",
        borderBottom: "1px solid var(--rule)",
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: "var(--ink-3)",
      }}>
        claim-status legend
      </div>
      <div>
        {rows.map((r, i) => (
          <div key={r.kind} style={{
            display: "grid",
            gridTemplateColumns: "180px 1fr",
            gap: 20,
            alignItems: "start",
            padding: "16px 22px",
            borderTop: i === 0 ? "none" : "1px solid var(--rule-2)",
          }}>
            <div><Badge kind={r.kind} /></div>
            <div className="fu-small" style={{ color: "var(--ink-2)", lineHeight: 1.55 }}>
              {r.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Misreading row ─────────────────────────────────────────
function MisreadingRow({ n, wrong, right }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "60px 1fr",
      gap: 24,
      marginTop: 28,
      padding: "26px 0",
      borderTop: "1px solid var(--rule-2)",
    }}>
      <div style={{
        fontFamily: "var(--font-mono)",
        fontSize: 32,
        fontWeight: 300,
        color: "#e67ac6",
        lineHeight: 1,
      }}>
        {n}
      </div>
      <div>
        <div style={{
          fontFamily: "var(--font-display)",
          fontSize: 22,
          fontWeight: 400,
          fontStyle: "italic",
          color: "#e67ac6",
          marginBottom: 14,
          lineHeight: 1.3,
        }}>
          {wrong}
        </div>
        <div className="fu-body" style={{
          fontSize: 16.5,
          lineHeight: 1.7,
          color: "var(--ink-1)",
        }}>
          {right}
        </div>
      </div>
    </div>
  );
}

// ─── Falsifier card ────────────────────────────────────────
function FalsifierCard({ tag, heading, body, crossref }) {
  return (
    <div style={{
      border: "1px solid var(--rule)",
      borderLeft: "2px solid #7fc69d",
      background: "rgba(127,198,157,0.03)",
      padding: "20px 22px",
      borderRadius: 2,
    }}>
      <div className="fu-mono fu-small" style={{
        color: "#7fc69d",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        marginBottom: 8,
      }}>
        {tag}
      </div>
      <div style={{
        fontFamily: "var(--font-display)",
        fontSize: 19,
        fontWeight: 500,
        color: "var(--ink-1)",
        marginBottom: 12,
        lineHeight: 1.25,
      }}>
        {heading}
      </div>
      <div className="fu-small" style={{
        color: "var(--ink-2)",
        lineHeight: 1.6,
        marginBottom: 12,
      }}>
        {body}
      </div>
      <div className="fu-mono fu-small" style={{
        color: "var(--ink-4)",
        fontSize: 10.5,
        letterSpacing: "0.08em",
      }}>
        → see {crossref}
      </div>
    </div>
  );
}

// ─── Scope row ─────────────────────────────────────────────
function ScopeRow({ label, note }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "280px 1fr",
      gap: 20,
      padding: "14px 0",
      borderTop: "1px solid var(--rule-2)",
      alignItems: "baseline",
    }}>
      <div style={{
        fontFamily: "var(--font-display)",
        fontSize: 16,
        color: "var(--ink-1)",
        fontStyle: "italic",
      }}>
        {label}
      </div>
      <div className="fu-small" style={{ color: "var(--ink-3)", lineHeight: 1.55 }}>
        {note}
      </div>
    </div>
  );
}
