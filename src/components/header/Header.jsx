import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import * as actionCreator from '../../store/action-creator';
import { 
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchWrapper
 } from './style';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载 APP</NavItem>
          <NavItem className="right">登录</NavItem>
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
                onFocus={ this.props.handleInputFocus }
                onBlur={ this.props.handleInputBlur }
              >
              </NavSearch>
            </CSSTransition>
            <i className={ this.props.focused ? 'focused iconfont' : 'iconfont' }>&#xe614;</i>
          </SearchWrapper>
        </Nav>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  focused: state.focused
});

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreator.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreator.searchBlur());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);