import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../redux/actions";
import { IEditedUser, IUser, INewUser, IModalProps } from "../utils/interfaces";
import ReactDOM from "react-dom";

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

  const storedState: any = useSelector((state) => (state as any).usersData);
  console.log("state.usersData:", storedState);

  const portalContainer = document.getElementById("portal");

  if (!open || !portalContainer) return null;

  return ReactDOM.createPortal(
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={userUpdated.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Job:
          <input
            type="text"
            name="job"
            value={userUpdated.job}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Save</button>
      </form>
      <button onClick={onClose}>close</button>
    </>,
    portalContainer
  );
};

export default EditUserModal;