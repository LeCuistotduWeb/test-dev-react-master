import React from 'react';
import { Login, RegisterForm } from './Form';
import { TabContainer, TabHeader, TabContent } from './Tab'

const LOGIN = 'login'
const REGISTER = 'register'

const App = () => {

  return (
    <div className="App">
      <h1>Fioulmarket.fr technical test</h1>  
      <TabContainer>

        <TabHeader filter={LOGIN}>J'ai un compte</TabHeader>
        <TabHeader filter={REGISTER}>Je n'ai pas de compte</TabHeader>

        <TabContent filter={LOGIN}>
          <Login />
        </TabContent>

        <TabContent filter={REGISTER}>
          <RegisterForm />
        </TabContent>

      </TabContainer>
    </div>
  );
}

export default App;
