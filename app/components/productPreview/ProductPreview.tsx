import React from "react";
import { client } from "../../lib/sanity";
import { Allura } from "next/font/google";
import { cn } from "@/lib/utils";
import { productDetails } from "../../lib/interface";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";

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
      "hoverImage": hoverImage.asset,
      featured,
      price,
  }`;

  const data = await client.fetch(query);

  return data;
}

export default async function ProductPreview() {
  const data: productDetails[] = await getData();

  const productCards = data.map((product, idx) => {
    const { title, productImage, price, currentSlug, hoverImage } = product;
    return (
      <ProductCard
        key={idx}
        title={title}
        productImage={productImage}
        price={price}
        currentSlug={currentSlug}
        hoverImage={hoverImage}
      />
    );
  });

  return (
    <div className="mt-6">
      <h1
        className={cn(
          allura.className,
          "text-4xl border-b-4 border-b-secondary mb-2 px-1"
        )}
      >
        Featured Products...
      </h1>

      <div className="flex justify-evenly gap-3">

        {productCards}
      </div>
    </div>
  );
}
