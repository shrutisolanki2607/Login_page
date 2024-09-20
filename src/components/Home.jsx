import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const auth = localStorage.getItem("authentication");

  useEffect(() => {
    if (auth == null) {
      return navigate("/");
    }
  }, []);

  const handleLogout = ()=>{
    localStorage.removeItem('authentication');
    navigate('/');
  }

  return (
    <div>
      <div className="heading-container">
        <h1>Welcome ..... New User</h1>
       
          <button className="signIn_btn" onClick={handleLogout}>Logout</button>
        
      </div>
    </div>
  );
}

export default Home;
