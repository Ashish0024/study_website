import React from 'react'
import './Login.css'

function Login() {
    const [isLogin, setIsLogin] = useState(true); // Toggle between login and registration
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Implement login logic here (e.g., form validation, API call)
    alert("Login Successful!");
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
    } else if (!isAgreed) {
      alert("You must agree to the terms and conditions!");
    } else {
      // Implement registration logic here (e.g., form validation, API call)
      alert("Registration Successful!");
    }
  };
  return (
    <div className="form-box">
      <div className="button-box">
        <div id="btn"></div>
        <button
          type="button"
          className="toggle-btn"
          onClick={() => setIsLogin(true)}
          style={isLogin ? { color: "#fff" } : {}}
        >
          Log In
        </button>
        <button
          type="button"
          className="toggle-btn"
          onClick={() => setIsLogin(false)}
          style={!isLogin ? { color: "#fff" } : {}}
        >
          Register
        </button>
      </div>
      <div className="social-icons">
        <img src="images/icon/fb2.png" alt="Facebook" />
        <img src="images/icon/insta2.png" alt="Instagram" />
        <img src="images/icon/tt2.png" alt="Twitter" />
      </div>

      {/* Login Form */}
      {isLogin ? (
        <form className="input-group" onSubmit={handleLoginSubmit}>
          <div className="inp">
            <img src="images/icon/user.png" alt="User" />
            <input
              type="text"
              className="input-field"
              placeholder="Username or Phone Number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ width: "88%", border: "none" }}
            />
          </div>
          <div className="inp">
            <img src="images/icon/password.png" alt="Password" />
            <input
              type="password"
              className="input-field"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ width: "88%", border: "none" }}
            />
          </div>
          <input type="checkbox" className="check-box" /> Remember Password
          <button type="submit" className="submit-btn">
            Log In
          </button>
        </form>
      ) : (
        // Registration Form
        <form className="input-group" onSubmit={handleRegisterSubmit}>
          <input
            type="text"
            className="input-field"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <input
            type="email"
            className="input-field"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="input-field"
            placeholder="Create Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            className="input-field"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <input
            type="checkbox"
            className="check-box"
            checked={isAgreed}
            onChange={() => setIsAgreed(!isAgreed)}
          />{" "}
          I agree to the Terms & Conditions
          <button type="submit" className="submit-btn reg-btn">
            Register
          </button>
        </form>
      )}

      {/* Other Sign-in Options */}
      {isLogin && (
        <div className="other">
          <div className="instead">
            <h3>or</h3>
          </div>
          <button className="connect" onClick={() => alert("Sign in with Google")}>
            <img src="images/icon/google.png" alt="Google" />
            <span>Sign in with Google</span>
          </button>
        </div>
      )}
    </div>
  )
}

export default Login
