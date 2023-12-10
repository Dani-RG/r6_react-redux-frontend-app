import { INewUser, IEditedUser, IUser } from "../utils/interfaces";
import { GET_LIST_USERS, GET_USER, CREATE_USER, EDIT_USER } from "./constants";

export const getListUsers = () => {
  return {
    type: GET_LIST_USERS,
  };
};

export const getUser = (data: IUser) => {
  return {
    type: GET_USER,
    data: data,
  };
};

export const createUser = (data: INewUser) => {
  return {
    type: CREATE_USER,
    data: data,
  };
};

export const editUser = (userId: number, userData: IEditedUser) => {
  return {
    type: EDIT_USER,
    userId: userId,
    userData: userData,
  };
};
