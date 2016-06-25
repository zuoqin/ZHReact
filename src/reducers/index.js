import {combineReducers} from 'redux';
import items from './itemReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  items,
  ajaxCallsInProgress
});

export default rootReducer;
