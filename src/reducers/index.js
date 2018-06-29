import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import categories from './categories';
import facts from './facts';

export default combineReducers({
  routing,
  categories,
  facts,
});
