import Head from "next/head";
import React from "react";

const page = () => {
  return (
    <div className="min-h-full bg-transparent text-gray-900">
      {" "}
      <Head>
        <title>Earn As you Learn</title>
        <meta name="description" content="Learn as You can Earn." />
      </Head>
      <header className="bg-darkPurple text-white py-6">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <h1 className="text-2xl md:text-3xl font-bold">Earn as You Learn</h1>
          <p className="mt-2 text-md md:text-lg">Duration: 1 Year</p>
          <p className="mt-1 text-sm md:text-md">
            $-101: Dollar Making Bootcamp - Full-Stack Template and API Product
            Development
          </p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8 md:px-8 lg:px-16">
        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Course Description
          </h2>

          <p className="mt-4 text-gray-700">
            The purpose of this course is to make dollars. You will build
            Full-Stack Next.js 13 Jamstack Templates and GraphQL APIs.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Course Outline
          </h2>
          <ol className="mt-6 space-y-6 text-gray-700 list-decimal ml-5">
            <li>
              <h3 className="font-semibold">Earn While You Learn Projects</h3>
            </li>

            <li>
              <h3 className="font-semibold">
                Build Full-Stack Next.js 13 Jamstack Templates
              </h3>
              <p className="mt-2">
                You will be assigned to build a template which we will sell on
                Theme Forest and Panaverse DAO marketplace. The Panaverse DAO
                will receive 25% share on the sale of the template which will be
                used to manage the platform. An additional 15% will be spent on
                marketing the template. 60% of the revenues will be distributed
                to the developer through the Panaverse DAO in the form of
                Panaverse tokens.
              </p>
              <ul className="list-disc ml-5 mt-2">
                <li>The Template Standard</li>
                <li>Panaverse template standard</li>
              </ul>
            </li>

            <li>
              <h3 className="font-semibold">Build GraphQL APIs</h3>
              <p className="mt-2">
                You will be assigned to build APIs for which you will sell
                subscriptions on the Panaverse DAO Marketplace. The Panaverse
                DAO will receive 25% share on the sale of the template which
                will be used to manage the platform. An additional 15% will be
                spent on marketing the template. 60% of the revenues will be
                distributed to the developer through the Panaverse DAO in the
                form of Panaverse tokens.
              </p>
            </li>
          </ol>
        </section>
      </main>

      <footer className="bg-black text-white py-4 mt-8">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
          <p className="text-xs md:text-sm">
            &copy; 2024 E-Learning Earn as You Can | All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default page;
