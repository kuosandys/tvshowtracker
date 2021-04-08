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
      sessionStorage.removeItem("watchedEpisodes");
      sessionStorage.removeItem("trackedShows");
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
      <div className="md:w-3/6 lg:w-2/6 sm: w-4/6 mx-auto mt-24 flex flex-col items-center bg-indigo-200 shadow-md  bg-opacity-80 rounded py-8 px-10 text-gray-800">
        <h1 className="text-2xl text-indigo-700">Sign In!</h1>

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
            className="mb-4 mt-1 text-black rounded pl-2 h-10"
          />
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(event) => onInputChanged(event)}
            value={password}
            className="mb-4 mt-1 text-black rounded pl-2 h-10"
          />
          <div className="mx-auto my-8 rounded pl-2">
            <PrimaryButton type="submit">Sign In</PrimaryButton>
          </div>
        </form>

        <p className="italic text-center">
          Don't have an account yet?{" "}
          <Link to="/sign-up" className="underline text-indigo-700">
            Sign Up
          </Link>
        </p>
      </div>
    </Layout2>
  );
}

export default SignIn;
