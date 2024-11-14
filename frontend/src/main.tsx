import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

// Import SidebarProvider and other related components


createRoot(document.getElementById('root')!).render(
  <StrictMode>

      <App />
   
  </StrictMode>
);
