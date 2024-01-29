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
  } from "@/components/ui/carousel"
  

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
  console.log("data: ", data);

  return (
    <div className="mt-2">
      <h1
        className={cn(
          allura.className,
          "text-4xl border-b-4 border-b-secondary mb-2 px-1"
        )}
      >
        Featured Products...
      </h1>

      <div className="flex justify-around">
        <div className="grid grid-cols-3 gap-3">
    
        <Carousel>
  <CarouselContent>
    {/* <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem> */}
            {data.map((product, idx) => (
                <CarouselItem>
                <Card key={idx} className="lg:max-w-32">
                    <Image
                    priority
                    src={urlFor(product.productImage).url()}
                    alt="image"
                    width={500}
                    height={500}
                    className="rounded-t-lg h-[200px] object-cover bg-secondary-foreground"
                    />
                    <CardContent className="mt-1">
                    <h3 className="text-sm">{product.title}</h3>
                    <p className="line-clamp-3 text-sm mt-1 ">
                    Description about the product being sold
                    </p>
                    <Button
                        asChild
                        className="w-full mt-4 bg-secondary text-accent  text-sm"
                    >
                        <Link href={`/articles/${product.currentSlug}`}>
                        Read More
                        </Link>
                    </Button>
                    </CardContent>
                </Card>
                </CarouselItem>
            ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>


        </div>
      </div>
    </div>
  );
}
