"use client";

import { useState } from "react";
import styles from "./login.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      email,
      password,
    });

    alert("Login button clicked!");
  };

  return (
    <main className={styles.loginPage}>
      <div className={styles.loginBox}>
        <h1>Login</h1>
        <p>Welcome back to Accessory Hub</p>

        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className={styles.loginBtn}>
            Login
          </button>
        </form>

        <p className={styles.registerText}>
          Don't have an account? <a href="/register">Register</a>
        </p>
      </div>
    </main>
  );
}