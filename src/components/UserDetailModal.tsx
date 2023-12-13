import React, { useState } from "react";
import { useSelector } from "react-redux";
import { IModalProps, IUser } from "../utils/interfaces";
import ReactDOM from "react-dom";
import EditUserModal from "./EditUserModal";
import { StyledModal } from "./styles/UserModal.styled";

const UserDetailModal: React.FC<IModalProps> = ({ open, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedUser: IUser | undefined = useSelector(
    (state) => (state as any).usersData.user
  );

  const portalContainer = document.getElementById("portal");

  if (!open || !portalContainer) return null;

  return ReactDOM.createPortal(
    <StyledModal>
      <div className="overlay">
        <div className="modal-content">
          <img src={selectedUser?.avatar} alt="userPic" />
          <h1>
            {selectedUser?.first_name} {selectedUser?.last_name}
          </h1>
          <h2>{selectedUser?.email}</h2>
          <h4>Id: {selectedUser?.id}</h4>
          <div className="modal-btns">
            <button onClick={() => setIsOpen(true)}>Edit user</button>
            <EditUserModal open={isOpen} onClose={() => setIsOpen(false)} />
            <button onClick={onClose}>close</button>
          </div>
        </div>
      </div>
    </StyledModal>,
    portalContainer
  );
};

export default UserDetailModal;
