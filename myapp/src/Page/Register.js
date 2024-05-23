import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateName = (name) => /^[a-zA-Z\s]{3,}$/.test(name);
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (password) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateName(name)) {
      setErrorMessage(
        "Name must be at least 3 characters long and contain only letters and spaces."
      );
      return;
    }
    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (!validatePassword(password)) {
      setErrorMessage(
        "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number."
      );
      return;
    }
    setErrorMessage("");

    const userData = { name, email, password };
    localStorage.setItem("user", JSON.stringify(userData));
    console.log("User data saved to local storage:", userData);

    navigate("/login");

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="Register">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit" className="register-button">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
