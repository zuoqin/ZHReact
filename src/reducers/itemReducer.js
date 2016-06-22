import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function itemReducer(state = initialState.items, action) {
  switch (action.type) {
    case types.LOAD_ITEMS_SUCCESS:
      return [
        ...state.filter(item => item.pageId !== action.items[0].pageId).concat(action.items)
         //Object.assign({}, action.items)
      ];
    case types.LOAD_ITEM_SUCCESS:
      return [
        ...state.filter(item => item.Reference !== action.item.Reference),
        Object.assign({}, action.item)
      ];
    default:
      return state;
  }
}
