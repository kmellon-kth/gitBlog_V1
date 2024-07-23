import { handleActions } from 'redux-actions';
import * as api from '../lib/api';
import { startLoading, finishLoading } from './loading';
import { produce } from 'immer';

const SET_TOPIC = 'folder/SET_TOPIC';
const SET_CATEGORY = 'folder/SET_CATEGORY';
const SET_LIST = 'folder/SET_LIST';

export const fetchCategory = () => async (dispatch) => {
  dispatch(startLoading('category'));
  try {
    const response = await api.fetchCategory();
    const category = response.data;
    dispatch({
      type: SET_CATEGORY,
      payload: category,
    });
    dispatch(finishLoading('category'));
  } catch (e) {
    console.log('Policy Violation in category folder');
    dispatch(finishLoading('category'));
    throw e;
  }
};

export const fetchTopic = () => async (dispatch, getState) => {
  const state = getState();
  const categories = Object.keys(state.folder);
  dispatch(startLoading('topic'));
  try {
    for (const category of categories) {
      if (!category) break;
      const response = await api.fetchTopic(category);
      const topic = response.data;
      dispatch({
        type: SET_TOPIC,
        payload: { category, topic },
      });
    }
    dispatch(finishLoading('topic'));
  } catch (e) {
    console.log('Policy Violation in topic folder');
    dispatch(finishLoading('topic'));
    throw e;
  }
};

export const fetchList = () => async (dispatch, getState) => {
  const state = getState();
  const categories = Object.keys(state.folder);
  dispatch(startLoading('list'));
  try {
    for (const category of categories) {
      if (!category) break;
      const topics = Object.keys(state.folder[category]);
      for (const topic of topics) {
        if (!topic) break;
        const response = await api.fetchList(category, topic);
        const list = response.data;
        dispatch({
          type: SET_LIST,
          payload: { category, topic, list },
        });
      }
    }
    dispatch(finishLoading('list'));
  } catch (e) {
    console.log('Policy Violation in list folder');
    dispatch(finishLoading('list'));
    throw e;
  }
};

const initialState = {};

const folder = handleActions(
  {
    [SET_CATEGORY]: (state, action) =>
      produce(state, (draft) => {
        const { category } = action.payload;
        category.forEach((element) => {
          draft[element] = {};
        });
      }),
    [SET_TOPIC]: (state, action) =>
      produce(state, (draft) => {
        const { category } = action.payload;
        const { topics } = action.payload.topic;
        for (const topic of topics) {
          draft[category][topic] = [];
        }
      }),
    [SET_LIST]: (state, action) =>
      produce(state, (draft) => {
        const { category, topic } = action.payload;
        const { list } = action.payload.list;
        draft[category][topic] = [...list];
      }),
  },
  initialState,
);

export default folder;
