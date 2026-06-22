import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import { Card } from "@/components/Card";
import { products } from "@/lib/products";

interface Product {
  slug: string;
  title: string;
  imageUrl: string;
  description: string;
  badge?: {
    text: string;
    style: 'light' | 'dark' | 'petrol';
    displayOn: string[];
  } | null;
}

export default function ProductsPage() {
  return (
    <>
      <TopBar />
      <Header />

      <section className="page-title">
        <div className="w-full max-w-[1260px] mx-auto px-5">
          <div className="bg-[#ebf1f2] py-[54px] px-[36px] rounded-[6px]">
            <h1 className="text-[48px] font-bold text-[#003d4c] mb-4">Products</h1>
            <p className="text-[18px] text-[#666] mb-0">Explore our comprehensive range of analytical instruments and solutions</p>
          </div>
        </div>
      </section>

      <section className="py-[36px]">
        <div className="w-full max-w-[1260px] mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-5 lg:gap-[30px] w-full">
            {(products as Product[]).map((product) => (
              <Card
                key={product.slug}
                title={product.title}
                imageUrl={product.imageUrl}
                description={product.description}
                slug={product.slug}
                badge={product.badge}
                pageType="listing"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
