import React, { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import "../assest/global.css";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { onSignUp } from "../redux/UserConfigSlice";
import { useNavigate } from "react-router-dom";
import { supabase } from "../CreateClient";
import circle_img from "../assest/dummy.png";
import Input from "./Inputtag.jsx";
import useLoginHook from "../Hook/UseLoginHook.js";

function Welcome() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [flag, setFlag] = useState(true);

  const { authentication } = useLoginHook();

  const handleSignUp = async () => {
    if (!name || !email || !pass) {
      alert("Please enter your name, email, and password");
      return;
    }

    const newUser = {
      id: uuidv4(),
      Name: name,
      email: email,
      password: pass,
    };

    const { error: insertError } = await supabase.from("User").insert(newUser);

    if (insertError) {
      console.error("Error inserting user data:", insertError.message);
      return;
    }

    const { error } = await supabase.auth.signUp({
      email,
      password: pass,
    });

    if (error) {
      console.error("Error signing up:", error.message);
      return;
    }
    dispatch(onSignUp(newUser));

    localStorage.setItem("authentication", "true");
    setName("");
    setEmail("");
    setPass("");
    navigate("./Home");
  };

  const handleSignIn = async () => {
    if (!name || !email || !pass) {
      alert("Please enter your email and password");
      return;
    }
  
    const { data, error } = await supabase.from("User").select();
  
    if (error) {
      console.error("Error fetching users:", error.message);
      return;
    }
  
    let userFound = false;
  
    for (let i = 0; i < data.length; i++) {
      if (data[i].email === email && data[i].password === pass) {
        localStorage.setItem("authentication", "true");
        navigate("/Home");
        userFound = true;
        break; 
      }
    }
  
    
    if (!userFound) {
      alert("Invalid User Credentials");
      setName("");
      setEmail("");
      setPass("");
    }
  };
  

  return (
    <div className="container">
      <div className="data-container">
        <div className="main-container">
          <h1>Welcome back</h1>
          <h6 className="subheading">
            Welcome back! Please enter your details
          </h6>
          <div>
            <Input className="value_container" value={name} label="Name" onChange={(e) => {setName(e.target.value)}}/>
            <Input className="value_container" value={email} label="Email"onChange={(e) => {setEmail(e.target.value)}}/>
            <Input className="value_container"value={pass} label="Password" onChange={(e) => {setPass(e.target.value)}} type="password"/>
            <div className="gen_div">
              <span><input type="checkbox" /> Remember me for 30 days</span>
              <a href="#">Forget Password</a>
            </div>
          </div>
          {flag ? (
            <div>
              <button className="signIn_btn" onClick={handleSignIn}>
                Sign In
              </button>
              <button className="signUp_btn">
                <FcGoogle /> Sign in with Google{" "}
              </button>

              <div className="signup_prompt">
                <span onClick={() => {setFlag(false)}}>
                  Don't have an account? <a href="#">Sign up</a>
                </span>
              </div>
            </div>
          ) : (
            <button className="signIn_btn" onClick={handleSignUp}>
              Sign Up
            </button>
          )}
        </div>
        <div className="image-container">
          <img src={circle_img} alt="cicle" className="responsive-image" />
        </div>
      </div>
    </div>
  );
}

export default Welcome;
