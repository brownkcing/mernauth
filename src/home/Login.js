import React from 'react';
import styled from 'styled-components';
import * as Mixins from '../styles/Mixins';

const LoginWrap = styled.div`
    display:block;
`;

const LoginForm = styled.div`
    height: 100%;
    width: 75%;
    padding: 1em 3em;
`;

const Input = styled.div`
    padding-bottom: 2em;
`;


const LoginTitle = styled.h1`
    align-self:center;
`;

export default function Login() {
    return (
        <LoginWrap>
            <LoginTitle>Login</LoginTitle>
            <LoginForm>
               <Input><label>Username</label><input /></Input>
                <Input><label>Password</label><input /></Input>       
            </LoginForm>
        </LoginWrap>
    )
}