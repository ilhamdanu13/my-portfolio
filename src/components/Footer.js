import React from "react";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <section className=" bg-black/20 px-4 md:px-24 text-[#868490] py-10">
      <div className="container">
        <h2 className="text-2xl mb-16 font-semibold">Follow us</h2>
        <div className="flex gap-x-10">
          <FiFacebook className="w-10 h-10" />
          <FiInstagram className="w-10 h-10" />
          <AiOutlineLinkedin className="w-10 h-10" />
          <AiOutlineMail className="w-10 h-10" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
