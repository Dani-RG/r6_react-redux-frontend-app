import { takeEvery, put } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";
import {
  GET_LIST_USERS,
  GET_USER,
  SET_LIST_USERS,
  SET_USER,
  CREATE_USER,
  SET_CREATE_USER,
  EDIT_USER,
  SET_EDIT_USER,
} from "./constants";
import { INewUser, IUser, IEditedUser } from "../utils/interfaces";
import { Action } from "redux";

let listUsers: any;

function* getListUsers() {
  try {
    const firstResponse: AxiosResponse = yield axios.get(
      "https://reqres.in/api/users?page=1"
    );
    const secondResponse: AxiosResponse = yield axios.get(
      "https://reqres.in/api/users?page=2"
    );
    const firstList = firstResponse.data.data;
    const secondList = secondResponse.data.data;
    listUsers = [...firstList, ...secondList];
    yield put({ type: SET_LIST_USERS, data: listUsers });
  } catch (error) {
    console.error("Error fetching list of users", error);
  }
}

function* getUser(action: Action) {
  try {
    const userId = (action as any).data;
    const response: AxiosResponse = yield axios.get(
      `https://reqres.in/api/users/${userId}`
    );
    const user: IUser = response.data.data;
    yield put({ type: SET_USER, data: user });
  } catch (error) {
    console.error("Error fetching user", error);
  }
}

function* createUser(action: Action) {
  try {
    const response: AxiosResponse = yield axios.post(
      "https://reqres.in/api/users",
      (action as any).data
    );
    const createdUser: INewUser = response.data;
    yield put({ type: SET_CREATE_USER });
    listUsers = [createdUser, ...listUsers];
    yield put({ type: SET_LIST_USERS, data: listUsers });
  } catch (error) {
    console.error("Error creating user", error);
  }
}

function* editUser(action: any) {
  try {
    const userId = (action as any).userId;
    const response: AxiosResponse = yield axios.patch(
      `https://reqres.in/api/users/${userId}`,
      {
        name: action.userData.name,
        job: action.userData.job,
      }
    );
    const editedUser: IEditedUser = response.data;
    yield put({
      type: SET_EDIT_USER,
      data: editedUser,
      userId,
    });
  } catch (error) {
    console.error("Error editing user", error);
  }
}

function* usersSaga() {
  yield takeEvery(GET_LIST_USERS, getListUsers);
  yield takeEvery(GET_USER, getUser);
  yield takeEvery(CREATE_USER, createUser);
  yield takeEvery(EDIT_USER, editUser);
}

export default usersSaga;
