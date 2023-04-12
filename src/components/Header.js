import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);
  var download = true;
  var href= "/Udaylakhana.pdf";
  return (
    <header className="flex text-3xl justify-around px-5 py-2 bg-primary text-white fixed w-full z-10">
      <a href="/" className="logo font-bold text-accent">
        Uday
      </a>

      <nav className="hidden md:block">
        <ul className="flex ">
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
            <a href="https://drive.google.com/file/d/175YDJCitLGRmG-dX6q3SuhbqRmdTqFWL/view?usp=sharing">Resume</a>
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
