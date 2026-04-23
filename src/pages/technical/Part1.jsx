import React from 'react';
import {
  TopicPage,
  TPTitle,
  TPLede,
  TPSection,
  TPBody,
  TPCallout,
} from '../../components/TopicPage.jsx';
import { FluidDiagram } from '../../components/FluidDiagram.jsx';
import { Badge, Chip, Tex, EqCard } from '../../components/ui.jsx';

// Part 1 · The Universe as a Fluid — TECHNICAL track
export default function TechnicalPart1() {
  const topic = {
    n: '01',
    part: 'I',
    partName: 'Foundations',
    slug: 'universe-as-fluid',
    title: 'The Universe as a Fluid',
  };

  return (
    <TopicPage track="technical" topic={topic}>
      {/* Title block */}
      <section style={{ padding: '10px 0 40px' }}>
        <TPTitle>
          The bulk is modeled as a stiff polytropic fluid on{' '}
          <span
            className="fu-mono"
            style={{ fontSize: '0.7em', color: '#7aa2ff' }}
          >
            ℝ³ × ℝ<sub>w</sub> × ℝ<sub>t</sub>
          </span>
          .
        </TPTitle>
        <TPLede>
          Before introducing defects, gauge sectors, or projection, we fix the
          ambient medium: a gauged GNLS matter sector on a four-dimensional
          spatial manifold, with complex order parameter <Tex tex="\psi" />,
          density <Tex tex="\rho = |\psi|^2" />, and a stiff barotropic
          equation of state. Later brane observables are defined by projection;
          they are not inserted by boundary condition.
        </TPLede>
      </section>

      <TPSection
        anchor="picture"
        eyebrow="ambient medium · parent action"
        heading="A complex order parameter ψ(x,w,t) with a declared equation of state."
      >
        <TPBody>
          Let <Tex tex="\psi(x,w,t)" /> denote the complex order parameter on the bulk{' '}
          <Tex tex="\mathbb{R}^{3}\times\mathbb{R}_{w}\times\mathbb{R}_{t}" />.
          The hydrodynamic density is <Tex tex="\rho = |\psi|^{2}" />, and the
          matter self-interaction is fixed by a barotropic equation of state
          <Tex tex="P = P(\rho)" />. The declared form is a stiff polytrope:
        </TPBody>

        <EqCard
          label="◇ equation of state · parent"
          plain="Stiff polytropic EoS. The exponent n is fixed, not tuned."
          tex="P(\rho) \;=\; K\,\rho^{\,n}, \qquad n = 5"
        />

        <TPBody style={{ marginTop: 20 }}>
          The choice <Tex tex="n = 5" /> is not a free knob. It is fixed by the
          optical-consistency requirement that the linearized excitation
          spectrum supports a single isotropic phase velocity, independent of
          amplitude, which is then identified with the cosmic invariant{' '}
          <Tex tex="c" />. Any other exponent introduces amplitude-dependent
          dispersion and breaks this identification.
        </TPBody>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 8 }}>
          <Badge kind="exact">Exact (parent definition)</Badge>
          <Badge kind="closure">Closure — linear sector</Badge>
        </div>

        <FluidDiagram
          accent="#7aa2ff"
          labels={{
            plateNum: 'plate 01',
            plateTitle: 'bulk sector · linearized + defect',
            plateTag: 'technical · schematic',
            medium: 'ψ(x,w,t) — bulk order parameter',
            ripple: 'δψ — small disturbance',
            defect: 'Σ(X,t) — throat worldsheet (defect locus)',
            speedLimit: 'characteristic propagation speed c',
            yAxis: 'w',
            xAxis: 'x³',
            mediumShort: 'bulk ψ',
            rippleShort: 'δψ',
            defectShort: 'throat',
            braneShort: 'brane w=0',
          }}
        />
      </TPSection>

      <TPSection
        anchor="ripples"
        eyebrow="linear sector · phase velocity"
        heading="Small disturbances inherit a characteristic speed fixed by the EOS."
      >
        <TPBody>
          Expanding around a uniform background density <Tex tex="\rho_0" />,
          the characteristic small-disturbance speed is set by the EOS slope
          <Tex tex="\frac{dP}{d\rho}\big|_{\rho_0}" />. For the stiff
          polytrope carried forward by the program, this gives:
        </TPBody>

        <EqCard
          label="◇ characteristic speed · bulk background"
          plain="The EOS fixes the propagation speed used in the weak-field optical / bridge analysis."
          tex="c_s^2(\rho_0) \;=\; \frac{1}{m}\,\frac{dP}{d\rho}\Big|_{\rho_0} \;=\; \frac{5K}{m}\,\rho_0^{4}"
        />

        <TPBody style={{ marginTop: 20 }}>
          In the carry-forward bridge analysis, weak-field optical consistency
          fixes <Tex tex="n=5" /> and identifies the relevant brane propagation
          speed with this characteristic background speed. The parent 4D paper
          itself keeps exact identities, controlled reductions, and regime
          statements visibly separate.
        </TPBody>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <Badge kind="closure">Background characteristic speed</Badge>
        </div>

        <TPCallout kind="note">
          The notation <Tex tex="\varphi" /> is reserved downstream for the
          brane velocity potential in the Poisson-hook identity. It is not the
          parent matter field.
        </TPCallout>
      </TPSection>

      <TPSection
        anchor="knots"
        eyebrow="topological defects · throats"
        heading="Non-linear solutions with stable topological charge."
      >
        <TPBody>
          The same parent action admits a second family of solutions that is
          not captured by the linearized sector: time-independent, localized
          configurations of <Tex tex="\psi" /> whose phase (or internal
          orientation) carries a non-trivial topological winding. These are the
          objects the program calls <em>throats</em>.
        </TPBody>

        <EqCard
          label="◇ throat worldsheet · moving-throat PDE"
          plain="The throat locus is a moving surface Σ(X,t), with angular, bulk-depth, and time structure."
          tex="\Sigma(X,t) \;=\; r - R(\Omega, w, t) \;=\; 0"
        />

        <TPBody style={{ marginTop: 20 }}>
          A throat is distinguished from a linear excitation by two features:
        </TPBody>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
            gap: 20,
            margin: '24px 0 12px',
            maxWidth: 720,
          }}
        >
          {[
            {
              k: 'Topological charge',
              v: "An integer winding of ψ's phase around the defect locus. This integer cannot change continuously — it is the identity of the throat.",
            },
            {
              k: 'Finite self-energy',
              v: 'The action is concentrated near Σ and integrable; far-field contributions decay rapidly in w and fall off as 1/r in the brane sector.',
            },
          ].map((c) => (
            <div
              key={c.k}
              style={{
                padding: '20px 22px',
                border: '1px solid var(--rule-2)',
                borderRadius: 3,
                background: 'rgba(16,20,42,0.5)',
              }}
            >
              <div
                className="fu-display"
                style={{
                  fontSize: 18,
                  color: 'var(--ink-1)',
                  marginBottom: 8,
                  fontWeight: 400,
                }}
              >
                {c.k}
              </div>
              <div
                className="fu-small"
                style={{ color: 'var(--ink-2)', lineHeight: 1.6 }}
              >
                {c.v}
              </div>
            </div>
          ))}
        </div>

        <TPBody>
          What a brane observer reports as <em>a particle</em> is the projected
          readout of a throat configuration — not an inserted point source. The
          mapping from throat parameters{' '}
          <Tex tex="(R, \dot R, \text{winding}, \dots)" /> to measured
          invariants (mass, charge, spin-like structure) is the subject of the
          emergence program.
        </TPBody>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <Badge kind="closure">Closure — two-number ansatz</Badge>
          <Badge kind="open">Open — moving-throat PDE branch</Badge>
        </div>
      </TPSection>

      <TPSection
        anchor="why"
        eyebrow="program posture"
        heading="Reduction, not analogy."
      >
        <TPBody>
          The fluid picture is not a metaphor that is subsequently abandoned.
          The parent action is taken literally: it is the object on which every
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

        <div
          className="fu-eyebrow"
          style={{
            color: 'var(--accent)',
            marginBottom: 12,
            marginTop: 22,
          }}
        >
          ◇ carry-forward identities · this page
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          <Chip>EoS · n = 5</Chip>
          <Chip>δφ wave operator · phase velocity c</Chip>
          <Chip>Σ(X,t) throat locus</Chip>
        </div>

      </TPSection>

      <TPSection
        anchor="next"
        eyebrow="next · §02"
        heading="Next: topological stability and the defect catalogue."
      >
        <TPBody>
          The ambient fluid admits more than one family of stable defect.
          Section&nbsp;02 catalogues them by homotopy class, fixes sign
          conventions for the winding integers, and isolates the subfamily used
          as matter-sector throats throughout the rest of the program.
        </TPBody>
      </TPSection>
    </TopicPage>
  );
}
