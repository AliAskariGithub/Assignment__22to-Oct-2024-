import Head from "next/head";
import Link from "next/link";
import React from "react";
import { RiShareBoxLine } from "react-icons/ri";

const page = () => {
  return (
    <div className="min-h-screen bg-transparent text-gray-900">
      <Head>
        <title>Web 3 and Metaverse</title>
        <meta name="description" content="Learn Web 3.0 and Metaverse." />
      </Head>

      <header className="bg-darkPurple text-white py-6">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <h1 className="text-2xl md:text-3xl font-bold">
            Web 3 and Metaverse
          </h1>
          <p className="mt-2 text-md md:text-lg">Duration: 1 Year</p>
          <p className="mt-1 text-sm md:text-md">
            W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps
          </p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8 md:px-8 lg:px-16">
        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Course Description
          </h2>
          <p className="mb-4 text-sm md:text-base">
            In this course you will learn how to develop Web 3.0 DApps, create a
            project, deploy it in production, write smart contracts, unit test
            them, and create user interfaces for them. We will also learn to
            develop ERC-20 and NFT tokens, DAOs, Oracles, etc. Please note that
            in order to develop Web 3 applications you also need to build on top
            of Web 2.0 technologies which we have already covered in the
            previous quarters.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl md:text-2xl font-semibold">Course Outline</h2>
          <ol className="mt-6 space-y-6 text-gray-700 list-decimal ml-5">

            <li>
              <strong>Blockchain and Metaverse Theory</strong>
              <ul className="list-disc list-inside pb-2 mt-2">
                <p>
                The Metaverse: And How It Will Revolutionize Everything by
                  Matthew Ball
                <Link href={"https://www.amazon.com/Metaverse-How-Will-Revolutionize-Everything/dp/1324092033/ref=tmm_hrd_swatch_0"} className="flex justify-start items-center ml-5 gap-5 text-blue-600 hover:text-blue-800"><RiShareBoxLine />Metaverse book by matthew ball</Link>
                </p>

                <br />

                <p>Mastering Blockchain - Fourth Edition by Imran Bashir</p>
                <Link href={"https://www.packtpub.com/en-us/product/mastering-blockchain-fourth-edition-9781803241067"} className="flex justify-start items-center ml-5 gap-5 text-blue-600 hover:text-blue-800"><RiShareBoxLine />Mastering blockchain book by imran bashir</Link>
              </ul>
            </li>

            <li>
              <strong>
                Smart Contract Development in Solidity
              </strong>
              <ul className="list-disc list-inside pb-2 mt-2">
              <p>
              Solidity Programming Essentials - Second Edition By Ritesh Modi
                <Link href={"https://www.packtpub.com/en-us/product/solidity-programming-essentials-9781803231181"} className="flex justify-start items-center ml-5 gap-5 text-blue-600 hover:text-blue-800"><RiShareBoxLine />Solidity programming book by Ritesh Modi</Link>
                </p> 
                <br />
                <p>
                Solidity Learning Repo
                <Link href={"https://github.com/panaverse/defi-dapps-solidity-smart-contracts"} className="flex justify-start items-center ml-5 gap-5 text-blue-600 hover:text-blue-800"><RiShareBoxLine />Defi dapps solidity smart contracts repo</Link>
                </p>  
              </ul>
            </li>

            <li>
              <strong>
                Dapp Development using Ethers.js and Next.js 13
              </strong>
              <ul className="list-disc list-inside pb-2 mt-2">
                                <p>
                                Dapp Learning Repo
                <Link href={"https://github.com/panaverse/dapps-nextjs"} className="flex justify-start items-center ml-5 gap-5 text-blue-600 hover:text-blue-800"><RiShareBoxLine />Dapps nextjs repo</Link>
                </p>
              </ul>
            </li>

            <li>
              <strong>Tokennomics</strong>
            </li>

            <li>
              <strong>
                Blockchain Project: Create a Token and Launch ICO/IEO/IDO
              </strong>
              <p className="mt-2">
                Understand the difference between IDO vs. IEO vs. ICO.
              </p>
              <ul className="list-disc list-inside pb-2">
                <li>ICO list at ICO Drops</li>
                <li>ICO List of Best New Initial Coin Offerings</li>
                <li>Binance IEO List</li>
                <li>Binance Launchpad</li>
              </ul>
            </li>

            <li>
              <strong>
              Project Part 1: How to Launch a IEO on Binance Launchpad
              </strong>
              <ul className="list-disc list-inside pb-2 mt-2">
                <p>
                Read How to Launch an IEO
                <Link href={"https://www.amazon.com/Metaverse-How-Will-Revolutionize-Everything/dp/1324092033/ref=tmm_hrd_swatch_0"} className="flex justify-start items-center ml-5 gap-5 text-blue-600 hover:text-blue-800"><RiShareBoxLine />How to launch an ieo</Link>
                </p>

                <br />

                <p>Your first task of the project is to make a google slides presentation on how to start a IEO on the Binance Launch Pad</p>
                <Link href={"https://www.packtpub.com/en-us/product/mastering-blockchain-fourth-edition-9781803241067"} className="flex justify-start items-center ml-5 gap-5 text-blue-600 hover:text-blue-800"><RiShareBoxLine />How to Get Started with Binance Launchpool</Link>

                <br />

                <p><strong>Note :</strong> Also document the alternatives to Binance Launchpad.</p>
              </ul>
            </li>

            <li>
              <strong>
                Project Part 2: How to Launch a IDO on Polkastarter
              </strong>
              <ul className="list-disc list-inside pb-2 mt-2">
                <p>
                Review the list of top fundraising platforms
                <Link href={"https://appinventiv.com/blog/how-to-launch-an-ieo/"} className="flex justify-start items-center ml-5 gap-5 text-blue-600 hover:text-blue-800"><RiShareBoxLine />Top fundraising platforms</Link>
                </p>

                <br />

                <p>Your second task of the project is to make a google slides presentation on how to start a IDO on the Polkastarter</p>
                <Link href={"https://www.binance.com/en/support/faq/how-to-get-started-with-binance-launchpool-94ed108ce89d44ab8602aa3c476dfb04?hl=en"} className="flex justify-start items-center ml-5 gap-5 text-blue-600 hover:text-blue-800"><RiShareBoxLine />polkastarter</Link>
              </ul>
            </li>

            <li>
              <strong>
                Project Part 3: Create a Pako Token
              </strong>
              <p className="mt-2">
              By creating a token and related contracts, you will also learn how to handle money sent to your contracts, which should come in handy if you want to create some kind of paid decentralized service in the future.

Therefore, for the sake of this chapter, lets imagine that our Pako DApp uses its own coin - the Pako Token. We will create two contracts – one for the token itself and one for the token crowd sale (the ICO).

Now Create your own Pako ERC20 Token and deploy it on a testnet. The Token should be to use OpenZeppelin contracts. You will use the Hardhat development environment. Also, write at least twenty automated tests. We will be using Solidity and Typescript for development.
              </p>
            </li>

            <li>
              <strong>
                Project Part 4: Develop Crowd Sale Contract
              </strong>
              <p className="mt-2">
              This contract will be responsible for allowing users to exchange ETH for our Pako Token. In order to do that we need to set a price for our token (1 ETH = 100 Pako Token)
              </p>
              <p className="mt-2">
              Implement a payable buyToken() function.
              </p>
              <p className="mt-2">
              Emit a BuyTokens event that will log who is the buyer, the amount of ETH sent and the amount of Token bought
              </p>
              <p className="mt-2">
              Transfer 75% of the Tokens to the Crowd Sale contract at deployment time. i.e. Right after the contract is deployed, we want the token contract to send 75% of our token supply to it. While 25% remain in our personal owner account.
              </p>
              <p className="mt-2">
              Transfer the ownership of the Crowd Sale contract (at deploy time) to our frontend address so that we are able to withdraw the ETH.
              </p>

              <ul className="list-disc list-inside pb-2 mt-2">
                <p>
                You can use the openzeppelin crowd sale contracts
                <Link href={"https://docs.openzeppelin.com/contracts/4.x/crowdsales"} className="flex justify-start items-center ml-5 gap-5 text-blue-600 hover:text-blue-800"><RiShareBoxLine />Openzeppelin crowd sale contracts</Link>
                </p>

                <br />

                <p>however you will have to update the code to the latest solidity version.</p>

                <p className="mt-2">Also write extensive tests, for example we will simply send a transaction of 1 ETH from a random account to the contract. After the transaction, we should expect the account to have received Pako, while the contracts balance should have been reduced.</p>
                <p className="mt-2"><strong>Note :</strong> Before you get started writing the token contract we suggest you review the access control</p>
                <Link href={"https://docs.openzeppelin.com/contracts/4.x/access-control"} className="flex justify-start items-center gap-5 mt-3 text-blue-600 hover:text-blue-800"><RiShareBoxLine />access-control</Link>
              </ul>
            </li>

            <li>
              <strong>
                Project Part 5: Trying it with MetaMask
              </strong>

              <p className="mt-2">
              While its always good to test your code, its often more satisfying to see the results of your work wrapped in a nice UI. Lets see how we can deploy our contracts and get some Pako tokens into our MetaMask wallet!
              </p>
              <p className="mt-2">
              We start by running our deployment scripts for the test network so that the new token contracts are uploaded and deployed.
              </p>
              <p className="mt-2">
              When its done, take note of what addresses the contracts were uploaded to and copy it!
              </p>
              <p className="mt-2">
              Now head to MetaMask, and send a transaction of 1 ETH to the crowd sale contract address. If your MetaMask wallet does not have any ethers, remember that you can use any faucet.
              </p>
              <p className="mt-2">
              After the transaction has been confirmed, you might be confused about why you ca not see any tokens in your wallet. It turns out that you need to manually add the token address in MetaMask in order to register it - after all, there are so many tokens out there, there is no way MetaMask could list them all by default!
              </p>
              <p className="mt-2">
              To do this, open the side menu and click on the Add token button to get started:
              </p>
              <p className="mt-2">
              Once you are on the token page, click on Add custom token and paste in the token contracts address in the address field.
              </p>
              <p className="mt-2">
              After confirming that you want to add the token, you should be able to see your Pako balance right next to your ETH balance in the wallet. How cool!
              </p>
            </li>

            <li>
              <strong>
                Project Part 6: Trying it with Multisignature Wallets
              </strong>
              <ul className="list-disc list-inside pb-2 mt-2">
                <p>
                Read
                <Link href={"https://www.coindesk.com/tech/2020/11/10/multisignature-wallets-can-keep-your-coins-safer-if-you-use-them-right/"} className="flex justify-start items-center ml-5 gap-5 text-blue-600 hover:text-blue-800"><RiShareBoxLine />Multisignature wallets can keep your coins safer if you use them right</Link>
                </p>

                <br />

                <p>Now use Gnosis Safe with multi-sigs to do what you did in the last part</p>
                <Link href={"https://safe.global/"} className="flex justify-start items-center ml-5 gap-5 text-blue-600 hover:text-blue-800"><RiShareBoxLine />Gnosis safe</Link>
              </ul>
            </li>

            <li>
              <strong>
                Project Part 7: Sending Tokens using Ethers.js
              </strong>
              <ul className="list-disc list-inside pb-2 mt-2">
                <p>
                Write a Typescript program to send Pako Token to some friends address using Ethers.js.
                <Link href={"https://ethereum.org/en/developers/tutorials/send-token-etherjs/"} className="flex justify-start items-center ml-5 gap-5 text-blue-600 hover:text-blue-800"><RiShareBoxLine />You may follow this tutorial</Link>
                </p>
              </ul>
            </li>

            <li>
              <strong>
                Project Part 8 Advance: Create, Deploy, Mint, and Sell an NFT
              </strong>
              <ul className="list-disc list-inside pb-2 mt-2">
                <p>
                Read this NFT tutorial series
                <Link href={"https://ethereum.org/en/developers/tutorials/how-to-write-and-deploy-an-nft/"} className="flex justify-start items-center ml-5 gap-5 text-blue-600 hover:text-blue-800"><RiShareBoxLine />How to write and deploy an nft</Link>
                </p>
                <br />
                <p>
                Create a NFT contract using the OpenZepplen ERC721 NFT Standard
                <Link href={"https://docs.openzeppelin.com/contracts/4.x/erc721"} className="flex justify-start items-center ml-5 gap-5 text-blue-600 hover:text-blue-800"><RiShareBoxLine />NFT contract using OpenZepplen ERC721 NFT Standard</Link>
                </p>
                <br />
                <p>
                You may use the Preset ERC721 contract
                <Link href={"https://docs.openzeppelin.com/contracts/4.x/erc721#Presets"} className="flex justify-start items-center ml-5 gap-5 text-blue-600 hover:text-blue-800"><RiShareBoxLine />Present ERC721 contract</Link>
                </p>
                <br />
                <p>
                Deploy your NFT contract on a testnet, mint it, and view it on the MetaMask wallet and list it on OpenSea Marketplace for sale.
                <Link href={"https://opensea.io/"} className="flex justify-start items-center ml-5 gap-5 text-blue-600 hover:text-blue-800"><RiShareBoxLine />opensea</Link>
                </p>
                <br />
                <p>
                Implement a ERC721 Market
                <Link href={"https://ethereum.org/en/developers/tutorials/how-to-implement-an-erc721-market/"} className="flex justify-start items-center ml-5 gap-5 text-blue-600 hover:text-blue-800"><RiShareBoxLine />How to implement an erc721 market</Link>
                </p>
              </ul>
            </li>

          </ol>
        </section>

      </main>
      <footer className="bg-black text-white py-4 mt-8">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
          <p className="text-xs md:text-sm">
            &copy; 2024 E-Learning Web 3 and Metaverse | All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default page;
