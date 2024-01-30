"use client";
import React, { useState } from "react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { Dialog, Disclosure } from "@headlessui/react";
import Link from "next/link";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {!isOpen && (
        <div className="flex md:hidden pt-5">
          <button type="button" className="" onClick={() => setIsOpen(true)}>
            <span className="sr-only">Open mobile menu</span>
            <Bars3Icon className="h-8 w-8 text-primary" aria-hidden="true" />
          </button>
        </div>
      )}

      <Dialog as="div" className="md:hidden " open={isOpen} onClose={setIsOpen}>
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 overflow-y-auto w-[90%] bg-[#5c6f4d] text-dialog-foreground bg-opacity-90 px-5">
          <div className="flex items-center justify-end">
            <button
              type="button"
              className="rounded-md pt-9"
              onClick={() => setIsOpen(false)}
            >
              <span className="sr-only">Close Menu</span>
              <XMarkIcon className="h-10 w-10" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-12 flow-root">
            <div className="pt-4">
              <Disclosure as="div" className="ml-1 text-dialog-foreground">
                <button
                  className="flex w-full items-center justify-between rounded-lg pl-5 pr-3 text-2xl leading-8 hover:bg-[#a5a58dff]"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/">Home</Link>
                </button>
              </Disclosure>
            </div>

            <div className="pt-4">
              <Disclosure as="div" className="ml-1 text-dialog-foreground">
                <button
                  className="flex w-full items-center justify-between rounded-lg pl-5 pr-3 text-2xl leading-8 hover:bg-[#a5a58dff]"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/about">About</Link>
                </button>
              </Disclosure>
            </div>

            <div className="pt-4">
              <Disclosure as="div" className="ml-1 text-dialog-foreground">
                <button
                  className="flex w-full items-center justify-between rounded-lg pl-5 pr-3 text-2xl leading-8 hover:bg-[#a5a58dff]"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/articles">Articles</Link>
                </button>
              </Disclosure>
            </div>

            <div className="pt-4">
              <Disclosure as="div" className="ml-1 text-dialog-foreground">
                <button
                  className="flex w-full items-center justify-between rounded-lg pl-5 pr-3 text-2xl leading-8 hover:bg-[#a5a58dff]"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/freebies">Freebies</Link>
                </button>
              </Disclosure>
            </div>

            <div className="pt-4">
              <Disclosure as="div" className="ml-1 text-dialog-foreground">
                <button
                  className="flex w-full items-center justify-between rounded-lg pl-5 pr-3 text-2xl leading-8 hover:bg-[#a5a58dff]"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/shop">Shop</Link>
                </button>
              </Disclosure>
            </div>

            <div className="pt-4">
              <Disclosure as="div" className="ml-1 text-dialog-foreground">
                <button
                  className="flex w-full items-center justify-between rounded-lg pl-5 pr-3 text-2xl leading-8 hover:bg-[#a5a58dff]"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/contact">Contact Us</Link>
                </button>
              </Disclosure>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
};

export default MobileMenu;