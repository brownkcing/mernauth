import React from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
const userLogged = AuthService.getCurrentUser();

const ProtectedRoute = ({ component, ...args }) => (
  <React.Fragment>
  {userLogged != null ? null : 
  <Route
    component={withAuthenticationRequired(component)}
    {...args}
  />}
  
  </React.Fragment>
);

export default ProtectedRoute;