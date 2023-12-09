import { IUser, IUsersAction } from "../utils/interfaces";
import {
  SET_LIST_USERS,
  SET_USER,
  SET_CREATE_USER,
  SET_EDIT_USER,
} from "./constants";

const initialState = {
  listUsers: [],
  user: null,
};

export const usersData = (state = initialState, action: IUsersAction) => {
  switch (action.type) {
    case SET_LIST_USERS:
      return { ...state, listUsers: action.data };
    case SET_USER:
      return { ...state, user: action.data };
    case SET_CREATE_USER:
      return { userDefinition: action.data, ...state };
    case SET_EDIT_USER:
      if (!action.data.id) {
        return state;
      }
      return {
        ...state,
        listUsers: state.listUsers.map((user: IUser) => {
          if (user.id === action.data.id) {
            return { ...user, ...action.data };
          }
          return user;
        }),
      };

    default:
      return state;
  }
};
