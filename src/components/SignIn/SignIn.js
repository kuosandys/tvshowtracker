import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

import { auth } from "../../firebase/firebaseIndex";
import Layout2 from "../StyleComponents/Layout2";
import PrimaryButton from "../StyleComponents/PrimaryButton";

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
      <div className="w-2/6 mx-auto mt-10 flex flex-col items-center bg-black  bg-opacity-80 rounded py-8 px-10 text-white">
        <h1 className="text-2xl">Sign In!</h1>

        <p className="text-red-400 italic mt-6">{errorMessage}</p>
        <form
          method="POST"
          onSubmit={(event) => signInHandler(event)}
          className="flex flex-col items-start text-md my-4"
        >
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            placeholder="abcde@gmail.com"
            id="email"
            onChange={(event) => onInputChanged(event)}
            value={email}
            className="mb-4 text-black"
          />
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(event) => onInputChanged(event)}
            value={password}
            className="mb-4 text-black"
          />
          <div className="mx-auto my-8">
            <PrimaryButton type="submit">Sign In</PrimaryButton>
          </div>
        </form>

        <p className="italic">
          Don't have an account yet?{" "}
          <Link to="/sign-up" className="underline">
            Sign Up
          </Link>
        </p>
      </div>
    </Layout2>
  );
}

export default SignIn;
