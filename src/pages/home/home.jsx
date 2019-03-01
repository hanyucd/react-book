import React from 'react';
import Topic from './topic/Topic';
import List from './list/List';
import Write from './write/Write';
import Recommend from './recommend/Recommend';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style';

class Home extends React.Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4537/e4fc8843fabbf17e6f5660eea8ce0661b00b3089.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="" />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Write />
        </HomeRight>
      </HomeWrapper>
    );
  }
}

export default Home;