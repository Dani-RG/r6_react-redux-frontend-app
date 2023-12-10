import React, { useEffect } from "react";
import { getListUsers } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { IListUsers } from "../utils/interfaces";
import CreateUser from "./CreateUserModal";
import EditUser from "./EditUserModal";
import UserCard from "./UserCard";
import UserDetailModal from "./UserDetailModal";

const Main: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  const listUsersArray: IListUsers | undefined = useSelector(
    (state) => (state as any).usersData.listUsers
  );

  useEffect(() => {
    dispatch(getListUsers());
    // eslint-disable-next-line
  }, []);

  const storedState: any = useSelector((state) => (state as any).usersData);
  console.log("state.usersData:", storedState);

  return (
    <div>
      {listUsersArray ? (
        <ul>
          {listUsersArray.map((elem: any) => (
            <UserCard key={elem.id} user={elem} />
          ))}
        </ul>
      ) : (
        <p>No users available.</p>
      )}
      <UserDetailModal />
      <CreateUser />
      <EditUser />
    </div>
  );
};

export default Main;
