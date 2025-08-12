import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Corrections to Connections - Building Bridges Back to Community",
  description: "Supporting individuals reentering society after incarceration with resources for housing, education, recovery meetings, and community connections.",
  keywords: "reentry, housing assistance, recovery meetings, education support, community connections, second chances",
  authors: [{ name: "Corrections to Connections" }],
  openGraph: {
    title: "Corrections to Connections",
    description: "Building bridges back to community for individuals reentering society",
    url: "https://correctionstoconnections.org",
    siteName: "Corrections to Connections",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
