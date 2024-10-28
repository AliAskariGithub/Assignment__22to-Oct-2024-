import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col justify-center items-center mt-20 bg-darkPurple text-white min-h-screen p-6 sm:p-12"
    >
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-center pt-8 sm:pt-1">
        About Us
      </h1>
      <p className="text-lg sm:text-xl font-semibold mb-8 text-center">
        Welcome to the next evolution of the internet!
      </p>
      
      <div className="max-w-4xl text-center space-y-6 sm:space-y-8">
        <p className="text-sm sm:text-base font-medium leading-relaxed">
          At [E-Learning], we are passionate about reshaping the digital
          landscape through the power of Web 3.0 technologies. Our mission is to
          drive the future of decentralized ecosystems where users are in
          control of their data, privacy, and digital assets. We believe in
          building a more transparent, trustless, and user-centric internet,
          enabling individuals to have greater freedom, ownership, and autonomy
          in the digital world.
          <br />
          <br />
          Our team consists of experts in blockchain, smart contracts,
          decentralized finance (DeFi), and AI who are committed to pushing the
          boundaries of what is possible. Whether its creating innovative DApps,
          powering the next wave of decentralized finance, or helping artists
          and creators thrive through NFTs, we are at the forefront of this
          groundbreaking movement.
          <br />
          <br />
          <strong>Our Vision:</strong> To democratize the web and give back
          control to its users by leveraging blockchain and AI technologies. We
          are working towards a world where trust is inherent in the systems we
          build, and the internet belongs to everyone—not just large
          corporations.
          <br />
          <br />
          <strong>What We Do:</strong>
        </p>

        <ul className="list-disc list-inside text-sm sm:text-base font-medium space-y-2 text-left mx-auto max-w-md sm:max-w-lg">
          <li>
            <strong>Decentralized Applications (DApps):</strong> We create
            intuitive and scalable DApps for industries ranging from finance to
            entertainment, allowing users to engage in secure, trustless
            interactions.
          </li>
          <li>
            <strong>Smart Contracts Development:</strong> Automating processes
            through self-executing contracts that offer transparency and reduce
            reliance on intermediaries.
          </li>
          <li>
            <strong>Blockchain Consulting:</strong> Helping businesses
            transition into decentralized models by guiding them through the
            process of integrating blockchain solutions.
          </li>
          <li>
            <strong>NFT Solutions:</strong> Empowering creators to tokenize
            their work and engage with global audiences through unique digital
            ownership.
          </li>
          <li>
            <strong>AI-Enhanced Systems:</strong> Integrating AI into
            decentralized platforms for smarter, more personalized user
            experiences.
          </li>
        </ul>

        <p className="text-sm sm:text-base leading-relaxed mt-6">
          Together, we are not just building technology we are building the
          future of the internet. Join us on this journey as we explore the
          limitless possibilities of Web 3.0.
        </p>
      </div>
    </div>
  );
};

export default About;
