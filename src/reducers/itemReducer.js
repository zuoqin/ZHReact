import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function itemReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_ITEMS_SUCCESS:
      /*eslint-disable no-case-declarations */
      let newItems = {items: [...state.items.filter(item => item.pageId !== action.items[0].pageId).concat(action.items)]};
      let oldState = {};
      Object.assign(oldState, state);
      Object.assign(oldState, newItems);

      let newState = {};
      Object.assign(newState, oldState);
      return newState;
    case types.LOAD_ITEM_SUCCESS:
      return [
        ...state.filter(item => item.Reference !== action.item.Reference),
        Object.assign({}, action.item)
      ];
    default:
      return state;
  }
}
