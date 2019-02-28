import defaultState from './state';
import * as actionType from './action-type';

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionType.SEARCH_FOCUS:
      return Object.assign({}, state, {focused: true});
    case actionType.SEARCH_BLUR:
      return Object.assign({}, state, {focused: false});
    default:
      return state;
  }
};