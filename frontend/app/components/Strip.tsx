import React from "react";

type Props = {};

const Strip = (props: Props) => {
  return (
    <div className="my-10 bg-yellow-300">
      <div className="container py-6 text-center font-sans font-semibold">
        <div className="text-2xl font-semibold mb-3">NFT COLLECTION:</div>
        <div className="flex justify-between">
          <span className="text-xl">- FRIED CHICKEN</span>
          <span className="text-xl">- FRIED CATFISH</span>
          <span className="hidden text-xl md:block">- SQUID CRISPY</span>
          <span className="hidden text-xl md:block">- FRIED RICE</span>
          <span className="hidden text-xl md:block">- SOTO SOUP</span>
          <span className="hidden text-xl md:block">- ICED TEA</span>
          <span className="text-xl">- AND MORE</span>
        </div>
      </div>
    </div>
  );
};

export default Strip;
