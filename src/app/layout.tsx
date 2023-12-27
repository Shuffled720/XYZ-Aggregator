import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer";
import { GlobalContextProvider } from "@/context/store";
import { ModeToggle } from "@/components/ModeToggle";
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
            <div className="fixed top-0 right-0 m-2">
              <ModeToggle />
            </div>
            {children}
            <Footer />
          </GlobalContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
