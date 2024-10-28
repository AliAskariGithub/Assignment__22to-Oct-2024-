import Head from "next/head";
import Link from "next/link";
import React from "react";
import { RiShareBoxLine } from "react-icons/ri";

const page = () => {
  return (
    <div className="min-h-screen bg-transparent text-gray-900">
      <Head>
        <title>
          Programming Fundamentals - Object-Oriented Programming using
          TypeScript
        </title>
        <meta
          name="description"
          content="Learn Object-Oriented Programming using TypeScript, Web 3.0, and JavaScript fundamentals."
        />
      </Head>
      <header className="bg-darkPurple text-white py-6">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <h1 className="text-2xl md:text-3xl font-bold">Web2 Using NextJS</h1>
          <p className="mt-2 text-md md:text-lg">Duration: 1 Year</p>
          <p className="mt-1 text-sm md:text-md">
            Common In All Specializations
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:px-8 lg:px-16">
        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Course Description
          </h2>
          <p className="mb-4 text-sm md:text-base">
            The objective of this course is to teach participants to develop
            customer-facing planet-scale Websites, Full-Stack Apps and
            templates, Dashboards, and Muti-Cloud Serverless APIs. By the end of
            the quarter, the participants will be able to develop and deploy web
            platforms like Facebook, Shopify, etc. The technologies covered in
            this course will include Next.js 13, Figma, Tailwind CSS, Chakra UI,
            tRPC, GraphQL, Prisma, Cockroachdb Serverless (PostgreSQL
            Compatible), AWS Serverless Technologies, and Cloud Development Kit
            for Terraform (CDKTF).
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Course Outline
          </h2>

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-md font-semibold list-decimal list-inside space-y-4 text-sm md:text-base">
                1. Next.js 13 Web Development
              </h3>
              <li className="text-gray-700 list-disc list-inside pl-6">
                Learn Next 13 Official Documentation
              </li>
              <Link
                href="https://nextjs.org/docs"
                className="flex justify-start items-center pl-6 text-blue-600 underline gap-2"
              >
                Next.js Docs
                <RiShareBoxLine />
              </Link>
            </div>

            <div>
              <h3 className="text-md font-semibold list-decimal list-inside space-y-4 text-sm md:text-base">
                2. Next.js 13 using Chakra UI
              </h3>
              <li className="text-gray-700 list-disc list-inside pl-6">
                CSS Flexbox Explained – Complete Guide to Flexible Containers
                and Flex Items
              </li>
              <Link
                href="https://chakra-ui.com/"
                className="flex justify-start items-center pl-6 text-blue-600 underline gap-2"
              >
                Chakra UI Docs
                <RiShareBoxLine />
              </Link>
            </div>

            <div>
              <h3 className="text-md font-semibold list-decimal list-inside space-y-4 text-sm md:text-base">
                3. UI/UX Design with Figma, TailwindCSS, and Chakra UI
              </h3>
              <li className="text-gray-700 list-disc list-inside pl-6">
                Designing and Prototyping Interfaces with Figma
              </li>
              <Link
                href="https://www.figma.com/"
                className="flex justify-start items-center pl-6 text-blue-600 underline gap-2"
              >
                Figma Design Kit for TailwindCSS
                <RiShareBoxLine />
              </Link>
            </div>

            <div>
              <h3 className="text-md font-semibold list-decimal list-inside space-y-4 text-sm md:text-base">
                4. API Routes with Next.js
              </h3>
              <Link
                href="https://nextjs.org/docs/api-routes/introduction"
                className="flex justify-start items-center pl-6 text-blue-600 underline gap-2"
              >
                API Routes
                <RiShareBoxLine />
              </Link>
            </div>

            <div>
              <h3 className="text-md font-semibold list-decimal list-inside space-y-4 text-sm md:text-base">
                5. APIs with Next.js and tRPC
              </h3>
              <li className="text-gray-700 list-disc list-inside pl-6">
                Build a tRPC CRUD API Example with Next.js
              </li>
            </div>

            <div>
              <h3 className="text-md font-semibold list-decimal list-inside space-y-4 text-sm md:text-base">
                6. SQL and Prisma
              </h3>
              <li className="text-gray-700 list-disc list-inside pl-6">
                Start from scratch with relational databases
              </li>
            </div>

            <div>
              <h3 className="text-md font-semibold list-decimal list-inside space-y-4 text-sm md:text-base">
                7. Next.js 13 using TailwindCSS
              </h3>
              <li className="text-gray-700 list-disc list-inside pl-6">
                Modern CSS with Tailwind, Second Edition
              </li>
            </div>

            <div>
              <h3 className="text-md font-semibold list-decimal list-inside space-y-4 text-sm md:text-base">
                8. AWS Application Composer
              </h3>
              <li className="text-gray-700 list-disc list-inside pl-6">
                What is AWS Application Composer?
              </li>
            </div>

            <div>
              <h3 className="text-md font-semibold list-decimal list-inside space-y-4 text-sm md:text-base">
                9. Multi-Cloud GraphQL Serverless API Development
              </h3>
              <li className="text-gray-700 list-disc list-inside pl-6">
                Learn Multicloud Serverless API Development using CDK Terraform
                in Baby Steps
              </li>
            </div>

            <div>
              <h3 className="text-md font-semibold list-decimal list-inside space-y-4 text-sm md:text-base">
                10. Web 2.0 Projects
              </h3>
              <ul className="list-disc ml-5 text-gray-700">
                <li className="text-gray-700 list-inside">Next.js Projects</li>
                <li className="text-gray-700 list-inside">
                  Styling Next.js Projects using TailwindCSS and Chakra UI
                </li>
                <li className="text-gray-700 list-inside">
                  Todo Full-Stack App
                </li>
                <li className="text-gray-700 list-inside">
                  Build a Twitter Clone
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            AWS Account Setup
          </h2>
          <p className="text-gray-700 mt-4">
            Note: For AWS Free Tier you will need a credit or debit card. The
            easiest way for Pakistani students is to open a bank account with
            Meezan Bank. Open a Meezan Aasan Account if you have no earning
            proof. Meezan Bank will charge Rs. 1100 for ATM Debit Card and there
            is a requirement of Rs. 100 minimum deposit. The card will be
            delivered in a few weeks. Our students have reported that this Debit
            card works with AWS.
          </p>
          <p className="md:flex text-gray-700 mt-2">
            Now you can create a virtual VISA Debit card through the NayaPay app
            (
            <Link
              href="https://www.nayapay.com/"
              className="md:flex justify-normal items-center gap-2 text-blue-600 underline"
            >
              NayaPay
              <RiShareBoxLine />
            </Link>
            ) which can be used to create AWS/GCP/Azure accounts.
          </p>
        </section>
      </main>

      <footer className="bg-black text-white py-4 mt-8">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
          <p className="text-xs md:text-sm">
            &copy; 2024 E-Learning Web2 Using NextJS | All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default page;
