import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const Sidebar: React.FC = () => {
  const auth = getAuth();
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser);
    });

    return () => unsubscribe();
    //eslint-disable-next-line
  }, []);

  const location = useLocation();

  if (!user) {
    return null;
  }

  const { displayName, email } = user;

  return (
    <div>
      {location.pathname !== "/login" && (
        <div>
          <div>
            <h2>{displayName}</h2>
            <h3>{email}</h3>
          </div>
          <button onClick={() => signOut(auth)}>Log out</button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
