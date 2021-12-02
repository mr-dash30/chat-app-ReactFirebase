import { FaSignOutAlt } from "react-icons/fa";
import logo from "../images/chatapplogo.jpg";
import profileimage from "../images/profileimage.png";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import "./components.css";
import { auth } from "../lib/fire";

const navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light nav-div">
      <div className="container-fluid logo">
        <img src={logo} alt=" " />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end flex-grow-1 pe-3"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ">
            <li className="nav-item">
              <span className="nav-link text-light">
                {" "}
                <img src={auth.currentUser?.photoURL} alt="" />
                {auth.currentUser?.displayName}
              </span>
            </li>
            <li className="nav-item d-flex">
              <Tooltip title="sign out">
                <Button className="btn-sign-out" onClick={() => auth.signOut()}>
                  <FaSignOutAlt />
                </Button>
              </Tooltip>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
