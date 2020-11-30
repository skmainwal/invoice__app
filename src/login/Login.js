import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "../firebase";
import "./Login.css";

import { useDispatch } from "react-redux";
import { User } from "../store/action";

function Login() {
  //   const [{}, dispatch] = useStateValue();
  const dispatch = useDispatch();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch(User(result.user));
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img src={`./whatsapp_img.jpg`} alt="" />
        <div className="login__text">
          <h1> Sign in to Invoice App</h1>
        </div>
        <Button type="submit" onClick={signIn}>
          Sign In with Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
