import React, { useEffect } from "react";
import { getListUsers, getUser } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { IListUsers, IUser } from "../utils/interfaces";
import CreateUser from "./CreateUser";
import EditUser from "./EditUser";
import { useParams } from "react-router-dom";

const Main: React.FunctionComponent = (props) => {
  const dispatch = useDispatch();
  const { userId } = useParams();

  // LIST USERS
  const listUsers: IListUsers | undefined = useSelector(
    (state) => (state as any)?.listUsers
  );
  console.log("data in listUsers", listUsers);

  // GET USER
  const user: IUser | undefined = useSelector((state) => (state as any)?.user);
  console.log("data in user", user);

  useEffect(() => {
    dispatch(getListUsers());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    console.log("use effect data in listUsers", listUsers);
  }, [listUsers]);

  return (
    <div>
      {listUsers ? (
        <ul>
          {listUsers.map((user: any) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : (
        <p>No users available.</p>
      )}
      <button onClick={() => dispatch(getUser(user as IUser))}>Get User</button>
      <button onClick={() => console.log("data in list-Users", listUsers)}>
        Console list users
      </button>
      <CreateUser />
      <EditUser userId={`${userId}`} />
    </div>
  );
};

export default Main;
