import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { loginUser, signupUser } from "../services/authService";
import Navbar from "../components/layout/Navbar";
import "./Login.css";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [role, setRole] = useState("patient");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const payload = {
        name,
        email,
        password,
        role,
      };

      const response = isSignup
        ? await signupUser(payload)
        : await loginUser({ email, password, role });

      // Save user & token
      login(response.user);
      localStorage.setItem("token", response.token);

      role === "patient"
        ? navigate("/patient/dashboard")
        : navigate("/provider/dashboard");
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <>
      <Navbar />

      <div className="login-page">
        <div className="login-card">
          {/* toggle stays same */}

          {error && <p className="error-text">{error}</p>}

          <form onSubmit={handleSubmit}>
            {isSignup && (
              <div className="form-group">
                <label>Full Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            )}

            <div className="form-group">
              <label>Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Account Type</label>
              <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="patient">Patient</option>
                <option value="provider">Provider</option>
              </select>
            </div>

            <button type="submit" className="login-btn">
              {isSignup ? "Create Account" : "Login"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
