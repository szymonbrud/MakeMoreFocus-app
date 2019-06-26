import axios from 'axios';

export function FinallyRequest(items) {
  return {
    type: 'API_IMAGES',
    payload: {
      myAllData: items,
    },
  };
}

export const ApiTake = day => {
  return dispatch => {
    axios
      .get(`http://localhost:4000/day`, {
        params: {
          day,
          userId: '234124KLJ12J4IWKR',
        },
      })
      .then(res => {
        console.log(res);
        return dispatch(FinallyRequest(res.data.data));
      })
      .catch(err => console.log(err))
      .finally(() => {
        // dispatch(ApiRun(false));
      });
  };
};
