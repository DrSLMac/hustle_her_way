import type { Metadata } from "next";
import { Livvic } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/theme-provider";
import { cn } from "@/lib/utils";

const livvic = Livvic({
  weight: ["100", "200", "300", "400", "500", "600", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hustle Her Way Blog",
  description: "A Hustlers Guide ",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(livvic.className, "bg-background")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="w-full mx-auto px-4 py-5">{children}</main>
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

