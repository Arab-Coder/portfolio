import React from "react";
import "./contact.css";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section>
      <div className="title">
        <span className="icon-email">
          <MdEmail />
         <h1> Contact us</h1>
        </span>
      </div>

      <p className="sub-titel">
        Contact us for more information and get notified when I publish
        something new.
      </p>

      <div className="flex">
        <form action="" className="">
          <div className=" flex">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" />
          </div>

          <div className="flex">
            <label htmlFor="message">Your message</label>
            <textarea name="" id="message"></textarea>
          </div>

          <button className="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}
