import { homepage } from "./lib/interface";
import { client } from "./lib/sanity";
import Welcome from "./components/Welcome";
import ArticlePreview from "./components/ArticlePreview";
import ProductPreview from "./components/productPreview/ProductPreview";
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