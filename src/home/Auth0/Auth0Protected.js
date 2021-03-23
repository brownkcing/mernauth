import React from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import AuthService from '../../services/auth.service';

const userLogged = AuthService.getCurrentUser();

const ProtectedRoute = ({ component, ...args }) => (
  <React.Fragment>
    {userLogged != null ? 
      <Route
        component
        {...args}
      /> 
    : 
      <Route
        component={withAuthenticationRequired(component)}
        {...args}
      />}
  
  </React.Fragment>
);

export default ProtectedRoute;