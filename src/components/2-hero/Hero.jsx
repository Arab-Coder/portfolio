import React from "react";
import "./hero.css";
import { MdVerified } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Hero() {
  return (
    <section className="flex hero">
      <div className="left-section grow ">
        <div className="flex">
          <img
            src="/src/img/myPhoto.JPG"
            alt=""
            width="88px"
            className="img1"
          />
          <span className="icon">
            <MdVerified />
          </span>
        </div>
        <h1 className="h1 text-4xl font-bold leading-10 ">
          Software designer, founder, and amateur astronaut.
        </h1>
        <p className="p leading-6 mb-5">
          I am a 21-year-old programming student and aspiring software
          developer. Passionate about coding, problem-solving, and continuous
          learning.
        </p>
        <div className="icons flex gap-3 text-2xl">
          <FaTwitter className="icon0"/>
          <FaInstagramSquare className="icon0"/>
          <FaGithub className="icon0"/>
          <FaLinkedin className="icon0"/>
        </div>
      </div>
      <div className="right-section border-2">kkkkk==</div>
    </section>
  );
}
