import styled from 'styled-components';
import logoPic from '../../static/logo.png';

export const HeaderWrapper = styled.div `
  position: relative;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.div `
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

export const SearchWrapper = styled.article `
  position: relative;
  float: left;
  .zoom {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 50%;
    text-align: center;
    &.focused {
      background: #777;
      color: #fff; 
    }
  }
`;

export const SearchInfo = styled.div `
  position: absolute;
  left: 20px;
  top: 58px;
  width: 200px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
  border-radius: 4px;
  background: #fff;
`;

export const SearchInfoTitle = styled.div `
  margin-top: 15px;
  margin-bottom: 10px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;

export const SearchInfoSwitch = styled.div `
  float: right;
  font-size: 13px;
  cursor: pointer;
  .spin {
    display: inline-block;
    font-size: 12px;
    margin-right: 3px;
    transition: all .5s ease-in;
    transform-origin: center center; 
  }
`;

export const SearchInfoList = styled.section `
  overflow: hidden;
`;

export const SearchInfoItem = styled.a `
  display: inline-block;
  line-height: 20px;
  padding: 0 5px;
  font-size: 12px;
  border: 1px solid #ddd;
  border-radius: 3px;
  color: #787878;
  margin-right: 10px;
  margin-bottom: 10px;
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
  color: #666;
  font-size: 15px;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width:240px; 
  }
  &.slide-enter {
    transition: width .5s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: width .5s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
  `;