import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="text-2xl bg-sky-200 h-20 p-5 text-right">
        <Link className="mr-5" to="/">
          Home
        </Link>
        <Link className="mr-5" to="/package">
          Package
        </Link>
        <Link className="mr-5" to="/about">
          About
        </Link>
        <Link className="mr-5" to="/services">
          Services
        </Link>
        <Link to="/login">Login</Link>
      </nav>
    </div>
  );
};

export default Header;
