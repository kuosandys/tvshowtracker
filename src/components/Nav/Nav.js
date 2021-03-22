import React from "react";
import { Link } from "react-router-dom";

function Nav({ children }) {
  return (
    <div className="fixed top-0 left-0 right-0 py-1 flex items-center justify-between bg-indigo-900 text-white">
      <ul className="flex h-12 items-center">
        <li className="mx-5 font-bold hover:underline">
          <Link to="/">Home</Link>
        </li>
        <li className="mx-5 font-bold hover:underline">
          <Link to="/shows">My Shows</Link>
        </li>
      </ul>
      {children}
    </div>
  );
}

export default Nav;
