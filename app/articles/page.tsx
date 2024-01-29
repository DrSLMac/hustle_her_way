import { Card, CardContent } from "@/components/ui/card";
import { simpleBlogCard } from "../lib/interface";
import { client, urlFor } from "../lib/sanity";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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

export default async function Blog() {
  const data: simpleBlogCard[] = await getData();

  return (
    <div className="max-w-5xl mx-auto">
      <Link href="/articles" className="font-bold text-3xl text-primary">
        Hustle<span className="text-primary">Her</span>Way
        <span className="text-rose-900">Blog</span>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5 mx-auto">
      {data.map((post, idx) => (
        <Card key={idx} className="max-w-96">
          <Image
            priority
            src={urlFor(post.titleImage).url()}
            alt="image"
            width={500}
            height={500}
            className="rounded-t-lg h-[200px] object-cover bg-secondary-foreground"
          />
          <CardContent className="mt-5">
            <h3 className="text-lg tracking-wide line-clamp-2 font-bold">{post.title}</h3>
            <p className="line-clamp-3 text-base mt-2 ">
              {post.smallDescription}
            </p>
            <Button asChild className="w-full mt-7 bg-secondary text-secondary-foreground tracking-wider text-base">
              <Link href={`/articles/${post.currentSlug}`}>Read More</Link>
            </Button>
          </CardContent>
        </Card>
      ))}

      </div>
    </div>
  );
}
