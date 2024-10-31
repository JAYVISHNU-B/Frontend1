import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { id, token, rstring } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(`https://backend1-xz8k.onrender.com/api/auth/reset-password/${id}/${token}/${rstring}`, {
        password,
      })
      .then((res) => {
        toast.success(res.data.message);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      });
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.heading}>Reset Password</h2>
        <div style={styles.inputGroup}>
          <label htmlFor="password" style={styles.label}>Password</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Enter Your Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
        </div>
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          style={{ ...styles.button, ...styles.toggleButton }}
        >
          {showPassword ? "Hide" : "Show"} Password
        </button>
        <button type="submit" style={styles.submitButton}>
          Update Password
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f3f4f6",
  },
  form: {
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
    width: "100%",
    textAlign: "center",
  },
  heading: {
    marginBottom: "1.5rem",
    fontSize: "1.8rem",
    color: "#333",
  },
  inputGroup: {
    marginBottom: "1.5rem",
  },
  label: {
    display: "block",
    marginBottom: "0.5rem",
    fontSize: "1rem",
    color: "#555",
  },
  input: {
    width: "100%",
    padding: "0.75rem",
    fontSize: "1rem",
    border: "1px solid #ddd",
    borderRadius: "4px",
    outline: "none",
    transition: "border-color 0.3s",
  },
  button: {
    cursor: "pointer",
    padding: "0.5rem 1rem",
    fontSize: "1rem",
    borderRadius: "4px",
    border: "none",
    transition: "all 0.3s",
    marginTop: "0.5rem",
  },
  toggleButton: {
    backgroundColor: "#6b7280",
    color: "#fff",
    marginBottom: "1rem",
  },
  submitButton: {
    backgroundColor: "#3b82f6",
    color: "#fff",
    width: "100%",
    padding: "0.75rem",
    fontSize: "1.1rem",
  },
};

// Add hover effects
styles.input["&:focus"] = {
  borderColor: "#3b82f6",
};

styles.toggleButton["&:hover"] = {
  backgroundColor: "#4b5563",
};

styles.submitButton["&:hover"] = {
  backgroundColor: "#2563eb",
};

export default ResetPassword;
