import React from "react";
import { PiPhoneBold } from "react-icons/pi";
import { IoMailOutline } from "react-icons/io5";
import { FiFacebook, FiGithub, FiTwitter } from "react-icons/fi";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import Link from "next/link";

const Subnavbar = () => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-2 justify-between items-center bg-darkPurple h-auto w-full text-white px-6 md:px-32 py-1 text-sm">
      <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 md:gap-6 pl-10  text-white font-medium tracking-widest ">
        <div className="flex items-center gap-2 md:gap-3">
          <PiPhoneBold className="text-lg md:text-2xl" />
          <p className="text-xs md:text-sm">0319-2046156</p>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <IoMailOutline className="text-lg md:text-2xl" />
          <p className="text-xs md:text-sm">syedaliaskari@email.com</p>
        </div>
      </div>

      <div className="flex justify-center md:justify-end items-center gap-7 mt-2 md:mt-0">
        <Link href={"https://www.facebook.com/profile.php?id=61564881342854"}>
          <FiFacebook className="text-xl md:text-2xl hover:text-blue-600 transition" />
        </Link>

        <Link href={"https://github.com/AliAskariGithub"}>
          <FiGithub className="text-xl md:text-2xl hover:text-gray-400 transition" />
        </Link>

        <Link
          href={"https://x.com/Syed_Ali_Askari?t=88dxwRm8tvBnkWDEVmZhWg&s=09"}
        >
          <FiTwitter className="text-xl md:text-2xl hover:text-blue-400 transition" />
        </Link>

        <Link href={"https://www.linkedin.com/in/ali-askari-355257308/"}>
          <TiSocialLinkedinCircular className="text-3xl md:text-4xl hover:text-blue-700 transition" />
        </Link>
      </div>
    </div>
  );
};

export default Subnavbar;
