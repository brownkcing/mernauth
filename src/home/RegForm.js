import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import * as Mixins from '../styles/Mixins';
import {Switch, Route, Redirect} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import SignUp from './SignUp';
import Login from './Login';
import Tabs from './Tabs';
import AuthService from '../services/auth.service';
import AuthenticationButton from './Auth0/Auth0AuthButton';
import ProtectedRoute from './Auth0/Auth0Protected';
import Profile from './Profile';
import ExternalApi from './Auth0/external-api';


const FormWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    background: linear-gradient(-45deg, #1391a5, #274685);
    color: #fff;
    padding: 0;
    color: #000000;
    background: #fff;
    box-shadow: 0 10px 30px 0 rgb(0 0 0 / 20%);
    border-radius: 1.5em;
`;

const FormContainer = styled.div`
    ${Mixins.container}
    width: 100%;
    height: 100%;
`;

const TextAuth0js = styled.div`
    width: 30%;
    margin-left: auto;
    margin-right: auto;
    text-align: center; 
    border-bottom: 1px solid #000; 
    border-color: 	#C0C0C0;
    line-height: 0.1em;
    margin: 1em 0 2em 4.1em;
    padding: 0 5em;
        span { 
            background:#fff; 
            padding:0 10px; 
        };
`;

const RegForms = () => {
    const [currentUser, setCurrentUser] = useState(undefined);
    const { isLoading } = useAuth0();
    useEffect(() => {
        const user = AuthService.getCurrentUser();
        if (user) {
          setCurrentUser(user);
        }
      }, []);

    return (
        <FormWrapper>
            <Tabs />
            <Switch>
            <FormContainer>          
                <Route exact path={"/signup"} component={SignUp}/>
                <Route exact path="/" component={SignUp}>
                    <Redirect to="/signup"/>
                </Route>
                <Route exact path="/login" component={Login}  />
                <ProtectedRoute  exact path="/profile" component={Profile} />
                <ProtectedRoute path="/external-api" component={ExternalApi} />
                <TextAuth0js><span>OR</span></TextAuth0js>
            </FormContainer>
            </Switch>
            <AuthenticationButton />
        </FormWrapper>
    );
};

export default RegForms;