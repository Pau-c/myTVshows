import React from "react";
import { useAuth } from "../context/AuthContext";
import Swal from "sweetalert2";
import Button from 'react-bootstrap/Button';

const LogoutButton = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    Swal.fire("Logged Out");
  };

  if (user) {
    return <Button className="m-2 mx-2" onClick={handleLogout}>Logout</Button>;
  }

  return null;
};

export default LogoutButton;
