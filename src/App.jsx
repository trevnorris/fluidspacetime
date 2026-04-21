import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import Home from './pages/Home.jsx';
import SitemapPage from './pages/Sitemap.jsx';
import NotFound from './pages/NotFound.jsx';
import {
  plainTopics,
  technicalTopics,
  metaTopics,
} from './pages/registry.js';

function slugRoute(map) {
  return function SlugRoute() {
    const { slug } = useParams();
    const C = map[slug];
    return C ? <C /> : <NotFound />;
  };
}

const PlainRoute = slugRoute(plainTopics);
const TechnicalRoute = slugRoute(technicalTopics);
const MetaRoute = slugRoute(metaTopics);

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sitemap" element={<SitemapPage />} />
      <Route path="/plain/:slug" element={<PlainRoute />} />
      <Route path="/technical/:slug" element={<TechnicalRoute />} />
      <Route path="/meta/:slug" element={<MetaRoute />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
