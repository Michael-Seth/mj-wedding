import type { Metadata } from "next";
import dynamic from "next/dynamic";
// import PrelineScript from "./components/PrelineScript";
import "./globals.css";


const PrelineScript = dynamic(() => import("../app/components/PrelineScript"), { ssr: false });

export const metadata: Metadata = {
  title: "Michael & Joy - 2024",
  description: "Wedding ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
      <PrelineScript />
    </html>
  );
}
