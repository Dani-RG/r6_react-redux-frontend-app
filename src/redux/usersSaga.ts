import { takeEvery, put } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";
import {
  GET_LIST_USERS,
  GET_USER,
  SET_LIST_USERS,
  SET_USER,
  SET_CREATE_USER,
  CREATE_USER,
} from "./constants";
import { INewUser, IUser } from "../utils/interfaces";

function* getListUsers() {
  try {
    const response: AxiosResponse<IUser[]> = yield axios.get(
      "https://reqres.in/api/users?page=2"
    );
    const listUsers: IUser[] = response.data;
    console.log("get list users called", listUsers);
    yield put({ type: SET_LIST_USERS });
  } catch (error) {
    console.error("Error fetching list of users", error);
  }
}

function* getUser() {
  try {
    const response: AxiosResponse<IUser> = yield axios.get(
      "https://reqres.in/api/users/2"
    );
    const user: IUser = response.data;
    console.log("get user called", user);
    yield put({ type: SET_USER });
  } catch (error) {
    console.error("Error fetching user", error);
  }
}

function* createUser(action: { type: typeof CREATE_USER; userData: INewUser }) {
  try {
    const response: AxiosResponse<IUser> = yield axios.post(
      "https://reqres.in/api/users",
      action.userData
    );
    const createdUser: IUser = response.data;
    console.log("create user called", createdUser);
    yield put({ type: SET_CREATE_USER });
  } catch (error) {
    console.error("Error creating user", error);
  }
}

function* usersSaga() {
  yield takeEvery(GET_LIST_USERS, getListUsers);
  yield takeEvery(GET_USER, getUser);
  yield takeEvery(CREATE_USER, createUser);
}

export default usersSaga;
