import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { successPopupToast, errorPopupToast } from "../../PopUpMsg";
import NavBar from "../../Nav/NavBar";
import { UserSchema } from "../../../Validation/inputValidation";
import LoginComponent from "./LoginComponent";

export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login, loginWithGoogle } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Validate the user input
      await UserSchema.validate(user, { abortEarly: false });
      await login(user.email, user.password);
      successPopupToast("Usuario autenticado");
      navigate("/");
    } catch (error) {
      console.log(error.message);
      errorPopupToast("Error en usuario o pass");
    }
  };

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      console.log(error.message);
      errorPopupToast("error.message");
    }
  };

  return (
    <>
      <NavBar />

      <LoginComponent
        error={error}
        handleChange={handleChange}
        handleGoogleSignin={handleGoogleSignin}
        handleSubmit={handleSubmit}
      />
    </>
  );
}
