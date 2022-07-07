import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { routerMiddleware } from 'connected-react-router';

import { history } from '../router/history';
import { rootReducer } from '../reducers/index';

let middlewares = [routerMiddleware(history)];
const composeEnhancers = composeWithDevTools({
  traceLimit: 20,
  trace: true,
});

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));