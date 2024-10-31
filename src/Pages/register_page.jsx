import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { name, email, password };
    await axios
      .post("https://backend1-xz8k.onrender.com/api/auth/register", payload)
      .then((res) => {
        toast.success(res.data.message);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      });
    setEmail("");
    setPassword("");
    setName("");
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.heading}>Register</h2>
        <div style={styles.inputGroup}>
          <label htmlFor="name" style={styles.label}>Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter Your Full Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="email" style={styles.label}>Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email Id"
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
            style={{ ...styles.button, ...styles.toggleButton }}
          >
            {showPassword ? "Hide" : "Show"} password
          </button>
        </div>
        <button type="submit" style={styles.submitButton}>
          Register
        </button>
      </form>
      <button style={styles.linkButton}>
        <Link to="/login" style={styles.link}>
          Already Have An Account? Login
        </Link>
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
  },
  toggleButton: {
    backgroundColor: "#6b7280",
    color: "#fff",
    marginTop: "0.5rem",
    width: "100%",
  },
  submitButton: {
    backgroundColor: "#3b82f6",
    color: "#fff",
    width: "100%",
    padding: "0.75rem",
    fontSize: "1.1rem",
    marginTop: "1rem",
    border: "none",
    borderRadius: "4px",
  },
  linkButton: {
    backgroundColor: "transparent",
    marginTop: "1rem",
  },
  link: {
    color: "#3b82f6",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "1rem",
  },
};

styles.input["&:focus"] = {
  borderColor: "#3b82f6",
};

styles.toggleButton["&:hover"] = {
  backgroundColor: "#4b5563",
};

styles.submitButton["&:hover"] = {
  backgroundColor: "#2563eb",
};

styles.linkButton["&:hover"] = {
  backgroundColor: "rgba(0, 0, 0, 0.05)",
};

export default Register;
