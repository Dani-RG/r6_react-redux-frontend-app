import React, { useState } from "react";
import { useSelector } from "react-redux";
import { IModalProps, IUser } from "../utils/interfaces";
import ReactDOM from "react-dom";
import EditUserModal from "./EditUserModal";

const UserDetailModal: React.FC<IModalProps> = ({ open, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedUser: IUser | undefined = useSelector(
    (state) => (state as any).usersData.user
  );
  console.log("data in state.userData.user:", selectedUser);

  const storedState: any = useSelector((state) => (state as any).usersData);
  console.log("state.usersData:", storedState);

  const portalContainer = document.getElementById("portal");

  if (!open || !portalContainer) return null;

  return ReactDOM.createPortal(
    <div>
      <h1>{selectedUser?.first_name}</h1>
      <button onClick={() => setIsOpen(true)}>Edit user</button>
      <EditUserModal open={isOpen} onClose={() => setIsOpen(false)} />
      <button onClick={onClose}>close</button>
    </div>,
    portalContainer
  );
};

export default UserDetailModal;
