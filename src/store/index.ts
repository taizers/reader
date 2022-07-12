import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from '@redux-saga/core';

import { history } from '../router/history';
import { rootReducer } from '../reducers/index';
import rootSaga from '../sagas/index';

const sagaMiddleware = createSagaMiddleware();

let middlewares = [sagaMiddleware, routerMiddleware(history)];

const composeEnhancers = composeWithDevTools({
  traceLimit: 20,
  trace: true,
});

const createAppStore = (): any => {
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

    sagaMiddleware.run(rootSaga);
    return store;
}

export default createAppStore;
