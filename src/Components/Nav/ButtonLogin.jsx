import React from "react";
import AtomButton from "../Atoms/Button";
import { useAuth } from "../context/AuthContext";

//shows in navbar

const LoginButton = () => {
  const { user } = useAuth(); // Brings user from context

  // User is logged in, don't render
  if (user) {
    return null;
  }
  // User's logged out, render button
  return <AtomButton linkTo="/login" buttonText="Entrar" />;
};

export default LoginButton;
