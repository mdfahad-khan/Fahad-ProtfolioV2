"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FcDownload } from "react-icons/fc";
import "./Education.css"


const textVariants = {
    initial: {
        x: -100,
        opacity: 0,
    },
    animate: {
        x: 0,
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
const textVariant1 = {
    initial: {
        y: 100,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 2,
            ease: "easeInOut",
            staggerChildren: 0.1,
        },
    },
};

const Education = () => {

    return (

        <section className="bg-[#050816]  px-5 min-h-[80vh] flex flex-col justify-end" id="about"
            style={{
                // Gradient from top to bottom
                background: 'radial-gradient(circle at center top, #041e42 1%, #050816 50%)',
            }}>
            <fieldset className=" text-white  px-6 mt-10   mb-6">
                <legend className="bg-blue-500  text-center text-2xl font-bold text-white px-4 rounded-md">EDUCATION</legend>
                <div className="max-w-full  mx-auto  p-0 rounded-md shadow-lg mt-3 text-black overflow-hidden xl:flex 2xl:flex lg:flex md:flex justify-center gap-8">
                    <motion.div
                        variants={textVariants}
                        initial="initial"
                        whileInView="animate"
                        className="w-1/2 sm:w-[620px] md:w-[400px] lg:w-[550px] xl:w-[600px] 2xl:w-[800px] h-auto xl:h-[600px] ml-[30px] pl-2 xl:mt-2"
                    >
                        <Image
                            src="/education.gif" // Adjust the path based on your project structure
                            alt="about"
                            className=" sm:ml-0 h-[420px] w-[500px] object-fit "
                            width={600} // Set your desired width
                            height={600} // Set your desired height
                        />
                    </motion.div>
                    <motion.div className="w-1/2 h-full flex flex-col gap-5 mt-4 md:ml-10" variants={textVariant1}
                        initial="initial"
                        whileInView="animate">
                        <div class="card1  animate-glow-border"
                        >
                            <div class="border"></div>
                            <div class="content1">
                                <div class="logo w-[400px]">
                                    <div class="logo1 w-[400px]">
                                        <div className="text-[19px] font-bold text-white ">
                                            B.Sc. in Computer Science & Engineering (CSE)
                                        </div>
                                    </div>

                                    <span class="trail"></span>
                                </div>
                                <span class="logo-bottom-text  w-80 ">American International University-Bangladesh</span>
                            </div>
                            <span class="bottom-text  text-2xl">2020-2024</span>
                        </div>
                        <div class="card1  animate-glow-border hover:text-center">
                            <div class="border"></div>
                            <div class="content1 hover:ml-8 ">
                                <div class="logo w-[400px]">
                                    <div class="logo1 w-[400px] ">
                                        <div className="text-[19px]  font-bold  text-white ">
                                            HSC   - Higher Secondary Certificate
                                        </div>
                                    </div>

                                    <span class="trail"></span>
                                </div>
                                <span class="logo-bottom-text  w-80 ">Shahid Presedent Ziaur Rahman Collage</span>
                            </div>
                            <span class="bottom-text  text-2xl">2017-2019</span>
                        </div>
                        <div class="card1 w-[200px] h-[200px] animate-glow-border hover:text-center ">
                            <div class="border"></div>
                            <div class="content1">
                                <div class="logo w-[400px]">
                                    <div class="logo1 w-[400px]">
                                        <div className="text-[19px] font-bold text-white ">
                                            SSC - Secondary School Certificate
                                        </div>
                                    </div>

                                    <span class="trail"></span>
                                </div>
                                <span class="logo-bottom-text  w-80 ">Shantipur Adarsha High School</span>
                            </div>
                            <span class="bottom-text  text-2xl">2012-2017</span>
                        </div>



                    </motion.div>



                </div>

            </fieldset>



        </section>
    );
};

export default Education;