import "../globals.css";
import { Inter } from "next/font/google";
import SessionProvider from "@/components/SessionProvider";
import Navbar from "@/components/shared/Navbar";
import { Toaster } from "sonner";
import Footer from "@/components/shared/Footer";

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
      <SessionProvider>
        <body className={inter.variable}>
          <main className="w-full min-h-screen relative antialiased">
            <Navbar />
            {children}
          </main>
          <Footer />
          <Toaster richColors={true} />
        </body>
      </SessionProvider>
    </html>
  );
}
