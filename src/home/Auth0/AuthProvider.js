import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import Profile from '../Profile';

const domain = "dev-1ylkmsz0.us.auth0.com";
const clientId = "FbqCvqDiQIXMBOoOEbj96Lgvzkfvb1rg";
const audience = "https://dev-1ylkmsz0.us.auth0.com/api/v2/"

const Auth0ProviderWithHistory = ({ children }) => {
  const history = useHistory();

  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };
  const urired =  `${window.location.origin}/profile`

  return (
    <Auth0Provider
      domain="dev-1ylkmsz0.us.auth0.com"
      clientId="FbqCvqDiQIXMBOoOEbj96Lgvzkfvb1rg"
      redirect_uri= {window.location.origin + "/profile"} 
      audience="https://dev-1ylkmsz0.us.auth0.com/api/v2/"
      scope="read:current_user update:current_user_metadata"
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;