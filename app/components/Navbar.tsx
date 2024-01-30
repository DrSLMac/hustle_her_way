import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ModeToggle";
import Image from "next/image";
import { urlFor } from "../lib/sanity";
import SearchBar from "./SearchBar";
import { Allura } from "next/font/google";
import { cn } from "@/lib/utils";
import MobileMenu from "./MobileMenu";
import HHW_Logo from '../HHW-Logo.png'

const allura = Allura({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

const Navbar = (params: any) => {
  const logo = params.logo;

  return (
    <nav className="max-w-5xl relative flex justify-around mx-auto pt-5 bg-background text-primary">
      <Link href="/">
        <div className="flex items-center">
          <div className="pl-8 md:-ml-4">
            <Image
              priority
              src={HHW_Logo}
              alt="image"
              // width={150}
              // height={300}
              sizes="150vw"
              className="w-28 h-auto rounded-lg dark:bg-primary"
            />
          </div>
          <div className="flex flex-col items-center ml-2 text-primary">
            <h1 className={cn(allura.className, "bg-background text-6xl")}>
              H<span>ustle</span>
            </h1>
            <h2 className="text-lg tracking-widest -mt-2">HER WAY HUB</h2>
          </div>
        </div>
      </Link>

      <MobileMenu />

      <div className="hidden">
        <div className="flex items-center justify-end space-x-8">
          <SearchBar />
          <ModeToggle />
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
