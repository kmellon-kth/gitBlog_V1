import axios from 'axios';
import { PATH_POST, PATH_PORFILE } from './env';

export const getTopics = () => axios.get(`${PATH_POST}/index.json`);
export const getProfiles = () => axios.get(`${PATH_PORFILE}/index.json`);

const response = getTopics();

console.log(response.data);
