import React from "react";

const Footer = () => {
  return (
    <footer className="px-4 sm:px-6 py-6 mt-10">
      <div className="text-center text-sm text-gray-500">
        <span className="dark:text-black text-white font-bold text-lg mr-2">
          {" "}
          Copyright Next.js Dev -
        </span>{" "}
        &copy; {new Date().getFullYear()} All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
