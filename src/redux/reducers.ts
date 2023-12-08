import { IListUsersAction } from "../utils/interfaces";
import { GET_LIST_USERS } from "./constants";

export const listData = (data = [], action: IListUsersAction) => {
  console.log("reducer called", action);
  if (action.type === GET_LIST_USERS) {
    return data;
  } else {
    return "no action called";
  }
};
