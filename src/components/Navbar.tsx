import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import CreateUserModal from "./CreateUserModal";
import { StyledNavbar } from "./styles/Navbar.styled";
import { MdOutlineAddCircle } from "react-icons/md";
import { useSidebar } from "../context/SidebarContext";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [user, setUser] = useState<any | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const { toggleSidebar } = useSidebar();

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
          <button onClick={toggleSidebar}>
            <img src={photoURL} alt={"userPic"} />
          </button>
          <button className="addUserBtn" onClick={() => setIsOpen(true)}>
            <MdOutlineAddCircle />
          </button>
          <CreateUserModal open={isOpen} onClose={() => setIsOpen(false)} />
        </div>
      )}
    </StyledNavbar>
  );
};

export default Navbar;
