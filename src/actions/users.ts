import {
    DELETE_USER,
    DELETE_USER_FAILED,
    DELETE_USER_SUCCESSED,
    GET_ALL_USERS,
    GET_ALL_USERS_FAILED,
    GET_ALL_USERS_SUCCESSED,
    GET_USER,
    GET_USER_FAILED,
    GET_USER_SUCCESSED,
    SET_USERS_LOADING,
    UPDATE_USER,
    UPDATE_USER_FAILED,
    UPDATE_USER_SUCCESSED,
} from '../constants/types'

export const getAllUsers = () => ({
    type: GET_ALL_USERS,
});

export const getAllUsersFailed= () => ({
    type: GET_ALL_USERS_FAILED,
});

export const getAllUsersSuccessed= (data: Array<object>) => ({
    type: GET_ALL_USERS_SUCCESSED,
    payload: data,
});

export const getUser = () => ({
    type: GET_USER,
});

export const getUserFailed= () => ({
    type: GET_USER_FAILED,
});

export const getUserSuccessed= (data: {id: string; name: string; email: string}) => ({
    type: GET_USER_SUCCESSED,
    payload: data,
});

export const updateUser = () => ({
    type: UPDATE_USER,
});

export const updateUserFailed= () => ({
    type: UPDATE_USER_FAILED,
});

export const updateUserSuccessed= (data: {id: string; name: string; email: string}) => ({
    type: UPDATE_USER_SUCCESSED,
    payload: data,
});

export const deleteUser = () => ({
    type: DELETE_USER,
});

export const deleteUserFailed= () => ({
    type: DELETE_USER_FAILED,
});

export const deleteUserSuccessed= () => ({
    type: DELETE_USER_SUCCESSED,
});

export const setUsersLoading= (bool: boolean) => ({
    type: SET_USERS_LOADING,
    payload: bool,
});
