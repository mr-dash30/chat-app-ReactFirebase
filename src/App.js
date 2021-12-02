import "./styles.css";
import Authentication from "./pages/authentication";
import ChatScreen from "./pages/chat-screen";
import userauth from "./hooks/userAuth";
// import { useEffect, useRef } from "react";
const App = () => {
  // const messageEl = useRef(null);

  // useEffect(() => {
  //   if (messageEl) {
  //     messageEl.current.addEventListener("DOMNodeInserted", (event) => {
  //       const { currentTarget: target } = event;
  //       target.scroll({ top: target.scrollHeight, behavior: "smooth" });
  //     });
  //   }
  // }, []);
  const user = userauth();
  return <>{user ? <ChatScreen /> : <Authentication />}</>;
};

export default App;
