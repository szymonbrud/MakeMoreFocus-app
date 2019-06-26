import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import TodoTemplate from 'templates/TodoTemplate';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginTemplate from 'templates/LoginTemplate';

const App = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path="/todo" component={TodoTemplate} />
        <Route exact path="/login" component={LoginTemplate} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default App;
