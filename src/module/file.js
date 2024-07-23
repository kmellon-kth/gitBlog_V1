import { handleActions } from 'redux-actions';
import * as api from '../lib/api';
import { startLoading, finishLoading } from './loading';
import { produce } from 'immer';

const SET_FILE = 'file/SET_FILE';
const SET_FILE_MD = 'file/SET_FILE_MD';

export const fetchFile = (url) => async (dispatch, getState) => {
  const state = getState();
  if (state.file[url]) {
    return;
  }
  dispatch(startLoading('file'));
  try {
    const response = await api.fetchFile(url);
    const fileIndex = response.data;
    dispatch({
      type: SET_FILE,
      payload: { url, fileIndex },
    });
    dispatch(finishLoading('file'));
  } catch (e) {
    console.log('Policy Violation in file folder');
    dispatch(finishLoading('file'));
    throw e;
  }
};

export const fetchFileMd = (url) => async (dispatch, getState) => {
  const state = getState();
  if (state.file[url]) {
    return;
  }
  dispatch(startLoading('file'));
  try {
    const response = await api.fetchFile(url);
    const fileIndex = response.data;
    dispatch({
      type: SET_FILE,
      payload: { url, fileIndex },
    });
    dispatch(finishLoading('file'));
  } catch (e) {
    console.log('Policy Violation in file folder');
    dispatch(finishLoading('file'));
    throw e;
  }
};

const initialState = {};

const file = handleActions(
  {
    [SET_FILE]: (state, action) =>
      produce(state, (draft) => {
        const { url, fileIndex } = action.payload;
        draft[url] = fileIndex;
      }),
    [SET_FILE_MD]: (state, action) =>
      produce(state, (draft) => {
        const { url, fileIndex } = action.payload;
        draft[url] = fileIndex;
      }),
  },
  initialState,
);

export default file;
