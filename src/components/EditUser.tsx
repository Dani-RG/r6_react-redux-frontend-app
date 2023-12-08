import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editUser } from "../redux/actions";
import { IEditedUser, IEditUserProps } from "../utils/interfaces";

const EditUser: React.FC<IEditUserProps> = ({ userId }) => {
  const dispatch = useDispatch();

  const initialState: IEditedUser = {
    name: "",
    job: "",
  };

  const [userData, setUserData] = useState(initialState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(editUser(userId, userData));
    setUserData(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Job:
        <input
          type="text"
          name="job"
          value={userData.job}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Save</button>
    </form>
  );
};

export default EditUser;
