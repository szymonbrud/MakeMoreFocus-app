import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import TodoTemplate from 'templates/TodoTemplate';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import LoginTemplate from 'templates/LoginTemplate';
import RegisterTemplate from 'templates/RegisterTemplate';

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
        <Route exact path="/register" component={RegisterTemplate} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default App;
