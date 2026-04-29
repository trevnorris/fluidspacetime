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

// Part 1 · The Universe as a Fluid — PLAIN ENGLISH track
export default function PlainPart1() {
  const topic = {
    n: '01',
    part: 'I',
    partName: 'Foundations',
    slug: 'universe-as-fluid',
    title: 'The Universe as a Fluid',
  };

  return (
    <TopicPage track="plain" topic={topic}>
      {/* Title block */}
      <section style={{ padding: '10px 0 40px' }}>
        <TPTitle>
          The universe, it turns out, behaves a lot like a{' '}
          <em
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              color: '#e67ac6',
            }}
          >
            very still pond
          </em>
        </TPTitle>
        <TPLede>
          Before anything becomes a particle, before there's light or gravity or
          atoms, start with one strange-but-simple idea:{' '}
          <em>space itself is a medium</em>. Not empty. Not a stage. A thing —
          with its own texture, its own stillness, its own rules about how
          disturbances travel.
        </TPLede>
      </section>

      <TPSection
        anchor="picture"
        eyebrow="the picture"
        heading="Imagine a perfectly still pond"
      >
        <TPBody>
          Only, instead of being a flat surface in our ordinary world, the pond
          fills all of space. Everywhere you look is water — a perfect,
          frictionless, impossibly uniform fluid. Physicists have a technical
          name for stuff like this: a <em>superfluid</em>. For our purposes,
          “infinitely still pond” will do.
        </TPBody>
        <TPBody>
          If the pond is perfectly still, nothing is happening. Boring. But the
          moment something disturbs it — a pebble, a finger, a flick of the
          wrist — the disturbance spreads. Ripples race outward.
        </TPBody>

        <FluidDiagram
          accent="#7aa2ff"
          labels={{
            plateNum: 'plate 01',
            plateTitle: 'the still pond, disturbed',
            plateTag: 'metaphor · plain english',
            medium: 'the fluid filling space',
            ripple: 'a ripple — a disturbance spreading',
            defect: ['a defect — a stable', 'pattern of the fluid'],
            speedLimit: 'signals have a top speed',
            yAxis: 'here',
            xAxis: 'there →',
            mediumShort: 'pond',
            rippleShort: 'ripple',
            defectShort: 'defect',
            braneShort: 'what we see',
          }}
        />
      </TPSection>

      <TPSection
        anchor="ripples"
        eyebrow="ripples"
        heading="The ripples we use as signals have a top speed"
      >
        <TPBody>
          Real ponds have a maximum ripple speed — set by the water itself. Push
          harder, the ripple doesn't go faster in that simple wave regime; it
          just gets bigger. The fluid model has a characteristic signal speed
          too. In the clean long-wavelength case used later, the relevant
          ripples move at the speed we call <em>c</em>.
        </TPBody>
        <TPBody>
          This is the first thing worth sitting with. In this picture, light is
          not dropped in as a separate ingredient. It is modeled as one of the
          medium's signal-carrying ripples, in the clean regime where the math
          reduces to ordinary electromagnetic waves. The speed limit comes from
          how those ripples move through the medium; it is not imposed from
          outside.
        </TPBody>

        <TPCallout kind="note">
          If you've ever wondered why the same speed keeps showing up in
          relativity, this is the candidate answer the program is testing:
          rods, clocks, and light are all built from wave-supported structures
          that share one effective signal speed in the controlled regime.
        </TPCallout>
      </TPSection>

      <TPSection
        anchor="defects"
        eyebrow="stable patterns"
        heading="And every once in a while, a disturbance gets stuck"
      >
        <TPBody>
          Ripples spread out and fade. But the pond can also host another kind
          of pattern: a stable <em>defect</em>. Instead of dissolving back into
          the background, a defect keeps its identity.
        </TPBody>
        <TPBody>
          Defects have the remarkable property of acting like objects. They
          have a position. A shape. A sort of mass. Bump one and it moves. Bring
          two close and they can affect each other. In the Fluid Spacetime picture,{' '}
          <strong style={{ color: 'var(--ink-1)' }}>
            what we usually call a particle is modeled as a defect of this kind
          </strong>{' '}
          — not a tiny marble dropped into space, but a stubborn pattern{' '}
          <em>of</em> space itself.
        </TPBody>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
            gap: 20,
            margin: '28px 0 12px',
            maxWidth: 720,
          }}
        >
          {[
            {
              k: 'Ripples',
              v: 'Travel. Carry energy and signals. Photons and wave-like disturbances belong here; they are not stable defect cores.',
            },
            {
              k: 'Defects',
              v: 'Stay. Carry identity. In this program, they are the particle-like sector.',
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
                  fontSize: 20,
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
      </TPSection>

      <TPSection
        anchor="why"
        eyebrow="why bother"
        heading="A metaphor you can do math with is not just a metaphor"
      >
        <TPBody>
          Lots of physics books reach for the pond metaphor and then quickly
          admit it's just a metaphor. The Fluid Spacetime program is trying to
          do something stricter: write down, in real equations, a particular
          kind of pond — and then ask whether the familiar laws of physics drop
          out of it when you compute carefully enough.
        </TPBody>
        <TPBody>
          So when you meet the word <em>fluid</em> on this site, read it both
          ways. On the plain-English pages, it's the still pond, the spreading
          ripple, the stable defect. On the technical pages, it's a
          very specific kind of mathematical object with a stated equation of
          state and declared rules of behavior. Both describe the same thing.
          The first is easier to hold in your head; the second is what gets
          checked.
        </TPBody>
      </TPSection>

      <TPSection
        anchor="next"
        eyebrow="up next"
        heading="Next: what happens when the perfect pond breaks"
      >
        <TPBody>
          A perfect medium with perfect ripples is elegant, but you can't make
          a universe from it alone. The interesting bit begins when the pond
          develops flaws — places where the fluid can't be exactly what it
          wants to be. Those flaws are <em>defects</em>, and they are how our
          universe keeps its zoo of stable, distinct <em>things</em>.
        </TPBody>
      </TPSection>
    </TopicPage>
  );
}
