import React from "react";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "../globals.css";

export const metadata = {
  title: "DostCommerce",
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main
      className={cn(inter.variable, "min-h-screen, w-full flex-grow flex-1")}
    >
      {children}
    </main>
  );
};

export default AuthLayout;
