import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

import Layout2 from "../Layout/Layout2";

import { WatchedEpisodesContext } from "../ContextProviders/WatchedEpisodesContextProvider";
import { TrackedShowsContext } from "../ContextProviders/TrackedShowsContextProvider";

import {
  auth,
  generateUserDocument,
  signInWithGoogle,
} from "../../firebase/firebaseIndex";
import { useContext } from "react/cjs/react.development";

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
      setDisplayMessage("You've successfully Signed Up!");
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
      <p>{displayMessage}</p>
      <form onSubmit={(event) => createUserHandler(event)}>
        <label htmlFor="displayName">Username: </label>
        <input
          type="text"
          name="displayName"
          placeholder="Abcde"
          id="displayName"
          onChange={(event) => onInputChanged(event)}
          value={displayName}
        />
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
        <button type="submit">Sign Up</button>
      </form>
      <p>or</p>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
      <p>Already have an account?</p>
      <Link to="/sign-in">Sign In</Link>
    </Layout2>
  );
}

export default SignUp;
