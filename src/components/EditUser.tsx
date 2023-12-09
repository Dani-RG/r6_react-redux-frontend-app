import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editUser } from "../redux/actions";
import { IEditedUser } from "../utils/interfaces";
import { useParams } from "react-router-dom";

const EditUser: React.FC = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();

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
    if (userId) {
      dispatch(editUser(userId, userData));
      setUserData(initialState);
      console.log("user Data", userData);
    } else {
      console.error("userId is undefined");
    }
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
