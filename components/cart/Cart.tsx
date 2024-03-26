import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button, buttonVariants } from "../ui/button";
import { ShoppingBasket } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { cartRouter } from "@/trpc/cart-router";
import { cartRoute, trpc } from "@/app/_trpc/client";

const Cart = () => {
  const { data: user } = cartRoute.getCart.useQuery();

  if (user === undefined) {
    console.log("user: " + user);
  }
  console.log(user);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <ShoppingBasket />
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="p-12">
        <ScrollArea className="w-full h-[50vh] p-8">
          {/* <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-8">
            <div className="w-full h-full min-w-max border p-8 flex flex-col items-start justify-start gap-1.5">
              <Image
                src="/assets/auth-bg.jpg"
                alt=""
                width={300}
                height={300}
                className="w-full md:w-40 h-40 object-cover"
              />
              <h1 className="text-lg capitalize font-medium text-zinc-800">
                Item 1
              </h1>
              <Link
                href="/"
                className="text-sm text-zinc-500 hover:text-zinc-600 transition-colors"
              >
                Checkout
              </Link>
            </div>
            <div className="w-full h-full min-w-max border p-8 flex flex-col items-start justify-start gap-1.5">
              <Image
                src="/assets/auth-bg.jpg"
                alt=""
                width={300}
                height={300}
                className="w-full md:w-40 h-40 object-cover"
              />
              <h1 className="text-lg capitalize font-medium text-zinc-800">
                Item 1
              </h1>
              <Link
                href="/"
                className="text-sm text-zinc-500 hover:text-zinc-600 transition-colors"
              >
                Checkout
              </Link>
            </div>
            <div className="w-full h-full min-w-max border p-8 flex flex-col items-start justify-start gap-1.5">
              <Image
                src="/assets/auth-bg.jpg"
                alt=""
                width={300}
                height={300}
                className="w-full md:w-40 h-40 object-cover"
              />
              <h1 className="text-lg capitalize font-medium text-zinc-800">
                Item 1
              </h1>
              <Link
                href="/"
                className="text-sm text-zinc-500 hover:text-zinc-600 transition-colors"
              >
                Checkout
              </Link>
            </div>
            <div className="w-full h-full min-w-max border p-8 flex flex-col items-start justify-start gap-1.5">
              <Image
                src="/assets/auth-bg.jpg"
                alt=""
                width={300}
                height={300}
                className="w-full md:w-40 h-40 object-cover"
              />
              <h1 className="text-lg capitalize font-medium text-zinc-800">
                Item 1
              </h1>
              <Link
                href="/"
                className="text-sm text-zinc-500 hover:text-zinc-600 transition-colors"
              >
                Checkout
              </Link>
            </div>
            <div className="w-full h-full min-w-max border p-8 flex flex-col items-start justify-start gap-1.5">
              <Image
                src="/assets/auth-bg.jpg"
                alt=""
                width={300}
                height={300}
                className="w-full md:w-40 h-40 object-cover"
              />
              <h1 className="text-lg capitalize font-medium text-zinc-800">
                Item 1
              </h1>
              <Link
                href="/"
                className="text-sm text-zinc-500 hover:text-zinc-600 transition-colors"
              >
                Checkout
              </Link>
            </div>
            <div className="w-full h-full min-w-max border p-8 flex flex-col items-start justify-start gap-1.5">
              <Image
                src="/assets/auth-bg.jpg"
                alt=""
                width={300}
                height={300}
                className="w-full md:w-40 h-40 object-cover"
              />
              <h1 className="text-lg capitalize font-medium text-zinc-800">
                Item 1
              </h1>
              <Link
                href="/"
                className="text-sm text-zinc-500 hover:text-zinc-600 transition-colors"
              >
                Checkout
              </Link>
            </div>
          </div> */}
          <p>{user?.cartItem?.id}</p>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
