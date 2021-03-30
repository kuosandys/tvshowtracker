import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebaseIndex";

import { UserContext } from "../ContextProviders/UserContextProvider";
import PrimaryButton from "../StyleComponents/PrimaryButton";

function Nav({ children }) {
  const user = useContext(UserContext);
  return (
    <div className="fixed top-0 left-0 right-0 py-1 flex items-center justify-between bg-indigo-900 text-white">
      <ul className="flex h-12 items-center">
        <li className="mx-5 font-bold hover:underline">
          <Link to="/">Home</Link>
        </li>
      </ul>
      {children}
      {user ? (
        <Link to="/">
          <PrimaryButton onClick={() => auth.signOut()}>Sign Out</PrimaryButton>
        </Link>
      ) : (
        <Link to="/sign-in">
          <PrimaryButton>Sign In</PrimaryButton>
        </Link>
      )}
    </div>
  );
}

export default Nav;
