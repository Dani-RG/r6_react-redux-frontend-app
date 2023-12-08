import { takeEvery, put } from "redux-saga/effects";
import {
  GET_LIST_USERS,
  GET_USER,
  SET_LIST_USERS,
  SET_USER,
} from "./constants";
import { IUser } from "../utils/interfaces";

function* getListUsers() {
  try {
    const response: Response = yield fetch(
      "https://reqres.in/api/users?page=2"
    );
    const listUsers: IUser[] = yield response.json();
    console.log("get list users called", listUsers);
    yield put({ type: SET_LIST_USERS });
  } catch (error) {
    console.error("Error fetching list of users", error);
  }
}

function* getUser() {
  try {
    const response: Response = yield fetch("https://reqres.in/api/users/2");
    const user: IUser = yield response.json();
    console.log("get user called", user);
    yield put({ type: SET_USER });
  } catch (error) {
    console.error("Error fetching user", error);
  }
}

function* usersSaga() {
  yield takeEvery(GET_LIST_USERS, getListUsers);
  yield takeEvery(GET_USER, getUser);
}

export default usersSaga;
