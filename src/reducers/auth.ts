import {
    LOGIN_SUCCESSED, LOGOUT,
} from '../constants/types';

const initialState = {
  authUser: {},
  isLoading: false,
  isAuth: false,
};

const reducer = (state = initialState, action: {type: string; payload: any}) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESSED:
        return {
            ...state,
            authUser: payload.user,
            isAuth: true,
        };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
