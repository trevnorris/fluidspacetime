/* global React, TopicPage, TPTitle, TPLede, TPSection, TPBody, TPCallout, FluidDiagram, TrackToggle, Badge, Chip, EqCard, Tex */
// Part 1 · The Universe as a Fluid — TECHNICAL track

function TechnicalPart1() {
  const topic = {
    n: "01",
    part: "I",
    partName: "Foundations",
    slug: "universe-as-fluid",
    title: "The Universe as a Fluid",
    prev: null,
    next: { title: "02 · Defects and Topological Stability" },
  };

  return (
    <TopicPage track="technical" topic={topic}>
      {/* Title block */}
      <section style={{ padding: "10px 0 40px" }}>
        <TPTitle>
          The bulk is modeled as a stiff polytropic fluid on{" "}
          <span className="fu-mono" style={{ fontSize: "0.7em", color: "#7aa2ff" }}>
            ℝ³ × ℝ<sub>w</sub> × ℝ<sub>t</sub>
          </span>.
        </TPTitle>
        <TPLede>
          Before introducing defects, gauge sectors, or projection, we fix the
          ambient medium: a real, compressible, barotropic fluid on a four-dimensional
          spatial manifold, with an equation of state chosen so that its linear
          response has a single characteristic speed <Tex tex="c" />.
        </TPLede>
      </section>

      {/* 1.1 — The ambient medium */}
      <TPSection
        anchor="picture"
        eyebrow="ambient medium · parent action"
        heading="A real scalar field φ(x,w,t) with a declared equation of state."
      >
        <TPBody>
          Let <Tex tex="\varphi(x,w,t)" /> denote a real, nowhere-vanishing order
          parameter on the bulk <Tex tex="\mathbb{R}^{3}\times\mathbb{R}_{w}\times\mathbb{R}_{t}" />.
          The magnitude <Tex tex="\rho = |\varphi|^{2}" /> plays the role of a
          compressible fluid density; its dynamics are set by a barotropic equation of state{" "}
          <Tex tex="P = P(\rho)" />. The declared form is a stiff polytrope:
        </TPBody>

        <EqCard
          label="◇ equation of state · parent"
          plain="Stiff polytropic EoS. The exponent n is fixed, not tuned."
          tex="P(\rho) \;=\; K\,\rho^{\,n}, \qquad n = 5"
          chips={["4d_summary.md", "moving_throat_pde_program_compact.md"]}
        />

        <TPBody style={{ marginTop: 20 }}>
          The choice <Tex tex="n = 5" /> is not a free knob. It is fixed by the
          optical-consistency requirement that the linearized excitation spectrum
          supports a single isotropic phase velocity, independent of amplitude, which
          is then identified with the cosmic invariant <Tex tex="c" />. Any other
          exponent introduces amplitude-dependent dispersion and breaks this identification.
        </TPBody>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 8 }}>
          <Badge kind="exact">Exact (parent definition)</Badge>
          <Badge kind="closure">Closure — linear sector</Badge>
        </div>

        <FluidDiagram
          accent="#7aa2ff"
          labels={{
            plateNum: "plate 01",
            plateTitle: "bulk sector · linearized + defect",
            plateTag: "technical · schematic",
            medium: "φ(x,w,t) — bulk order parameter",
            ripple: "δφ — linear excitation · phase velocity c",
            defect: "Σ(X,t) — throat worldsheet (defect locus)",
            speedLimit: "|δφ|-cone · phase velocity c",
            yAxis: "w",
            xAxis: "x³",
            mediumShort: "bulk φ",
            rippleShort: "δφ",
            defectShort: "throat",
            braneShort: "brane w=0",
          }}
        />
      </TPSection>

      {/* 1.2 — Linear sector = light */}
      <TPSection
        anchor="ripples"
        eyebrow="linear sector · phase velocity"
        heading="Linear fluctuations propagate at a single invariant speed c."
      >
        <TPBody>
          Expanding around a uniform background{" "}
          <Tex tex="\varphi = \varphi_{0} + \delta\varphi" />, the quadratic part of
          the parent action yields a d'Alembertian for <Tex tex="\delta\varphi" /> with
          phase velocity determined by <Tex tex="\frac{dP}{d\rho}\big|_{\rho_{0}}" />.
          Under the stiff EoS above this reduces to:
        </TPBody>

        <EqCard
          label="◇ linear wave equation · bulk"
          plain="Ordinary wave operator on the bulk. The characteristic speed is the invariant c."
          tex="\left(\frac{1}{c^{2}}\partial_{t}^{2} - \nabla_{x}^{2} - \partial_{w}^{2}\right)\delta\varphi \;=\; 0"
          chips={["4d_summary.md"]}
        />

        <TPBody style={{ marginTop: 20 }}>
          The identification <Tex tex="c = \sqrt{dP/d\rho|_{\rho_{0}}}" /> fixes the
          speed of light as the characteristic of the fluid's linear sector. No
          super-luminal phase velocity exists for any real-valued <Tex tex="\delta\varphi" />{" "}
          within the stiff-polytrope closure — this is not imposed; it is a consequence.
        </TPBody>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <Badge kind="exact">Follows from parent action</Badge>
          <Chip>4d_em_fields_summary.md § linear sector</Chip>
        </div>

        <TPCallout kind="note">
          The absence of a super-luminal branch is a theorem within the linear
          sector, not a postulate. Non-linear / large-amplitude excitations require
          the full reduction machinery; see Part&nbsp;II §08.
        </TPCallout>
      </TPSection>

      {/* 1.3 — Defects = particles */}
      <TPSection
        anchor="knots"
        eyebrow="topological defects · throats"
        heading="Non-linear solutions with stable topological charge."
      >
        <TPBody>
          The same parent action admits a second family of solutions that is not
          captured by the linearized sector: time-independent, localized
          configurations of <Tex tex="\varphi" /> whose phase (or internal
          orientation) carries a non-trivial topological winding. These are the
          objects the program calls <em>throats</em>.
        </TPBody>

        <EqCard
          label="◇ throat worldsheet · moving-throat PDE"
          plain="The throat locus is a moving surface Σ(X,t), with angular, bulk-depth, and time structure."
          tex="\Sigma(X,t) \;=\; r - R(\Omega, w, t) \;=\; 0"
          chips={["moving_throat_pde_program_compact.md"]}
        />

        <TPBody style={{ marginTop: 20 }}>
          A throat is distinguished from a linear excitation by two features:
        </TPBody>

        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20,
          margin: "24px 0 12px", maxWidth: 720,
        }}>
          {[
            {
              k: "Topological charge",
              v: "An integer winding of φ's internal phase around the defect locus. This integer cannot change continuously — it is the identity of the throat.",
            },
            {
              k: "Finite self-energy",
              v: "The action is concentrated near Σ and integrable; far-field contributions decay rapidly in w and fall off as 1/r in the brane sector.",
            },
          ].map((c) => (
            <div key={c.k} style={{
              padding: "20px 22px",
              border: "1px solid var(--rule-2)",
              borderRadius: 3,
              background: "rgba(16,20,42,0.5)",
            }}>
              <div className="fu-display" style={{ fontSize: 18, color: "var(--ink-1)", marginBottom: 8, fontWeight: 400 }}>{c.k}</div>
              <div className="fu-small" style={{ color: "var(--ink-2)", lineHeight: 1.6 }}>{c.v}</div>
            </div>
          ))}
        </div>

        <TPBody>
          What a brane observer reports as <em>a particle</em> is the projected
          readout of a throat configuration — not an inserted point source. The
          mapping from throat parameters{" "}
          <Tex tex="(R, \dot R, \text{winding}, \dots)" /> to measured
          invariants (mass, charge, spin-like structure) is the subject of the
          emergence program.
        </TPBody>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <Badge kind="closure">Closure — two-number ansatz</Badge>
          <Badge kind="open">Open — moving-throat PDE branch</Badge>
          <Chip>moving_throat_pde_program_compact.md</Chip>
        </div>
      </TPSection>

      {/* 1.4 — Program posture */}
      <TPSection
        anchor="why"
        eyebrow="program posture"
        heading="Reduction, not analogy."
      >
        <TPBody>
          The fluid picture is not a metaphor that is subsequently abandoned. The
          parent action is taken literally: it is the object on which every
          carry-forward identity in the program is defined. Emergent 3+1
          structures — Maxwell, Poisson, Coulomb, MHD — appear as controlled
          reductions of this parent, each with an explicitly declared closure
          hierarchy and an associated claim-status tier.
        </TPBody>

        <TPBody>
          Throughout the site, the word <em>fluid</em> refers to the specific
          object defined above. Where the plain-English track uses the pond and
          ripple imagery to carry intuition, the technical track lifts those
          images to the operators, identities, and status tiers that make the
          claims checkable.
        </TPBody>

        <div className="fu-eyebrow" style={{ color: "var(--accent)", marginBottom: 12, marginTop: 22 }}>
          ◇ carry-forward identities · this page
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          <Chip>EoS · n = 5</Chip>
          <Chip>δφ wave operator · phase velocity c</Chip>
          <Chip>Σ(X,t) throat locus</Chip>
        </div>

        <div style={{
          marginTop: 30,
          padding: "20px 24px",
          border: "1px dashed var(--rule-2)",
          borderRadius: 3,
          display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap",
        }}>
          <span className="fu-mono" style={{
            fontSize: 10.5, letterSpacing: "0.14em", color: "var(--ink-3)",
            textTransform: "uppercase",
          }}>◇ plain mirror</span>
          <span className="fu-small" style={{ color: "var(--ink-2)", flex: 1, minWidth: 220 }}>
            The metaphor-first version of this page uses the still-pond, ripple, and knot images.
          </span>
          <TrackToggle track="technical" size="sm" />
        </div>
      </TPSection>

      {/* 1.5 — What's next */}
      <TPSection
        anchor="next"
        eyebrow="next · §02"
        heading="Next: topological stability and the defect catalogue."
      >
        <TPBody>
          The ambient fluid admits more than one family of stable defect. Section&nbsp;02
          catalogues them by homotopy class, fixes sign conventions for the
          winding integers, and isolates the subfamily used as matter-sector
          throats throughout the rest of the program.
        </TPBody>
      </TPSection>
    </TopicPage>
  );
}

Object.assign(window, { TechnicalPart1 });
