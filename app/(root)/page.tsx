import Banner from "@/components/home/Banner";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import FeaturedProducts from "@/components/products/FeaturedProducts";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <div className="flex flex-col items-center justify-center py-16 px-12 gap-6 mt-12">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-1">
          Featured Products
        </h1>
        <p className="mt-1 text-gray-500 sm:text-xl mb-12">
          Discover new products that will take your taste buds on a journey.
        </p>
        <FeaturedProducts />
        <Link
          href="/products"
          className={cn(
            buttonVariants({ variant: "secondary" }),
            "w-full md:w-60"
          )}
        >
          Browse more
        </Link>
      </div>
      <Banner />
    </>
  );
}
