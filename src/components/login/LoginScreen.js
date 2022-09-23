import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../auth/context/index";



const LoginScreen = () => {
  const navigate = useNavigate();
  const { onLogin } = useContext( AuthContext )

  const handleLogin = () => {

    onLogin('Iván Piccardo')


    navigate("/", {
      replace: true,
    });
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button onClick={handleLogin} className="btn btn-primary">
        Login
      </button>
    </div>
  );
};

export default LoginScreen;
