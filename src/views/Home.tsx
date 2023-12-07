import React from "react";
import { getAuth, signOut } from "firebase/auth";

export interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  const auth = getAuth();

  return (
    <div>
      <p>Home</p>
      <button onClick={() => signOut(auth)}>Sign out</button>
    </div>
  );
};

export default Home;
