import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import startData from './startData';
import newsBlog from './newsBlog';
import search from './search';

export default combineReducers({
  routing: routerReducer,
  startData,
  newsBlog,
  search
});
