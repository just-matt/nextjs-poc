import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import { products } from "@/lib/products";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <>
        <TopBar />
        <Header />

        <section className="py-[60px] px-5">
          <div className="w-full max-w-[1260px] mx-auto">
            <h1>Product not found</h1>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <TopBar />
      <Header />

      <section className="py-[60px] px-5">
        <div className="w-full max-w-[1260px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center">
            {/* Image */}
            <div className="flex items-center justify-center">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Content */}
            <div>
              <h1 className="text-[48px] font-bold text-[#003d4c] mb-4">
                {product.title}
              </h1>

              <p className="text-[18px] text-[#666] mb-6 leading-[1.6]">
                {product.description}
              </p>

              <p className="text-[16px] text-[#333] mb-8 leading-[1.8]">
                {product.longDescription}
              </p>

              <a
                href="#"
                className="inline-flex items-center justify-center px-[13.5px] py-[9px] rounded-lg text-[15px] font-semibold no-underline text-white bg-[#00b5d9] hover:opacity-90 transition-opacity"
              >
                Request Information
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}