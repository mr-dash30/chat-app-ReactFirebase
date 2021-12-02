import Tooltip from "@mui/material/Tooltip";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import "./components.css";
import React, { useState, useEffect } from "react";
import userAuth from "../hooks/userAuth";
import { db } from "../lib/fire";
import firebase from "firebase";

const Sendmessage = () => {
  const [msg, setMsg] = useState("");
  const user = userAuth();
  const InputEvent = (e) => {
    setMsg(e.target.value);
  };
  const sendMsg = (e) => {
    if (msg.length > 0) {
      e.preventDefault();
      db.collection("room")
        .add({
          user: user.displayName,
          userImage: user.photoURL,
          msg,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        .catch((error) => alert(error));
      setMsg("");
    }
  };
  useEffect(() => {
    const listener = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);
  return (
    <>
      <div className="send-div">
        <div className="send-div-container">
          <div className="send-box">
            <input
              value={msg}
              onChange={InputEvent}
              placeholder="Type Message ..."
            />
          </div>
          <div className="send-btn-div">
            <Tooltip title="send">
              <Button className="send-btn" onClick={sendMsg}>
                <SendIcon />
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sendmessage;
