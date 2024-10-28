import Link from "next/link";
import React from "react";

const Courses = () => {
  return (
    <div
      id="courses"
      className="flex flex-col items-center min-h-screen py-16 bg-transparent"
    >
      <h1 className="text-3xl font-extrabold text-purple-800 mb-14 tracking-wide">
        Our Courses
      </h1>
      <div className="flex flex-wrap justify-center items-start gap-10 md:gap-40">
        <div className="bg-neutral-700 hover:bg-black duration-300 transition hover:bg-shadow text-white h-[35vh] md:h-[40vh] p-8 rounded-xl shadow-lg w-96 flex flex-col items-center text-left">
          <h2 className="text-xl font-semibold mb-6 text-center">
            Core Courses
          </h2>
          <ul className="space-y-2 text-gray-300 mb-6 grid justify-start items-center text-left ">
            <Link href={"/ProgrammingFundamentals/01"}>Programming Fundamentals</Link>
            <Link href={"/Web20UsingNextJS/02"}>Web2 Using NextJS</Link>
            <Link href={"/EarnAsYouLearn/03"}>Earn as You Learn</Link>
          </ul>
          <Link href="/ProgrammingFundamentals/01" className="mt-auto bg-darkPurple underline text-xs hover:bg-purple-900 -ml-[110px] text-white py-3 px-6 rounded-full transition">
            Learn More
          </Link>
        </div>

        <div className="bg-neutral-700 hover:bg-black duration-300 transition hover:bg-shadow text-white min-h-full md:h-[48vh] p-8 rounded-xl shadow-lg w-96 flex flex-col items-center text-left">
          <h2 className="text-xl font-semibold mb-6 text-center">
            Advanced Courses
          </h2>
          <ul className="space-y-2 text-gray-300 mb-6 grid justify-start items-center text-left pl-12 md:pl-6">
            <Link href={"/Web3AndMetaverse/04"}>Web 3 and Metaverse</Link>
            <Link href={"/CloudNativeComputing/04"}>Cloud-Native Computing</Link>
            <Link href={"/ArtificialIntelligence/04"}>Artificial Intelligence (AI) and Deep Learning</Link>
            <Link href={"/AmbientComputingAndIoT/04"}>Ambient Computing and IoT</Link>
            <Link href={"/GenomicsAndBioinformatics/04"}>Genomics and Bioinformatics</Link>
            <Link href={"/NetworkProgrammability/04"}>Network Programmability and Automation</Link>
          </ul>
          <Link href={"/Web3AndMetaverse/04"} className="mt-auto bg-darkPurple underline text-xs hover:bg-purple-900 -ml-[110px] text-white py-3 px-6 rounded-full transition">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Courses;
