import type { Metadata } from "next";
import { Livvic } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/theme-provider";
import { cn } from "@/lib/utils";
import { client } from "./lib/sanity";
import { homepage } from "./lib/interface";
import Footer from "./components/Footer";
import { Toaster } from "@/components/ui/toaster";

const livvic = Livvic({
  weight: ["100", "200", "300", "400", "500", "600", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hustle Her Way Blog",
  description: "A Hustlers Guide ",
};

async function getData() {
  const query = `
  *[_type == 'homepage'] {
    title,
      smallDescription,
      "titleImage": titleImage.asset, 
      content
  }[0]`;

  const data = await client.fetch(query);

  return data;
}

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const data: homepage = await getData();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(livvic.className, "bg-background")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar title={data.title} logo={data.titleImage} />
          <main className="w-full mx-auto px-4 mt-4">
            {children}
            <Footer />
          </main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

//

// export default function RootLayout({ children }: RootLayoutProps) {
//   return (
//     <>
//       <html lang="en" suppressHydrationWarning>
//         <head />
//         <body>
//           <ThemeProvider
//             attribute="class"
//             defaultTheme="system"
//             enableSystem
//             disableTransitionOnChange
//           >
//             {children}
//           </ThemeProvider>
//         </body>
//       </html>
//     </>
//   )
// }
