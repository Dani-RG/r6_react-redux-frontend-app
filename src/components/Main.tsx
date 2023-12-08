import React from "react";
import { getListUsers, getUser } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { IListUsers, IUser } from "../utils/interfaces";

const Main: React.FunctionComponent = (props) => {
  const dispatch = useDispatch();
  const listUsers: IListUsers | unknown = useSelector(
    (state) => (state as any)?.listUsers
  );
  console.log("data in main", listUsers);
  const user = {};

  return (
    <div>
      <button onClick={() => dispatch(getListUsers(listUsers as IListUsers))}>
        Get List Users
      </button>
      <button onClick={() => dispatch(getUser(user as IUser))}>Get User</button>
    </div>
  );
};

export default Main;
