import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { users } from './data/user';

export default {

  /**
   * mock bootstrap
   */
  bootstrap() {
    let mock = new MockAdapter(axios, { delayResponse: 2000 });

    // mock success request
    mock.onGet('/success').reply(200, {
      msg: 'success'
    });

    // mock error request
    mock.onGet('/error').reply(500, {
      msg: 'failure'
    });

    // 登录
    mock.onPost('/login', 'username=zhangxh&password=123456').reply(200, {code: 200, msg: '请求成功'});
    mock.onPost('/login').reply(500, {code: 500, msg: '账号或密码错误'});

    mock.onGet('/users').reply(200, users);

    mock.onAny().passThrough();
  }
};
