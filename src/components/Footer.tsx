import Link from "next/link";
import React from "react";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { RiGithubFill } from "react-icons/ri";
import { ImTwitter } from "react-icons/im";
import { RiFacebookCircleFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 mt-8">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
        <section className="mt-8 text-left mb-5">
          <ol className="list-decimal grid gap-5 list-inside space-y-4 w-[175px] md:w-[223px] md:text-base md:justify-start md:items-center md:grid md:grid-cols-3 md:gap-[430]">
            <section className="md:w-[180px] w-[150px] block justify-start items-center">
              <strong className="text-xl">Core Courses</strong>
              <ul className="list-disc list-inside md:pl-6 flex gap-4 md:text-4xl md:w-[40vh] md:mt-5">
                <li className="flex justify-start items-center md:mb-2 md:text-sm hover:text-blue-400 mt-5 md:mt-0 text-sm w-fit">
                  Programming Fundamentals
                  <Link
                    href={"https://www.linkedin.com/in/ali-askari-355257308/"}
                  ></Link>
                </li>
              </ul>
            </section>
            <div className="md:w-[180px] w-[150px]">
              <strong className="text-xl">Social Links</strong>
              <ul className="list-disc list-inside md:pl-6 flex gap-4 md:text-4xl md:w-[40vh] md:mt-5">
                <li className="flex justify-start items-center md:mb-2 md:text-[40px] text-2xl">
                  <Link
                    href={"https://www.linkedin.com/in/ali-askari-355257308/"}
                  >
                    <RiLinkedinBoxFill className="hover:bg-blue-700 mt-5 md:mt-0" />
                  </Link>
                </li>
                <li className="flex justify-start items-center md:mb-2 md:text-4xl text-2xl">
                  <Link
                    href={"https://github.com/AliAskariGithub"}
                    className="hover:bg-gray-600 p-1 rounded-full"
                  >
                    <RiGithubFill className="md:mt-0 mt-5" />
                  </Link>
                </li>
                <li className="flex justify-start items-center md:mb-2 md:text-4xl text-xl">
                  <Link
                    href={
                      "https://x.com/Syed_Ali_Askari?t=88dxwRm8tvBnkWDEVmZhWg&s=09"
                    }
                    className="hover:bg-sky-500 p-2 rounded-full"
                  >
                    <ImTwitter className="md:mt-0 mt-5 sm:text-3xl" />
                  </Link>
                </li>
                <li className="flex justify-start items-center md:mb-2 md:text-4xl text-2xl">
                  <Link
                    href={
                      "https://www.facebook.com/profile.php?id=61564881342854"
                    }
                    className="hover:bg-blue-600 p-1 rounded-full"
                  >
                    <RiFacebookCircleFill className="md:mt-0 mt-5" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="md:w-[180px] w-[150px]">
              <strong className="text-xl">Social Links</strong>
              <ul className="list-disc list-inside md:pl-6 flex gap-4 md:text-4xl md:w-[40vh] md:mt-5">
                <li className="flex justify-start items-center md:mb-2 md:text-[40px] text-2xl">
                  <Link
                    href={"https://www.linkedin.com/in/ali-askari-355257308/"}
                  >
                    <RiLinkedinBoxFill className="hover:bg-blue-700 mt-5 md:mt-0" />
                  </Link>
                </li>
                <li className="flex justify-start items-center md:mb-2 md:text-4xl text-2xl">
                  <Link
                    href={"https://github.com/AliAskariGithub"}
                    className="hover:bg-gray-600 p-1 rounded-full"
                  >
                    <RiGithubFill className="md:mt-0 mt-5" />
                  </Link>
                </li>
                <li className="flex justify-start items-center md:mb-2 md:text-4xl text-xl">
                  <Link
                    href={
                      "https://x.com/Syed_Ali_Askari?t=88dxwRm8tvBnkWDEVmZhWg&s=09"
                    }
                    className="hover:bg-sky-500 p-2 rounded-full"
                  >
                    <ImTwitter className="md:mt-0 mt-5 sm:text-3xl" />
                  </Link>
                </li>
                <li className="flex justify-start items-center md:mb-2 md:text-4xl text-2xl">
                  <Link
                    href={
                      "https://www.facebook.com/profile.php?id=61564881342854"
                    }
                    className="hover:bg-blue-600 p-1 rounded-full"
                  >
                    <RiFacebookCircleFill className="md:mt-0 mt-5" />
                  </Link>
                </li>
              </ul>
            </div>
          </ol>
        </section>
        <p className="text-xs md:text-sm md:mt-8">
          &copy; 2024 E-Learning | All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
