import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Auth0ProviderWithHistory from './home/Auth0/AuthProvider';
import { BrowserRouter }from "react-router-dom";
import * as serviceWorker from "./serviceWorker";



ReactDOM.render(
  <BrowserRouter>
    <Auth0ProviderWithHistory>
      <App />
    </Auth0ProviderWithHistory>
  </BrowserRouter>,
  document.getElementById("root")
);


serviceWorker.unregister();