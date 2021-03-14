import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import * as Mixins from './styles/Mixins';
import Forms from './home/Form';
import User from './home/User';

import './App.css';
import { Switch, Route } from 'react-router';

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
          <Switch>
            <Route exact path="/user" component={User} />
            <Forms />
          </Switch>
        </Container>    
      </Wrapper>
    </div>
  );
}

export default App;
