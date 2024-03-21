import { cn } from "@/lib/utils";
import React from "react";
import { buttonVariants } from "../ui/button";
import {
  RegisterLink,
  LoginLink,
  getKindeServerSession,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/server";

const NavItems = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div className="hidden lg:flex items-center gap-4">
      {user !== null ? (
        <div>
          <h4 className="text-lg capitalize">
            {user.given_name}{" "}
            <span className="text-xl uppercase font-normal">
              {user.family_name![0] ?? ""}.
            </span>
          </h4>
          {/* <LogoutLink
            postLogoutRedirectURL="/"
            className={buttonVariants({ variant: "ghost" })}
          >
            SignOut
          </LogoutLink> */}
        </div>
      ) : (
        <div>
          <LoginLink className={cn(buttonVariants(), "px-8")}>
            Sign in
          </LoginLink>

          <RegisterLink
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "text-base text-zinc-900 capitalize font-medium ml-4"
            )}
          >
            Sign up
          </RegisterLink>
        </div>
      )}
    </div>
  );
};

export default NavItems;
