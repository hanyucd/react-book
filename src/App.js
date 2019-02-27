import React, { Component } from 'react';
import Header from './components/header/Header';

import { Globalstyle } from './style';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* 全局样式 */}
        <Globalstyle />
        <Header />
      </div>
    );
  }
}

export default App;
