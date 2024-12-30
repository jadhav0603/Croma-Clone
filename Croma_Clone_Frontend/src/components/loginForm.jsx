// LoginForm.jsx
import React, { useState,useContext} from "react";
import axios from "axios";
import { loginContext } from "./LoginContext";
import { useNavigate } from "react-router-dom";


const LoginForm = ({ closeLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {setIsLogin} = useContext(loginContext);

  const Navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://croma-clone-backend-d0pfyh5zg-vijays-projects-f2f3793e.vercel.app/login", { username, password })
    
        if(response.data.alert){
          setIsLogin(true)
          closeLogin()
          Navigate('/')
          alert(response.data.msg)
        }
        
        if(response.data.token){
          localStorage.setItem('token', response.data.token)
        }
      
    } catch (error) {
      if (error.response && error.response.data.alert) {
        alert(error.response.data.msg); 
      } else {
        console.error("Error during login:", error);
      }
    }
  };

  return (
    <form onSubmit={handleLogin} className="loginForm">
      <span> Please enter your Email ID or Phone number</span>
      <br />
      <input
        type="text"
        placeholder="Enter your Email or Phone number"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Enter your Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <div>
        <input type="checkbox" /> Keep me signed in <br />
      </div>
      <span>
        By continuing you agree to our{" "}
        <span style={{ color: "rgb(18,218,169)" }}>Terms of Use</span> &{" "}
        <span style={{ color: "rgb(18,218,169)" }}>Privacy Policy</span>
      </span>
      <br />
      <button type="submit">Continue</button>
    </form>
  );
};

export default LoginForm;
