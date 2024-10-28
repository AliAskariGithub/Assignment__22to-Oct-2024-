"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RiArrowDropRightLine } from "react-icons/ri";
import {
  RiArrowDropDownLine,
  RiArrowDropUpLine,
  RiMenu3Line,
  RiCloseLine,
} from "react-icons/ri";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-transparent mb-8">
      <div className="flex justify-between items-center py-4 px-6 md:px-32">
        <div>
          <Image
            src="/logo.png"
            alt="E-Learning logo"
            width={210}
            height={50}
            className="flex justify-center items-center mt bg-transparent"
          />
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <RiCloseLine className="text-3xl" />
            ) : (
              <RiMenu3Line className="text-3xl" />
            )}
          </button>
        </div>

        <ul className="hidden md:flex gap-6 font-medium text-lg">
          <Link
            href="/"
            className="font-semibold hover:text-purple-600 transition"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="font-semibold hover:text-purple-600 transition"
          >
            About
          </Link>

          <div className="relative">
            <div className="flex items-center">
              <Link
                href="#courses"
                className="font-semibold hover:text-purple-600 transition"
              >
                Courses
              </Link>
              <button
                onClick={() => setDropdown(!dropdown)}
                aria-label="Toggle Menu"
              >
                {dropdown ? (
                  <RiArrowDropUpLine className="text-3xl" />
                ) : (
                  <RiArrowDropDownLine className="text-3xl" />
                )}
              </button>
            </div>

            {dropdown && (
              <div className="absolute w-80 text-left bg-white shadow-lg border rounded-lg">
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">Core Courses</h3>
                  <ul>
                    <Link
                      href={"/ProgrammingFundamentals/01"}
                      className="block py-1 hover:text-sky-600"
                    >
                      Programming Fundamentals
                    </Link>
                    <Link
                      href={"/Web20UsingNextJS/02"}
                      className="block py-1 hover:text-sky-600"
                    >
                      Web2 Using NextJS
                    </Link>
                    <Link
                      href={"/EarnAsYouLearn/03"}
                      className="block py-1 hover:text-sky-600"
                    >
                      Earn as You Learn
                    </Link>
                  </ul>
                  <hr />
                  <h3 className="font-semibold text-lg mt-4 mb-2">
                    Advanced Courses
                  </h3>
                  <ul>
                    <Link href={"/Web3AndMetaverse/04"} className="block py-1 hover:text-sky-600">
                      Web 3 and Metaverse
                    </Link>
                    <Link href={"/CloudNativeComputing/04"} className="block py-1 hover:text-sky-600">
                      Cloud-Native Computing
                    </Link>
                    <Link href={"/ArtificialIntelligence/04"} className="block py-1 hover:text-sky-600">
                      Artificial Intelligence
                    </Link>
                    <Link href={"/AmbientComputingAndIoT/04"} className="block py-1 hover:text-sky-600">
                      Ambient Computing and IoT
                    </Link>
                    <Link href={"/GenomicsAndBioinformatics/04"} className="block py-1 hover:text-sky-600">
                      Genomics and Bioinformatics
                    </Link>
                    <Link href={"/NetworkProgrammability/04"} className="block py-1 hover:text-sky-600">
                      Network Programmability
                    </Link>
                  </ul>
                </div>
              </div>
            )}
          </div>
          <Link
            href="#admission"
            className="font-semibold hover:text-purple-600 transition"
          >
            Admission
          </Link>

          <Link
            href="#contact"
            className="font-semibold hover:text-purple-600 transition"
          >
            Contact
          </Link>

        </ul>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-transparent shadow-lg z-20">
          <ul className="flex flex-col p-4 gap-4">
            <Link
              href="/"
              className="font-semibold hover:text-purple-600 transition"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="font-semibold hover:text-purple-600 transition"
            >
              About
            </Link>

            <div className="flex items-center">
              <Link
                href="#courses"
                className="font-semibold hover:text-purple-600 transition"
              >
                Courses
              </Link>
              <RiArrowDropRightLine
                className="text-3xl"
                onClick={() => setDropdown(!dropdown)}
              />
            </div>

            {dropdown && (
              <div className="ml-4 bg-white relative left-20 bottom-10 -mb-[41.5vh] p-4 w-[34vh]">
                <h3 className="font-semibold text-md mb-2">Core Courses</h3>
                <ul>
                  <Link
                    href={"/ProgrammingFundamentals/01"}
                    className="block py-1 hover:text-sky-600 text-sm"
                  >
                    Programming Fundamentals
                  </Link>
                  <Link
                    href={"/Web20UsingNextJS/02"}
                    className="block py-1 hover:text-sky-600 text-sm"
                  >
                    Web2 Using NextJS
                  </Link>
                  <Link
                    href={"/EarnAsYouLearn/03"}
                    className="block py-1 hover:text-sky-600 text-sm"
                  >
                    Earn as You Learn
                  </Link>
                </ul>
                <hr className="my-2" />
                <h3 className="font-semibold text-md mb-2">Advanced Courses</h3>
                <ul>
                  <Link
                    href={"/Web3AndMetaverse/04"}
                    className="block py-1 hover:text-sky-600 text-sm"
                  >
                    Web 3 and Metaverse
                  </Link>
                  <Link
                    href={"/CloudNativeComputing/04"}
                    className="block py-1 hover:text-sky-600 text-sm"
                  >
                    Cloud-Native Computing
                  </Link>
                  <Link
                    href={"/ArtificialIntelligence/04"}
                    className="block py-1 hover:text-sky-600 text-sm"
                  >
                    Artificial Intelligence
                  </Link>
                  <Link
                    href={"/AmbientComputingAndIoT/04"}
                    className="block py-1 hover:text-sky-600 text-sm"
                  >
                    Ambient Computing and IoT
                  </Link>
                  <Link
                    href={"/GenomicsAndBioinformatics/04"}
                    className="block py-1 hover:text-sky-600 text-sm"
                  >
                    Genomics and Bioinformatics
                  </Link>
                  <Link
                    href={"/NetworkProgrammability/04"}
                    className="block py-1 hover:text-sky-600 text-sm"
                  >
                    Network Programmability
                  </Link>
                </ul>
              </div>
            )}

            <Link
              href="#admission"
              className="font-semibold hover:text-purple-600 transition"
            >
              Admission
            </Link>
            
            <Link
              href="#contact"
              className="font-semibold hover:text-purple-600 transition"
            >
              Contact
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
