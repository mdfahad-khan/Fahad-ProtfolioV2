"use client";
import { faBars, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaFacebook } from "react-icons/fa";

import Link from "next/link";
import { useEffect, useState } from "react";
import navData from "../../../public/NavbarData/navData.json";
import Image from "next/image";
import { motion } from "framer-motion";
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
import ProjectsBtn from "../ProjectBtn/ProjectBtn";

const imgVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,

    transition: {
      duration: 6,
      staggerChildren: 0.1,
    },
  },
};
const textVariants = {
  initial: {
    y: -20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [translateOffset, setTranslateOffset] = useState(0);
  const [isactive, setIsactive] = useState(false);
  const offsetIncrement = 86;
  const activeSectionId = navData.find(
    (item) => item.text === activeSection
  )?.id;

  const handleMenuOpen = () => {
    setIsactive(true);
  };

  const handleMenuClose = () => {
    setIsactive(false);
  };

  useEffect(() => {
    // Set the translate offset dynamically based on activeSectionId
    if (activeSectionId) {
      setTranslateOffset((activeSectionId - 1) * offsetIncrement);
    } else {
      setTranslateOffset(0); // Reset offset for other sections
    }
  }, [activeSectionId]);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - windowHeight / 2;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
      });
    }
  };
  return (
    <header
      className="text-lg sticky top-0 z-50 flex items-center 
      bg-[#061e3d] justify-around w-full h-[90px] shadow-md border-b-2 border-gray-600 animate-glow-border border-l-0 "
    >
      <div className="text-white md:ml-20 font-pacifico text-2xl font-bold">
        Evan Ahmed
      </div>

      <nav
        className={`h-screen md:h-full grid place-items-center text-[#ccd6f6] text-xl fixed  top-0 ${
          isactive ? " translate-y-0" : "-translate-y-full md:translate-y-0"
        }  bg-[#001118] md:bg-transparent right-0 md:static transition-all duration-500 z-50 absolute w-[60vw]`}
      >
        <div className=" absolute top-4 right-4 text-3xl md:hidden block">
          <FontAwesomeIcon icon={faCircleXmark} onClick={handleMenuClose} />
        </div>
        <ul className="relative flex flex-col md:flex-row items-center md:h-full gap-4 capitalize list-none text-nowrap text-headingColor">
          <motion.div
            variants={imgVariants}
            initial="initial"
            whileInView="animate"
            className={`transition-all hidden md:block duration-[1s] ease-[cubic-bezier(.47,1.64,0.41,0.8)] absolute left-0 top-0 -z-10 h-full w-[70px] opacity-1 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:content-[''] after:bg-[linear-gradient(180deg,_#76d7faa6,_transparent)]  after:[clip-path:polygon(31%_0,69%_0,100%_100%,0_100%)] `}
            style={{ transform: `translateX(${translateOffset}px)` }}
          >
            <div className="h-1 w-full rounded-lg bg-[#75D5F8]"></div>
          </motion.div>

          {navData.map((item, index) => (
            <motion.li
              variants={textVariants}
              initial="initial"
              whileInView="animate"
              key={index}
              className="relative grid md:h-full place-items-center  text-xl "
            >
              <Link
                href={item.path}
                onClick={(event) => scrollToSection(event, item.text)}
                className={`navlink w-[70px] grid place-items-center hover:border  hover:border-b-4  hover:animate-glow-border border-blue-500  ${
                  activeSection === item.text ? "text-blue" : ""
                }`}
              >
                {item.text}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
      <div className="text-white ">
        <div className="mt-4 z-50">
          <ProjectsBtn className="mt-4" />
        </div>

        <span className="text-3xl absolute top-[50%] -translate-y-[50%] right-3 md:hidden block">
          <FontAwesomeIcon icon={faBars} onClick={handleMenuOpen} />
        </span>
      </div>
    </header>
  );
};

export default Navbar;
