import React from "react";
import { useLocation } from "react-router-dom";

const Navbar: React.FunctionComponent = () => {
  return (
    <div>
      {useLocation().pathname !== "/login" && (
        <div>
          <div>Navbar</div>
          <button
            onClick={() => {
              alert("open create user modal");
            }}
          >
            Add user
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
