import React from "react";
import { LuSend } from "react-icons/lu";

const Contact = () => {
  return (
    <div id="contact" className="flex flex-col items-center justify-center min-h-screen bg-transparent p-6 md:p-12">
      <h1 className="text-3xl md:text-3xl font-bold text-darkPurple mb-14">
        Contact Us
      </h1>

      <div className="w-full max-w-[110vh] md:h-[78vh] bg-gradient-to-r from-gray-300 to-darkPurple rounded-xl p-6 sm:p-16 shadow-lg">
        <h2 className="text-2xl w-[39vh] md:w-[50vh] font-bold md:tracking-wide text-black mb-6 md:px-5">
          Personal Information
        </h2>

        <form className="space-y-4">
          <div className="flex flex-col md:flex-row md:space-x-4 md:px-5 gap-3 md:gap-0">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full p-3 rounded-xl border-2 bg-white tracking-wide  border-black focus:outline-none focus:ring-1 focus:ring-black"
            />
            <input
              type="text"
              placeholder="Subject"
              className="md:w-3/4 w-full p-3 rounded-xl border-2 bg-white tracking-wide border-black focus:outline-none focus:ring-1 focus:ring-black "
            />
          </div>

          <div className="flex flex-col md:flex-row md:space-x-4 md:px-5 gap-3 md:gap-0">
            <input
              type="tel"
              placeholder="Tel no"
              className="md:w-3/4 w-full p-3 rounded-xl border-2 bg-white tracking-wide border-black focus:outline-none focus:ring-1 focus:ring-black "
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-xl border-2 bg-white tracking-wide border-black focus:outline-none focus:ring-1 focus:ring-black "
            />
          </div>

          <div className="md:px-5">
            <textarea
              placeholder="Your Message"
              rows={12}
              className="w-full p-3 rounded-xl border-2 bg-white tracking-wide md:-mb-3 border-black focus:outline-none focus:ring-1 focus:ring-black resize-none"
            ></textarea>
          </div>

          <div className="md:px-5 md:flex md:justify-end md:items-center ">
            <button
              type="submit"
              className="w-full md:w-auto md:h-[5vh] bg-purple-600 font-medium gap-2  text-white py-2 px-6 rounded-xl shadow-black shadow-md hover:bg-[#6B47DC] mt-4 flex items-center justify-center hover:shadow-lg hover:shadow-black transition duration-300 ease-in-out"
            >
              Send Message
              <span className="ml-2">
                <LuSend />
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
