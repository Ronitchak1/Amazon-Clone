import React from 'react';
import "../styles/Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
        <Link to="/">
        <img 
            className="login__logo"
            src="" 
            alt="Amazon Logo"
        />
        </Link>

        <div className="login__container">
                <h1>Sign In</h1>
        </div>
    </div>
  )
}

export default Login