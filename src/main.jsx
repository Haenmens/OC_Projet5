import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter} from 'react-router'
import "./style/main.scss"
import "./style/general.scss"
import Header from "./Header.jsx"
import Router from "./Router.jsx"
import Footer from './Footer.jsx'

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