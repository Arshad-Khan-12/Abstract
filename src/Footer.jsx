import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-black h-96 flex items-start p-12 justify-around text-white">
        <div>
          <p className="text-2xl font-bold mb-3">Abstract</p>
          <p>Start Trial</p>
          <p>Pricing</p>
          <p>Download</p>
        </div>
        <div>
          <p className="text-2xl font-bold mb-3">Resources</p>
          <p>Blog</p>
          <p>Help Center</p>
          <p>Release Notes</p>
          <p>Status</p>
        </div>
        <div>
          <p className="text-2xl font-bold mb-3">Community</p>
          <p>Twitter</p>
          <p>LinkedIn</p>
          <p>Facebook</p>
          <p>GitHub</p>
        </div>
        <div>
          <p className="text-2xl font-bold mb-3">Company</p>
          <p>About Us</p>
          <p className="mb-5">Careers</p>
          <p className="text-lg font-semibold">Contact Us</p>
          <p>arshadhanh.tech@gmail.com</p>
        </div>
        <div className="mt-30">
          <div className="mt-48">
            <p className="text-lg"> &#169; Copyright 2023</p>
            <p className="text-lg">Abstract Studio Design, Inc.</p>
            <p className="text-lg">All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
