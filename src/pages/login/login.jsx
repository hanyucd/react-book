import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actionCreator from '../../store/action-creator';
import {
  LoginWrapper,
  LoginBox,
  Input,
  Button
} from './style';

class Login extends React.Component {
  constructor() {
    super();
    this.accountRef = React.createRef();
    this.passwordRef = React.createRef();
  }

  render() {
    if (!this.props.loginStaus) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder="账号" ref={ this.accountRef } />
            <Input placeholder="密码" type="password" ref={ this.passwordRef } />
            <Button onClick={ () => this.props.login(this.accountRef, this.passwordRef) }>登录</Button>
          </LoginBox>
        </LoginWrapper>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

const mapStateToProps = (state) => ({
  loginStaus: state.getIn(['login', 'login'])
});

const mapStateToDispatch = (dispatch) => ({
  login(accountElem, passwordElem) {
    dispatch(actionCreator.login(accountElem.current.value, passwordElem.current.value));
  }
});

export default connect(mapStateToProps, mapStateToDispatch)(Login);