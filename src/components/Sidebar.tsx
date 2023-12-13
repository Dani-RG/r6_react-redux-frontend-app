import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { StyledSidebar } from "../components/styles/Sidebar.styled";
import { useSidebar } from "../context/SidebarContext";

const Sidebar: React.FC = () => {
  const auth = getAuth();
  const [user, setUser] = useState<any | null>(null);
  const { isSidebarOpen } = useSidebar();

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
      {isSidebarOpen && location.pathname !== "/login" && (
        <StyledSidebar>
          <div>
            <h2>{displayName}</h2>
            <h3>{email}</h3>
          </div>
          <button onClick={() => signOut(auth)}>Log out</button>
        </StyledSidebar>
      )}
    </div>
  );
};

export default Sidebar;
