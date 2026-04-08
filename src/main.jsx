import './shared/styles/reset.css';
import './shared/styles/colors.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
