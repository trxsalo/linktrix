import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MainRouter from "./router.tsx";
import  '@css/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainRouter/>
  </StrictMode>,
);
