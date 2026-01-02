import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/api";

function Login() {
  // State variables to store email and password input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // React Router hook for navigation
  const navigate = useNavigate();

  // Function that runs when the login form is submitted
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh

    try {
      // Call backend login API
      const data = await loginUser(email, password);

      // If backend returns a token → login success
      if (data.token) {
        // Save JWT token in localStorage
        localStorage.setItem("token", data.token);

        // Save logged-in user info in localStorage
        localStorage.setItem("user", JSON.stringify(data.user));

        // Redirect user to Home page
        navigate("/");
      } else {
        // Backend responded but login failed
        alert(data.message || "Login failed");
      }
    } catch (error) {
      // Backend server error (500, 400, etc.)
      console.error("Login error:", error);
      alert("Server error. Please try again later.");
    }
  };

  return (
    // Center the login card vertically & horizontally
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{ width: "400px" }}>
        <h3 className="text-center mb-4">Login</h3>

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          
          {/* Email Field */}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
