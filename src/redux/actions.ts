import { INewUser, IUser, IEditedUser } from "../utils/interfaces";
import {
  GET_LIST_USERS,
  GET_USER,
  CREATE_USER,
  SET_CREATE_USER,
  EDIT_USER,
  SET_EDIT_USER,
} from "./constants";

export const getListUsers = () => {
  return {
    type: GET_LIST_USERS,
  };
};

export const getUser = (data: IUser) => {
  console.log("get user called", data);
  return {
    type: GET_USER,
  };
};

export const createUser = (data: INewUser) => {
  console.log("create user called", data);
  return {
    type: CREATE_USER,
    data,
  };
};

export const setCreateUser = () => {
  console.log("set create user called");
  return {
    type: SET_CREATE_USER,
  };
};

export const editUser = (userId: string, data: IEditedUser) => {
  console.log("edit user called", data);
  return {
    type: EDIT_USER,
    data,
  };
};

export const setEditUser = () => {
  console.log("set edit user called");
  return {
    type: SET_EDIT_USER,
  };
};
