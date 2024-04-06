import React from "react";
import { useAuth } from "../context/AuthContext";
import AtomButton from "../Atoms/Button";
import { popupToast } from "../PopUpMsg";
import { SUCCESS_COLOR } from "../../constants/constants";

const LogoutButton = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    popupToast("Saliste de la aplicacion", `${SUCCESS_COLOR}`, "success");
  };

  if (user) {
    return <AtomButton className="glowButton" onClick={handleLogout} buttonText="Salir" />;
  }

  return null;
};

export default LogoutButton;
