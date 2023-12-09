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

function* getListUsers() {
  try {
    const response: AxiosResponse = yield axios.get(
      "https://reqres.in/api/users?page=2"
    );
    const listUsers: any = response.data.data;
    console.log("get list users called", listUsers);
    yield put({ type: SET_LIST_USERS, data: listUsers });
  } catch (error) {
    console.error("Error fetching list of users", error);
  }
}

function* getUser() {
  try {
    const response: AxiosResponse = yield axios.get(
      "https://reqres.in/api/users/2"
    );
    const user: IUser = response.data;
    console.log("get user called", user);
    yield put({ type: SET_USER, data: user });
  } catch (error) {
    console.error("Error fetching user", error);
  }
}

function* createUser(action: { type: typeof CREATE_USER; data: INewUser }) {
  try {
    const response: AxiosResponse = yield axios.post(
      "https://reqres.in/api/users",
      action.data
    );
    const createdUser: INewUser = response.data;
    console.log("create user called", createdUser);
    yield put({ type: SET_CREATE_USER });
  } catch (error) {
    console.error("Error creating user", error);
  }
}

function* editUser(action: { type: typeof EDIT_USER; data: IEditedUser }) {
  try {
    const response: AxiosResponse = yield axios.patch(
      "https://reqres.in/api/users/3",
      action.data
    );
    const editedUser: IEditedUser = response.data;
    console.log("edited user called", editedUser);
    yield put({ type: SET_EDIT_USER });
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
