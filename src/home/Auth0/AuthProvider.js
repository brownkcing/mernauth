import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import Profile from '../Profile';

const domain = "dev-1ylkmsz0.us.auth0.com";
const clientId = "FbqCvqDiQIXMBOoOEbj96Lgvzkfvb1rg";
const audience = "https://dev-1ylkmsz0.us.auth0.com/api/v2/"

const Auth0ProviderWithHistory = ({ children }) => {
  const domain1 = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId1 = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const audience1 = process.env.REACT_APP_AUTH0_AUDIENCE;

  const history = useHistory();

  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      onRedirectCallback={onRedirectCallback}
      redirectUri="https://mernauthfrontend.netlify.app/profile"
      audience={audience}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;