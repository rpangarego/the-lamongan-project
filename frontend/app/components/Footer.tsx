import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="nav-container flex justify-between items-center border-t-2 mt-10">
      <p>
        Made with &#10084; by <span className="font-semibold">ropangarego</span>
      </p>
      <div className="flex flex-row gap-5">
        <a href="https://github.com/rpangarego" target="_blank">
          <img src="/images/github-sm.png" alt="" width={25} />
        </a>
        <a href="https://instagram.com/ropangarego" target="_blank">
          <img src="/images/instagram-sm.png" alt="" width={25} />
        </a>
        <a href="https://linkedin.com/in/rpangarego" target="_blank">
          <img src="/images/linkedin-sm.png" alt="" width={25} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
