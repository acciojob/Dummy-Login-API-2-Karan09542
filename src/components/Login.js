import React, { useRef, useState } from "react";

const Login = () => {

    const users = [
        {
            id: 1,
            name: "ABC",
            email: "abc@gmail.com",
            password: "12"
        },
        {
            id: 2,
            name: "DEF",
            email: "def@gmail.com",
            password: "1234"
        },
        {
            id: 3,
            name: "GHI",
            email: "ghi@gmail.com",
            password: "123456"
        }
    ]
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [error, setError] = useState("");
  function onSubmit(){
    const email = emailRef.current?.value.trim();
    const password = passwordRef.current?.value.trim();

    setTimeout(()=>{
        if(users[email]) {
            if(password !== users[email].password){
                setError("Password Incorrect");
                console.log("Password Incorrect");
            }
        }
        else if(!users[email]) {
            setError("User not found");
            console.log("User not found");
        }
        else {
            setError("");
            console.log(email, password)
        };
    },3000)
  }

  return (
    <div>
      <label htmlFor="input-email">Email</label>
      <br/>
      <input
        ref={emailRef}
        type="email"
        placeholder="email"
        id="input-email"
      />
      <br />
      <label htmlFor="input-password">Password</label>
      <br/>
      <input
        ref={passwordRef}
        type="text"
        placeholder="Password"
        id="input-password"
      />
      <br />
      <button onClick={onSubmit} id="submit-form-btn">Submit</button>
      <br/>
      {error === "User not found" && <h1 id="user-error">{error}</h1>}
      {error === "Password Incorrect" && <h1 id="password-error">{error}</h1>}
    </div>
  );
};

export default Login;
