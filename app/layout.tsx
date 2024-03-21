import { Inter } from "next/font/google";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Provider from "@/components/shared/Provider";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://postgres-prisma.vercel.app"),
  title: "DostCommerce | Home",
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
            <Navbar />
            {children}
          </main>
          <Footer />
          <Toaster />
        </body>
      </Provider>
    </html>
  );
}
