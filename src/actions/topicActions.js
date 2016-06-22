import TopicApi from '../api/mockTopicApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

//export function loadTopicsSuccess(topics) {
//  return {type: types.LOAD_TOPICS_SUCCESS, topics};
//}
//
//export function loadTopics() {
//  return dispatch => {
//    dispatch(beginAjaxCall());
//    return TopicApi.getAllTopics().then(topics => {
//      dispatch(loadTopicsSuccess(topics));
//    }).catch(error => {
//      throw(error);
//    });
//  };
//}
