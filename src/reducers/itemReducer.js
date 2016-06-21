import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function itemReducer(state = initialState.items, action) {
  switch (action.type) {
    //case types.LOAD_ITEMS_SUCCESS:
    //  return action.items;
    case types.LOAD_ITEMS_SUCCESS:
      return [
        ...state.filter(item => item.pageId !== action.items[0].pageId).concat(action.items)
         //Object.assign({}, action.items)
      ];

    default:
      return state;
  }
}
