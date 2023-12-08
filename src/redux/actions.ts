import { IListUsers } from "../utils/interfaces";
import { GET_LIST_USERS } from "./constants";

export const getListUsers = (data: IListUsers) => {
  console.log("get list users called", data);
  return {
    type: GET_LIST_USERS,
    data: data,
  };
};
