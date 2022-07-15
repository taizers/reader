import {
    LOGIN,
    LOGIN_SUCCESSED,
    LOGIN_FAILED,
    LOGOUT,
    SIGNUP,
    SIGNUP_SUCCESSED,
    SIGNUP_FAILED,
    SET_LOGIN_LOADING,
} from '../constants/types'

export const login = (data: {email: string; password: string}) => ({
    type: LOGIN,
    payload: data,
});

export const loginSuccessed= () => ({
    type: LOGIN_SUCCESSED,
});

export const setAuthLoading= (bool: boolean) => ({
    type: SET_LOGIN_LOADING,
    payload: bool,
});

export const loginFailed= () => ({
    type: LOGIN_FAILED,
});

export const signUp = (data: { email: string; password: string, name: string}) => ({
    type: SIGNUP,
    payload: data,
});

export const signUpSuccessed= () => ({
    type: SIGNUP_SUCCESSED,
});

export const signUpFailed= () => ({
    type: SIGNUP_FAILED,
});

export const logout= () => ({
    type: LOGOUT,
});

