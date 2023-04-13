import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);
  const handleClose = () => setToggle(false);
  var download = true;
  var href= "/Udaylakhana.pdf";
  return (
    <header className="flex text-3xl justify-around px-5 py-4 bg-primary text-white fixed w-full z-10">
      <a href="/" className="logo font-bold text-accent">
        Uday
      </a>

      <nav className="hidden md:block">
        <ul className="flex gap-5">
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blogs">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link
              to={href}
              target="_blank"
              rel="noreferrer"
              download={download}
            >
              Resume
            </Link>
          </li>
        </ul>
      </nav>

      <nav
        className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}
      >
        <ul className="flex flex-col">
          <li>
            <Link onClick={handleClose} to="/projects">Projects</Link>
          </li>
          <li>
            <Link onClick={handleClose} to="/about">About</Link>
          </li>
          <li>
            <Link onClick={handleClose} to="/blogs">Blog</Link>
          </li>
          <li>
            <Link onClick={handleClose} to="/contact">Contact</Link>
          </li>
          <li>
            <Link
              to={href}
              target="_blank"
              rel="noreferrer"
              download={download}
              onClick={handleClose}
            >
              Resume
            </Link>
            </li>
        </ul>
      </nav>

      <button onClick={handleToggle} className="block md:hidden">
        {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </button>
    </header>
  );
};

export default Header;
