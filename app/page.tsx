import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Card } from "@/components/Card";
import { products } from "@/lib/products";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      
      <Hero
        headline="Advanced Materials Characterisation"
        intro="Helping scientists and engineers understand the materials that shape our world."
        imageUrl="https://dam.malvernpanalytical.com/4fe5121c-e734-4a53-9448-ada40097b76d/637316985638840907DJ_Original%20file.jpg"
      />

      <main>
        <section className="py-[60px]">
          <div className="w-full max-w-[1260px] mx-auto px-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-5 lg:gap-[30px] w-full">
              {products.slice(0, 3).map((product) => (
                <Card
                  key={product.slug}
                  title={product.title}
                  imageUrl={product.imageUrl}
                  description={product.description}
                  slug={product.slug}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}