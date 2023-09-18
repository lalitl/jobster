import { NavLink } from "react-router-dom";
import links from "../utils/links";
import React from "react";

const Navlinks = ({ toggle }) => {
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { id, path, icon, text } = link;
        return (
          <NavLink
            key={id}
            className={({ isActive }) => {
              return isActive ? "nav-link active" : "nav-link";
            }}
            to={path}
            onClick={toggle}
            end
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Navlinks;
