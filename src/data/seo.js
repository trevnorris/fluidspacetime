// Route → SEO metadata. Consumed at prerender time to produce per-page
// <title>, <meta description>, <link rel="canonical">, and Open Graph tags.

import { TOPICS, titleOf, findBySlug } from './topics.js';

export const SITE_NAME = 'Fluid Spacetime';
export const SITE_ORIGIN = 'https://fluidspacetime.com';
export const DEFAULT_DESCRIPTION =
  'A speculative research program — particles modeled as moving throats in a 4D fluid. Parallel plain-English and technical tracks; every claim carries its own status badge.';

export function getSeoFor(url) {
  const path = url.split('?')[0].split('#')[0].replace(/\/$/, '') || '/';

  if (path === '/') {
    return {
      title: `${SITE_NAME} — physics, projected`,
      description: DEFAULT_DESCRIPTION,
      canonical: `${SITE_ORIGIN}/`,
      type: 'website',
    };
  }
  if (path === '/sitemap') {
    return {
      title: `Site map · ${SITE_NAME}`,
      description:
        'Two parallel tracks, one information architecture. All 14 topics, plain-English and technical, plus the Part III meta pages.',
      canonical: `${SITE_ORIGIN}/sitemap`,
      type: 'website',
    };
  }

  const m = path.match(/^\/(plain|technical|meta)\/([^/]+)$/);
  if (m) {
    const [, track, slug] = m;
    const topic = findBySlug(slug);
    if (topic) {
      const title = titleOf(topic, track);
      const desc = topic.meta
        ? topic.metaDesc
        : track === 'plain'
        ? topic.plainDesc
        : topic.techDesc;
      const trackLabel = track === 'meta' ? 'meta' : `${track} track`;
      return {
        title: `${topic.n} · ${title} · ${SITE_NAME}`,
        description: desc,
        canonical: `${SITE_ORIGIN}${path}`,
        type: 'article',
        topicNumber: topic.n,
        track: trackLabel,
      };
    }
  }

  return {
    title: `Not found · ${SITE_NAME}`,
    description: DEFAULT_DESCRIPTION,
    canonical: `${SITE_ORIGIN}${path}`,
    type: 'website',
    noindex: true,
  };
}

// All routes that should be pre-rendered (used by prerender + sitemap.xml).
export function allRoutes() {
  const routes = ['/', '/sitemap'];
  for (const t of TOPICS) {
    if (t.meta) {
      routes.push(`/meta/${t.slug}`);
    } else {
      routes.push(`/plain/${t.slug}`);
      routes.push(`/technical/${t.slug}`);
    }
  }
  return routes;
}
