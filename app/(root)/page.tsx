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
      <div className="flex flex-col items-center justify-center py-16 px-6 md:px-12 gap-6 mt-12">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-1">
          Featured Products
        </h1>
        <p className="mt-1 text-gray-500 sm:text-xl mb-12">
          Discover new products that will take your taste buds on a journey.
        </p>
        <FeaturedProducts />
        <div className="w-full px-0 xl:px-32 flex lg:items-start justify-center items-center lg:justify-start text-left mt-6 mb-20">
          <Link
            href="/products"
            className={cn(
              buttonVariants({ variant: "link" }),
              "text-muted-foreground"
            )}
          >
            Browse more
          </Link>
        </div>
      </div>
      <Banner />
    </>
  );
}
