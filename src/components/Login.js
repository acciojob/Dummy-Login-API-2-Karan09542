import React, { useRef, useState } from "react";

const Login = () => {

const users = {
    "ram@gmail.com": {
        password: "ramram"
    },
    "om@gmail.com": {
        password: "om"
    },
    "karan@gmail.com": {
        password: "uma"
    }
}
  const email = useRef(null);
  const password = useRef(null);

  const [error, setError] = useState("");
  function onSubmit(){
    if(!email.current || !password.current) return;
    setTimeout(()=>{
        if(users[email.current?.value.trim()]) {
            if(password.current.value !== users[email.current?.value.trim()].password){
                setError("Password Incorrect")
            }
        }
        else if(!users[email.current?.value.trim()]) setError("User not found");
        else setError("");

        console.log(email.current.value, password.current.value)

    },3000)
  }

  return (
    <div>
      <label htmlFor="input-email">Email</label>
      <br/>
      <input
        ref={email}
        type="email"
        placeholder="email"
        id="input-email"
      />
      <br />
      <label htmlFor="input-password">Password</label>
      <br/>
      <input
        ref={password}
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
