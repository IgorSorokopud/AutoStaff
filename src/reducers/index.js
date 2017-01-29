import { combineReducers } from 'redux';

import startData from './startData';
import newsBlog from './newsBlog';
import search from './search';

export default combineReducers({
  startData,
  newsBlog,
  search
});
