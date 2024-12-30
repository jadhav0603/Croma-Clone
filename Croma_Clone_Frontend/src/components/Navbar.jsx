import React, { useState } from "react";
import logo from "/Home/croma_logo/Croma_logo-removebg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";

import Menu from "./Menu";
import SearchBar from "./SearchBar";
import Location from "./Location";
import LoginModal from "./LoginModal";

import { useNavigate } from "react-router-dom";
import "../css/navbar.css";

function Navbar() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false);
  

  const toggleMenu = () => setMenuVisible(!menuVisible);
  const toggleLogin = () => setLoginVisible(!loginVisible);

  const Navigate = useNavigate()

  return (
    <div className="navbar">
      <img src={logo} alt="Croma logo" onClick={()=>Navigate('/')} />
      <Menu visible={menuVisible} toggleMenu={toggleMenu} />
      <SearchBar />
      <div className="profileIcon">
        <Location />
        <FontAwesomeIcon className="loginIcon" icon={faUser} onClick={toggleLogin} />
        <FontAwesomeIcon icon={faCartShopping} onClick={()=>Navigate('/Carts')}/>
      </div>
      {loginVisible && <LoginModal closeLogin={() => setLoginVisible(false)} />}
    </div>
  );
}

export default Navbar;

