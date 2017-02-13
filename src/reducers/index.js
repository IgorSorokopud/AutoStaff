import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import startData from './startData';
import newsBlog from './newsBlog';
import search from './search';
import modal from './modal';

export default combineReducers({
  routing: routerReducer,
  startData,
  newsBlog,
  search,
  modal
});
