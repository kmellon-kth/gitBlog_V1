import { createAction, handleActions } from 'redux-actions';

const START_LOADING = 'loading/START_CATEGORY_LOADING';
const FINISH_LOADING = 'loading/FINISH_CATEGORY_LOADING';

export const startLoading = createAction(
  START_LOADING,
  (requestType) => requestType,
);
export const finishLoading = createAction(
  FINISH_LOADING,
  (requireType) => requireType,
);

const initalState = {
  profile: false,
  categoty: false,
  topic: false,
  list: false,
};

const loading = handleActions(
  {
    [START_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: true,
    }),
    [FINISH_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: false,
    }),
  },
  initalState,
);

export default loading;
