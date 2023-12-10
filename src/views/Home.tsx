import React from "react";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";

const Home: React.FC = () => {
  return (
    <div>
      <Sidebar />
      <Main />
    </div>
  );
};

export default Home;
