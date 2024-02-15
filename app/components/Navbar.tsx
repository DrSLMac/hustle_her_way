// 'use client'
import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ModeToggle";
import Image from "next/image";
import { urlFor } from "../lib/sanity";
import SearchBar from "./SearchBar";
import { Allura } from "next/font/google";
import { cn } from "@/lib/utils";
// import MobileMenu from "./MobileMenu";
import HHW_Logo from "../HHW-Logo.png";
import { Menu } from "./menu/Menu";
import { MenuToggle } from "./menu/MenuToggle";
import MenuAnimation from "./menu/MenuAnimation";

const allura = Allura({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

const Navbar = (params: any) => {
  const logo = params.logo;

  return (
    <nav className="max-w-5xl relative flex justify-between px-4 pt-5 bg-background text-primary">
      <div className="md:hidden">

          <ModeToggle />
      </div>
      <Link href="/">
        <div className="flex items-center -ml-20 md:ml-0">
          <div className=" ">
            <Image
              priority
              src={HHW_Logo}
              alt="image"
              sizes="150vw"
              className="w-28 h-auto rounded-full p-1 dark:bg-cyan-50/30"
            />
          </div>
          <div className="flex flex-col items-center ml-3 text-primary">
            <h1 className={cn(allura.className, "bg-background text-6xl")}>
              H<span>ustle</span>
            </h1>
            <h2 className="text-lg tracking-widest -mt-2">HER WAY HUB</h2>
          </div>
        </div>
      </Link>

      {/* <MobileMenu /> */}

      <MenuAnimation />

      <div className="hidden md:inline">
        <div className="flex items-center justify-end space-x-8">
          <SearchBar />
          <ModeToggle/>
        </div>
        <div className="hidden md:inline-flex md:space-x-6 px-6 text-lg">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/articles">Articles</Link>
          <Link href="/freebies">Freebies</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
