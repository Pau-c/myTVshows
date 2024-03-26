import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { UserSchema } from "../../../Validation/inputValidation";
import Swal from "sweetalert2";
import RegisterComponent from "./RegisterComponent";
import NavBar from "../../Nav/NavBar";

export function Register() {
  const { signup } = useAuth();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setUser({ ...user, email: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setUser({ ...user, password: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await UserSchema.validate(user, { abortEarly: false });
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
      Swal.fire(error.message);
    }
  };

  return (
    <>
    
    <NavBar />
    <RegisterComponent  error={error} handleSubmit={handleSubmit} handleEmailChange={handleEmailChange} handlePasswordChange={handlePasswordChange} /></>
    );
}
