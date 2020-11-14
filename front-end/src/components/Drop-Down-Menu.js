import React from "react";
import { Link } from "react-router-dom";

import "./Drop-Down-Menu.css";

export default function DropDownMenu({ setDropDown, dropDown }) {
  return (
    <div className="menu-container" onMouseLeave={() => setDropDown(!dropDown)}>
      <ul className="menu-item">
        <Link to="/users">
          <li onClick={() => setDropDown(!dropDown)}>Account</li>
        </Link>
        <Link to="/orderli">
          <li onClick={() => setDropDown(!dropDown)}>Cart</li>
        </Link>
        <Link>
          <li>Orders</li>
        </Link>
        <Link>
          <li>Settings</li>
        </Link>
        <Link>
          <li>Logout</li>
        </Link>
      </ul>
    </div>
  );
}
