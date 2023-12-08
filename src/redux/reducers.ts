import { IUser, IUsersAction } from "../utils/interfaces";
import {
  SET_LIST_USERS,
  SET_USER,
  SET_CREATE_USER,
  SET_EDIT_USER,
} from "./constants";

export const usersData = (userData = [], action: IUsersAction) => {
  switch (action.type) {
    case SET_LIST_USERS:
      return action.userData || userData;
    case SET_USER:
      return action.userData || userData;
    case SET_CREATE_USER:
      return [...userData, action.userData];
    case SET_EDIT_USER:
      if (!action.userData || !action.userData.id) {
        return userData;
      }

      return userData.map((user: IUser) => {
        if (user.id === action.userData.id) {
          return { ...user, ...action.userData };
        }
        return user;
      });

    default:
      return userData;
  }
};
