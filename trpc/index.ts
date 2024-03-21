import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { publicProcedure, router } from "./trpc";
import { TRPCError } from "@trpc/server";
import prisma from "@/lib/prisma";

export const appRouter = router({
  // AUTH CALLBACKS  (optional)
  authCallback: publicProcedure.mutation(async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user?.email || !user?.id)
      throw new TRPCError({
        code: "UNAUTHORIZED",
        message: "No User Found, if you dont have  an account please sign up",
      });

    const dbUser = await prisma.user.findFirst({ where: { id: user?.id } });
    if (!dbUser) {
      await prisma.user.create({
        data: {
          id: user.id,
          email: user?.email,
          name: `${user.given_name} + ${user.family_name}`,
        },
      });
    }

    return { success: true };
  }),

  getProducts: publicProcedure.query(async () => {
    const products = await prisma.product.findMany({
      orderBy: { createdAt: "desc" },
    });

    if (products === null) {
      throw new Error("Could not fetch Products");
    }

    return { success: true };
  }),
});

export type AppRouter = typeof appRouter;
