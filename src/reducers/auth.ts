import {
    LOGIN,
    LOGIN_FAILED,
    LOGIN_SUCCESSED,
} from '../constants/types';

const initialState = {
  user: {},
  isLoading: false,
};

const reducer = (state = initialState, action: {type: string; payload: any}) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUCCESSED:
      return {
        ...state,
        isLoading: false,
        user: payload.user,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
