import Head from "next/head";
import Link from "next/link";
import React from "react";
import { RiShareBoxLine } from "react-icons/ri";

const page = () => {
  return (
    <div className="min-h-screen bg-transparent text-gray-900">
      <Head>
        <title>Artificial Intelligence (AI) and Deep Learning</title>
        <meta
          name="description"
          content="Learn Artificial Intelligence (AI) and Deep Learning with us"
        />
      </Head>

      <header className="bg-darkPurple text-white py-6">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <h1 className="text-2xl md:text-3xl font-bold">
            Artificial Intelligence (AI) and Deep Learning
          </h1>
          <p className="mt-2 text-md md:text-lg">Duration: 1 Year</p>
          <p className="mt-1 text-sm md:text-md">
            AI-351: Developing Planet-Scale Intelligent APIs and Python
            Programming
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:px-8 lg:px-16">
        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Course Description
          </h2>
          <p className="mb-4 text-sm md:text-base">
            Artificial intelligence is the simulation of human intelligence
            processes by machines, especially computer systems. The AI and Deep
            Learning Specialization is a foundational program that will aid in
            your comprehension of deep learning is potential, difficulties, and
            effects as well as equip you to take part in the creation of
            cutting-edge AI technology.
          </p>

          <p className="mb-4 text-sm md:text-base">
            We will start this course by understanding the fundamentals and use
            cases for AI and move on to building next-gen intelligent apps using
            OpenAI is powerful models and Next.js 13.
          </p>

          <p className="mb-4 text-sm md:text-base">
            We will conclude the course by learning about basic programming
            concepts using Python, such as lists, dictionaries, classes,
            functions, and loops, and practice writing clean and readable code
            with exercises for each topic. We will also learn how to make your
            programs interactive and how to test your code safely before adding
            it to a project. It is a fast-paced, thorough introduction to
            programming with Python 3.10+ that will have you writing programs,
            solving problems, and making things that work in no time. In this
            quarter we will also learn Git, the distributed version control
            system. We will also review Git-based GitHub services.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Course Outline
          </h2>

          <ol className="mt-6 space-y-6 text-gray-700 list-decimal ml-5">
            <li>
              <strong>
                Introduction to Machine Learning, Data Science, and AI
              </strong>

              <ul className="list-disc list-inside pb-2 mt-4">
                <p>
                  Learn AI for Everyone
                  <Link
                    href={"https://www.coursera.org/learn/ai-for-everyone"}
                    className="flex justify-start items-center ml-5 gap-5 text-blue-600 hover:text-blue-800"
                  >
                    <RiShareBoxLine />
                    AI for everyone
                  </Link>
                </p>
                <br />
                <p className="mt-2">AI for Everyone Quiz in Week 4</p>
                <p>Total Questions: 60</p>
                <p>Total Time: 75 minutes</p>
              </ul>
            </li>

            <li>
              <strong>
              Building Next-Gen Intelligent Apps with OpenAI is Powerful Models
              </strong>

              <ul className="list-disc list-inside pb-2 mt-4">
                <p>
                We will cover GPT-4, ChatGPT, etc. and Next.js 13
                  <Link
                    href={"https://openai.com/api/"}
                    className="flex justify-start items-center ml-5 gap-5 text-blue-600 hover:text-blue-800"
                  >
                    <RiShareBoxLine />
                    openai
                  </Link>
                  <Link
                    href={"https://towardsdatascience.com/gpt-4-is-coming-soon-heres-what-we-know-about-it-64db058cfd45"}
                    className="flex justify-start items-center ml-5 gap-5 text-blue-600 hover:text-blue-800"
                  >
                    <RiShareBoxLine />
                    Gpt-4 is coming soon heres what we know about it
                  </Link>
                </p>
              </ul>
            </li>

            <li>
              <strong>
              Python Crash Course for TypeScript Developers
              </strong>

              <ul className="list-disc list-inside pb-2 mt-4">
                <p>
                Python Crash Course, 2nd Edition: A Hands-On, Project-Based Introduction to Programming 2nd Edition
                  <Link
                    href={"https://www.amazon.com/Python-Crash-Course-2nd-Edition/dp/1593279280/ref=sr_1_5"}
                    className="flex justify-start items-center ml-5 gap-5 text-blue-600 hover:text-blue-800"
                  >
                    <RiShareBoxLine />
                    Python Crash Course 2nd Edition
                  </Link>
                </p>
              </ul>
            </li>
          </ol>
        </section>
      </main>

      <footer className="bg-black text-white py-4 mt-8">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
          <p className="text-xs md:text-sm">
            &copy; 2024 E-Learning Artificial Intelligence (AI) and Deep
            Learning | All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default page;
