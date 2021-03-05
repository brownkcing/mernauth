import React from 'react';
import styled from 'styled-components';
import * as Mixins from '../styles/Mixins';

const Signup = styled.div`
    transition: all 0.3s linear;
    display:block;
`;

const SignupForm = styled.div`
    height: 100%;
    width: 75%;
    padding: 1em 3em;
`;

const Input = styled.div`
    padding-bottom: 2em;
`;

const SignUpTitle = styled.h1`
    align-self:center;
`;

export default function SignUp() {
    return (
        <Signup>
               <SignUpTitle>Sign-Up</SignUpTitle>
            <SignupForm>
               <Input><label>Username</label><input /></Input>
                <Input><label>Email Address</label><input /></Input>
                <Input><label>Password</label><input /></Input>       
            </SignupForm>
        </Signup>
    )
}