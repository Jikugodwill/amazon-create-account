import React, { useState } from "react";
import "./Signup.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verpassword, setVerpassword] = useState("");

  const handleSubmit = (e) => {
    var text1 = document.createTextNode(" Your Name is: " + name);
    var text2 = document.createTextNode(" Your Email 📧  is: " + email);
    var text3 = document.createTextNode(" Your Password is: " + password);
    var text4 = document.createTextNode(" Your Re-entered is: " + verpassword);
    document.getElementById("r_name").appendChild(text1);
    document.getElementById("r_email").appendChild(text2);
    document.getElementById("r_password").appendChild(text3);
    document.getElementById("r_verpassword").appendChild(text4);
    e.preventDefault();
  };

  return (
    <div className="signup">
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        alt="Amazon Logo"
      />
      <div className="container">
        <h1>Create account</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span className="pwd_details">
            <em>i</em> Passwords must be at least 6 characters
          </span>
          <br />
          <label id="re_enter" htmlFor="verpassword">
            Re-enter password
          </label>
          <input
            type="password"
            id="verpassword"
            value={verpassword}
            onChange={(e) => setVerpassword(e.target.value)}
            required
          />
          <button type="submit" className="createAccountButton">
            Create your Amazon Account
          </button>
        </form>
        <p>
          By creating an account, you agree to Amazon's Conditions of Use and
          Privacy Notice.
        </p>
      </div>
      <div id="output">
        <p id="r_name" className="fields"></p>
        <p id="r_email" className="fields"></p>
        <p id="r_password" className="fields"></p>
        <p id="r_verpassword" className="fields"></p>
      </div>
    </div>
  );
}

export default Signup;
