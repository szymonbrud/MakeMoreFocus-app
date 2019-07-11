import axios from 'axios';

export const GET_TODOS_TODAY = 'GET_TODOS_TODAY';
export const LOGIN_USER = 'LOGIN_USER';
export const AUTHENTICATE = 'AUTHENTICATE';
export const CHECKUSER = 'CHECKUSER';
export const FINALLYREGISTER = 'FINALLYREGISTER';
export const DONETODO = 'DONETODO';
export const GETNEWDATA = 'GETNEWDATA';
export const FINALLYACTIONAPI = 'FINALLYACTIONAPI';
export const FINALLYGETTODONORMALL = 'FINALLYGETTODONORMALL';
export const FINALLYGETTODOTEST = 'FINALLYGETTODOTEST';

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

export const getNewData = state => {
  return {
    type: GETNEWDATA,
    payload: {
      authStatus: state,
    },
  };
};

export const finallyActionAPI = status => {
  let state;

  if (status === 200) {
    state = true;
  } else {
    state = false;
  }

  return {
    type: FINALLYACTIONAPI,
    payload: {
      authStatus: state,
    },
  };
};

export const finallyGetTodoNormall = state => {
  return {
    type: FINALLYGETTODONORMALL,
    payload: {
      data: state,
    },
  };
};

export const finallyGetTodoTest = status => {
  return {
    type: FINALLYGETTODOTEST,
    payload: {
      data: status,
    },
  };
};

// https://cors-anywhere.herokuapp.com/https://glacial-inlet-42048.herokuapp.com/day
export const getTodosToday = (userId, act) => {
  const userKey = sessionStorage.getItem('key');

  return dispatch => {
    axios
      .get(`https://cors-anywhere.herokuapp.com/https://glacial-inlet-42048.herokuapp.com/days`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        params: {
          userId: userKey,
        },
      })
      .then(res => {
        if (act === true) {
          return dispatch(finallyGetTodoNormall(res.data.data));
        }
        return dispatch(finallyRequestGetTodos(res.data.data));
      })
      .finally(() => {
        return dispatch(finallyGetTodoTest(true));
      });
  };
};

export const getDoneTodos = (userId, date) => {
  const userKey = sessionStorage.getItem('key');

  return dispatch => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://glacial-inlet-42048.herokuapp.com/daysDone`,
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
          params: {
            userId: userKey,
            date,
          },
        },
      )
      .then(res => {
        return dispatch(finallyRequestDoneTodo(res.data.data));
      });
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

export const registerUser = (name, email, password) => {
  return dispatch => {
    axios
      .post(
        `https://cors-anywhere.herokuapp.com/https://glacial-inlet-42048.herokuapp.com/register`,
        {
          body: {
            userId: '',
            name,
            email,
            password,
          },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      )
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
      .get(
        `https://cors-anywhere.herokuapp.com/https://glacial-inlet-42048.herokuapp.com/userEmail`,
        {
          params: {
            email,
          },
        },
      )
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

export const addTodo = (title, days, hours, minutes, images) => {
  const userKey = sessionStorage.getItem('key');

  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth();
  const year = date.getFullYear();

  month += 1;

  if (month < 10) {
    month = `0${month}`;
  } else {
    month = `${month}`;
  }

  if (day < 10) {
    day = `0${day}`;
  } else {
    day = `${day}`;
  }

  const fullDate = `${year}-${month}-${day}`;

  return dispatch => {
    axios
      .post(
        `https://cors-anywhere.herokuapp.com/https://glacial-inlet-42048.herokuapp.com/addDay`,
        {
          body: {
            id: '',
            userId: userKey,
            title,
            monday: days[0],
            tuesday: days[1],
            wednesday: days[2],
            thursday: days[3],
            friday: days[4],
            saturday: days[5],
            sunday: days[6],
            hours,
            minutes,
            images,
            dateCreate: fullDate,
          },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      )
      .then(res => {
        dispatch(finallyActionAPI(res.status));
      })
      .catch(() => dispatch(finallyActionAPI(false)));
  };
};

export const deleteTodo = id => {
  const userKey = sessionStorage.getItem('key');

  return dispatch => {
    axios
      .delete(
        `https://cors-anywhere.herokuapp.com/https://glacial-inlet-42048.herokuapp.com/deleteTodo`,
        {
          params: {
            id,
            userId: userKey,
          },
        },
      )
      .then(res => {
        dispatch(finallyActionAPI(res.status));
      })
      .catch(() => dispatch(finallyActionAPI(false)));
  };
};

export const addTodoDone = (idTodo, title, date, hours, minutes, note, state) => {
  const userKey = sessionStorage.getItem('key');

  return dispatch => {
    axios
      .post(
        `https://cors-anywhere.herokuapp.com/https://glacial-inlet-42048.herokuapp.com/addDayDone`,
        {
          body: {
            id: '',
            userId: userKey,
            idTodo,
            date,
            title,
            state,
            hours,
            minutes,
            note,
          },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      )
      .then(() => {
        dispatch(getDoneTodos(userKey, date));
      });
  };
};

export const changeTodo = (id, title, days, hours, minutes, images) => {
  return dispatch => {
    axios
      .put(
        `https://cors-anywhere.herokuapp.com/https://glacial-inlet-42048.herokuapp.com/changeTodo`,
        {
          body: {
            id,
            title,
            monday: days[0],
            tuesday: days[1],
            wednesday: days[2],
            thursday: days[3],
            friday: days[4],
            saturday: days[5],
            sunday: days[6],
            hours,
            minutes,
            images,
          },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      )
      .then(res => {
        dispatch(finallyActionAPI(res.status));
      })
      .catch(() => {
        dispatch(finallyActionAPI(false));
      });
  };
};
