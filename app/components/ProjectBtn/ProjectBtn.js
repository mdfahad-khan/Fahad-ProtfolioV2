"use client";
import "./Navbar.css";
import {
  FaInstagram,
  FaTwitter,
  FaDribbble,
  FaCodepen,
  FaDiscord,
  FaGithub,
  FaTelegram,
  FaReddit,
} from "react-icons/fa";

const ProjectsBtn = () => {
  return (
    <div className="main w-12 ">
      <div className="all flex flex-wrap hover:absolute hover:right-10 hover:top-1 z-30 w-[8em]  justify-center hover:bg-transparent">
        <div className="card">
          <FaInstagram className="icon instagram" />
        </div>
        <div className="card">
          <FaTwitter className="icon twitter" />
        </div>
        <div className="card">
          <FaDribbble className="icon dribbble" />
        </div>
        <div className="card">
          <FaCodepen className="icon codepen" />
        </div>
        <div className="card">
          <FaDiscord className="icon discord" />
        </div>
        <div className="card">
          <FaDiscord className="icon discord" />
        </div>
        <div className="card">
          <FaGithub className="icon github" />
        </div>
        <div className="card">
          <FaTelegram className="icon telegram" />
        </div>
        <div className="card">
          <FaReddit className="icon reddit" />
        </div>

        <a class="text text-white md:mr-10 ">
          <span className="">CONNECT</span>
        </a>
        <div className="main_back"></div>
      </div>
    </div>
  );
};

export default ProjectsBtn;
