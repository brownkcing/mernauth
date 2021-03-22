import React from 'react';
import styled from 'styled-components';
import * as Mixins from '../../styles/Mixins';
import { useAuth0 } from "@auth0/auth0-react";
import AuthenticationButton from './Auth0Button';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 55vh;
`;

const Container = styled.div`
  ${Mixins.container} 
`;


const TextAuth0js = styled.div`
`;

function Auth0js() {
  const { loginWithRedirect } = useAuth0();
  return (
        <Wrapper>
          <Container>

            <loginWithRedirect>
              <button
                onClick={() => loginWithRedirect()}
                >
                Log In
              </button></loginWithRedirect>

          </Container>    
        </Wrapper>
  );
};

export default Auth0js;
