import React from "react";
import { FiFacebook, FiInstagram, FiGithub } from "react-icons/fi";
import { AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <section className=" bg-black/20 px-4 md:px-24 text-[#868490] py-10">
      <div className="container mx-auto">
        <h2 className="text-2xl mb-16 font-semibold">Follow me</h2>

        <div className="flex gap-x-10">
          <a href="https://github.com/ilhamdanu13" target="_blank">
          <FiGithub className="w-10 h-10" />
          </a>

          <a href="https://www.instagram.com/iam.danu/" target="_blank">
          <FiInstagram className="w-10 h-10" />
          </a>

          <a href="https://www.linkedin.com/in/ilhamdanu13/" target="_blank">
          <AiOutlineLinkedin className="w-10 h-10" />
          </a>

          <a href="mailto:ilham.danu13.id@gmail.com">
          <AiOutlineMail className="w-10 h-10" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
