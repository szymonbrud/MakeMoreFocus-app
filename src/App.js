import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import TodoTemplate from 'templates/TodoTemplate';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import LoginTemplate from 'templates/LoginTemplate';
import RegisterTemplate from 'templates/RegisterTemplate';
import AddTodoTemplate from 'templates/AddTodoTemplate';
import EditTemplate from 'templates/EditTemplate';
import ShowDoneTodosTemplate from 'templates/ShowDoneTodosTemplate';
import PresentationTemplate from 'templates/PresentationTemplate';
import PomodoroTemplate from 'templates/PomodoroTemplate';

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
        <PrivateRoute exact path="/todo/:id" component={EditTemplate} />
        <PrivateRoute exact path="/addTodo" component={AddTodoTemplate} />
        <PrivateRoute exact path="/doneTodo" component={ShowDoneTodosTemplate} />
        <PrivateRoute exact path="/presentation" component={PresentationTemplate} />
        <PrivateRoute exact path="/pomodoro" component={PomodoroTemplate} />
        <Route exact path="/" component={LoginTemplate} />
        <Route exact path="/login" component={LoginTemplate} />
        <Route exact path="/register" component={RegisterTemplate} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default App;
