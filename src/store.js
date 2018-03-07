import {
  compose,
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';

import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from './reducers';
import { combineEpics, createEpicMiddleware } from 'redux-observable'
import rootEpics from './epics'

const rootReducer = combineReducers({
  ...reducers
});

const epicMiddleware = createEpicMiddleware(rootEpics)

let storeCreator;
// noinspection JSUnresolvedVariable
if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({
    collapsed: true,
    duration: true,
  });

  storeCreator = applyMiddleware(epicMiddleware, thunkMiddleware, logger);

  // noinspection JSUnresolvedVariable
  if (window.devToolsExtension) {
    // noinspection JSUnresolvedFunction
    require('set.prototype.tojson');
    // noinspection JSUnresolvedFunction
    require('map.prototype.tojson');

    // noinspection JSUnresolvedFunction
    storeCreator = compose(storeCreator, window.devToolsExtension());
  }

} else {
  storeCreator = applyMiddleware(epicMiddleware, thunkMiddleware);
}

export default createStore(rootReducer, storeCreator);
