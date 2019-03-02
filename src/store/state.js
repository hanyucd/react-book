import { fromJS } from 'immutable';

// 头部默认 state
export const headerDefaultState = fromJS({
  focused: false,
  list: [],
  page: 1,
  totalPage: 1,
  mouseIn: false,
});

// 首页默认 state
export const homeDefaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
  showScroll: false
});

// 详情默认 state
export const detailDefaultState = fromJS({
  title: '',
  content: ''
});

// 登录默认 state
export const loginDefaultState = fromJS({
  login: false
});