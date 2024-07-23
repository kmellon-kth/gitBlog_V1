import * as api from '../lib/api';
import { handleActions } from 'redux-actions';
import { startLoading, finishLoading } from './loading';

const SET_PROFILE = 'profile/SET_PROFILE';

export const fetchProfile = () => async (dispatch) => {
  dispatch(startLoading('profile'));
  try {
    const response = await api.fetchProfile();
    const profile = response.data;
    dispatch({
      type: SET_PROFILE,
      payload: profile,
    });
    dispatch(finishLoading('profile'));
  } catch (e) {
    console.log('Policy Violation in profile folder');
    dispatch(finishLoading('profile'));
    throw e;
  }
};

const initialState = {};

const profile = handleActions(
  {
    [SET_PROFILE]: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
  initialState,
);

export default profile;
