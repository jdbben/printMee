
import type { Metadata } from "next";
import { Inter, Recursive } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const recursive = Recursive({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Printmee",
  description: "custumize your own clothes",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={recursive.className}>
        <Navbar />
        <main className="flex grainy-light flex-col min-h-screen">
          <div className="flex-1">

            {children}


          </div>
          <Footer />
        </main>
      </body>

    </html>
  );
}
