import { fromJS } from 'immutable';

const defaultState = fromJS({
  focused: false,
  list: [],
  page: 1,
  totalPage: 1,
  mouseIn: false,
});

export default defaultState;