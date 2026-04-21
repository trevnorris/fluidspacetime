import React from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

import './styles/tokens.css';
import './styles/base.css';
import 'katex/dist/katex.min.css';

const root = document.getElementById('root');
const tree = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

if (root.firstElementChild) {
  hydrateRoot(root, tree);
} else {
  createRoot(root).render(tree);
}
