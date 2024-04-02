import React from "react";
import { useAuth } from "../context/AuthContext";
import Swal from "sweetalert2";
import AtomButton from "../Atoms/Button";

const LogoutButton = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    Swal.fire("Logged Out");
  };

  if (user) {
    return <AtomButton onClick={handleLogout} buttonText="Logout" />;
  }

  return null;
};

export default LogoutButton;
