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
    <div className="bg-card rounded-lg p-8 text-primary border border-secondary-foreground">
      <h1 className={cn(allura.className, "text-4xl ")}>Welcome!</h1>
      <p>
        The Hustle Her Way Hub is here to share discoveries, lessons learned,
        things we love, and things we'd love to change. These are life
        lessons that every woman should know. This is a not a place for judgment
        or discouragement, but rather a place where women can find answers and
        have honest conversations about real topics. I hope that this is a great
        source of help and hope for you, no matter what stage of life you are
        in.
      </p>
      <br/>
      <p>
        Spend some time checking out the articles, as well as the freebies and
        shop for digital printables, workbooks, and more.
      </p>
      <br/>
      <p>I'm so glad you are here!</p>
    </div>
  );
};

export default Welcome;
