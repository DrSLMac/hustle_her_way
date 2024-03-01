import Image from "next/image";
import React from "react";
import HHW_Logo from "../HHW-Logo.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronsRight, ChevronsLeft } from "lucide-react";

const Optin = () => {
  return (
    <div>
      <div className="text-center text-primary">
        <div className="text-3xl font-bold my-2 bg-muted rounded-lg shadow-md p-2">
          <h1>What if I told you...</h1>
        </div>
        <div className="text-2xl leading-10 border-b border-b-primary font-semibold mb-4">
          <h2>
            You <span className="font-bold">CAN</span> live the laptop
            lifestyle?
          </h2>
          <h2>Would you believe me?</h2>
        </div>
      </div>
      <div>
        <Card className="lg:max-w-[30rem] bg-card border-secondary-foreground h-auto p-1 my-2 shadow-md">
          <CardContent>
            <h3>I&apos;m so glad you are here!</h3>
            <br />
            <p>
              Have you ever wanted to create a super profitable online business
              without holding inventory, creating products, dealing with
              customers or wasting your time and money on things that just don't
              work?
            </p>
            <br />
            <p>
              My name is Shauna & I am a busy mom, nurse. I began looking for a
              way to get out of the rat race and provide myself with financial
              freedom and independence. Now I help ordinary people just like you
              to build super profitable online affiliate marketing businesses
              from home, using a proven step-by-step process that anyone can do
              (even if you have no previous experience).
            </p>
            <br />
            <p className="text-center bg-muted rounded-md p-1 shadow-md">
              And while this does seem too good to be true, it is both good and
              true.
            </p>
            <br />
            <p className="text-center font-semibold">
              Yes, this is <span className="underline italic">REAL</span>.
              <br />
              Yes, this is <span className="underline italic">LEGIT</span>.
            </p>
            <br />
            <p>
              My <span className="italic underline">FREE</span> eBook will
              explain everything and give you all the tools you need to get
              started <span className="italic underline">TODAY</span>!
            </p>
            <br />
            <p className="bg-secondary-foreground rounded-md p-1 shadow-md">
              If you are interested in becoming a High Ticket Affiliate
              Marketer, click the button below to get the free eBook and watch a
              free presentation that will reveal the proven system to be
              successful, so you can be on your way to learning how to make a
              6-figure income in 2024!
            </p>
          </CardContent>
        </Card>
        <Card className="bg-card border-secondary-foreground h-auto p-1 my-2 shadow-md">
          <CardHeader className="flex items-center text-primary">
            <CardTitle>WHAT&apos;S INSIDE:</CardTitle>
            <CardDescription className="w-full text-center text-base font-medium">
              The EXACT framework to create a 6-figure affiliate marketing
              business in your spare time (even as a beginner), as well as my
              FREE eBook!
            </CardDescription>
            <CardContent className="p-2 w-[80%]  text-center">
              <form 
                method="post" 
                action="https://systeme.io/embedded/15250716/subscription"
              >
                <div className="flex flex-col">
                  <span className="flex pl-1">
                    <label className="">Name</label>
                  </span>
                  <input
                    name="name"
                    type="text"
                    placeholder="Enter your first name here..."
                    className="w-full p-2 rounded-md border border-secondary-foreground"
                  />
                </div>
                <div className="flex flex-col my-3">
                  <span className="flex pl-1">
                    <label className="">Email</label>
                  </span>
                  <input
                    name="email"
                    type="text"
                    placeholder="Enter your email address here..."
                    className="w-full p-2 rounded-md border border-secondary-foreground"
                  />
                </div>
               
                  <button
                    type="submit"
                    className="inline-flex shadow-md items-center justify-center rounded-md font-medium py-2 px-4 mt-2 bg-secondary-foreground text-primary transition-colors hover:bg-primary hover:text-secondary hover:shadow-3xl active:bg-primary-foreground disabled:pointer-events-none disabled:opacity-50"
                  >
                    <ChevronsRight />
                    Get Instant Access Now!
                    <ChevronsLeft />
                  </button>
              
              </form>
            </CardContent>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default Optin;

{/* <form method="post" action="https://systeme.io/embedded/15250716/subscription"> 
<input type=text name=email />
  <div class="f-row">
    <button type="submit" class="btn">Subscribe</button>
  </div>
  </form>
   */}