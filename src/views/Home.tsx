import React from "react";
import { getAuth, signOut } from "firebase/auth";
import Main from "../components/Main";
import CreateUser from "../components/CreateUser";

const Home: React.FunctionComponent = (props) => {
  const auth = getAuth();

  return (
    <div>
      <p>Home</p>
      <Main />
      <CreateUser />
      <button onClick={() => signOut(auth)}>Sign out</button>
    </div>
  );
};

export default Home;
