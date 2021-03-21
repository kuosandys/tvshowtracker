import React from "react";
import { Link } from "react-router-dom";

function Nav({ children }) {
  return (
    <div className="absolute top-0 left-0 right-0 border-2 bg-gray-800 text-white">
      <ul className="flex h-12 items-center">
        <li className="mx-5 font-bold hover:text-blue-300 hover:underline">
          <Link to="/">Home</Link>
        </li>
        <li className="mx-5 font-bold hover:text-blue-300 hover:underline">
          <Link to="/shows">My Shows</Link>
        </li>
        <li className="mx-5 font-bold hover:text-blue-300 hover:underline">
          <Link to="/stats">Stats</Link>
        </li>
        <div>{children}</div>
      </ul>
    </div>
  );
}

export default Nav;
