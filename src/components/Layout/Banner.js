import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://t4.ftcdn.net/jpg/02/07/15/43/360_F_207154340_wLIJus4m3SBl5sAQmpqN3Um7REnUhskU.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            This is a pc builder website. You can build your pc with your comfort. Please Stay Connected. <br/>Thank You
          </p>
          <Link href='/pcbuilder'><button className="btn btn-primary">Get Started</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
