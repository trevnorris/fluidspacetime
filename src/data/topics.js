// Fluid Spacetime — topic registry. Single source of truth for:
//   · numbering (01..14)
//   · URL slugs
//   · per-track titles (plain and technical variants diverge)
//   · part assignment (I Foundations, II Applications, III Meta)
//   · prev/next derivation, cross-track counterparts
//   · per-route SEO descriptions

export const TOPICS = [
  {
    n: '01',
    slug: 'universe-as-fluid',
    part: 'I',
    partName: 'Foundations',
    plainTitle: 'The Universe as a Fluid',
    techTitle: 'The Universe as a Fluid',
    plainDesc:
      'A metaphor-first tour of the still-pond picture: the medium, the ripple that is light, and the knot that is a particle.',
    techDesc:
      'The parent action: a stiff polytropic fluid (n = 5) on ℝ³ × ℝ_w × ℝ_t, its linearized sector, and the throat locus Σ(X,t).',
  },
  {
    n: '02',
    slug: 'defects',
    part: 'I',
    partName: 'Foundations',
    plainTitle: 'Defects — When Perfection Breaks',
    techTitle: 'Defects and Topological Stability',
    plainDesc:
      'Where the perfect fluid cannot be perfect: zero-loci of ψ, winding numbers, and why some patterns refuse to untie.',
    techDesc:
      'Zero-locus defects of ψ, their π₁ winding class, and the topological-stability argument that promotes them to conserved sectors.',
  },
  {
    n: '03',
    slug: 'hidden-direction',
    part: 'I',
    partName: 'Foundations',
    plainTitle: 'A Hidden Direction',
    techTitle: 'A Hidden Extra Dimension',
    plainDesc:
      'Why a fourth spatial direction is not "time" — and how the things we call brane and bulk relate through projection, not reduction.',
    techDesc:
      'The brane/bulk split: the w-axis, projection-defined brane observables, and the distinction between exact projection and controlled reduction.',
  },
  {
    n: '04',
    slug: 'throats',
    part: 'I',
    partName: 'Foundations',
    plainTitle: 'Throats — Defects That Connect',
    techTitle: 'Throat Defects',
    plainDesc:
      'Two behaviors a connected defect can have — inflow (gravity) and twist (charge) — and why that matters for the rest of the program.',
    techDesc:
      'Throat anatomy — mouth, neck, interior — plus the inflow and twist sectors that seed gravity and charge downstream.',
  },
  {
    n: '05',
    slug: 'gravity',
    part: 'II',
    partName: 'Applications',
    plainTitle: 'Gravity as Inflow',
    techTitle: 'Gravity as Brane-Inflow',
    plainDesc:
      'How mass-like attraction emerges from throats acting as volume sinks for the ambient fluid.',
    techDesc:
      'Throats as mass/volume sinks; Newton and the 1PN/2PN sectors recovered from projected continuity.',
  },
  {
    n: '06',
    slug: 'electromagnetism',
    part: 'II',
    partName: 'Applications',
    plainTitle: 'Electromagnetism as Puncture',
    techTitle: 'Localized 4+1 Maxwell',
    plainDesc:
      'Charge as a ±w puncture orientation, and why the familiar Maxwell behavior is the brane readout of a localized 4+1 gauge.',
    techDesc:
      'Localized 4+1 Maxwell with brane reduction and KK corrections; q_eff = q⋆/√Z_int as the carry-forward identity.',
  },
  {
    n: '07',
    slug: 'plasma',
    part: 'II',
    partName: 'Applications',
    plainTitle: 'Plasma & Magnetohydrodynamics',
    techTitle: 'Plasma and Beyond-MHD',
    plainDesc:
      'Where ideal MHD comes from in the fluid picture, and what the "non-ideal" corrections are telling you about deeper structure.',
    techDesc:
      'Ideal MHD as the emergent limit; non-ideal corrections as mixed-sector channels of the underlying 4+1D dynamics.',
  },
  {
    n: '08',
    slug: 'light',
    part: 'II',
    partName: 'Applications',
    plainTitle: 'Light, Waves & the Speed Limit',
    techTitle: 'Wave Propagation & the Ambient Speed',
    plainDesc:
      'Why there is a top speed at all, why it is the same for everyone, and what "light" is in this picture.',
    techDesc:
      'Characteristic propagation speed from the linearized 4D matter sector, controlled brane Maxwell reduction, and profile-gated UV corrections.',
  },
  {
    n: '09',
    slug: 'atoms',
    part: 'II',
    partName: 'Applications',
    plainTitle: 'Atoms, g-factors & Anomalies',
    techTitle: 'Atomic Spectra, g-factors, Anomalies',
    plainDesc:
      'How atomic bound-state and anomaly bookkeeping are intended to emerge in the fluid picture, and which parts are still open.',
    techDesc:
      'Coulomb-limit and anomaly bookkeeping as current program targets; the atomic and g−2 sector is not yet a closed theorem of the current stack.',
  },
  {
    n: '10',
    slug: 'pn-ledger',
    part: 'II',
    partName: 'Applications',
    plainTitle: 'The Post-Newtonian Ledger',
    techTitle: 'The Post-Newtonian Ledger',
    plainDesc:
      'The honest scorecard: which post-Newtonian sectors this program has actually derived, and which are still open.',
    techDesc:
      'Newton through 3PN in the declared hierarchy, plus the shared 2.5PN / 4PN quadrupole-normalization gate.',
  },
  {
    n: '11',
    slug: 'moving-throat',
    part: 'II',
    partName: 'Applications',
    plainTitle: 'The Moving-Throat PDE',
    techTitle: 'The Moving-Throat PDE',
    plainDesc:
      'The program’s frontier: the equation that would let a throat move and emit simultaneously, and why it isn’t solved yet.',
    techDesc:
      'The free-boundary problem for R(Ω, w, t) — the program’s open frontier, and the closure ladder that bounds what has been proved so far.',
  },
  {
    n: '12',
    slug: 'what-this-is-not',
    part: 'III',
    partName: 'Meta',
    meta: true,
    metaTitle: 'What This Is Not',
    metaDesc:
      'Three common misreadings, the claim-status legend, four falsifiers, and the scope of the program.',
  },
  {
    n: '13',
    slug: 'glossary',
    part: 'III',
    partName: 'Meta',
    meta: true,
    metaTitle: 'Glossary & Notation',
    metaDesc:
      'The program’s working vocabulary in one place — geometry, dynamics, claim statuses, and the full notation table.',
  },
  {
    n: '14',
    slug: 'paper-library',
    part: 'III',
    partName: 'Meta',
    meta: true,
    metaTitle: 'Paper Library',
    metaDesc:
      'The nine published current-4D papers plus the earlier superfluid-defect papers, with reading order and a topic × source matrix.',
  },
];

