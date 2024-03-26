import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { privateProcedure, publicProcedure, router } from "./trpc";
import { TRPCError } from "@trpc/server";
import prisma from "@/lib/prisma";
import { formSchema, singinformSchema } from "@/lib/validations";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

export const appRouter = router({
  getCart: privateProcedure.query(async ({ ctx }) => {
    const { user } = ctx;

    if (!user)
      throw new TRPCError({
        code: "UNAUTHORIZED",
        message: "User is not authenticated",
      });
    const dbUser = await prisma.user.findFirst({ where: { id: user.id } });
    return dbUser;
  }),

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

  createUser: publicProcedure.input(formSchema).mutation(async ({ input }) => {
    const existUser = await prisma.user.findFirst({
      where: { email: input.email },
    });

    if (existUser)
      throw new TRPCError({
        code: "CONFLICT",
        message: "Email already in use",
      });

    if (input.password !== input.confirmpassword)
      throw new Error("Passwords do not match");

    const hashPassword = bcrypt.hashSync(input.password, 10);

    await prisma.user.create({
      data: {
        name: `${input.firstname} ${input.lastname}`,
        email: input.email,
        password: hashPassword,
      },
    });

    return { success: true };
  }),

  signIn: publicProcedure
    .input(singinformSchema)
    .mutation(async ({ input }) => {
      const Cookies = cookies();
      // Find the user by their email address
      const user = await prisma.user.findFirst({
        where: { email: input.email },
      });

      if (!user) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "No user found with that email",
        });
      }
      const isValid = bcrypt.compareSync(input.password, user.password!);

      if (!isValid) {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "Invalid password",
        });
      }

      if (user && isValid) {
        Cookies.set("user", JSON.stringify(user), { maxAge: 7 * 24 * 60 * 60 });

        return { ...user, email: user.email, name: user.name };
      }
    }),

  signOut: privateProcedure.query(() => {
    const Cookies = cookies();
    Cookies.delete("user");
    return {};
  }),

  getUser: publicProcedure.mutation(async () => {
    const Cookies = cookies();
    const userInfo = Cookies.get("user")?.value;
    const userObj = JSON.stringify(userInfo);
    const user = userObj ? JSON.parse(userObj) : null;
    const userId = user.id;

    const dbUser = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    });

    if (!user) return;
    if (!dbUser) return;

    return { dbUser };
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

  getProduct: publicProcedure
    .input(z.object({ productId: z.string() }))
    .query(async ({ input }) => {
      const { productId } = input;

      const product = await prisma.product.findFirst({
        where: { id: productId },
      });

      if (product === null) {
        throw new Error("Could not fetch Products");
      }

      return product;
    }),
});

export type AppRouter = typeof appRouter;
