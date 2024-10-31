import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { email, password };
    await axios
      .post("https://backend1-xz8k.onrender.com/api/auth/login", payload)
      .then((res) => {
        toast.success(res.data.message);
        setToken(res.data.token);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      });
    setEmail("");
    setPassword("");
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.heading}>Login</h2>
        
        <div style={styles.inputGroup}>
          <label htmlFor="email" style={styles.label}>Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
        </div>

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
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            style={styles.toggleButton}
          >
            {showPassword ? "Hide" : "Show"} Password
          </button>
        </div>

        <button type="submit" style={styles.submitButton}>Login</button>
      </form>
      
      <button style={styles.linkButton}>
        <Link to={"/"} style={styles.linkText}>Don't Have An Account? Register</Link>
      </button>

      <button style={styles.linkButton}>
        <Link to={"/forgot-password"} style={styles.linkText}>Forgot Password?</Link>
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f9fafb",
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
  toggleButton: {
    marginTop: "0.5rem",
    fontSize: "0.9rem",
    color: "#3b82f6",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    transition: "color 0.3s",
  },
  submitButton: {
    width: "100%",
    padding: "0.75rem",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "#3b82f6",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s",
    marginTop: "1rem",
  },
  linkButton: {
    marginTop: "1.5rem",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
  },
  linkText: {
    color: "#3b82f6",
    textDecoration: "none",
    fontSize: "1rem",
  },
};

styles.input["&:focus"] = {
  borderColor: "#3b82f6",
};

styles.toggleButton["&:hover"] = {
  color: "#2563eb",
};

styles.submitButton["&:hover"] = {
  backgroundColor: "#2563eb",
};

styles.linkText["&:hover"] = {
  textDecoration: "underline",
};

export default Login;
