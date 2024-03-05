"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { urlFor } from "../../lib/sanity";
import { productDetails } from "../../lib/interface";
import { motion } from "framer-motion";

const ProductCard = ({
  title,
  productImage,
  price,
  currentSlug,
  hoverImage,
}: productDetails) => {
  const [isShown, setIsShown] = useState(false);
  const [sneakPeak, setSneakPeak] = useState(false);
  // const [y, setY] = useState(0);

  return (
    <div>
      <Link href={`/shop/${currentSlug}`}>
        <Card
          className="lg:max-w-32 flex flex-col relative justify-between cursor-pointer"
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          <div
            onMouseEnter={() => setSneakPeak(true)}
            onMouseLeave={() => setSneakPeak(false)}
            className="relative"
          >
            {sneakPeak && isShown ? (
              <>
                <motion.div 
                  animate={{ y: -20 }}
                  transition={{ type: "spring"}}
                  className="absolute flex items-center justify-center w-full h-[30%] bg-opacity-15 hover:bg-opacity-100 bg-gradient-to-b from-primary-foreground from-70% to-secondary-foreground text-muted text-center text-sm px-2 -bottom-5 z-0"
                >
                  Click for detailed view
                </motion.div>
                <Image
                  priority
                  src={urlFor(hoverImage).url()}
                  alt="image"
                  width={500}
                  height={500}
                  className="rounded-t-lg object-cover bg-secondary-foreground "
                />
              </>
            ) : isShown && !sneakPeak ? (
              <Image
                priority
                src={urlFor(hoverImage).url()}
                alt="image"
                width={500}
                height={500}
                className="rounded-t-lg object-cover bg-secondary-foreground "
              />
            ) : (
              <Image
                priority
                src={urlFor(productImage).url()}
                alt="image"
                width={500}
                height={500}
                className="rounded-t-lg object-cover bg-secondary-foreground"
              />
            )}
{/* 
            {isShown ? (
              <Image
                priority
                src={urlFor(hoverImage).url()}
                alt="image"
                width={500}
                height={500}
                className="rounded-t-lg h-[250px] object-cover bg-secondary-foreground hover:animate-fade-in animate-fade-out duration-500"
              />
            ) : (
              <Image
                priority
                src={urlFor(productImage).url()}
                alt="image"
                width={500}
                height={500}
                className="rounded-t-lg h-[250px] object-cover sm:object-contain bg-secondary-foreground animate-fade-in hover:animate-fade-out duration-500"
              />
            )} */}
          </div>
          <CardContent className="flex flex-col justify-between mt-1 px-2 h-32 sm:h-24 z-20">
            <CardTitle className="text-center text-base leading-5">
              {title}
            </CardTitle>
            <div>
              <CardDescription className="text-center mt-1">
                {price !== 0 ? `$${price}` : "Free Download Now!"}
              </CardDescription>
            </div>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};

export default ProductCard;
