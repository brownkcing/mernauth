import React from 'react';
import styled from 'styled-components';
import * as Mixins from '../styles/Mixins';
import AuthService from '../services/auth.service';

const UserWrap = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    background: linear-gradient(-45deg, #1391a5, #274685);
    color: #fff;
    padding: 0;
    color: #000000;
    background: #fff;
    box-shadow: 0 10px 30px 0 rgb(0 0 0 / 20%);
    border-radius: 1.5em;
`;

const UserPage = styled.div`
    ${Mixins.container}
    display:flex;
    flex-wrap: nowrap;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

const UserContent = styled.div`
    display:block;
    height: 30vh;
`;


const UserLabel = styled.div`
    padding: 2em;
    label {
        text-align: center;
    }
`;


const LoginTitle = styled.h1`
    align-self:center;
`;

const User = () => {
        const userLogged = AuthService.getCurrentUser();
        const logOut = () => {
            AuthService.logout();
          };
    return (
        <UserWrap>
            <LoginTitle>Welcome {userLogged.username}</LoginTitle>
            <UserPage>
                <UserContent>
                   <UserLabel><label>This is {userLogged.username} authenticated personal page.</label></UserLabel> 
                   <UserLabel><span>Click to</span> <a href="/login" onClick={logOut}>logout</a> <span>and return back to previous page</span></UserLabel>  
                </UserContent>
            </UserPage>
        </UserWrap>
    )
}
export default User;