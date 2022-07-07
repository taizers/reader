import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { LOGOUT } from '../constants/types';
import auth from './auth';


const appReducer = combineReducers({
  auth,
  // eslint-disable-next-line no-restricted-globals
  router: connectRouter(history),
});

const rootReducer = (state: any, action: {type: string, action: any}) => {
  if (action.type === LOGOUT) {
    state = undefined;
  }
  return appReducer(state, action);
};

export { rootReducer };