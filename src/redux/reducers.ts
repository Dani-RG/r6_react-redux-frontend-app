import { IEditedUser, INewUser, IUser } from "../utils/interfaces";
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

export const usersData = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_LIST_USERS:
      return { ...state, listUsers: action.data };
    case SET_USER:
      return { ...state, user: action.data };
    case SET_CREATE_USER:
      return { userDefinition: action.data, ...state };
    case SET_EDIT_USER:
      if (!action.userId) {
        console.log("no id, action", action);
        return state;
      } else {
        console.log("with id, action", action);
        const updatedListUsers: any = state.listUsers.map(
          (user: IUser | INewUser | IEditedUser) => {
            if (user.id === action.userId) {
              console.log("action.data", action.data);
              return action.data;
            }
            console.log("user", user);
            return user;
          }
        );
        console.log("updatedListUsers", updatedListUsers);

        return {
          ...state,
          listUsers: updatedListUsers,
        };
      }
    default:
      return state;
  }
};
