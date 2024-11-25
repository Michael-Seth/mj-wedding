"use client"
import React from "react";
import Image from "next/image";
import logoWhite from "../../assets/imgs/MJ Logog white.png";
import logoBlack from "../../assets/imgs/MJ Logog Black.png";

const Footer = () => {
  return (
    <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
      <div className=" flex flex-col items-center justify-center text-center">
        <div className="">
          <Image
            src={logoBlack}
            width={140}
            alt="Michael Joy Logo"
            className="block dark:hidden"
          />
          <Image
            src={logoWhite}
            width={140}
            alt="Michael Joy Logo"
            className="hidden dark:block"
          />
        </div>
        <div className="mt-3">
          <p className="text-gray-500 text-sm dark:text-neutral-500">
            <i className="">&ldquo;I have found the one whom my soul loves.&rdquo;</i> <br />
            Song of Solomon 3:4
          </p>
          <p className="text-gray-500 text-xs dark:text-neutral-500">
            © 2024 Michael Joy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
