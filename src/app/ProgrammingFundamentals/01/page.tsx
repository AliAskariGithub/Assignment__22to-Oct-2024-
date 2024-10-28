import Head from "next/head";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-transparent text-gray-900">
      <Head>
        <title>Web2 Using NextJS in TypeScript</title>
        <meta
          name="description"
          content="Learn Web 2.0 using NextJS in TypeScript"
        />
      </Head>

      <header className="bg-darkPurple text-white py-6">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <h1 className="text-2xl md:text-3xl font-bold">
            Programming Fundamentals
          </h1>
          <p className="mt-2 text-md md:text-lg">Duration: 1 Year</p>
          <p className="mt-1 text-sm md:text-md">
            CS-101: Object-Oriented Programming using TypeScript
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:px-8 lg:px-16">
        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Course Description
          </h2>
          
          <p className="mb-4 text-sm md:text-base">
            In this course, we will start by learning the fundamentals of
            Object-Oriented Programming using JavaScript and TypeScript.
            Additionally, we will explore modern web trends such as Web 3.0 and
            Metaverse concepts, understanding them from the users perspective.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Course Outline
          </h2>

          <ol className="mt-6 space-y-6 text-gray-700 list-decimal ml-5">
            <li>
              <strong>HTML and CSS (Homework)</strong>
              <ul className="list-disc list-inside pl-6">
                <li>Learn HTML by Hira Khan (Watch Recorded Videos)</li>
                <li>Learn CSS Intro by Hira Khan (Watch Recorded Videos)</li>
              </ul>
            </li>
            
            <li>
              <strong>Web 3.0 and Metaverse Theory</strong>
              <ul className="list-disc list-inside pl-6">
                <li>Introduction to Panaverse DAO</li>
                <li>Web 3.0 User Guide</li>
                <li>Complete Web 3 Assignments in the Web 3 User Guide</li>
              </ul>
            </li>

            <li>
              <strong>Fundamentals of JavaScript (ECMAScript 2022)</strong>
              <ul className="list-disc list-inside pl-6">
                <li>
                  Learn JavaScript by Zeeshan Hanif (Watch Recorded Videos)
                </li>
                <li>
                  Chapters 2-6, 13 of JavaScript from Beginner to Professional
                </li>
                <li>JavaScript Book Code and Exercises with Node.js</li>
              </ul>
            </li>

            <li>
              <strong>Fundamentals of JavaScript and Node.js Quiz</strong>
              <p>Topics Covered:</p>
              <ul className="list-disc list-inside pl-6">
                <li>
                  Background of JavaScript, Variables, Data Types, Operators
                </li>
                <li>
                  Node.js Intro, Modules, NPM, User Input with prompt-sync
                </li>
                <li>
                  Control Structures (if-else, loops), Functions, Async Promises
                </li>
                <li>New JavaScript Features (ECMAScript 2022)</li>
              </ul>
            </li>

            <li>
              <strong>Object-Oriented Programming with TypeScript</strong>
              <ul className="list-disc list-inside pl-6">
                <li>Chapters 1-11 of Learning TypeScript</li>
                <li>TypeScript Projects and Quizzes</li>
              </ul>
            </li>

            <li>
              <strong>TypeScript for React</strong>
              <ul className="list-disc list-inside pl-6">
                <li>Minimal TypeScript Crash Course for React</li>
              </ul>
            </li>

            <li>
              <strong>Quarter Break Assignments and Quizzes</strong>
              <ul className="list-disc list-inside pl-6">
                <li>
                  Build Panaverse DAO and PIAIC Syllabus Websites using Next.js
                  13
                </li>
                <li>Git and TypeScript Quizzes</li>
              </ul>
            </li>
            
          </ol>
        </section>

        <section className="mt-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Study Material
          </h2>
          <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
            <li>Learn TypeScript</li>
            <li>Learn Version Control with Git by Tobias Günther</li>
            <li>
              Getting started with GitHub: Formatting, Branching, Rebasing
            </li>
            <li>Git Quiz: 60 Questions, 75 Minutes</li>
            <li>TypeScript Proficiency Quiz: 63 Questions, 120 Minutes</li>
          </ul>
        </section>
      </main>

      <footer className="bg-black text-white py-4 mt-8">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
          <p className="text-xs md:text-sm">
            &copy; 2024 E-Learning Programming Fundamentals | All Rights
            Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default page;
