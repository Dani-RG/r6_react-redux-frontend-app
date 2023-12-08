import { IUsersAction } from "../utils/interfaces";
import { SET_LIST_USERS, SET_USER, SET_CREATE_USER } from "./constants";

export const usersData = (data = [], action: IUsersAction) => {
  switch (action.type) {
    case SET_LIST_USERS:
      console.log("SET_LIST_USERS condition", action);
      return action.data;
    case SET_USER:
      console.log("SET_USER condition", action);
      return action.data;
    case SET_CREATE_USER:
      console.log("SET_CREATE_USER condition", action);
      return action.data;
    default:
      return data;
  }
};
