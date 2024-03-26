import { AppRouter } from "@/trpc";
import { CartRouter } from "@/trpc/cart-router";
import { createTRPCReact } from "@trpc/react-query";

export const trpc = createTRPCReact<AppRouter>({});
export const cartRoute = createTRPCReact<CartRouter>({});
