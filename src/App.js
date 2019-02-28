import React, { Component } from 'react';
import Header from './components/header/Header';
import store from './store';
import { Provider } from 'react-redux';

import { Globalstyle } from './style';
import { IconGlobalstyle } from './static/iconfont/iconfont';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* 全局样式 */}
        <Globalstyle />
        {/* 字体图标样式 */}
        <IconGlobalstyle />
        <Provider store={ store }>
          <Header />
        </Provider>
      </div>
    );
  }
}

export default App;
