import { TRPCError, initTRPC } from "@trpc/server";
import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { cookies } from "next/headers";

type User = Prisma.UserGetPayload<{}>;

type Context = {
  user: User | null;
};

const t = initTRPC.context<Context>().create();
const middleware = t.middleware;

const isAuthed = middleware(async (opts) => {
  const Cookies = cookies();
  const userInfo = Cookies.get("user")?.value!;
  const userObj = JSON.stringify(userInfo);
  const user = userObj ? JSON.parse(userObj) : null;

  if (!user || user === undefined) {
    throw new TRPCError({ code: "UNAUTHORIZED", message: "Not authenticated" });
  }
  return opts.next({
    ctx: {
      userId: user.id,
      user,
    },
  });
});

export const router = t.router;
export const publicProcedure = t.procedure;
export const privateProcedure = t.procedure.use(isAuthed);
