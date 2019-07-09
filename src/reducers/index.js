import {
  GET_TODOS_TODAY,
  LOGIN_USER,
  AUTHENTICATE,
  CHECKUSER,
  FINALLYREGISTER,
  DONETODO,
  GETNEWDATA,
  FINALLYACTIONAPI,
  FINALLYGETTODONORMALL,
  FINALLYGETTODOTEST,
} from 'actions';

export const rootReducer = (state = {}) => {
  return state;
};

export const todosToday = (state = [], { type, payload }) => {
  switch (type) {
    case GET_TODOS_TODAY:
      return payload.todos;
    default:
      return state;
  }
};

export const loginUser = (state = [], { type, payload }) => {
  switch (type) {
    case LOGIN_USER:
      return payload.userData;
    default:
      return state;
  }
};

export const authenticate = (state = 0, { type, payload }) => {
  switch (type) {
    case AUTHENTICATE:
      return payload.authStatus;
    default:
      return state;
  }
};

export const checkStatusUser = (state = [], { type, payload }) => {
  switch (type) {
    case CHECKUSER:
      return payload.checkUser;
    default:
      return state;
  }
};

export const userData = (state = [], { type, payload }) => {
  switch (type) {
    case FINALLYREGISTER:
      return payload.authStatus;
    default:
      return state;
  }
};

export const todoDone = (state = [], { type, payload }) => {
  switch (type) {
    case DONETODO:
      return [...state, ...payload.userData];
    default:
      return state;
  }
};

export const getNewData = (state = false, { type, payload }) => {
  switch (type) {
    case GETNEWDATA:
      return payload.authStatus;
    default:
      return state;
  }
};

export const statusOfApi = (state = false, { type, payload }) => {
  switch (type) {
    case FINALLYACTIONAPI:
      return payload.authStatus;
    default:
      return state;
  }
};

export const allTodosNormall = (state = [], { type, payload }) => {
  switch (type) {
    case FINALLYGETTODONORMALL:
      return payload.data;
    default:
      return state;
  }
};

export const allTodosNormallTest = (state = false, { type, payload }) => {
  switch (type) {
    case FINALLYGETTODOTEST:
      return payload.data;
    default:
      return state;
  }
};
