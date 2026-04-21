// Slug → component lookup tables, one per track.
// Dispatcher routes in App.jsx use these to resolve the page component for a
// given URL slug at runtime (client) and build time (SSR + prerender).
// Unknown slugs render <NotFound />.

import PlainPart1 from './plain/Part1.jsx';
import PlainDefects from './plain/Defects.jsx';
import PlainHiddenDirection from './plain/HiddenDirection.jsx';
import PlainThroats from './plain/Throats.jsx';
import PlainGravity from './plain/Gravity.jsx';
import PlainEM from './plain/EM.jsx';
import PlainPlasma from './plain/Plasma.jsx';
import PlainLight from './plain/Light.jsx';
import PlainAtoms from './plain/Atoms.jsx';
import PlainPN from './plain/PN.jsx';
import PlainMovingThroat from './plain/MovingThroat.jsx';

import TechnicalPart1 from './technical/Part1.jsx';
import TechnicalDefects from './technical/Defects.jsx';
import TechnicalHiddenDirection from './technical/HiddenDirection.jsx';
import TechnicalThroats from './technical/Throats.jsx';
import TechnicalGravity from './technical/Gravity.jsx';
import TechnicalEM from './technical/EM.jsx';
import TechnicalPlasma from './technical/Plasma.jsx';
import TechnicalLight from './technical/Light.jsx';
import TechnicalAtoms from './technical/Atoms.jsx';
import TechnicalPN from './technical/PN.jsx';
import TechnicalMovingThroat from './technical/MovingThroat.jsx';

import MetaWhatThisIsNot from './meta/WhatThisIsNot.jsx';
import MetaGlossary from './meta/Glossary.jsx';
import MetaPaperLibrary from './meta/PaperLibrary.jsx';

export const plainTopics = {
  'universe-as-fluid': PlainPart1,
  defects: PlainDefects,
  'hidden-direction': PlainHiddenDirection,
  throats: PlainThroats,
  gravity: PlainGravity,
  electromagnetism: PlainEM,
  plasma: PlainPlasma,
  light: PlainLight,
  atoms: PlainAtoms,
  'pn-ledger': PlainPN,
  'moving-throat': PlainMovingThroat,
};

export const technicalTopics = {
  'universe-as-fluid': TechnicalPart1,
  defects: TechnicalDefects,
  'hidden-direction': TechnicalHiddenDirection,
  throats: TechnicalThroats,
  gravity: TechnicalGravity,
  electromagnetism: TechnicalEM,
  plasma: TechnicalPlasma,
  light: TechnicalLight,
  atoms: TechnicalAtoms,
  'pn-ledger': TechnicalPN,
  'moving-throat': TechnicalMovingThroat,
};

export const metaTopics = {
  'what-this-is-not': MetaWhatThisIsNot,
  glossary: MetaGlossary,
  'paper-library': MetaPaperLibrary,
};
