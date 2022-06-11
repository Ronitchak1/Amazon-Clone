import React, { useState } from 'react';
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from '../firebase';

function Login() {

  const navigate = useNavigate();
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();

    //Firebase Login 
    auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => {
          navigate('/')
        })
        .catch(error => alert(error.message))
  }

  const register = (e) => {
    e.preventDefault();

    //Firebase Register
    auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth) => {
          //Successfully created User with Password
          if(auth){
            navigate('/')
          }
        })
        .catch(error => alert(error.message));
  }

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
          <form>
              <h5>E-mail</h5>
              <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

              <h5>Password</h5>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

              <button className='login__signInButton' type='submit' onClick={signIn}>Sign In</button>
          </form>

          <p>
            By signing-in you agree to AMAZON FAKE CLONE Conditons
            of Use & Sale. Please see our Privacy Notice, our
            Cookies Notice and our interest-Based Ads Notice.
          </p>
          <button className='login__registerButton' onClick={register}>Create your Amazon Account</button>
        </div>
    </div>
  )
}

export default Login