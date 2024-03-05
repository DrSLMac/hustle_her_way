"use client";
import React, { useState } from "react";
import { Allura } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import EmailForm from "./EmailForm";
import { Popover } from "@/components/ui/popover";

const allura = Allura({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

const Welcome = () => {
  const [userInput, setUserInput] = useState("");

  const handleChange = () => {};

  return (
    <div>
      <div className="bg-card rounded-md p-4 text-primary border border-secondary-foreground leading-6">
        <h1 className={cn(allura.className, "text-4xl ")}>Welcome!</h1>
        <p>
          The Hustle Her Way Hub is here to share discoveries, lessons learned,
          things we love, and things we&apos;d love to change. I hope that this
          is a great source of help and hope for you, no matter what stage of
          life you are in.
        </p>
        <br />
        <p>
          Spend some time checking out the articles, as well as the freebies and
          shop for digital printables, workbooks, and more.
        </p>
        <br />
        <p>
          Be sure to sign up to receive updates, new products, and newsletters.
        </p>

        {/* <EmailForm/> */}
        {/* <Popover>
          
        </Popover> */}
        <br/>
        <p className="text-center">I&apos;m so glad you are here!</p>

        <div className="mt-4 flex justify-around ">
          <Link href="/articles">
            <button
              type="submit"
              className="inline-flex shadow-md uppercase items-center justify-center gap-x-2 rounded-md font-medium py-2 px-4 mt-2 bg-secondary-foreground text-primary transition-colors hover:bg-primary hover:text-secondary hover:shadow-3xl active:bg-primary-foreground disabled:pointer-events-none disabled:opacity-50"
            >
              Articles
              <MoveRight />
            </button>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-x-2 text-secondary font-semibold cursor-pointer uppercase text-base"
          >
            <button
              type="submit"
              className="inline-flex uppercase items-center justify-center gap-x-2 rounded-md font-medium py-2 px-4 mt-2 bg-transparent text-primary transition-colors hover:bg-primary hover:text-secondary hover:shadow-3xl active:bg-primary-foreground disabled:pointer-events-none disabled:opacity-50"
            >
              View Shop
              <MoveRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
