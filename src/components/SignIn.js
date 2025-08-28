import { Link } from "react-router-dom";


export default function SignIn() {
  return (
    <div className="container">
      <div className="illustration">
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/user-account-sign-up-illustration-download-in-svg-png-gif-file-formats--registration-register-form-create-or-pack-interface-illustrations-3723267.png?f=webp" alt="Sign in" />
      </div>
      <div className="form-card">
        <h2>Sign in</h2>
        <p>Welcome Back !</p>
        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Password" />
        <label>
          <input type="checkbox" /> Remember me
        </label>
        <button>Sign in</button>
        <p>
          Not registered yet? <Link to="/signup">Sign up</Link> |{" "}
          <Link to="/reset">Forgot password</Link>
        </p>
      </div>
    </div>
  );
}
