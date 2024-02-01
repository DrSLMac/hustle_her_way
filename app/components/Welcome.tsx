import React from "react";
import { Allura } from "next/font/google";
import { cn } from "@/lib/utils";

const allura = Allura({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

const Welcome = () => {
  return (
    <div className="bg-card rounded-lg p-4 text-primary border border-secondary-foreground leading-7 text-lg">
      <h1 className={cn(allura.className, "text-5xl ")}>Welcome!</h1>
      <p>
        The Hustle Her Way Hub is here to share discoveries, lessons learned,
        things we love, and things we&apos;d love to change. I hope that this is
        a great source of help and hope for you, no matter what stage of life
        you are in.
      </p>
      <br />
      <p>
        Spend some time checking out the articles, as well as the freebies and
        shop for digital printables, workbooks, and more.
      </p>
      <br />
      <p>Be sure to sign up to receive updates and newsletters.</p>
      <br/>
      <p>I&apos;m so glad you are here!</p>
    </div>
  );
};

export default Welcome;
