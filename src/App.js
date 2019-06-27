import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import TodoTemplate from 'templates/TodoTemplate';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import LoginTemplate from 'templates/LoginTemplate';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        sessionStorage.getItem('currentUser') ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

const App = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <PrivateRoute exact path="/todo" component={TodoTemplate} />
        <Route exact path="/login" component={LoginTemplate} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default App;
