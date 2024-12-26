import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 p-10 mt-5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
        <div>
          <h3 className="font-bold text-white">Services</h3>
          <ul className="text-sm space-y-1">
            <li>Branding</li>
            <li>Marketing</li>
            <li>Advertisement</li>
          </ul>
        </div>
        <div className="">
          <h6 className="font-bold text-white">Company</h6>
          <ul className="text-sm space-y-1">
            <li>About us</li>
            <li>Contact</li>
            <li>Jobs</li>
            <li>Press kit</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-white">Contact</h3>
          <p className="text-sm">daniel@example.com</p>
          <p className="text-sm">+1 234 567 890</p>
        </div>
        <div>
          <h3 className="font-bold text-white">Social</h3>
          <div className="flex space-x-3">
            <a className="hover:text-white">Twitter</a>
            <a className="hover:text-white">Facebook</a>
            <a className="hover:text-white">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
