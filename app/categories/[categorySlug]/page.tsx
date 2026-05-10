import { products, categories } from "@/data/products";
import CategoryHeader from "@/components/CategoryHeader";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface Props {
  params: Promise<{ categorySlug: string }>;
}

export async function generateStaticParams() {
  return categories.map((cat) => ({
    categorySlug: cat.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categorySlug } = await params;
  const category = categories.find((c) => c.slug === categorySlug);
  if (!category) return {};

  return {
    title: `${category.title} | GoodWill Hardware Pasal`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { categorySlug } = await params;
  const category = categories.find((c) => c.slug === categorySlug);

  if (!category) {
    notFound();
  }

  const categoryProducts = products.filter(
    (p) => p.category === category.title
  );

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50">
        <CategoryHeader
          title={category.title}
          description={category.description}
          color={category.color}
          breadcrumbItems={[{ label: category.title }]}
        />

        <section className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {categoryProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {categoryProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
                <h3 className="text-xl font-bold text-slate-400 mb-2">No products found in this category</h3>
                <p className="text-slate-400">We are currently updating our catalog. Please check back soon!</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
