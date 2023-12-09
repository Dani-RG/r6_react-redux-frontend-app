import React from "react";
import { getAuth, signOut } from "firebase/auth";
import Main from "../components/Main";

const Home: React.FunctionComponent = (props) => {
  const auth = getAuth();

  return (
    <div>
      <Main />
      <button onClick={() => signOut(auth)}>Sign out</button>
    </div>
  );
};

export default Home;
