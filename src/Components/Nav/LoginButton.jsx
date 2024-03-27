import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Button from 'react-bootstrap/Button';

const LoginButton = () => {
  const { user } = useAuth(); // Brings user from context

  if (user) {
    return null; // User is logged in, don't render 
  }

  return <Link to="/login">
  <Button className="m-2">Login</Button>
</Link>; // User's logged out, render button
};

export default LoginButton;
