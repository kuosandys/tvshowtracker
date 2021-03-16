import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shows">My Shows</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
