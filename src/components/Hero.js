import React from "react";
import HeroImg from "../assets/hero-img.png";

import {
  AiOutlineTwitter,
  AiOutlineYoutube,
  AiOutlineInstagram,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-indigo-900 px-5 text-white py-32 min-h-screen">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl">
            
              <span className="animate-hero-text inline-block">Hi,</span>
            
            <br />
            
              <span className="animate-hero-text inline-block">I am Uday</span>
            
            <br />
            
              <span className="animate-hero-text inline-block">
                Frontend Developer
              </span>
            
          </h1>

          <p className="py-5">
            I am proficient in JavaScript, React and Tailwind CSS
          </p>

          <div className="flex py-10 ">
            <a
              href="https://twitter.com/home"
              className="pr-4 inline-block text-accent hover:text-white"
              target="_blank"
            >
              {" "}
              <AiOutlineTwitter size={40} />{" "}
            </a>
            <a
              href="https://www.youtube.com/"
              className="pr-4 inline-block text-accent hover:text-white"
              target="_blank"
            >
              {" "}
              <AiOutlineYoutube size={40} />{" "}
            </a>
            <a
              href="https://www.instagram.com/udaylakhana/"
              className="pr-4 inline-block text-accent hover:text-white"
              target="_blank"
            >
              {" "}
              <AiOutlineInstagram size={40} />{" "}
            </a>
          </div>

          <Link
            to="/projects"
            className=" btn bg-accent  border-2 border-[#7477FF] rounded-lg text-white px-6 py-3 hover:bg-transparent"
          >
            See Projects
          </Link>
        </div>

        <div className="hero-img">
          <img
            src={HeroImg}
            alt="coding illustration"
            className="lgw-[80%] ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
