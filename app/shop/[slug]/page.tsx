import React from 'react'
import { client } from '@/app/lib/sanity';
import { productDetails } from '@/app/lib/interface';

export const revalidate = 30 

async function getData(slug: string) {
  const query = `
    *[_type == "blog" && slug.current == "${slug}"] {
        "currentSlug": slug.current,
          title,
          content,
          "titleImage": titleImage.asset
      }[0]`;
  const data = await client.fetch(query);
  return data;
}

export default async function ShopItem({ params }: {params: {slug: string }}) {
  const data: productDetails = await getData(params.slug)


  return (
    <div>
      This is the page for each item in the shop

    </div>
  )
}