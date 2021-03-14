import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


const ListTabs = styled.ul`
    display: flex;
    margin:0;
    padding:0;
    width: 100%;
    list-style-type:none;
    justify-content:space-around;
    background:#DDDDDD;
    border-radius: 1em 1em 0 0;
`;

const NavTabs = styled.li`
    display:inline-block;
    width: 100%;
    a {
        display:block;
        line-height: 4em;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        text-decoration: none;
        :active {
            color:grey;
        }
    }
`;

const Linker = styled(NavLink)`
    background-color: #EAEAEA;
    box-shadow: 0px 0px 5px inset #DCDCDC;
`;

export default function Tabs() {
    return (
        <ListTabs>
            <NavTabs><Linker activeStyle={{boxShadow: "none", backgroundColor:"white"}} to="/signup" >Sign-Up</Linker></NavTabs>
            <NavTabs><Linker activeStyle={{boxShadow: "none", backgroundColor:"white"}} to='/login'>Login</Linker></NavTabs>
        </ListTabs>            
    )
}