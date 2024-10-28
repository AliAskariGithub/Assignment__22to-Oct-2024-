import Head from "next/head";
import Link from "next/link";
import React from "react";
import { RiShareBoxLine } from "react-icons/ri";

const page = () => {
  return (
    <div className="min-h-full bg-transparent text-gray-900">
      <Head>
        <title>Cloud-Native Computing</title>
        <meta name="description" content="Learn Clous native computing" />
      </Head>

      <header className="bg-darkPurple text-white py-6">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <h1 className="text-2xl md:text-3xl font-bold">
            Cloud-Native Computing
          </h1>
          <p className="mt-2 text-md md:text-lg">Duration: 1 Year</p>
          <p className="mt-1 text-sm md:text-md">
            CN-351: Certified Kubernetes Application Developer (CKAD)
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:px-8 lg:px-16">
        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Course Description
          </h2>
          <p className="mb-4 text-sm md:text-base">
            Cloud-native architecture and technologies are an approach to
            designing, constructing, and operating workloads that are built in
            the cloud and take full advantage of the cloud computing model.
            Cloud-native technologies empower organizations to build and run
            scalable applications in modern, dynamic environments such as
            public, private, and hybrid clouds. Containers, service meshes,
            microservices, immutable infrastructure, and declarative APIs
            exemplify this approach.
          </p>
          <p className="mb-4 text-sm md:text-base">
            These techniques enable loosely coupled systems that are resilient,
            manageable, and observable. Combined with robust automation, they
            allow engineers to make high-impact changes frequently and
            predictably with minimal toil.
          </p>
          <p className="mb-4 text-sm md:text-base">
            Kubernetes is an open-source system for automating the deployment,
            scaling, and management of containerized applications. In this
            course, you will learn how to develop cloud applications using
            cloud-native technologies like Containers, Kubernetes, and CDK for
            Kubernetes.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Course Outline
          </h2>

          <ol className="mt-6 space-y-6 text-gray-700 list-decimal ml-5">
            <li>
              <strong>
                Kubernetes: Up and Running: Dive into the Future of
                Infrastructure 3rd Edition
              </strong>
              <ul className="list-disc list-inside pb-2 mt-2">
                <Link
                  href={
                    "https://www.amazon.com/Kubernetes-Running-Dive-Future-Infrastructure/dp/109811020X/ref=sr_1_3"
                  }
                  className="flex justify-start items-center ml-5 gap-5 text-blue-600 hover:text-blue-800"
                >
                  <RiShareBoxLine />
                  Kubernetes Running Dive Future Infrastructure
                </Link>
              </ul>
            </li>

            <li>
              <strong>Cloud Development Kit for Kubernetes</strong>
              <ul className="list-disc list-inside pb-2 mt-2">
                <Link
                  href={"https://cdk8s.io/"}
                  className="flex justify-start items-center ml-5 gap-5 text-blue-600 hover:text-blue-800"
                >
                  <RiShareBoxLine />
                  cdk8s
                </Link>
              </ul>
            </li>
          </ol>
        </section>
      </main>

      <footer className="bg-black text-white py-4 mt-8">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
          <p className="text-xs md:text-sm">
            &copy; 2024 E-Learning Cloud-Native Computing | All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default page;
