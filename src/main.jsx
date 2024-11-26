import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Componente from './Componente.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Componente />
  </StrictMode>,
);
