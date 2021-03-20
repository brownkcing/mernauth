import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import * as Mixins from '../styles/Mixins';
import {Switch, Route, Redirect} from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';
import Tabs from './Tabs';
import Profile from './Profile';

import AuthService from '../services/auth.service';



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

const RegForms = () => {
    const [currentUser, setCurrentUser] = useState(undefined);
    useEffect(() => {
        const user = AuthService.getCurrentUser();
        if (user) {
          setCurrentUser(user);
        }
      }, []);
    
    return (
        <FormWrapper>
            <Tabs />

            <FormContainer>          
                <Route exact path={"/signup"} component={SignUp}/>
                <Route exact path="/" component={SignUp}>
                    <Redirect to="/signup"/>
                </Route>
                <Route exact path="/login" component={Login}  />
                <Route exact path="/profile" component={Profile} />
            </FormContainer>

        </FormWrapper>
    )
}

export default RegForms;