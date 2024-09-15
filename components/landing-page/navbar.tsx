"use client";
import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="md:flex mt-8  pl-8 justify-between pr-8 bg-transparent sticky">
      <ul className="flex gap-8 text-lg font-serif justify-center items-center text-herodarkColor">
        <li>
          <Image src={logo} alt="logo" width={30} height={30} />
        </li>
        <li className="hover:text-white transition-all">Home</li>
        <li className="hover:text-white transition-all">About</li>
        <li className="hover:text-white transition-all">Community</li>
        <li className="hover:text-white transition-all">Contact</li>
      </ul>
      <div className="flex gap-4">
        <Link href="/auth/sign-in">
          <button className="bg-heroColor text-white hover:bg-herodarkColor px-6 py-2 mt-4 rounded-md">
            Sign-in
          </button>
        </Link>

        <Link href="/auth/sign-up">
          <button className="bg-white text-heroColor border border-heroColor hover:bg-heroColor hover:text-white px-6 py-2 mt-4 rounded-md">
            Sign-up
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
