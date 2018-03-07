import { combineEpics } from 'redux-observable';
import counterEpic from './counter.epic'

const rootEpic = combineEpics(
  counterEpic,
);

export default rootEpic
