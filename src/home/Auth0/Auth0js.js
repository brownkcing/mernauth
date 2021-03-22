import React from 'react';
import styled from 'styled-components';
import * as Mixins from '../../styles/Mixins';

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
  width: 100%; 
  text-align: center; 
  border-bottom: 1px solid #000; 
  line-height: 0.1em;
  margin: 10px 0 20px; 
  
`;

function Auth0js() {
  return (
        <Wrapper>
          <Container>  
            <TextAuth0js><span>OR</span></TextAuth0js>

            
          </Container>    
        </Wrapper>
  );
};

export default Auth0js;
