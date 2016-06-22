import * as types from './actionTypes';

// Changed to testing API
//import itemApi from '../api/mockItemApi';

//Change to real API
import itemApi from '../api/ZHApi';

import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadItemsSuccess(items) {
  return { type: types.LOAD_ITEMS_SUCCESS, items};
}

export function loadItemSuccess(item) {
  return { type: types.LOAD_ITEM_SUCCESS, item};
}

export function loadItem(reference) {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return itemApi.getItem(reference).then(item => {
      dispatch(loadItemSuccess(item));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadItems(page) {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    if(page === undefined || page < 0){
      page = 0;
    }
    return itemApi.getPageItems(page).then(items => {
      dispatch(loadItemsSuccess(items));
    }).catch(error => {
      throw(error);
    });
  };
}

