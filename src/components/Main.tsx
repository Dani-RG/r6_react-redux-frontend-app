import React, { useEffect } from "react";
import { getListUsers } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { IListUsers } from "../utils/interfaces";
import CreateUser from "./CreateUser";
import EditUser from "./EditUser";
import UserCard from "./UserCard";

const Main: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  const listUsers: IListUsers | undefined = useSelector(
    (state) => (state as any)?.usersData.listUsers
  );
  console.log("data in listUsers", listUsers);

  useEffect(() => {
    dispatch(getListUsers());
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {listUsers ? (
        <ul>
          {listUsers.map((elem: any) => (
            <UserCard key={elem.id} user={elem} />
          ))}
        </ul>
      ) : (
        <p>No users available.</p>
      )}
      <CreateUser />
      <EditUser />
    </div>
  );
};

export default Main;
