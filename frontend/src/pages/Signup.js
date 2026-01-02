import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/api";

function Signup() {
  // State variables for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // React Router hook for navigation
  const navigate = useNavigate();

  // Function that runs when signup form is submitted
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    try {
      // Call backend register API
      const data = await registerUser(name, email, password);

      // Backend sends ONLY a message on success
      if (data.message === "User registered successfully") {
        // Redirect to login page after successful signup
        navigate("/login");
      } else {
        // Backend responded but signup failed
        alert(data.message || "Signup failed");
      }
    } catch (error) {
      // Server or network error
      console.error("Signup error:", error);
      alert("Server error. Please try again later.");
    }
  };

  return (
    // Center the signup card vertically & horizontally
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{ width: "400px" }}>
        <h3 className="text-center mb-4">Signup</h3>

        {/* Signup Form */}
        <form onSubmit={handleSubmit}>

          {/* Name Input */}
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Email Input */}
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

          {/* Password Input */}
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
          <button type="submit" className="btn btn-success w-100">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
