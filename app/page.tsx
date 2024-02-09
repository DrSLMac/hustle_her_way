import { homepage } from "./lib/interface";
import { client } from "./lib/sanity";
import Welcome from "./components/Welcome";
import ArticlePreview from "./components/ArticlePreview";
import ProductPreview from "./components/productPreview/ProductPreview";

// export const revalidate = 30

// async function getData() {
//   const query = `
//   *[_type == 'homepage'] {
//     title,
//       smallDescription,
//       "titleImage": titleImage.asset,
//       content
//   }[0]`;

//   const data = await client.fetch(query);

//   return data;
// }
import ProductPreview from "./components/ProductPreview";
import ContactPreview from "./components/ContactPreview";

export default async function Home() {
  // const data: homepage = await getData();

  return (
    <div>
      <div className="grid md:grid-cols-2">
        <div className="lg:ml-8">
          <Welcome />
          <ProductPreview />
        </div>
        <ArticlePreview />
      </div>
      <ContactPreview />
    </div>
  );
}