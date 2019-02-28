import styled from 'styled-components';
import logoPic from '../../static/logo.png';

export const HeaderWrapper = styled.div `
  position: relative;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a `
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 100%;
  background: url(${ logoPic  });
  background-size: contain;
`;

export const Nav = styled.div `
  min-width: 768px;
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
  padding-right: 15px;
  padding-left: 100px;
  box-sizing: border-box;
`;

export const NavItem = styled.div `
  display: inline-block;
  line-height: 58px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
}) `
  width: 160px;
  height: 38px;
  border: 1px solid #eee;
  outline: none;
  border-radius: 19px;
  margin-top: 9px;
  margin-left: 20px;
  box-sizing: border-box;
  padding: 0 30px 0 20px;
  background: #eee;
  font-size: 15px;
  &::placeholder {
    color: #999;
  }
`;