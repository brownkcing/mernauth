import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter }from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

const domain = "dev-1ylkmsz0.us.auth0.com";
const clientId = "FbqCvqDiQIXMBOoOEbj96Lgvzkfvb1rg";

ReactDOM.render(
  <BrowserRouter>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
    >
      <App />
    </Auth0Provider>
  </BrowserRouter>,
  document.getElementById("root")
);


serviceWorker.unregister();