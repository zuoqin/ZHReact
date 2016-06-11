import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.items, action) {
  switch (action.type) {
    case types.LOAD_ITEMS_SUCCESS:
      return action.items;

    case types.CREATE_ITEM_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.item)
      ];

    case types.UPDATE_ITEM_SUCCESS:
      return [
        ...state.filter(item => item.id !== action.item.id),
        Object.assign({}, action.item)
      ];

    default:
      return state;
  }
}
