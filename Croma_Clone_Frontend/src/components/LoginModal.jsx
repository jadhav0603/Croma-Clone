// LoginModal.js
import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import "../css/loginModal.css";

const LoginModal = ({ closeLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const modalRef = useRef(null);

  useEffect(() => {
    // Function to check if click is outside of modal
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeLogin();
      }
    };

    // Attach event listener to handle clicks
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeLogin]);

  return (
    <div className="loginModal">
      <div className="modalContent" ref={modalRef}>
        <div className="modalHeader">
          <FontAwesomeIcon icon={faXmark} onClick={closeLogin} />
        </div>
        <div className="buttonGroup">
          <button onClick={() => setIsLogin(true)} className={isLogin ? "active" : ""}>
            Login
          </button>
          <button onClick={() => setIsLogin(false)} className={!isLogin ? "active" : ""}>
            Create Account
          </button>
        </div>
        <div id="loginDetails">
          {isLogin ? <LoginForm closeLogin={closeLogin} /> : <RegisterForm closeLogin={closeLogin} />}
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
