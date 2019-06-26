const initialState = {
  lol: 'lox',
};

export const rootReducer = (state = initialState, action) => {
  return state;
};

export const AddDate = (state = [], { type, payload }) => {
  switch (type) {
    case 'API_IMAGES':
      return payload.myAllData;
    default:
      return state;
  }
};
