import React, { useState } from "react";
import axios from "axios";


const RegisterForm = ({ closeLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [validMob, setValidMob] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [validPass, setValidPass] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();
    validatePhoneAndPass();
  }

  const handleRegister = async () => {
    try {
      await axios.post("https://croma-clone-backend-d0pfyh5zg-vijays-projects-f2f3793e.vercel.app/register", { name, email, mobile, password: regPassword })
        .then((response) => {
          if (response.data.alert) {
            alert(response.data.msg)
          }
          closeLogin();
        })
        .catch((error) => {
          if (error.response && error.response.data.alert) {
            alert(error.response.data.msg);
          } else {
            console.error("Network or Server Error:", error);
          }
        })

    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  function validatePhoneAndPass() {
    let pattern = /^\d{10}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W_]).{7,}$/;

    if (!pattern.test(mobile) && !passwordRegex.test(regPassword)) {
      setValidMob("Invalid Mobile Number")
      setValidPass('Password should contains atleast one [A-z][@ # $ & % *][0-9]')
    }
    else if(pattern.test(mobile) && !passwordRegex.test(regPassword)){
      setValidMob('')
      setValidPass('Password should contains atleast one [A-z][@ # $ & % *][0-9]')
    }
    else if(!pattern.test(mobile) && passwordRegex.test(regPassword)){
      setValidMob("Invalid Mobile Number")
      setValidPass('')
    }
    else {
      setValidMob('')
      setValidPass('')
      handleRegister()
    }
  }

  // function handlePassword(){
  //   const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W_]).{7,}$/;
  //   if(!passwordRegex.test(regPassword)){
  //     setValidPass('Password should contains atleast one [A-z][@ # $ & % *][0-9]')
  //   }
  //   else{
  //     setValidPass('')
  //   }
    
    
  // }

  return (
    <form onSubmit={handleForm} className="registerForm" >
      <h3>Create Account</h3>
      <input
        type="text"
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="email"
        placeholder="Enter Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Enter Your Mobile Number"
        value={mobile}
        onChange={(e) => {
          const value = e.target.value;
          if (/^\d*$/.test(value) && value.length <= 10) {
            setMobile(value);
          }
        }}
        maxLength={10}
        required
      />
      {validMob && <span style={{color:"red"}}> {validMob} </span>}
      

      <input
        type="password"
        placeholder="Create Password"
        value={regPassword}
        onChange={(e) =>setRegPassword(e.target.value)
         }
        required
      />

      {validPass && <span style={{color:"red"}}> {validPass} </span>}
      
      <button type="submit">Create Account</button>
    </form>
  );
};

export default RegisterForm;
