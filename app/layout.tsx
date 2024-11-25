import type { Metadata } from "next";
import dynamic from "next/dynamic";
// import PrelineScript from "./components/PrelineScript";
import "./globals.css";


const PrelineScript = dynamic(() => import("../app/components/PrelineScript"), { ssr: false });

export const metadata: Metadata = {
  title: "Michael & Joy - 2024",
  description: "A celebration of love, memories, and a new beginning. Join us as we embark on our journey together.",
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
