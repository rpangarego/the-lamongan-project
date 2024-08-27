import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="nav-container border-b-2">
      <nav className="flex flex-row justify-between items-center h-full">
        {/* <div className=""> */}
        <img src="/images/OG.png" alt="the-lamongan-project_logo" width={200} />
        {/* </div> */}
        <div>
          {/* <button className="btn btn-primary">Connect</button> */}

          <button className="btn-wallet-connected">
            <img
              src="/images/profile.jpg"
              alt=""
              width={30}
              className="rounded-full border border-gray-800"
            />
            <span>0xA8C...3493</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
