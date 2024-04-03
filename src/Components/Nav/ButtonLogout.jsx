import React from "react";
import { useAuth } from "../context/AuthContext";
import AtomButton from "../Atoms/Button";
import { errorPopupToast } from "../PopUpMsg";

const LogoutButton = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    errorPopupToast("Saliste de la aplicacion");
    };

  if (user) {
    return <AtomButton onClick={handleLogout} buttonText="Salir" />;
  }

  return null;
};

export default LogoutButton;
