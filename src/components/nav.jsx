import React, { Component } from "react";

// Stateless Functional Components

const Nav = ({ totalCounters }) => {
  return (
    <nav className="navbar bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default Nav;
