import React from "react";
import Image from "next/image";
import { LuUser2 } from "react-icons/lu";
import { RiMailLine } from "react-icons/ri";
import { FaSchoolFlag } from "react-icons/fa6";
import { LuGitBranch } from "react-icons/lu";
import { LuSend } from "react-icons/lu";
import About from "./About";
import Courses from "./Courses";
import Footer from "./Footer";
import Contact from "./Contact";
import Admission from "./Admission";

const Hero = () => {
  return (
    <div id="/">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:min-h-full mt-8 md:mt-0 space-y-8 md:space-y-0 px-4 lg:px-0">
        <div className="flex justify-center md:justify-start md:pl-24 items-center md:w-4/5">
          <Image
            src="/herro.PNG"
            alt="Hero Image"
            width={589}
            height={50}
            className="rounded-3xl lg:w-9/12"
          />
        </div>

        <div className="flex justify-center items-center w-full md:w-1/2 p-4 md:py-5 md:-mt-36 bg-gradient-to-r from-white to-darkPurple md:ml-[-13%] md:rounded-3xl">
          <form action="#" className="w-full max-w-sm md:max-w-none p-4 md:p-8 bg-transparent rounded-lg">
            <h1 className="text-2xl font-bold text-left text-black mb-6">Request Information</h1>

            {/* Username Field */}
            <div className="flex items-center gap-2 border bg-white border-black rounded-[6px] p-2 mb-4">
              <LuUser2 className="text-gray-500 text-lg" />
              <input
                type="text"
                placeholder="Enter username"
                className="w-full text-black text-sm outline-none bg-transparent"
              />
            </div>

            {/* Email Field */}
            <div className="flex items-center gap-2 border bg-white border-black rounded-[6px] p-2 mb-4">
              <RiMailLine className="text-gray-500 text-lg" />
              <input
                type="email"
                placeholder="Email"
                className="w-full text-black text-sm outline-none bg-transparent"
              />
            </div>

            {/* Campus Field */}
            <div className="flex items-center gap-2 border bg-white border-black rounded-[6px] p-2 mb-4">
              <FaSchoolFlag className="text-gray-500 text-lg" />
              <input
                type="text"
                placeholder="Campus"
                className="w-full text-black text-sm outline-none bg-transparent"
              />
            </div>

            {/* Program Field */}
            <div className="flex items-center gap-2 border bg-white border-black rounded-[6px] p-2 mb-4">
              <LuGitBranch className="text-gray-500 text-lg" />
              <input
                type="text"
                placeholder="Program"
                className="w-full text-black text-sm outline-none bg-transparent"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button className="w-full md:w-auto md:h-[5vh] bg-purple-600 font-medium gap-2  text-white py-2 px-6 rounded-xl shadow-black shadow-md hover:bg-[#6B47DC] mt-4 flex items-center justify-center hover:shadow-lg hover:shadow-black transition duration-300 ease-in-out">
                Submit
                <LuSend />
              </button>
            </div>
          </form>
        </div>
      </div>

      <About />
      <Courses />
      <Admission />
      <Contact />
      <Footer />
    </div>
  );
};

export default Hero;
