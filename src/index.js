import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Switch, Route, BrowserRouter, Link} from 'react-router-dom';
import asyncComponent from "components/AsyncComponent";

// 导入 css
import './styles/booking.css';

// 全局状态
import store from './store';

// 组件
import App from 'containers/App';

// 样式
import './index.css';
import logo from './logo.svg';

// 异步分割打包组件
const AsyncNotFound = asyncComponent(() => import("containers/NotFound"));
const AsyncMockApiRequest = asyncComponent(() => import("containers/MockApiRequest"));
const AsyncStyledButton = asyncComponent(() => import("containers/StyledButton"));

ReactDOM.render(
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo"/>
      <h2>React 示例</h2>
    </div>
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Link to="/">Redux Demo</Link>&nbsp;
          <Link to="/mock-api-request">网络Demo</Link>&nbsp;
          <Link to="/styled-button">StyledComponents</Link>&nbsp;
          <Link to="/error">错误页面</Link>&nbsp;
          <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/mock-api-request" component={AsyncMockApiRequest}/>
            <Route path="/styled-button" component={AsyncStyledButton}/>
            <Route component={AsyncNotFound}/>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  </div>,
  document.getElementById('root')
);
