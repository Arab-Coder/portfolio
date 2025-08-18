import React from "react";
import "./main.css";
import { FaLink } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export default function Mian() {
  return (
    <main className="flex gap-10 items-start">
      <div className="left-section flex gap-3">
        <button className="active">all projects</button>
        <button>HTML & CSS</button>
        <button>JavaScript</button>
        <button>React.js</button>
        <button>Node.js</button>
      </div>
      <div className="right-section flex flex-wrap gap-x-2 gap-y-4 content-center">
        {["item1", "item2", "item3"].map((item) => {
          return (
            <article key={item} className="card rounded-2xl">
              <img
                src="/src/img/11.jpg"
                alt=""
                width={266}
                className="rounded-2xl"
              />
              <div className="box " style={{ width: "266px" }}>
                <h1 className="title">Landing Page 2</h1>
                <p className="sub-title">
                  Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex
                  tempore dolor in, accusantium laudantium accusamus.
                </p>
                <div className="icons flex">
                  <div className="flex gap-3">
                    <FaLink className="FaLink" size={35} />
                    <FaGithub className="FaGithub" size={35} />
                  </div>
                  <a href="" className="link flex">
                    more
                    <span style={{ alignSelf: "center" }}>
                      <FaArrowRight />
                    </span>
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
}
