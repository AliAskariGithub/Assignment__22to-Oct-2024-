import Head from "next/head";
import Link from "next/link";
import React from "react";
import { RiShareBoxLine } from "react-icons/ri";

const page = () => {
  return (
    <div className="min-h-full bg-transparent text-gray-900">
      <Head>
        <title>Genomics and Bioinformatics</title>
        <meta
          name="description"
          content="Learn Genomics and Bioinformatics with in easy and minded way."
        />
      </Head>

      <header className="bg-darkPurple text-white py-6">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <h1 className="text-2xl md:text-3xl font-bold">
            Genomics and Bioinformatics
          </h1>
          <p className="mt-2 text-md md:text-lg">Duration: 1 Year</p>
          <p className="mt-1 text-sm md:text-md">
            Bio-351: Python for Biologists
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:px-8 lg:px-16">
      <section>
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Course Description</h2>
        <p className="mb-4 text-sm md:text-base">
          This course will focus on learning the basics of the Python
          programming language through genomics examples.
        </p>
      </section>
      
      <section className="mt-8">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Course Outline</h2>

        <ol className="mt-6 space-y-6 text-gray-700 list-decimal ml-5">
        <li>
              <strong>
              Textbook:
              </strong>

              <ul className="list-disc list-inside pb-2 mt-4">
                  <Link
                    href={"https://www.pythonforbiologists.org/"}
                    className="flex justify-start items-center ml-5 gap-5 text-blue-600 hover:text-blue-800"
                  >
                    <RiShareBoxLine />
                    Pythonforbiologists
                  </Link>
              </ul>
            </li>
        </ol>
      </section>
      </main>

      <footer className="bg-black text-white py-4 mt-[160px] md:mt-[173.5px]">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
          <p className="text-xs md:text-sm">
            &copy; 2024 E-Learning Genomics and Bioinformatics | All Rights
            Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default page;
