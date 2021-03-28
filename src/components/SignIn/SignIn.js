import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

import { signInWithGoogle, auth } from "../../firebase/firebaseIndex";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);

  const signInHandler = (event) => {
    event.preventDefault();
    try {
      auth.signInWithEmailAndPassword(email, password);
      setIsSignedIn(true);
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
    }
  };

  const onInputChanged = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <div>
      {isSignedIn && <Redirect to="/shows" />}
      <p>{errorMessage}</p>
      <form onSubmit={(event) => signInHandler(event)}>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          placeholder="abcde@gmail.com"
          id="email"
          onChange={(event) => onInputChanged(event)}
          value={email}
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(event) => onInputChanged(event)}
          value={password}
        />
        <button type="submit">Sign In</button>
      </form>
      <p>or</p>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
      <p>Don't have an account yet?</p>
      <Link to="/sign-up">Sign Up</Link>
    </div>
  );
}

export default SignIn;
