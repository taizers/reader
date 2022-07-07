import {
    LOGIN,
    LOGIN_SUCCESSED,
    LOGIN_FAILED,
    LOGOUT
} from '../constants/types'

export const login = (data: {email: string; password: string}) => ({
    type: LOGIN,
    payload: data,
});

export const loginSuccessed= () => ({
    type: LOGIN_SUCCESSED,
});

export const loginFailed= () => ({
    type: LOGIN_FAILED,
});

export const logout= () => ({
    type: LOGOUT,
});

