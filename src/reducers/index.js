import {combineReducers} from 'redux';
import items from './itemReducer';
import topics from './topicReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  items,
  topics,
  ajaxCallsInProgress
});

export default rootReducer;
