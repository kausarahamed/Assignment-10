import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="text-2xl bg-sky-200 h-20 p-5 flex justify-between px-16">
      <div>
        <h1 className="text-4xl font-serif">Learning-fluorence</h1>
      </div>
      <nav>
        <Link className="mr-5" to="/">
          Home
        </Link>
        <Link className="mr-5" to="/blogs">
          Blogs
        </Link>
        <Link className="mr-5" to="/about">
          About
        </Link>

        {user ? (
          <button onClick={() => signOut(auth)}>Log out</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
