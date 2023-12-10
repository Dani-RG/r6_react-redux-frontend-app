import React, { useState } from "react";
import { IUserCardProps } from "../utils/interfaces";
import { useDispatch } from "react-redux";
import { getUser } from "../redux/actions";
import UserDetailModal from "./UserDetailModal";

const UserCard: React.FunctionComponent<IUserCardProps> = ({ user }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = () => {
    dispatch(getUser(user.id));
    setIsOpen(true);
  };

  return (
    <div>
      {user.avatar ? (
        <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
      ) : (
        <img
          src={
            "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSjVU5V_Q7knbXvyWUUYAmFNOM219sLJGmh2Uf8aEd2RCw6-5Vg"
          }
          alt="default pic"
          width="128"
          height="128"
        />
      )}
      <div>
        <h2>
          {user.first_name && user.last_name
            ? `${user.first_name} ${user.last_name}`
            : user.name}
        </h2>
        {user.email && <p>Email: {user.email}</p>}
        {user.job && <p>Job: {user.job}</p>}
      </div>
      <button onClick={() => handleOnClick()}>Get details</button>
      <UserDetailModal open={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default UserCard;
