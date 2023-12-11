import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import CreateUserModal from "./CreateUserModal";
import { StyledNavbar } from "./styles/Navbar.styled";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [user, setUser] = useState<any | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser);
    });

    return () => unsubscribe();
  }, []);

  if (!user) {
    return null;
  }

  const { photoURL } = user;

  return (
    <StyledNavbar>
      {location.pathname !== "/login" && (
        <div>
          <img src={photoURL} alt="logged user pic" />
          <button onClick={() => setIsOpen(true)}>Create user</button>
          <CreateUserModal open={isOpen} onClose={() => setIsOpen(false)} />
        </div>
      )}
    </StyledNavbar>
  );
};

export default Navbar;
