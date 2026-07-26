import type { Metadata } from "next";
import { Fraunces, Karla } from "next/font/google";
import DoodleFilters from "@/components/DoodleFilters";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-karla",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Deeksha Chilukuri - Portfolio",
  description:
    "Data scientist building the systems that match network and ledger data at scale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${fraunces.variable} ${karla.variable}`}>
      <body className="bg-bg font-sans text-text antialiased">
        <DoodleFilters />
        {children}
      </body>
    </html>
  );
}
