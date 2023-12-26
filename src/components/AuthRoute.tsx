import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { IAuthRouteProps } from "../utils/interfaces";

const AuthRoute: React.FC<IAuthRouteProps> = (props) => {
  const { children } = props;
  const auth = getAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const AuthCheck = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoading(false);
      } else {
        console.log("unauthorized");
        alert("unauthorized");
        navigate("/login");
      }
    });

    return () => AuthCheck();
    //eslint-disable-next-line
  }, [auth]);

  if (loading) return <p>Loading...</p>;

  return <>{children}</>;
};

export default AuthRoute;
