import React from "react";
import { IUserCardProps } from "../utils/interfaces";

const UserCard: React.FunctionComponent<IUserCardProps> = ({ user }) => {
  console.log("user", user);

  return (
    <div className="user-card">
      <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
      <div>
        <h2>{`${user.first_name} ${user.last_name}`}</h2>
        <p>Email: {user.email}</p>
      </div>
    </div>
  );
};

export default UserCard;
