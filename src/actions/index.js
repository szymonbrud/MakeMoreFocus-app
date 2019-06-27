import axios from 'axios';

export const GET_TODOS_TODAY = 'GET_TODOS_TODAY';
export const LOGIN_USER = 'LOGIN_USER';
export const AUTHENTICATE = 'AUTHENTICATE';

export const finallyRequestGetTodos = items => {
  return {
    type: GET_TODOS_TODAY,
    payload: {
      todos: items,
    },
  };
};

export const FinallyRequestLogin = items => {
  return {
    type: LOGIN_USER,
    payload: {
      userData: items,
    },
  };
};

export const authenticateUser = status => {
  return {
    type: AUTHENTICATE,
    payload: {
      authStatus: status,
    },
  };
};

export const getTodosToday = () => {
  return dispatch => {
    axios
      .get(`https://cors-anywhere.herokuapp.com/https://glacial-inlet-42048.herokuapp.com/todos`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        // params: {
        //   day: 'monday',
        //   userId: '234124KLJ12J4IWKR',
        // },
      })
      .then(res => {
        return dispatch(finallyRequestGetTodos(res.data.data));
      });
    // .catch(err => console.log(err));
    // .finally(() => {
    //   // dispatch(ApiRun(false));
    // });
  };
};

export const LoginUser = (email, password) => {
  return dispatch => {
    axios
      .get(`https://cors-anywhere.herokuapp.com/https://glacial-inlet-42048.herokuapp.com/login`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        params: {
          email,
          password,
        },
      })
      .then(res => {
        dispatch(FinallyRequestLogin(res.data.data));
        return res;
      })
      .then(res => {
        dispatch(authenticateUser(res.status));
        return res;
      })
      // .catch(err => console.log(err))
      .finally(() => {
        // dispatch(ApiRun(false));
      });
  };
};
