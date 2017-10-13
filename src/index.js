import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Switch, Route, BrowserRouter, Link} from 'react-router-dom';

import store from './store';

import App from './containers/App';
import NotFound from './containers/NotFound';
import MockApiRequest from 'containers/MockApiRequest'

import './index.css';
import logo from './logo.svg';

ReactDOM.render(
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo"/>
      <h2>React 示例</h2>
    </div>
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Link to="/">加减测试</Link>&nbsp;
          <Link to="/mock-api-request">Mock测试</Link>&nbsp;
          <Link to="/error">错误页面</Link>&nbsp;
          <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/mock-api-request" component={MockApiRequest}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  </div>,
  document.getElementById('root')
);
