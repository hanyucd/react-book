import { 
  headerDefaultState,
  homeDefaultState,
  detailDefaultState,
  loginDefaultState
} from './state';
import * as actionType from './action-type';
import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';

// Reducer

/* 
  头部 Reducer
*/
const headerReducer = (state = headerDefaultState, action) => {
  switch (action.type) {
    case actionType.SEARCH_FOCUS:
    // immutable 对象的 set 方法，会结合之前 immutable 对象的值和设置的值,返回一个全新的对象
      return state.set('focused', true);
    case actionType.SEARCH_BLUR:
      return state.set('focused', false);
    case actionType.HOT_SEARCH:
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      });
    case actionType.MOUSE_ENTER:
      return state.set('mouseIn', true);
    case actionType.MOUSE_LEAVE:
      return state.set('mouseIn', false);
    case actionType.CHANGE_PAGE:
      return state.set('page', action.page);
    default:
      return state;
  }
};

/* 
  首页 Reducer
*/
const homeReducer = (state = homeDefaultState, action) => {
  switch(action.type) {
    case actionType.GET_HOME_DATA:
      const { topicList, articleList, recommendList } = action;
      return state.merge({
        topicList: fromJS(topicList),
        articleList: fromJS(articleList),
        recommendList: fromJS(recommendList)
      })
    case actionType.Add_ARTICLE_LIST:
      return state.merge({
        'articleList': state.get('articleList').concat(action.list),
        'articlePage': action.nextPage
      });
    case actionType.TOGGLE_SCROLL_TOP:
      return state.set('showScroll', action.show)
    default:
      return state;
  }
};

const detailReducer = (state = detailDefaultState, action) => {
  switch (action.type) {
    case actionType.CHANGE_DETAIL:
      return state.merge({
        title: action.title,
        content: action.content
      })
    default:
      return state;
  }
};

/* 
  登录 Reducer
*/
const loginReducer = (state = loginDefaultState, action) => {
  switch(action.type) {
    case actionType.CHANGE_LOGIN:
      return state.set('login', action.value);
    case actionType.CHANGE_LOGOUT:
      return state.set('login', action.value);
    default:
      return state;
  }
};

export default combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer,
  login: loginReducer
});