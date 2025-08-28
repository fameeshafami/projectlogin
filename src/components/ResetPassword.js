import React, { useState } from "react";

export default function ResetPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password reset link sent to:", email);
    alert("If the email exists, a reset link will be sent.");
    setEmail("");
  };

  return (
    <div className="reset-container">
      <div className="reset-card">
        <h2>Reset Password</h2>
        <p>Enter your registered email address to receive a password reset link.</p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button type="submit" className="reset-btn">
            Send Reset Link
          </button>
        </form>

        <a href="/signin" className="back-link">
          ← Back to Sign In
        </a>
      </div>
    </div>
  );
}
