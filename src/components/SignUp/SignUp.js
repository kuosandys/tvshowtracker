import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const createUserHandler = (event, email, password) => {
    event.preventDefault();
    setEmail("");
    setPassword("");
    setDisplayName("");
  };

  const onInputChanged = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "username") {
      setDisplayName(value);
    }
  };

  return (
    <div>
      <form onSubmit={(event) => createUserHandler(event)}>
        <label htmlFor="displayName">Username: </label>
        <input
          type="text"
          name="displayName"
          placeholder="Abcde"
          id="displayName"
          onChange={(event) => onInputChanged(event)}
        ></input>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          placeholder="abcde@gmail.com"
          id="email"
          onChange={(event) => onInputChanged(event)}
        ></input>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          placeholder="******"
          id="password"
          onChange={(event) => onInputChanged(event)}
        ></input>
        <button type="submit">Sign In</button>
      </form>
      <p>or</p>
      <button>Sign in with Google</button>
      <p>Already have an account?</p>
      <Link to="/sign-in">Sign In</Link>
    </div>
  );
}

export default SignUp;
