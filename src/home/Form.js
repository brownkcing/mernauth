import React from 'react';
import styled from 'styled-components';
import * as Mixins from '../styles/Mixins';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';
import Tabs from './Tabs';

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

const FormContainer = styled.form`
    ${Mixins.container}
    width: 100%;
    height: 100%;
`;

const Button = styled.button`
    margin: 0.5em;
    padding: 0.7em 7em;
    display: inline-block;
    background-color: #3F98FF;
    border-color: #3F98FF;
    font-size: 1rem;
    font-weight: 400;
    cursor: pointer;
    line-height: 1.5;
    border-radius: .25rem;
    border: none;
    &:focus {
        color: white;
        outline-color: #3F98FF;
`;

const Forgot = styled.div`
    margin-bottom: 4em;
    a {
        text-decoration: none;
        color: #3F98FF;
        :hover {
            color: #90C4FF;
        }
    }
`;

export default function Forms() {
    return (
        <Router>
            <FormWrapper>
                <Tabs />
                <FormContainer>
                    <Switch>
                        <Route path="/SignUp" component={SignUp}  />
                        <Route exact path="/" component={SignUp}>
                            <Redirect to="/SignUp"/>
                        </Route>
                        <Route path="/Login" component={Login}  />
                    </Switch>
                    <Button>Submit</Button>
                    <Forgot>Forgot <a href="#">Password?</a></Forgot>
                </FormContainer>
            </FormWrapper>
        </Router>
    )
}