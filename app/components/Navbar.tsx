import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ModeToggle";
import Image from "next/image";
import { urlFor } from "../lib/sanity";
import { homepage } from "../lib/interface";
import SearchBar from "./SearchBar";
import { Allura } from "next/font/google";
import { cn } from "@/lib/utils";

const allura = Allura({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"]
});

const Navbar = ({ title, logo }) => {
  return (
    <nav className="max-w-5xl relative flex md:justify-around items-center  mx-auto py-5 bg-background text-primary">
      <div className="flex items-center">
        <div>
          <Image
            priority
            src={urlFor(logo).url()}
            alt="image"
            width={150}
            height={300}
            className="rounded-lg dark:bg-primary"
          />
        </div>
        <div>
          <h1 className={cn(allura.className, "bg-background")}>
            H<span>ustle</span>
          </h1>
          <h2>HER WAY HUB</h2>
        </div>
      </div>
      <div>
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
