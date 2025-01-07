import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Accueil from "./Accueil.jsx"
import Footer from './Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Accueil />
    <Footer />
  </StrictMode>,
)