import React, {Component} from 'react'
import api from 'api'

export default class MockApiRequest extends Component {
  state = {
    machine: 'init',
    result: '',
  };

  request = () => {
    this.setState({
      machine: 'sending'
    });

    let form = {
      username: 'zhangxh',
      password: '123456'
    };
    api.user.login(form)
      .then(result => {
        this.setState({
          machine: 'success',
          result: result.data.msg
        });
      })
      .catch(err => {
        this.setState({
          machine: 'fail',
          result: '请求失败'
        });
      })
  };

  reset = () => {
    this.setState({
      machine: 'init',
      result: '',
    });
  };

  requestProxy = () => {
    api.user.throughProxy()
  };

  render() {
    const {machine, result} = this.state;

    return (
      <div>
        <h1>请求 mock api 测试</h1>
        <p className="App-intro">
          <input
            type="text"
            value={result}/>
        </p>
        <p>
          state: {machine} &nbsp;
          <button onClick={this.request}>请求</button>
          <button onClick={this.reset}>复位</button>
        </p>
        <h2>不存在的请求会通过代理转发到 localhost:4000(package.json配置)</h2>
        <p>
          <button onClick={this.requestProxy}>代理</button>
        </p>
      </div>
    );
  }

}
