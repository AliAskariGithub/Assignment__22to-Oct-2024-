import type { Metadata } from "next";
import "./globals.css";
import Subnavbar from "@/components/subNavbar";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "E-Learning",
  description: "Generated by Syed Ali Askari Zaidi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Subnavbar />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
