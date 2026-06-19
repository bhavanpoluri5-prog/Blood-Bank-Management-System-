import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "admin@gmail.com" && password === "admin123") {
      navigate("/dashboard");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>🩸 Blood Bank Login 💖</h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;