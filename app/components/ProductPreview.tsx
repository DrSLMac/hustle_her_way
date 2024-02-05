import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import React from "react";
import { client, urlFor } from "../lib/sanity";
import Image from "next/image";
import { Allura } from "next/font/google";
import { cn } from "@/lib/utils";
import { productDetails } from "../lib/interface";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const allura = Allura({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

export const revalidate = 30;

async function getData() {
  const query = `
  *[_type == 'product'] {
    title,
    productDescription,
      "currentSlug": slug.current,
      "productImage": productImage.asset,
      featured,
      price,
  }`;

  const data = await client.fetch(query);

  return data;
}

export default async function ProductPreview() {
  const data: productDetails[] = await getData();
  const filteredData = data.filter((product) => {
    return product.featured === true;
  });

  return (
    <div className="mt-8">
      <h1
        className={cn(
          allura.className,
          "text-4xl border-t border-t-secondary mb-2 px-1 pt-6"
        )}
      >
        Featured Products...
      </h1>

      <div className="">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {filteredData.map((product, idx) => (
            <Card
              key={idx}
              className=" lg:max-w-32 h-96 flex flex-col justify-content bg-transparent border-none"
            >
              <Image
                priority
                src={urlFor(product.productImage).url()}
                alt="image"
                width={500}
                height={500}
                className="rounded-t-lg h-[200px] object-contain p-1"
              />
              <div className="flex h-48">
                <CardContent className="mt-1 px-2 flex flex-col justify-between">
                  <h3 className="text-xl text-center font-semibold">
                    {product.title}
                  </h3>
                  <div>
                    <h3>{`$${product.price}`}</h3>
                    <Button
                      asChild
                      className="w-full mt-2 text-accent text-base uppercase text-wrap text-center"
                    >
                      <Link href={`/shop/${product.currentSlug}`}>
                        See Details
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <Button
        asChild
        className="w-full bg-secondary text-accent text-wrap text-center uppercase text-lg"
      >
        <Link href="/shop">View More →</Link>
      </Button>
    </div>
  );
}
