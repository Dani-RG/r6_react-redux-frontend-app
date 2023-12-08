import { IUsersAction } from "../utils/interfaces";
import {
  SET_LIST_USERS,
  SET_USER,
  SET_CREATE_USER,
  SET_EDIT_USER,
} from "./constants";

export const usersData = (userData = [], action: IUsersAction) => {
  switch (action.type) {
    case SET_LIST_USERS:
      console.log("SET_LIST_USERS condition", action);
      return action.userData;
    case SET_USER:
      console.log("SET_USER condition", action);
      return action.userData;
    case SET_CREATE_USER:
      console.log("SET_CREATE_USER condition", action);
      return action.userData;
    case SET_EDIT_USER:
      console.log("SET_EDIT_USER condition", action);
      return action.userData;
    default:
      return userData;
  }
};
