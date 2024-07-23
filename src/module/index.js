import { combineReducers } from 'redux';
import folder from './folder';
import loading from './loading';
import profile from './profile';
import file from './file';

const rootReducer = combineReducers({ loading, folder, profile, file });

export default rootReducer;
