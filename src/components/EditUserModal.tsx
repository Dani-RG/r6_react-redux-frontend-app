import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../redux/actions";
import { IEditedUser, IUser, INewUser, IModalProps } from "../utils/interfaces";
import ReactDOM from "react-dom";
import { StyledModal } from "./styles/UserModal.styled";

const EditUserModal: React.FC<IModalProps> = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const selectedUser: IUser | INewUser | undefined = useSelector(
    (state) => (state as any).usersData.user
  );
  const userId: number = Number(selectedUser?.id);

  const initialState: IEditedUser = {
    name: "",
    job: "",
  };

  const [userUpdated, setUserUpdated] = useState(initialState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserUpdated((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userId) {
      dispatch(editUser(userId, userUpdated));
      setUserUpdated(initialState);
    } else {
      console.error("userId is undefined");
    }
  };

  const portalContainer = document.getElementById("portal");

  if (!open || !portalContainer) return null;

  return ReactDOM.createPortal(
    <StyledModal>
      <div className="overlay">
        <div className="modal-content">
          <form className="form" onSubmit={handleSubmit}>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={userUpdated.name}
              onChange={handleInputChange}
            />
            <label>Job:</label>
            <input
              type="text"
              name="job"
              value={userUpdated.job}
              onChange={handleInputChange}
            />
            <button type="submit">Save</button>
          </form>
          <button onClick={onClose}>close</button>
        </div>
      </div>
    </StyledModal>,
    portalContainer
  );
};

export default EditUserModal;
