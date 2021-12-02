import React, { useState, useEffect, useRef } from "react";
import Messagescreeen from "../components/messagescreen";
import Navbar from "../components/navbar";
import SendMessage from "../components/Sendmessage";
import { db } from "../lib/fire";

const Chatscreen = () => {
  const [msg, setMsg] = useState([]);
  const messagesEndRef = useRef(null);
  useEffect(() => {
    db.collection("room")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setMsg(
          snapshot.docs.map((message) => ({
            id: message.id,
            user: message.data().user,
            userImage: message.data().userImage,
            timestamp: message.data().timestamp,
            message: message.data().msg
          }))
        )
      );
  }, []);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView();
  }, [msg]);
  return (
    <>
      <Navbar />
      {msg.length === 0 ? (
        <span> NO messages available </span>
      ) : (
        msg.map((messages) => (
          <div key={messages.id}>
            <Messagescreeen
              timestamp={messages.timestamp}
              user={messages.user}
              dp={messages.userImage}
              message={messages.message}
            />
          </div>
        ))
      )}
      <div ref={messagesEndRef} />
      <SendMessage />
    </>
  );
};

export default Chatscreen;
