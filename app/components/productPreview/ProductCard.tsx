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
              
              <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              >
                <Image
                  priority
                  src={urlFor(hoverImage).url()}
                  alt="image"
                  width={500}
                  height={500}
                  className="rounded-t-lg object-cover bg-secondary-foreground "
                />
              </motion.div>
              
            ) : isShown && !sneakPeak ? (
              <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                priority
                src={urlFor(hoverImage).url()}
                alt="image"
                width={500}
                height={500}
                className="rounded-t-lg object-cover bg-secondary-foreground "
              />
                 </motion.div>
            ) : (
              <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            >
              <Image
                priority
                src={urlFor(productImage).url()}
                alt="image"
                width={500}
                height={500}
                className="rounded-t-lg object-cover bg-secondary-foreground"
              />
              </motion.div>
            )}
          </div>

          <CardContent className="flex flex-col relative justify-between mt-1 h-32 sm:h-24">
            {/* {sneakPeak && isShown &&
              <motion.div 
              className="absolute flex items-center rounded-t-md bg-opacity-15 text-muted text-center text-sm hover:bg-opacity-100 bg-gradient-to-b from-primary-foreground from-70% to-secondary-foreground p-2"
              animate={{ y: -60 }}
              transition={{ type: "spring"}}
              >
                Click for detailed view
              </motion.div>
            } */}
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
