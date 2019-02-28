import * as actionType from './action-type';

/*
  Action creator
*/

// 搜索框获取焦点 Action
export const searchFocus = () => ({
  type: actionType.SEARCH_FOCUS
});
// 搜索框失去焦点 Action
export const searchBlur = () => ({
  type: actionType.SEARCH_BLUR
});