import { fullBlog } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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

export default async function BlogArticle({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullBlog = await getData(params.slug);

  return (
    <div className="mt-8">
           <Link href="/articles" className="font-bold text-3xl">
        Hustle<span className="text-primary">Her</span>Way
        <span className="text-rose-900">Blog</span>
      </Link>
      <h1>
        <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
          A Hustler&apos;s Blog
        </span>
        <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
          {data.title}
        </span>
      </h1>
      <Image 
        src={urlFor(data.titleImage).url()}
        width={800}
        height={800}
        alt="Title Image"
        className="rounded-lg mt-8 dark:bg-rose-50"
        priority
      />
      <div className="mt-16 prose prose-lg prose-blue dark:prose-invert ">
        <PortableText 
            value={data.content}        
        />
      </div>
    </div>
  );
}