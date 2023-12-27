import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });
import { GlobalContextProvider } from "@/context/store";
export const metadata: Metadata = {
  title: "XYZ Aggregator",
  description: "Genereates JSON from user given keywords with mini browser",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <GlobalContextProvider>
            {children}
            <Footer />
          </GlobalContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
