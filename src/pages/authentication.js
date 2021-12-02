import React from "react";
import Button from "@mui/material/Button";
import "./pages.css";
import AuthLogo from "../images/authentication.png";
import GoogleLogo from "../images/google.png";
import Tooltip from "@mui/material/Tooltip";
import { auth, provider } from "../lib/fire";

const authentication = () => {
  const signInWithGoogle = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error));
  };
  return (
    <div className="full-screen">
      <div className="center-div">
        <img src={AuthLogo} alt="google-img" />
        <div className="login-btn-div">
          <Tooltip title="Sign In">
            <Button variant="contained" onClick={signInWithGoogle}>
              <img src={GoogleLogo} alt="sign in" />
              Sign in Using google
            </Button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default authentication;
