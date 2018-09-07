/* @flow */

import { AsyncStorage } from "react-native";
import { DATA_SESSION } from "../config/global";

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_SUCCESS,
  RESTORE_SESSION,
  RESTORE_REQUEST,
  RESTORE_FAILED
} from "../config/redux-events";

export function login(username, password) {
  return dispatch => {
    dispatch(loginRequest());

    setTimeout(() => {
      if (username.toLowerCase() == "test" && password == "test") {
        const session = {
          token: "abcd1234",
          username,
          email: "test@nomail.com"
        };

        AsyncStorage.setItem(DATA_SESSION, JSON.stringify(session))
          .then(() => dispatch(loginSuccess(session)))
          .catch(() => dispatch(loginFailed("Something weird happened")));
      } else {
        dispatch(loginFailed("Authentication Failed"));
      }
    }, 2000);
  };
} // login

export function restoreSession() {
  return dispatch => {
    dispatch(restoreRequest());
    AsyncStorage.getItem(DATA_SESSION)
      .then(session => {
        if (session != null) {
          dispatch(loginSuccess(JSON.parse(session)));
        } else {
          dispatch(restoreFailed());
        }
      })
      .catch(error => dispatch(restoreFailed()));
  };
} // restoreSession

export function logout() {
  AsyncStorage.removeItem(DATA_SESSION);
  return { type: LOGOUT_SUCCESS };
} // logout

function loginRequest() {
  return {
    type: LOGIN_REQUEST
  };
} //loginRequest

function loginSuccess(session) {
  return {
    type: LOGIN_SUCCESS,
    data: {
      session
    }
  };
} // loginSuccess

function loginFailed(error) {
  if (!error) {
    error = "Network Error";
  }
  return {
    type: LOGIN_FAILED,
    data: {
      error: error
    }
  };
} // loginFailed

function restoreRequest() {
  return {
    type: RESTORE_REQUEST
  };
} //restoreRequest

function restoreFailed() {
  return {
    type: RESTORE_FAILED
  };
} //restoreFailed
