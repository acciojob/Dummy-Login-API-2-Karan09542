import React, { useRef, useState } from "react";

const Login = () => {
  const users = [
    {
      id: 1,
      name: "ABC",
      email: "abc@gmail.com",
      password: "12",
    },
    {
      id: 2,
      name: "DEF",
      email: "def@gmail.com",
      password: "1234",
    },
    {
      id: 3,
      name: "GHI",
      email: "ghi@gmail.com",
      password: "123456",
    },
  ];
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [error, setError] = useState("");
  function onSubmit(e) {
    e.preventDefault();

    const email = emailRef.current?.value.trim();
    const password = passwordRef.current?.value.trim();

    setTimeout(() => {
      const user = users.filter((user) => user.email === email);
      if (user.length === 0) {
        setError("User not found");
        console.log("User not found");
      } else {
        if (password !== user[0].password) {
          setError("Password Incorrect");
          console.log("Password Incorrect");
        } else {
          setError("");
          emailRef.current.value = "",
          passwordRef.current.value = "",
          console.log(email, password);
        }
      }
    }, 3000);
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="input-email">Email</label>
      <br />
      <input ref={emailRef} type="email" placeholder="email" id="input-email" />
      <br />
      <label htmlFor="input-password">Password</label>
      <br />
      <input
        ref={passwordRef}
        type="text"
        placeholder="Password"
        id="input-password"
      />
      <br />
      <button type="submit" id="submit-form-btn">
        Submit
      </button>
      <br />
      {error === "User not found" && <h1 id="user-error">{error}</h1>}
      {error === "Password Incorrect" && <h1 id="password-error">{error}</h1>}
    </form>
  );
};

export default Login;
