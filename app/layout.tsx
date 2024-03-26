import { Inter } from "next/font/google";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Provider from "@/components/shared/Provider";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://postgres-prisma.vercel.app"),
  title: "DostCommerce",
  description: "Buy, sell or trade anything you want",
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Provider>
        <body className={inter.variable}>
          <main className="w-full min-h-screen relative antialiased">
            {children}
          </main>
          <Toaster />
        </body>
      </Provider>
    </html>
  );
}
