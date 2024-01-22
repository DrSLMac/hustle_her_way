import type { Metadata } from "next";
import { Livvic } from "next/font/google";
import "./globals.css";

const livvic = Livvic({ 
  weight: ["100", "200", "300", "400", "500", "600", "700", "900"],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "Hustle Her Way Blog",
  description: "A Hustlers Guide ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={livvic.className}>{children}</body>
    </html>
  );
}
