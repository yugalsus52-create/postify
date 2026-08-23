import { useState } from "react";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    // Temporary login validation
    if (email === "yugal@gmail.com" && password === "0424") {
      localStorage.setItem("isLoggedIn", "true");

      onLogin();
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="login-page">

      <div className="login-container">

        <div className="login-header">
          <h1>Postify</h1>
          <p>Welcome back!</p>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && (
            <p className="error-message">
              {error}
            </p>
          )}

          <button type="submit" className="login-button">
            Login
          </button>

        </form>

        <p className="demo-login">
          Demo: yugal@gmail.com / 0424
        </p>

      </div>

    </div>
  );
}

export default Login;