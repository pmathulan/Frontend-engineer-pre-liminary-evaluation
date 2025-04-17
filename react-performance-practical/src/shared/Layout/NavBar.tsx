import React from "react";
import { Link, useLocation } from "react-router";

const NavBar = () => {
  const { pathname } = useLocation();

  const linkStyle = (path: string) => ({
    marginRight: "1rem",
    textDecoration: pathname === path ? "underline" : "none",
  });

  return (
    <nav style={{ padding: "1rem", borderBottom: "1px solid #ddd" }}>
      <Link to="/" style={linkStyle("/")}>
        🏠 Home
      </Link>
      <Link to="/custom-hook" style={linkStyle("/custom-hook")}>
        🪝 Custom Hook
      </Link>
      <Link to="/virtual-list" style={linkStyle("/virtual-list")}>
        🔁 Virtualized List
      </Link>
    </nav>
  );
};

export default NavBar;
