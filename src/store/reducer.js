import defaultState from './state';
import * as actionType from './action-type';
import { combineReducers } from 'redux-immutable';

/*
  Reducer
*/

// 头部 Reducer
const headerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionType.SEARCH_FOCUS:
    // immutable 对象的 set 方法，会结合之前 immutable 对象的值和设置的值,返回一个全新的对象
      return state.set('focused', true);
    case actionType.SEARCH_BLUR:
      return state.set('focused', false);
    default:
      return state;
  }
};

export default combineReducers({
  header: headerReducer
});