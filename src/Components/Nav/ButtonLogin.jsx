import React from "react";
import AtomButton from "../Atoms/Button";
import { useAuth } from "../context/AuthContext";

const LoginButton = () => {
  const { user } = useAuth(); // Brings user from context

  if (user) {
    return null; // User is logged in, don't render 
  }

  return <AtomButton linkTo="/login" buttonText="Login" />; // User's logged out, render button
};

export default LoginButton;
