import { FaRegMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

import React, { useState } from "react";
import "./header.css";

export default function Header() {
  const [showModel, setShowModel] = useState(false);

  return (
    <div className="flex gap-2 items-center justify-between pb-2 pt-2">
      {/* زر القائمة للهاتف */}
      <div>
        <button onClick={() => setShowModel(true)} className="menu">
          <IoMdMenu size={35} />
        </button>
      </div>

      {/* روابط القائمة في الديسكتوب */}
      <nav>
        <ul className="flex gap-2">
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

      {/* زر الوضع الليلي/النهاري */}
      <div className="text-2xl">
        <button className="mode">
          {/* <FaRegMoon size={35} /> */}
          <MdOutlineWbSunny size={35} />
        </button>

        {/* المودال */}
        {showModel && (
          <div className="fixed">
            <ul className="border model">
              <li>
                <button className="close border-2 rounded-lg " onClick={() => setShowModel(false)}>
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
