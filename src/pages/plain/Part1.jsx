import React from 'react';
import {
  TopicPage,
  TPTitle,
  TPLede,
  TPSection,
  TPBody,
  TPCallout,
} from '../../components/TopicPage.jsx';
import { TrackToggle } from '../../components/TrackToggle.jsx';
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
          .
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
        heading="Imagine a perfectly still pond."
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
            medium: 'the pond — the fluid everywhere',
            ripple: 'a ripple — a disturbance spreading',
            defect: "a knot — a persistent pattern that won't unwind",
            speedLimit: 'ripples have a top speed',
            yAxis: 'here',
            xAxis: 'there →',
            mediumShort: 'pond',
            rippleShort: 'ripple',
            defectShort: 'knot',
            braneShort: 'what we see',
          }}
        />
      </TPSection>

      <TPSection
        anchor="ripples"
        eyebrow="ripples"
        heading="Every ripple has a top speed. That speed is the cosmic speed limit."
      >
        <TPBody>
          Real ponds have a maximum ripple speed — set by the water itself. Push
          harder, the ripple doesn't go faster; it just gets bigger. Our pond
          has a maximum ripple speed too. We call it <em>c</em>. You know it by
          another name: the speed of light.
        </TPBody>
        <TPBody>
          This is the first thing worth sitting with. In this picture, light
          isn't a special guest in the universe — it's what a ripple <em>is</em>
          . The cosmic speed limit isn't a rule handed down from above. It's
          just the maximum speed at which one spot in the medium can push on the
          next spot.
        </TPBody>

        <TPCallout kind="note">
          If you've ever wondered why nothing can go faster than light — here's
          a candidate answer. It's not that some cosmic police force forbids
          it. It's that “faster than light” would mean a ripple outrunning the
          medium it's made of. The ripple would just stop being a ripple.
        </TPCallout>
      </TPSection>

      <TPSection
        anchor="knots"
        eyebrow="patterns that refuse to untie"
        heading="And every once in a while, a disturbance gets stuck."
      >
        <TPBody>
          Ripples spread out and fade. But the pond can also host another kind
          of pattern — one that doesn't fade. A little whorl of water that
          circles back on itself and, for geometric reasons, has no way to
          untie. A <em>knot</em>, if you like.
        </TPBody>
        <TPBody>
          These knots have the remarkable property of acting like objects. They
          have a position. A shape. A sort of mass. Bump one and it moves. Bring
          two close and they feel each other. In the Fluid Spacetime picture,{' '}
          <strong style={{ color: 'var(--ink-1)' }}>
            what we usually call a particle is a knot of this kind
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
              v: 'Fade. Carry energy. Travel at top speed. We call them light.',
            },
            {
              k: 'Knots',
              v: 'Stay. Carry identity. Move more slowly. We call them matter.',
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
        heading="A metaphor you can do math with is not just a metaphor."
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
          ripple, the knot that won't untie. On the technical pages, it's a
          very specific kind of mathematical object with a stated equation of
          state and declared rules of behavior. Both describe the same thing.
          The first is easier to hold in your head; the second is what gets
          checked.
        </TPBody>

        <div
          style={{
            marginTop: 30,
            padding: '20px 24px',
            border: '1px dashed var(--rule-2)',
            borderRadius: 3,
            display: 'flex',
            gap: 16,
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <span
            className="fu-mono"
            style={{
              fontSize: 10.5,
              letterSpacing: '0.14em',
              color: 'var(--ink-3)',
              textTransform: 'uppercase',
            }}
          >
            ◇ for the curious
          </span>
          <span
            className="fu-small"
            style={{ color: 'var(--ink-2)', flex: 1, minWidth: 220 }}
          >
            Want the actual equation of state, and why the exponent must be{' '}
            <em>n&nbsp;=&nbsp;5</em>?
          </span>
          <TrackToggle size="sm" />
        </div>
      </TPSection>

      <TPSection
        anchor="next"
        eyebrow="up next"
        heading="Next: what happens when the perfect pond breaks."
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
