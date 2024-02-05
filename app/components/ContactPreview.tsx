import React from "react";
import { cn } from "@/lib/utils";
import { Allura } from "next/font/google";

const allura = Allura({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

const ContactPreview = () => {
  return (
    <div className="mt-8">
      <h1
        className={cn(
          allura.className,
          "text-4xl border-t border-t-secondary pt-6 mb-2 px-1 text-center"
        )}
      >
        Contact Us
      </h1>
      <div>
        <div className="">
          <p>
            Have questions? Concerns? Suggestions? I&apos;m here for all of it.
          </p>
          <br />
          <p>Feel free to reach out.</p>
          <br />
          <p>
            Sign up for the newsletter to stay informed about new articles,
            digital products, or tips!
          </p>
        </div>
      <div>
        <h2>Stay in the know</h2>
        <h2>Join the mailing list</h2>
      </div>
      </div>
    </div>
  );
};

export default ContactPreview;
