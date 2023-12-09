import React from "react";
import { IUserCardProps } from "../utils/interfaces";
import { useDispatch } from "react-redux";
import { getUser } from "../redux/actions";

const UserCard: React.FunctionComponent<IUserCardProps> = ({ user }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
      <div>
        <h2>{`${user.first_name} ${user.last_name}`}</h2>
        <p>Email: {user.email}</p>
      </div>
      <button
        onClick={() => {
          dispatch(getUser(user.id));
        }}
      >
        Get user details
      </button>
    </div>
  );
};

export default UserCard;
