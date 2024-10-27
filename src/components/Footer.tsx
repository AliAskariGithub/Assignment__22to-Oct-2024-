import Link from "next/link";
import React from "react";
import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-[rgb(255,255,255,0.7)] py-8">
      <div className="container mx-auto px-4 md:flex justify-between">

        <div className="mb-6 md:mb-0">
          <h3 className="font-semibold text-lg text-white">Core Courses</h3>
          <ul className="mt-2 space-y-2">
            <Link href={"/ProgrammingFundamentals/01"} className="hover:text-blue-400">Programming Fundamentals</Link><br />
            <Link href={"/Web20UsingNextJS/02"} className="hover:text-blue-400">Web2 Using Next.js</Link><br />
            <Link href={"/EarnAsYouLearn/03"} className="hover:text-blue-400">Earn as You Learn</Link><br />
          </ul>
        </div>

        <div className="mb-6 md:mb-0">
          <h3 className="font-semibold text-lg text-white">Advanced Courses</h3>
          <ul className="mt-2 space-y-2">
            <Link href={"/Web3AndMetaverse/04"} className="hover:text-blue-400">Web 3 and Metaverse</Link><br />
            <Link href={"/CloudNativeComputing/04"} className="hover:text-blue-400">Cloud-Native Computing</Link><br />
            <Link href={"/ArtificialIntelligence/04"} className="hover:text-blue-400">Artificial Intelligence (AI) and Deep Learning</Link><br />
            <Link href={"/AmbientComputingAndIoT/04"} className="hover:text-blue-400">Ambient Computing and IoT</Link><br />
            <Link href={"/GenomicsAndBioinformatics/04"} className="hover:text-blue-400">Genomics and Bioinformatics</Link><br />
            <Link href={"/NetworkProgrammability/04"} className="hover:text-blue-400">Network Programmability and Automation</Link><br />
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg text-white">Social Links</h3>
          <div className="flex items-center mt-2 space-x-4">
            <Link href="https://www.facebook.com/profile.php?id=61564881342854">
              <FaFacebookF className="text-white hover:text-blue-600" size={24} />
            </Link>
            <Link href="https://github.com/AliAskariGithub">
              <FaGithub className="hover:text-gray-400 text-white" size={24} />
            </Link>
            <Link href="https://x.com/Syed_Ali_Askari?t=88dxwRm8tvBnkWDEVmZhWg&s=09">
              <FaTwitter className="text-white hover:text-sky-500" size={24} />
            </Link>
            <Link href="edin.com/in/ali-askari-355257308/">
              <FaLinkedin className="text-white hover:text-blue-700" size={24} />
            </Link>
          </div>
        </div>
      </div>
      <p className="text-xs md:text-sm text-center mt-5 -mb-5 text-[rgb(255,255,255)]">
            &copy; 2024 E-Learning | All Rights
            Reserved.
          </p>
    </footer>
  );
};

export default Footer;
