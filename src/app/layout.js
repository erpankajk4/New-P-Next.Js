"use client";
import { Trispace } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Header from "@/components/Header";
import RandomNews from "@/components/RandomNews";
import { useEffect, useState } from "react";
import { AuthUserProvider } from "../../firebase/auth";

const trispace = Trispace({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

const metadata = {
  title: "News-P",
  description: "",
  icons: {
    icon: [
      { url: "/logo.png", sizes: "32x32" },
      { url: "/logo.png", sizes: "16x16" },
    ],
    apple: {
      url: "/logo.png",
      sizes: "180x180",
    },
  },
  manifest: "/img/site.webmanifest",
  openGraph: {
    title: "News-P",
    description: "",
    type: "article",
    authors: "Pankaj",
  },
  keywords: ["news-p", "news", "news about  everything"],
};

export default function RootLayout({ children }) {
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth <= 1024);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <html lang="en">
      <body className={trispace.className}>
        <AuthUserProvider>
          <main className="px-2 xl:px-20">
            <Header />
            <Navbar />
            <section className="flex justify-between">
              {children}
              {!isMobileScreen && <RandomNews />}
            </section>
          </main>
        </AuthUserProvider>
      </body>
    </html>
  );
}
