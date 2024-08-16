"use client";

import Link from "next/link";
import Button from "../Button";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LeftMenuBarIcon, RightMenuBarIcon } from "@/components/icons/MenuBarIcon";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const stickyVariants = {
    hidden: { y: -100, opacity: 0 }, // Animation when hidden
    visible: { y: 0, opacity: 1 },   // Animation when visible
    initial: { y: 0, opacity: 1 }    // State when page is at the top
  };

  return (
    <motion.header
      variants={stickyVariants}
      initial="initial"                // Initial state when the page loads
      animate={isSticky ? "visible" : "initial"} // Animate to sticky state or revert to initial
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`${isSticky ? "sticky top-0 w-[100vw] shadow-md" : "relative"
        } bg-[#fff] py-1 z-50`}
    >
      <div className="flex items-center justify-between sm:w-4/5 w-full mx-auto h-[40px] ">
        <div className="flex gap-[20px] justify-center items-center">
          <Button
            className="sm:flex hidden lg:hidden px-2 py-3 border border-[#e0e0e0]"
            PrefixIcon={<LeftMenuBarIcon />}
          />
          <Link className="text-primary font-semibold text-2xl" href={"/"}>
            <Image
              alt="logo"
              width={100}
              height={100}
              src="/wortal_logo_1.png"
            />
          </Link>
        </div>
        <div className="hidden md:flex items-center justify-between">
          <nav className="flex items-center text-base font-medium font-['Inter'] leading-[18px] gap-8 text-[#333333] font-semibold">
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>Menu</Link>
            <Link href={"/aboutpage"}>About</Link>
            <Link href={"/"}>Contact</Link>
          </nav>
        </div>
        <div className="flex gap-2 hidden sm:flex">
          <Button
            Text="Login"
            className="text-base px-5 py-2 border border-[#E0E0E0] text-[#333]"
          />
          <Button Text="Sign Up" className="text-base px-5 py-2 bg-primary text-[#fff]" />
        </div>
        <Button
          className="flex sm:hidden px-2 py-3 border border-[#e0e0e0]"
          PrefixIcon={<RightMenuBarIcon />}
        />
      </div>
    </motion.header>
  );
};

export default Header;
