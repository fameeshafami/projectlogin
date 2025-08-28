import React, { useState } from "react";

export default function SignUp() {
  const [formData, setFormData] = useState({
    Name: "",
    MobileNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Sign up successful!");
    console.log(formData);
  };

    const handleGuestLogin = () => {
 const guestData = {
      Name: "",
      MobileNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
    };

    setFormData(guestData);

    alert("Logged as Guest!");
    console.log("Guest user logged in");
  };

  return (
    <div className="signup-page">
     
      <div className="signup-left">
        <img
          src="https://i.pinimg.com/736x/a2/f0/07/a2f0071658250d32770dc899083d3c41.jpg"
          alt="Illustration"
        />
      </div>

      {/* Right Form */}
      <div className="signup-right">
        <form className="signup-form" onSubmit={handleSubmit}>

          <div className="signupp">
        <img
          src="https://cdn-icons-png.flaticon.com/128/6261/6261542.png"
          alt="Illustration"
        />
      </div>

          <h2>Sign up</h2>
          <p>Welcome <img className="welcome" src="https://cdn-icons-png.flaticon.com/128/15240/15240036.png" alt="welcome"/></p>

          <input
            type="text"
            name="Name"
            placeholder="Name"
            value={formData.Name}
            onChange={handleChange}
          />

          <input
            type="text"
            name="MobileNumber"
            placeholder="Mobile Number"
            value={formData.MobileNumber}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <div className="button-group">
    <button type="submit" className="signup-btn">Sign up</button>
    <button type="button" onClick={handleGuestLogin} className="guest-btn"> Login as Guest </button>
  </div>
          <p className="login-link">
            Already have an account? <a href="/signin">Signin</a>
          </p>
        </form>
      </div>
    </div>
  );
}
