import { IListUsers, INewUser, IUser } from "../utils/interfaces";
import {
  GET_LIST_USERS,
  GET_USER,
  CREATE_USER,
  SET_CREATE_USER,
} from "./constants";

export const getListUsers = (data: IListUsers) => {
  console.log("get list users called", data);
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

export const createUser = (userData: INewUser) => {
  console.log("create user called", userData);
  return {
    type: CREATE_USER,
    userData,
  };
};

export const setCreateUser = () => {
  console.log("set create user called");
  return {
    type: SET_CREATE_USER,
  };
};
