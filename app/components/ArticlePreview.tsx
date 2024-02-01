import React from 'react'
import { client, urlFor } from '../lib/sanity';
import { simpleBlogCard } from "../lib/interface";
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from "next/link";
import Image from "next/image";
import { Allura } from "next/font/google";
import { cn } from "@/lib/utils";

const allura = Allura({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});


export const revalidate = 30;

async function getData() {
  const query = `
  *[_type == 'blog'] | order(_createdAt desc) {
    title,
      smallDescription,
      "currentSlug": slug.current,
      "titleImage": titleImage.asset
  }`;

  const data = await client.fetch(query);

  return data;
}


export default async function ArticlePreview() {
    const data: simpleBlogCard[] = await getData();


  return (
    <div className="mx-auto text-primary mt-6 lg:mr-8">
       <h1 className={cn(allura.className, "text-4xl border-b-4 border-b-secondary mb-2 px-1")}>Recent Articles...</h1>
      <div className="grid grid-cols-1 gap-4 mx-auto">
      {data.map((post, idx) => (
        <Card key={idx} className="flex bg-card border-secondary-foreground">
          <Image
            priority
            src={urlFor(post.titleImage).url()}
            alt="image"
            width={120}
            height={150}
            className="rounded-l-lg object-contain border border-r-secondary-foreground"
          />
          <CardContent className="pt-1 pb-2 px-3">
            <h3 className="text-lg tracking-wide line-clamp-2 font-bold">{post.title}</h3>
            <p className="line-clamp-3 text-base mt-2 ">
              {post.smallDescription}
            </p>
            <Button asChild className="w-full mt-4 bg-secondary text-accent tracking-wider text-base">
              <Link href={`/articles/${post.currentSlug}`}>Read More</Link>
            </Button>
          </CardContent>
        </Card>
      ))}

      </div>
    </div>
  )
}