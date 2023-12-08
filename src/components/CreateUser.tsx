import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../redux/actions";
import { INewUser } from "../utils/interfaces";

const CreateUser: React.FC = () => {
  const dispatch = useDispatch();

  const initialState: INewUser = {
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
    dispatch(createUser(userData));
    setUserData(initialState);
  };

  const newUser: INewUser | unknown = useSelector(
    (state: any) => state?.newUser
  );
  console.log("data in new user", newUser);

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
      <button type="submit">Create User</button>
    </form>
  );
};

export default CreateUser;