// ── Lookups ──────────────────────────────────────────────────────
export const PLAIN_TOPICS = TOPICS.filter((t) => !t.meta);
export const TECH_TOPICS = TOPICS.filter((t) => !t.meta);
export const META_TOPICS = TOPICS.filter((t) => t.meta);

export function findBySlug(slug) {
  return TOPICS.find((t) => t.slug === slug) || null;
}

// Title used for a given (slug, track), where track is 'plain' | 'technical' | 'meta'.
export function titleOf(topic, track) {
  if (topic.meta) return topic.metaTitle;
  return track === 'plain' ? topic.plainTitle : topic.techTitle;
}

// Route path for a topic + track.
export function pathOf(topic, track) {
  if (topic.meta) return `/meta/${topic.slug}`;
  return `/${track}/${topic.slug}`;
}

// Prev/next within the same track. Returns { n, title, href } or null.
export function neighborsOf(topic, track) {
  const list = topic.meta ? META_TOPICS : track === 'plain' ? PLAIN_TOPICS : TECH_TOPICS;
  const i = list.findIndex((t) => t.slug === topic.slug);
  const make = (t) =>
    t
      ? {
          n: t.n,
          title: titleOf(t, track),
          href: pathOf(t, track),
        }
      : null;
  return {
    prev: make(list[i - 1]),
    next: make(list[i + 1]),
  };
}

// Cross-track counterpart for a non-meta topic.
export function crossTrack(topic, currentTrack) {
  if (topic.meta) return null;
  const other = currentTrack === 'plain' ? 'technical' : 'plain';
  return { track: other, href: pathOf(topic, other), title: titleOf(topic, other) };
}
