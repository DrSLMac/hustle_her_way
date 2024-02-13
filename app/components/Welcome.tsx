'use client'
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
  const [userInput, setUserInput] = useState("")

  const handleChange = () => {

  }

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
        <p>Be sure to sign up to receive updates, new products, and newsletters.</p>
  
        <EmailForm/>
        <Popover>
          
        </Popover>
        <p className="text-center">I&apos;m so glad you are here!</p>

        <div className="mt-4 flex justify-around ">
          <Link href="/articles">
            <Button
              type="submit"
              className="px-1 gap-x-2 text-accent text-base uppercase hover:bg-secondary-foreground "
            
            >
              <div>Articles</div>
              <MoveRight />
            </Button>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-x-2 text-secondary font-semibold cursor-pointer uppercase text-base"
          >
            <div>View Shop</div>
            <div>
              <MoveRight />
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Welcome;
