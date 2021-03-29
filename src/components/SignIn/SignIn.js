import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

import { signInWithGoogle, auth } from "../../firebase/firebaseIndex";
import Layout2 from "../Layout/Layout2";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);

  const signInHandler = async (event) => {
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setIsSignedIn(true);
    } catch (error) {
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
    <Layout2>
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
    </Layout2>
  );
}

export default SignIn;
