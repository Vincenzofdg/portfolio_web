import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from './Routes.jsx'
import './Styles/Main.css'

import { BrowserRouter } from "react-router-dom";
import Global from "./Context/Global.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Global>
        <Routes />
      </Global>
    </BrowserRouter>
  </React.StrictMode>,
)
