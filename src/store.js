import {
  compose,
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';

import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import reducers from './reducers';

const rootReducer = combineReducers({
  ...reducers
});

let storeCreator;
// noinspection JSUnresolvedVariable
if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({
    collapsed: true,
    duration: true,
  });

  storeCreator = applyMiddleware(thunkMiddleware, logger);

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
  storeCreator = applyMiddleware(thunkMiddleware);
}

export default createStore(rootReducer, storeCreator);
