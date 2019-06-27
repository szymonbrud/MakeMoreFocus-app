import { GET_TODOS_TODAY, LOGIN_USER, AUTHENTICATE } from 'actions';

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
