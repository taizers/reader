import { call, put, takeEvery, all, fork, select } from "redux-saga/effects";
import { auth as authApi } from '../api/index';
import { auth as authAction } from '../actions/index';
import {
    LOGIN,
    SIGNUP,
} from "../constants/types";

import { history } from '../router/history';
import { setToken } from '../utils/index';

function* login({ payload }) {
    yield put(authAction.setAuthLoading(true));
    try {
        const { data } = yield call(authApi.login, payload);
        yield setToken(data.token);
        yield put(authAction.loginSuccessed(data.user));
    } catch (error) {
        // yield toast.error(error.message);
    } finally {
        yield put(authAction.setAuthLoading(false));
    }
}

function* signUpUser({ payload }) {
    yield put(authAction.setAuthLoading(true));
    try {
        yield call(authApi.signUp, payload);
        yield history.push('/login');
    } catch (error) {
        // yield toast.error(error.message);
    } finally {
        yield put(authAction.setAuthLoading(false));
    }
}

function* watchLogin() {
    yield takeEvery(LOGIN, login);
}

function* watchSignUp() {
    yield takeEvery(SIGNUP, signUpUser);
}

export default function* rootSaga() {
    yield all([
      fork(watchLogin),
      fork(watchSignUp),
    ]);
}
