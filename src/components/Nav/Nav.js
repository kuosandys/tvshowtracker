import React, { useContext } from "react";
import { Link, Route, Switch } from "react-router-dom";
import { auth } from "../../firebase/firebaseIndex";

import { UserContext } from "../ContextProviders/UserContextProvider";

function Nav({ children }) {
  const user = useContext(UserContext);
  return (
    <div className="fixed top-0 left-0 right-0 py-1 flex items-center justify-between bg-indigo-900 text-white">
      <ul className="flex h-12 items-center">
        <li className="mx-5 font-bold hover:underline">
          <Link to="/">Home</Link>
        </li>
        <li className="mx-5 font-bold hover:underline">
          <Link to="/shows">{user ? `${user.displayName}'s` : "My"} Shows</Link>
        </li>
        {user ? (
          <button onClick={() => auth.signOut()}>Sign Out</button>
        ) : (
          <Link to="sign-up">Sign Up</Link>
        )}
      </ul>
      {children}
    </div>
  );
}

export default Nav;
