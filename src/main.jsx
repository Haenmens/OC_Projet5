import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter} from 'react-router'
import "./style/Main.scss"
import "./style/Commun.scss"
import Header from "./MiseEnPage/Header.jsx"
import Router from "./Routeur/Router.jsx"
import Footer from './MiseEnPage/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <div id='app'>
        <div>
          <Header />
          <Router />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  </StrictMode>,
)