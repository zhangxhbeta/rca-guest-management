import { ofType } from 'redux-observable';

const pingEpic = (action$) => {
  console.log(action$)
  return action$.ofType('COUNTER_INCREMENT')
    //.mapTo({ type: 'PONG' });
    // .map(item => )
    .do(item => console.log(item))
    .ignoreElements();
}



export default pingEpic;
