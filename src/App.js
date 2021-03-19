import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import * as Mixins from './styles/Mixins';
import RegForms from './home/Form';


import './App.css';
import { Switch } from 'react-router';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 55vh;
`;

const Container = styled.div`
  ${Mixins.container} 
`;

function App() {
  return (
    <div className="App">
    
      <GlobalStyles />  
        <Wrapper>
          <Container>  
            <RegForms />
          </Container>    
        </Wrapper>
    </div>
  );
}

export default App;
