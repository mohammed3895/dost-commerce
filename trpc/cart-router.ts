import { z } from "zod";
import { privateProcedure, router } from "./trpc";
import { TRPCError } from "@trpc/server";
import prisma from "@/lib/prisma";
import { Product } from "@prisma/client";

export const cartRouter = router({
  addCart: privateProcedure
    .input(z.object({ productId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const { user } = ctx;
      const { productId } = input;

      if (!user)
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "You must be authenticated to do that.",
        });

      const cart = await prisma.cart.create({
        data: {
          ownerId: user.id,
        },
      });

      const product = await prisma.product.findFirst({
        where: {
          id: productId,
        },
      });

      const cartItem = await prisma.cartItem.create({
        data: {
          cartId: cart.id,
          productId: product?.id!,
          quantity: 1,
        },
      });

      return { cartItem };
    }),

  getCart: privateProcedure.query(async ({ ctx }) => {
    const { user, userId } = ctx;

    if (!user)
      throw new TRPCError({
        code: "UNAUTHORIZED",
        message: "User is not authenticated",
      });
    const dbUser = await prisma.user.findFirst({ where: { id: userId } });
    const cart = await prisma.cart.findFirst({ where: { ownerId: user.id } });

    const cartItem = await prisma.cartItem.findFirst({
      where: {
        cartId: cart?.id,
      },
    });

    return { cartItem };
  }),
});

export type CartRouter = typeof cartRouter;
