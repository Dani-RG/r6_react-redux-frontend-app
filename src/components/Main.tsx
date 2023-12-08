import React from "react";
import { getListUsers, getUser } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { IListUsers, IUser } from "../utils/interfaces";
import EditUser from "./EditUser";
import { useParams } from "react-router-dom";

const Main: React.FunctionComponent = (props) => {
  const dispatch = useDispatch();
  const { userId } = useParams();

  // LIST USERS
  const listUsers: IListUsers | unknown = useSelector(
    (state) => (state as any)?.listUsers
  );
  console.log("data in listUsers", listUsers);

  // GET USER
  const user: IUser | unknown = useSelector((state) => (state as any)?.user);
  console.log("data in user", user);

  return (
    <div>
      <button onClick={() => dispatch(getListUsers(listUsers as IListUsers))}>
        Get List Users
      </button>
      <button onClick={() => dispatch(getUser(user as IUser))}>Get User</button>
      <EditUser userId={`${userId}`} />
    </div>
  );
};

export default Main;
