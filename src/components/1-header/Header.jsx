import { FaRegMoon } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

import React, { useState } from "react";
import "./header.css";

export default function header() {
  const [showModel, setshowModel] = useState(false);
  return (
    <div className="flex gap-2 items-center justify-between pb-2 pt-2">
      <div>
        <button
          onClick={() => {
            setshowModel(true);
          }}
          className="menu"
        >
          <CiMenuBurger size={35} />
        </button>
      </div>
      <nav>
        <ul className="flex gap-2 ">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Conract</a>
          </li>
        </ul>
      </nav>
      <div className="text-2xl">
        <button className="">
          <FaRegMoon size={35} />
        </button>
        {showModel && (
          <div className=" fixed">
            <ul className="border model  ">
              <li>
                <button
                  onClick={() => {
                    setshowModel(false);
                  }}
                >
                  <IoClose size={30} />
                </button>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Articles</a>
              </li>
              <li>
                <a href="">Projects</a>
              </li>
              <li>
                <a href="">Speaking</a>
              </li>
              <li>
                <a href="">Conract</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
