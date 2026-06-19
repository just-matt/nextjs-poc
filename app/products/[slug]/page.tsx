import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import { products } from "@/lib/products";

interface SpecificationItem {
  label: string;
  value: string;
}

interface SpecificationTab {
  tabTitle: string;
  items: SpecificationItem[];
}

interface Product {
  id: string;
  slug: string;
  title: string;
  imageUrl: string;
  description: string;
  longDescription: string;
  showOnHomepage?: boolean;
  specifications?: SpecificationTab[];
}

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

  const product = products.find((p) => p.slug === slug) as Product | undefined;

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

      {product.specifications && Array.isArray(product.specifications) && product.specifications.length > 0 && (
        <section className="py-[60px] px-5 bg-[#f5f5f5]">
          <div className="w-full max-w-[1260px] mx-auto">
            <h2 className="text-[36px] font-bold text-[#003d4c] mb-6">Specifications</h2>
            {(product.specifications as SpecificationTab[]).map((tab, tabIndex) => (
              <div key={tabIndex} className="mb-8">
                <h3 className="text-[20px] font-semibold text-[#003d4c] mb-4">{tab.tabTitle}</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <tbody>
                      {tab.items.map((spec, specIndex) => (
                        <tr key={specIndex} className="border-b border-gray-300">
                          <td className="py-3 px-4 font-semibold text-[#003d4c] bg-white w-[250px]">{spec.label}</td>
                          <td className="py-3 px-4 text-[#333] bg-white">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}