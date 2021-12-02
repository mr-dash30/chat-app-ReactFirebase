import Firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const app = {
  apiKey: "AIzaSyAP5diWyvWrpSTNoqD3PGcuBdr-UzaQnfI",
  authDomain: "chat-app-ec978.firebaseapp.com",
  projectId: "chat-app-ec978",
  storageBucket: "chat-app-ec978.appspot.com",
  messagingSenderId: "1041037826122",
  appId: "1:1041037826122:web:0b9450cb6271b81ab3aeb3"
};

const FirebaseApp = Firebase.initializeApp(app);
const db = FirebaseApp.firestore();
const auth = Firebase.auth();
const provider = new Firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
