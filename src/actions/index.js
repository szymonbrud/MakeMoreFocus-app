import axios from 'axios';

export const GET_TODOS_TODAY = 'GET_TODOS_TODAY';
export const LOGIN_USER = 'LOGIN_USER';
export const AUTHENTICATE = 'AUTHENTICATE';
export const CHECKUSER = 'CHECKUSER';
export const FINALLYREGISTER = 'FINALLYREGISTER';
export const DONETODO = 'DONETODO';

export const finallyRequestGetTodos = items => {
  const todos = {
    monday: {},
    tuesday: {},
    wednesday: {},
    thursday: {},
    friday: {},
    saturday: {},
    sunday: {},
  };

  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

  items.forEach(element => {
    days.forEach(e => {
      if (element[e] === 1) {
        todos[e][element.title] = element;
      }
    });
  });

  return {
    type: GET_TODOS_TODAY,
    payload: {
      todos,
    },
  };
};

export const finallyRequestDoneTodo = items => {
  return {
    type: DONETODO,
    payload: {
      userData: items,
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

export const checkUser = (data, act) => {
  return {
    type: CHECKUSER,
    payload: {
      checkUser: [data, act],
    },
  };
};

export const finallyRegister = (userData, message) => {
  let status;

  if (message === 'succes') {
    status = true;
  }

  return {
    type: FINALLYREGISTER,
    payload: {
      authStatus: [status, userData],
    },
  };
};

// https://cors-anywhere.herokuapp.com/https://glacial-inlet-42048.herokuapp.com/day
export const getTodosToday = userId => {
  return dispatch => {
    axios
      .get(`http://localhost:9000/days`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        params: {
          userId,
        },
      })
      .then(res => {
        return dispatch(finallyRequestGetTodos(res.data.data));
      });
  };
};

export const getDoneTodos = (userId, date) => {
  return dispatch => {
    axios
      .get(`http://localhost:9000/daysDone`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        params: {
          userId,
          date,
        },
      })
      .then(res => {
        return dispatch(finallyRequestDoneTodo(res.data.data));
      });
  };
};

export const LoginUser = (email, password) => {
  return dispatch => {
    axios
      .get(`http://localhost:9000/login`, {
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

export const registerUser = (name, email, password) => {
  return dispatch => {
    axios
      .post(`http://localhost:9000/register`, {
        body: {
          userId: '',
          name,
          email,
          password,
        },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      .then(result => {
        dispatch(
          finallyRegister(
            { name, email, password, userId: result.data.userId },
            result.data.message,
          ),
        );
      });
  };
};

export const checkUserName = (name, email, password) => {
  return dispatch => {
    axios
      .get(`http://localhost:9000/userEmail`, {
        params: {
          email,
        },
      })
      .then(res => {
        if (res.data.data.length === 0) {
          dispatch(registerUser(name, email, password));
        } else {
          dispatch(checkUser(false, false));
        }
      })
      .catch(() => {
        dispatch(checkUser(false, false));
      });
  };
};
