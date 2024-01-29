import { Card, CardContent } from "@/components/ui/card";
import { homepage } from "./lib/interface";
import { client, urlFor } from "./lib/sanity";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Welcome from "./components/Welcome";
import ArticlePreview from "./components/ArticlePreview";
import ProductPreview from "./components/ProductPreview";

export const revalidate = 30

async function getData() {
  const query = `
  *[_type == 'homepage'] {
    title,
      smallDescription,
      "titleImage": titleImage.asset, 
      content
  }[0]`;

  const data = await client.fetch(query);

  return data;
}

export default async function Home() {
  const data: homepage = await getData();

  

  return (
    <div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="lg:ml-8">
          <Welcome />
          <ProductPreview />
        </div>
        <ArticlePreview />
      </div>
     
    </div>
  );
}

// {data.map((post, idx) => (
//   <Card key={idx}>
    // <Image
    //   priority
    //   src={urlFor(post.titleImage).url()}
    //   alt="image"
    //   width={500}
    //   height={500}
    //   className="rounded-t-lg h-[200px] object-cover dark:bg-rose-50"
    //   />
//     <CardContent className="mt-5">
//       <h3 className="text-lg line-clamp-2 font-bold">{post.title}</h3>
//       <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">{post.smallDescription}</p>
//       <Button asChild className="w-full mt-7">
//         {/* <Link href={`/articles/${post.currentSlug}`}>Read More</Link> */}
//       </Button>
//     </CardContent>
//   </Card>
// ))}