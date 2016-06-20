import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as courseActions from '../actions/itemActions';

describe('Store', function() {
  //it('Should handle creating items', function() {
  //  // arrange
  //  const store = createStore(rootReducer, initialState);
  //  const item = {
  //    title: "Clean Code"
  //  };
  //
  //  // act
  //  const action = courseActions.createItemSuccess(item);
  //  store.dispatch(action);
  //
  //  // assert
  //  const actual = store.getState().items[0];
  //  const expected = {
  //    title: "Clean Code"
  //  };
  //
  //  expect(actual).toEqual(expected);
  //});
});
