import { IListUsers, IUser } from "../utils/interfaces";
import { GET_LIST_USERS, GET_USER } from "./constants";

export const getListUsers = (data: IListUsers) => {
  console.log("get list users called", data);
  return {
    type: GET_LIST_USERS,
    data: data,
  };
};

export const getUser = (data: IUser) => {
  console.log("get user called", data);
  return {
    type: GET_USER,
    data: data,
  };
};
