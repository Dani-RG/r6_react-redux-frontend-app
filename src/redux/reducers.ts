import { IUsersAction } from "../utils/interfaces";
import { GET_LIST_USERS, GET_USER } from "./constants";

export const usersData = (data = [], action: IUsersAction) => {
  switch (action.type) {
    case GET_LIST_USERS:
      console.log("GET_LIST_USERS condition", action);
      return [action.data, ...data];
    case GET_USER:
      console.log("GET_USER condition", action);
      return action.data;
    default:
      return [];
  }
};
