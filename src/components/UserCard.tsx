import React, { useState } from "react";
import { IUserCardProps } from "../utils/interfaces";
import { useDispatch } from "react-redux";
import { getUser } from "../redux/actions";
import UserDetailModal from "./UserDetailModal";
import defaultUser from "../images/default_user.jpeg";
import { StyledUserCard } from "./styles/UserCard.styled";

const UserCard: React.FunctionComponent<IUserCardProps> = ({ user }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = () => {
    dispatch(getUser(user.id));
    setIsOpen(true);
  };

  return (
    <StyledUserCard>
      {user.avatar ? (
        <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
      ) : (
        <img src={defaultUser} alt="default pic" width="128" height="128" />
      )}
      <div>
        <h2>
          {user.first_name && user.last_name
            ? `${user.first_name} ${user.last_name}`
            : user.name}
        </h2>
        {user.job && <p>Job: {user.job}</p>}
      </div>
      <div>
        {user.first_name ? (
          <button onClick={() => handleOnClick()}>Get details</button>
        ) : (
          ""
        )}
      </div>
      <UserDetailModal open={isOpen} onClose={() => setIsOpen(false)} />
    </StyledUserCard>
  );
};

export default UserCard;
