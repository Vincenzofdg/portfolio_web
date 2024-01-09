import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './Routes.jsx';

import Global from "./Context/Global.jsx";
import './Style/Main.css';

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Global>
        <Routes />
      </Global>
    </BrowserRouter>
  </React.StrictMode>,
)
