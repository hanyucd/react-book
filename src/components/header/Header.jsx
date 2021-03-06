import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import * as actionCreator from '../../store/action-creator';
import { Link } from 'react-router-dom';
import { 
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem
 } from './style';

class Header extends React.Component {

  constructor() {
    super();
    this.iconRef = React.createRef();
  }

  getListArea = () => {
    const { focused, mouseIn, list, page, totalPage } = this.props;
    const newList = list.toJS();
    const pageList = [];

    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        if (newList[i])  {
          pageList.push(
            <SearchInfoItem key={ newList[i] }>{ newList[i] }</SearchInfoItem>
          )
        }
      }
    }
    
    if (focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={ this.props.handleMouseEnter } onMouseLeave={ this.props.handleMouseLeave }>
              <SearchInfoTitle>
                热门搜索
                <SearchInfoSwitch onClick={ () => this.props.handleChangeList(page, totalPage, this.iconRef) }>
                  <i ref={ this.iconRef } className="iconfont spin">&#xe851;</i>
                  换一批
                </SearchInfoSwitch>
              </SearchInfoTitle>
              <SearchInfoList>
                {
                  pageList
                }
              </SearchInfoList>
            </SearchInfo>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>
        <Nav>
          <NavItem className="left active">
            <i className="iconfont menu-icon">&#xe600;</i>
            <span className="menu-text">首页</span>
          </NavItem>
          <NavItem className="left">
            <i className="iconfont menu-icon">&#xe663;</i>
            <span className="menu-text">下载App</span>
          </NavItem>
          <Link to="/write">
            <NavItem className="right writting">
              <i className="iconfont">&#xe60b;</i>写文章
            </NavItem>  
          </Link>
          <NavItem className="right reg">注册</NavItem>
          {
            this.props.login ?
              <Link to="/login"><NavItem onClick={ this.props.logout } className="right">退出</NavItem></Link> :
              <Link to="/login"><NavItem className="right">登录</NavItem></Link>
          }
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={ this.props.focused }
              timeout={ 500 }
              classNames='slide'
            >
              <NavSearch 
                className={ this.props.focused ? 'focused' : '' }
                onFocus={ () => this.props.handleInputFocus(this.props.list) }
                onBlur={ this.props.handleInputBlur }
              >
              </NavSearch>
            </CSSTransition>
            <i className={ this.props.focused ? 'focused iconfont zoom' : 'iconfont zoom' }>&#xe614;</i>
            { this.getListArea() }
          </SearchWrapper>
        </Nav>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  focused: state.getIn(['header', 'focused']),
  list: state.getIn(['header', 'list']),
  totalPage: state.getIn(['header', 'totalPage']),
  page: state.getIn(['header', 'page']),
  mouseIn: state.getIn(['header', 'mouseIn']),
  login: state.getIn(['login', 'login'])
});

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      list.size === 0 && dispatch(actionCreator.getHotList());

      const focusAction = actionCreator.searchFocus();
      dispatch(focusAction);
    },
    handleInputBlur() {
      const action = actionCreator.searchBlur();
      dispatch(action);
    },
    handleMouseEnter() {
      const action = actionCreator.mouseEnter();
      dispatch(action);
    },
    handleMouseLeave() {
      const action = actionCreator.mouseLeave();
      dispatch(action);
    },
    handleChangeList(page, totalPage, icon) {
      // 把 transform 属性中的只要不是数字的字符全部替换成空字符串
      let originAngle = icon.current.style.transform.replace(/[^0-9]/ig, '');
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      icon.current.style.transform = `rotate(${ originAngle + 360 }deg)`;

      const action = page < totalPage ? 
        actionCreator.changePage(++page) :
        actionCreator.changePage(1);
      dispatch(action);
    },
    logout() {
      dispatch(actionCreator.logout());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);