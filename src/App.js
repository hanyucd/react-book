import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/home';
import Detail from './pages/detail/detail';
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
          <BrowserRouter>
            <React.Fragment>
              <Header />
              <Route path="/" exact component={ Home }></Route>
              <Route path="/detail" exact component={ Detail }></Route>
            </React.Fragment>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
