import React, { useState, useContext } from "react";
import { Link, Redirect } from "react-router-dom";

import Layout2 from "../StyleComponents/Layout2";

import { WatchedEpisodesContext } from "../ContextProviders/WatchedEpisodesContextProvider";
import { TrackedShowsContext } from "../ContextProviders/TrackedShowsContextProvider";
import PrimaryButton from "../StyleComponents/PrimaryButton";

import { auth, generateUserDocument } from "../../firebase/firebaseIndex";

function SignUp() {
  const { watchedEpisodes } = useContext(WatchedEpisodesContext);
  const { trackedShows } = useContext(TrackedShowsContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [displayMessage, setDisplayMessage] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);

  const createUserHandler = async (event) => {
    event.preventDefault();
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      let data = {
        displayName,
        trackedShows,
        watchedEpisodes,
      };
      generateUserDocument(user, data);
      setIsSignedIn(true);
      sessionStorage.removeItem("watchedEpisodes");
      sessionStorage.removeItem("trackedShows");
    } catch (error) {
      setDisplayMessage(error.message);
    }

    // reset fields
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
    } else if (name === "displayName") {
      setDisplayName(value);
    }
  };

  return (
    <Layout2>
      {isSignedIn && <Redirect to="/shows" />}
      <div className="w-2/6 mx-auto mt-10 flex flex-col items-center bg-black  bg-opacity-80 rounded py-8 px-10 text-white">
        <h1 className="text-2xl">Sign Up!</h1>
        <p className="text-red-400 italic mt-6">{displayMessage}</p>
        <form
          method="POST"
          onSubmit={(event) => createUserHandler(event)}
          className="flex flex-col items-start text-md my-4"
        >
          <label htmlFor="displayName">Username: </label>
          <input
            type="text"
            name="displayName"
            placeholder="Abcde"
            id="displayName"
            onChange={(event) => onInputChanged(event)}
            value={displayName}
            className="mb-4 text-black"
          />
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
            className="text-black"
          />
          <div className="mx-auto my-8">
            <PrimaryButton type="submit">Sign Up</PrimaryButton>
          </div>
        </form>
        <p className="italic">
          Already have an account?{" "}
          <Link to="/sign-in" className="underline">
            Sign In
          </Link>
        </p>
      </div>
    </Layout2>
  );
}

export default SignUp;
