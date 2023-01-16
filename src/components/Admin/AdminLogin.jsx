import React, { useState } from "react";
import "../../css/loginPage.css";
import AdminService from "../../services/AdminService";

export default function AdminLogin() {
  const [email,setemail] = useState('');
  const [password,setPassword] = useState('');
  const [message,setMessage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    // Create an instance of the Login class
    const login = new AdminService();

    // Call the login method and pass it the username and password
    login.login(email, password)
      .then((response) => {
        // Login was successful
        console.log(response);
      })
      .catch(error => {
        setMessage("Invalid email or password");
      });
  }
  return (
  <>
    <section>
      <div className="imgBox">
        <img src="warehouse-management-software.png"/>
      </div>
      <div className="contentBox">
        <div className="formBox">
          <h3>EaseInventory</h3><br></br>
          <h2>Login</h2>
          <p>{message}</p>
          <form onSubmit={(e)=>handleSubmit(e)}>
            <div className="inputBox">
              <span>email</span>
              <input type="text" value={email} onChange={(e)=>{setemail(e.target.value)}}></input>
            </div>
            <div className="inputBox">
              <span>Password</span>
              <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
            </div>
            <div className="inputBox">
              <input type="submit" value="SignIn"></input>
            </div>
            <div className="inputBox">
              <p>Don't have an account? <a href="#">SignUp</a></p>
            </div>
          </form>
        </div>
      </div>
    </section>
  </>
  
  );
}
