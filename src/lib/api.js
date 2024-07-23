import axios from 'axios';
import { PATH_POST, PATH_PORFILE } from './env';

export const fetchCategory = () => axios.get(`${PATH_POST}/index.json`);
export const fetchTopic = (category) =>
  axios.get(`${PATH_POST}/${category}/index.json`);
export const fetchList = (category, topic) =>
  axios.get(`${PATH_POST}/${category}/${topic}/index.json`);
export const fetchProfile = () => axios.get(`${PATH_PORFILE}/index.json`);
export const fetchFile = (path) => axios.get(`${path}/index.json`);
