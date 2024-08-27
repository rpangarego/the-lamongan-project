import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="container min-h-96 w-full">
      {/* TITLE */}
      <div className="mt-14 text-center">
        <p className="text-6xl font-black gradient-text mb-1 md:text-6xl ">
          The Lamongan Project
        </p>
        <p className="text-2xl text-green-700 font-semibold">by ropangarego</p>
      </div>

      <div className="flex flex-col justify-between items-center text-center mt-10 md:flex-row">
        <div>
          <img src="/images/chicken_left.jpg" alt="chicken_nft" width={350} />
        </div>
        <div className="text-center">
          <p className="font-bold text-2xl mb-3">
            NFT Collection based on Indonesia <br /> street food from Lamongan.
          </p>
          {/* <button className="btn btn-primary">Join Whitelist</button> */}
          <p className="text-xl mb-2">Thank you for joining our whitelist!</p>
          <a
            className="btn btn-primary"
            href="https://testnets.opensea.io/collection/the-lamongan-project/"
            target="_blank"
          >
            Claim NFT
          </a>
        </div>
        <div className="hidden md:block">
          <img src="/images/chicken_right.jpg" alt="chicken_nft" width={350} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
