"use client";
import React from "react";
import { buttonVariants } from "./ui/button";

const LogoutBtn = ({ Logout }: { Logout: () => void }) => {
  return (
    <button className={buttonVariants({ variant: "ghost" })} onClick={Logout}>
      SignOut
    </button>
  );
};

export default LogoutBtn;
