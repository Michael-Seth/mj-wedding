import type { Metadata } from "next";
import PrelineScript from "./components/PrelineScript";

import "./globals.css";

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
