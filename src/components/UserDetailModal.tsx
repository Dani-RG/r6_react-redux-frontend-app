import React from "react";
import { useSelector } from "react-redux";
import { IUser } from "../utils/interfaces";

const UserDetailModal: React.FunctionComponent = () => {
  const selectedUser: IUser | undefined = useSelector(
    (state) => (state as any)?.usersData.user
  );
  console.log("data in state.userData.user:", selectedUser);

  return (
    <div>
      <h1>-----</h1>
      <h1>{selectedUser?.first_name}</h1>
      <h1>-----</h1>
    </div>
  );
};

export default UserDetailModal;
