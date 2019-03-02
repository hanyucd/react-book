import * as actionType from './action-type';
import axios from 'axios';
import { fromJS } from 'immutable';

// Action creator

/*
  头部 Action
*/
// 搜索框获取焦点 Action
export const searchFocus = () => ({
  type: actionType.SEARCH_FOCUS
});
// 搜索框失去焦点 Action
export const searchBlur = () => ({
  type: actionType.SEARCH_BLUR
});

export const mouseEnter = () => ({
  type: actionType.MOUSE_ENTER
});

export const mouseLeave = () => ({
  type: actionType.MOUSE_LEAVE
});

export const changePage = (page) => ({
  type: actionType.CHANGE_PAGE,
  page
});

const hotSearch = (data) => ({
  type: actionType.HOT_SEARCH,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
});

// 引入 redux-thunk 之后这里就可以不再返回一个对象了,也可以返回一个函数
export const getHotList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json')
      .then(res => {
        const data = res.data;
        dispatch(hotSearch(data.data));
      })
      .catch(error => {
        console.log(error);
      })
  }
};

/*
  首页 Action
*/

const changeHomeData = (result) => ({
  type: actionType.GET_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList 
});

export const getHomeData = () => {
  return (dispatch) => {
    axios.get('/api/home.json')
      .then(res => {
        const result = res.data.data;
        dispatch(changeHomeData(result));
      })
      .catch(error => {
        console.log(error);
      })
  }
}

const addHomeList = (list, nextPage) => ({
  type: actionType.Add_ARTICLE_LIST,
  list: fromJS(list),
  nextPage
});

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get(`/api/homeList.json?page=${ page }`)
      .then(res => {
        const result = res.data.data;
        dispatch(addHomeList(result, ++page));
      })
      .catch(error => {
        console.log(error);
      })
  }
}

export const toggleTopShow = (show) => ({
  type: actionType.TOGGLE_SCROLL_TOP,
  show
});

/*
  详情 Action
*/
const changeDetail = (title, content) => ({
  type: actionType.CHANGE_DETAIL,
  title,
  content
});

export const geDetailInfo = (id) => {
  return (dispatch) => {
    axios.get(`/api/detail.json?id= ${ id }`)
      .then(res => {
        const result = res.data.data;
        dispatch(changeDetail(result.title, result.content))
      })
      .catch(error => {
        console.log(error);
      })
  }
};

/*
  登录 Action
*/
const changeLogin = () => ({
  type: actionType.CHANGE_LOGIN,
  value: true
});

export const logout = () => ({
  type: actionType.CHANGE_LOGOUT,
  value: false
});

export const login = (account, password) => {
  return (dispatch) => {
    axios.get(`/api/login.json?account=${ account }&password=${ password }`)
      .then(res => {
        const result = res.data.data;
        result ?
          dispatch(changeLogin()) :
          window.alert('失败');
      })
      .catch(error => {
        console.log(error);
      })
    console.log(account, password)
  }
}
