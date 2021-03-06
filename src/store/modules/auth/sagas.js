import { takeLatest, call, put, all } from 'redux-saga/effects';

import { toast } from 'react-toastify';
import history from '../../../services/history';
import api from '../../../services/api';

import { singInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'session', {
      email,
      password,
    });

    const { token, user } = response.data;
    // api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(singInSuccess(token, user));

    history.push('/home');
  } catch (err) {
    toast.error('Falha na autenticação, verifique seus dados.');

    yield put(signFailure());
  }
}

export function* signUP({ payload }) {
  try {
    const { name, email, password, publisher_id, admin = false } = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
      publisher_id,
      admin,
    });

    toast.sucess('Usuário Cadastrado com sucesso!');
  } catch (err) {
    toast.error('Falha no cadastro, verifique seus dados');

    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUP),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
