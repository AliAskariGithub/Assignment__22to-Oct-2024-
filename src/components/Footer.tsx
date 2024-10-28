import Link from "next/link";
import React from "react";
import { RiShareBoxLine } from "react-icons/ri";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { RiGithubFill } from "react-icons/ri";
import { ImTwitter } from "react-icons/im";
import { RiFacebookCircleFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 mt-8">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
        <section className="mt-8 text-left mb-5">
          <ol className="list-decimal grid grid-cols-2 gap-5 list-inside space-y-4 w-[175px] md:w-[223px] md:text-base md:justify-start md:items-start md:grid md:grid-cols-4 md:gap-[450]">
            <div className="md:w-[180px] md:mt-4 w-[180px] pt-4">
              <strong className="text-xl">Core Courses</strong>
              <ul className="list-disc list-inside md:pl-6 text-xs md:w-[40vh] md:mt-5">
                <br />
                <li className="flex gap-1 justify-start items-center md:mb-2 md:text-base hover:text-blue-500 hover:underline transition duration-150">
                  <Link href={"/ProgrammingFundamentals/01"}>
                    Programming Fundamentals
                  </Link>
                  <RiShareBoxLine className="md:text-base" />
                </li>
                <li className="flex gap-1 justify-start items-center md:mb-2 md:text-base hover:text-blue-500 hover:underline transition duration-150">
                  <Link href={"/Web20UsingNextJS/02"}>Web2 Using NextJS</Link>
                  <RiShareBoxLine className="md:text-base" />
                </li>
                <li className="flex gap-1 justify-start items-center md:mb-2 md:text-base hover:text-blue-500 hover:underline transition duration-150">
                  <Link href={"/EarnAsYouLearn/03"}>Earn as You Learn</Link>
                  <RiShareBoxLine className="md:text-base" />
                </li>
              </ul>
            </div>

            <div className="md:w-[280px] w-[300px] pl-[13vh] md:pl-0 ">
              <strong className="text-xl mb-10">Advance Courses</strong>
              <ul className="list-disc list-inside md:pl-6 text-xs md:w-[40vh] md:mt-5">
                <br />
                <li className="flex gap-1 justify-start items-center md:mb-2 md:text-base hover:text-blue-500 hover:underline transition duration-150 ">
                  <Link href={"/Web3AndMetaverse/04"}>
                    Web 3 and Metaverse
                  </Link>
                  <RiShareBoxLine className="md:text-base" />
                </li>
                <li className="flex gap-1 justify-start items-center md:mb-2 md:text-base hover:text-blue-500 hover:underline transition duration-150">
                  <Link href={"/CloudNativeComputing/04"}>
                    Cloud-Native Computing
                  </Link>
                  <RiShareBoxLine className="md:text-base" />
                </li>
                <li className="flex gap-1 justify-start items-center md:mb-2 md:text-base hover:text-blue-500 hover:underline transition duration-150">
                  <Link href={"/ArtificialIntelligence/04"}>
                    Artifical Intelligence
                  </Link>
                  <RiShareBoxLine className="md:text-base" />
                </li>
                <li className="flex gap-1 justify-start items-center md:mb-2 md:text-base hover:text-blue-500 hover:underline transition duration-150">
                  <Link href={"/AmbientComputingAndIoT/04"}>
                    Ambient Computing and loT
                  </Link>
                  <RiShareBoxLine className="md:text-base" />
                </li>
                <li className="flex gap-1 justify-start items-center md:mb-2 md:text-base hover:text-blue-500 hover:underline transition duration-150">
                  <Link href={"/GenomicsAndBioinformatics/04"}>
                    Genemics and Bioinformatics
                  </Link>
                  <RiShareBoxLine className="md:text-base" />
                </li>
                <li className="flex gap-1 justify-start items-center md:mb-2 md:text-base hover:text-blue-500 hover:underline transition duration-150">
                  <Link href={"/NetworkProgrammability/04"}>
                    Network Programmability
                  </Link>
                  <RiShareBoxLine className="md:text-base" />
                </li>
              </ul>
            </div>

            <div className="md:w-[180px] w-[150px]">
              <strong className="text-xl">Social Links</strong>
              <ul className="list-disc list-inside md:pl-6 flex gap-4 md:text-4xl md:w-[40vh] md:mt-5">
                <br />
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
