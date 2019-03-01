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
  topicList: [
    {
    id: 1,
    title: '社会热点'
  }, {
    id: 2,
    title: '足球'
  }
],
  articleList: [
    {
      id: 1,
      title: '前端代码规范',
      desc: '第一部分 编写灵活、稳定、高质量的HTML代码的规范 一、唯一定律 无论有多少人共同参与同一项目，一定要确保每一行代码都像是唯一个人编写的。 二...',
    },
    {
      id: 2,
      title: '前端代码规范',
      desc: '第一部分 编写灵活、稳定、高质量的HTML代码的规范 一、唯一定律 无论有多少人共同参与同一项目，一定要确保每一行代码都像是唯一个人编写的。 二...',
    }
  ],
  recommendList: [
    {
      id: 1,
      imgUrl: ''
    },
    {
      id: 2,
      imgUrl: ''
    }
  ],
});