import React, { useEffect } from "react";
import { getListUsers } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { IListUsers } from "../utils/interfaces";
import UserCard from "./UserCard";

const Main: React.FC = () => {
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
    </div>
  );
};

export default Main;
