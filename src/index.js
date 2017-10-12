import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Switch, Route, HashRouter } from 'react-router-dom';

import store from './store';

import App from './containers/App';
import NotFound from './containers/NotFound';
import MockApiRequest from 'containers/MockApiRequest'

import './index.css';
import logo from './logo.svg';

ReactDOM.render(
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>
        <a href={'#/mock-api-request'}>Mock测试</a>&nbsp;
        <a href={'#/error'}>错误页面</a>&nbsp;
      </h2>
    </div>
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route exactly pattern='/' component={MockApiRequest}/>
          <Route exactly pattern='/mock-api-request' component={App} />
          <Route component={NotFound} />
        </Switch>
      </HashRouter>
    </Provider>
  </div>,
  document.getElementById('root')
);
