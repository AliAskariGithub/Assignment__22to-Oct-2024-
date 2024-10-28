import Head from "next/head";
import Link from "next/link";
import React from "react";
import { RiShareBoxLine } from "react-icons/ri";

const page = () => {
  return (
    <div className="min-h-screen bg-transparent text-gray-900">
      <Head>
        <title>Ambient Computing and IoT</title>
        <meta
          name="description"
          content="Learn Ambient Computing and IoT with easy way"
        />
      </Head>

      <header className="bg-darkPurple text-white py-6">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <h1 className="text-2xl md:text-3xl font-bold">
            Ambient Computing and IoT
          </h1>
          <p className="mt-2 text-md md:text-lg">Duration: 1 Year</p>
          <p className="mt-1 text-sm md:text-md">
            AC-351: Ambient Computing with Voice Assistants and Matter Devices
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:px-8 lg:px-16">
        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Course Description
          </h2>
          <p className="mb-4 text-sm md:text-base">
            Ambient computing, also commonly referred to as ubiquitous
            computing, is the concept of blending computing power into our
            everyday lives in a way that is embedded into our surroundings -
            invisible but useful. In a multi-device world, people do not want to
            spend their life fussing with technology. An ambient approach gets
            the tech out of your way so you can live your life while getting the
            help you need. It does not matter what device you are using, what
            context you are in, whether you are talking, typing, or tapping. The
            technology in your life works together seamlessly. Ambient computing
            uses all aspects of modern-day technology, including voice
            assistants, artificial intelligence, sensors, connectivity, cloud
            computing and more.
          </p>

          <p className="mb-4 text-sm md:text-base">
            If you were thinking that the IoT and ambient computing sound a lot
            alike, you are not wrong; the two concepts are intertwined. IoT
            refers to the vast array of devices that connect to the internet to
            optimize their functionality, like smart sensors and smart speakers:
            ambient computing builds on that. Ambient computing focuses on the
            interaction between these devices once they are connected.
          </p>

          <p className="mb-4 text-sm md:text-base">
            Matter, the next-generation smart home standard, solves many smart
            home pain points while bringing all our IoT devices together. Some
            of the biggest tech companies are working together to make Matter a
            unified protocol for future smart homes. These companies include
            Apple, Amazon, and Google. This means Apple HomeKit, Amazon Alexa,
            Samsung SmartThings, Google Nest, and Samsung SmartThings will
            support the Matter standard by default for all new devices.
          </p>

          <p className="mb-4 text-sm md:text-base">
            In this course, we will learn to build smart homes with Amazon Alexa
            and the Matter protocol.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Course Outline
          </h2>

          <ol className="mt-6 space-y-6 text-gray-700 list-decimal ml-5">
            <li>
              <strong>Alexa Skill Developement</strong>

              <ul className="list-disc list-inside pb-2 mt-4">
                <Link
                  href={"https://developer.amazon.com/en-US/alexa"}
                  className="flex justify-start items-center ml-5 gap-5 text-blue-600 hover:text-blue-800"
                >
                  <RiShareBoxLine />
                  alexa
                </Link>
              </ul>
            </li>

            <li>
              <strong>
              Alexa with Matter Protocol
              </strong>

              <ul className="list-disc list-inside pb-2 mt-4">
                  <Link
                    href={"https://developer.amazon.com/en-US/alexa/matter"}
                    className="flex justify-start items-center ml-5 gap-5 text-blue-600 hover:text-blue-800"
                  >
                    <RiShareBoxLine />
                    Alexa matter protocol
                  </Link>

                  <Link
                    href={"https://developer.amazon.com/en-US/blogs/alexa/device-makers/2022/07/alexa-live-2022-ack-sdk-matter"}
                    className="flex justify-start items-center ml-5 gap-5 text-blue-600 hover:text-blue-800"
                  >
                    <RiShareBoxLine />
                    Alexa connect kit SDK for matter
                  </Link>
                <br />
              </ul>
            </li>
          </ol>
        </section>
      </main>

      <footer className="bg-black text-white py-4 mt-8">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
          <p className="text-xs md:text-sm">
            &copy; 2024 E-Learning Ambient Computing and IoT | All Rights
            Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default page;
