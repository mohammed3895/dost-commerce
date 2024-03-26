import React from "react";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "../globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata = {
  title: "DostCommerce",
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className={cn(inter.variable, "min-h-screen h-full w-full ")}>
      {children}
      <Toaster />
    </section>
  );
}
