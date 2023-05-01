"use client";

import { useState } from "react";

// import { useEffect, useState } from "react";

export default function SignUp() {
  const onChange = (e) => {
    console.log(e.target.value);
  };

  //   const [userId, setUserId] = useState("");
  // const [userName, setUserName] = useState("");
  // const [password, setPassword] = useState("");
  // const [pwCheck, setPwCheck] = useState("");
  // const [pwError, setPwError] = useState(false);

  const handleSubmit = () => {
    e.preventDefault();
    if (password.value !== pwCheck) {
      setPwError(true);
      return 0;
    } else {
      setPwError(false);
    }
  };

  return (
    <div className="sign-container">
      <div className="sign-up">
        <h1 className="sign-up_h1">Create account</h1>
        <form
          onChange={onChange}
          action="/api/user/user"
          method="POST"
          className="sign-up_form"
        >
          <label htmlFor="user_name">Your name</label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            placeholder="First and last name"
          />
          <label htmlFor="email">Email</label>

          <input
            type="email"
            autoComplete="username"
            id="email"
            name="email"
            placeholder="Ex) dangdang@google.com"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            autoComplete="new-password"
            id="password"
            name="password"
            placeholder="At least 9 characters"
          />
          <label htmlFor="check_pw">Re-enter password</label>
          <input
            type="password"
            autoComplete="new-password"
            id="check_pw"
            name="check_pw"
            placeholder="Re-enter password"
          />
          <button className="sign-up_btn" type="submit">
            Create
          </button>
        </form>

        <a className="sign-up_a" href="/list">
          Already have an account? Sign in ▶️
        </a>
      </div>
    </div>
  );
}
