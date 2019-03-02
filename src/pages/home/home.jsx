import React from 'react';
import Topic from './topic/Topic';
import List from './list/List';
import Write from './write/Write';
import Recommend from './recommend/Recommend';
import { connect } from 'react-redux';
import * as actionCreator from '../../store/action-creator';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style';

class Home extends React.PureComponent {
  
  componentDidMount() {
    this.props.getHomeData();
    this.bindEvent();
  }

  componentWillUnmount() {
    // 当这个组件销毁的时候,这个事件也要解绑
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }
  
  bindEvent = () => {
    window.addEventListener('scroll', this.props.changeScrollTopShow);
  }

  handleScrollTop = () => window.scrollTo(0, 0);

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
        {
          this.props.showScroll ?
            <BackTop onClick={ this.handleScrollTop }>
              <i className="iconfont">&#xe60c;</i>
            </BackTop> :
            null
        }
      </HomeWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
});

const mapStateToDispatch = (dispatch) => ({
  getHomeData() {
    dispatch(actionCreator.getHomeData());
  },
  changeScrollTopShow(event) {
    document.documentElement.scrollTop > 100 ?
      dispatch(actionCreator.toggleTopShow(true)) :
      dispatch(actionCreator.toggleTopShow(false));
   }
});

export default connect(mapStateToProps, mapStateToDispatch)(Home);