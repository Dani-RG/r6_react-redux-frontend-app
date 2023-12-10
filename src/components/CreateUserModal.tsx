import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../redux/actions";
import { INewUser, IModalProps } from "../utils/interfaces";
import ReactDOM from "react-dom";

const CreateUserModal: React.FC<IModalProps> = ({ open, onClose }) => {
  const dispatch = useDispatch();

  const initialState: INewUser = {
    name: "",
    job: "",
  };

  const [userDefinition, setUserDefinition] = useState(initialState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDefinition((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(createUser(userDefinition));
    setUserDefinition(initialState);
  };

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
            value={userDefinition.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Job:
          <input
            type="text"
            name="job"
            value={userDefinition.job}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Create User</button>
      </form>
      <button onClick={onClose}>close</button>
    </>,
    portalContainer
  );
};

export default CreateUserModal;
