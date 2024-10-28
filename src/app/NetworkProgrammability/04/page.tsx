import Head from "next/head";
import Link from "next/link";
import React from "react";
import { RiShareBoxLine } from "react-icons/ri";

const page = () => {
  return (
    <div className="min-h-full bg-transparent text-gray-900">
      <Head>
        <title>Network Programmability and Automation</title>
        <meta
          name="description"
          content="Learn Network Programmability and Automation by Yourself"
        />
      </Head>

      <header className="bg-darkPurple text-white py-6">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <h1 className="text-2xl md:text-3xl font-bold">
            Network Programmability and Automation
          </h1>
          <p className="mt-2 text-md md:text-lg">Duration: 1 Year</p>
          <p className="mt-1 text-sm md:text-md">
            NPA-351: CCNA 200-301 Certification
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:px-8 lg:px-16">
        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Course Description
          </h2>
          <p className="mb-4 text-sm md:text-base">
            This course will focus on learning the basics of networking and
            preparing for the new Cisco Certified Network Associate (CCNA) exam.
            This comprehensive course focuses on the solutions and technologies
            needed to implement and administer a broad range of modern
            networking and IT infrastructure.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Course Outline
          </h2>
          <ol className="mt-6 space-y-6 text-gray-700 list-decimal ml-5">
            <li>
              <strong>Textbook:</strong>

              <ul className="list-disc list-inside pb-2 mt-4">
                <Link
                  href={
                    "https://www.amazon.com/CCNA-200-301-Official-Guide-Library/dp/1587147149/ref=sr_1_1"
                  }
                  className="flex justify-start items-center ml-5 gap-5 text-blue-600 hover:text-blue-800"
                >
                  <RiShareBoxLine />
                  CCNA 200 301 Official Guide Library
                </Link>
              </ul>
            </li>
          </ol>
        </section>
      </main>

      <footer className="bg-black text-white py-4 mt-[55px] md:mt-[126px]">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
          <p className="text-xs md:text-sm">
            &copy; 2024 E-Learning Network Programmability and Automation | All
            Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default page;
