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

// 热门搜索 Action
export const hotSearch = (data) => ({
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