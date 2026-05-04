import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins-var",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GoodWill Hardware Pasal | Premium Taps, Basins & Bathroom Fittings",
  description:
    "Discover premium branded taps, water basins, toilet seats and bathroom fittings at GoodWill Hardware Pasal. Quality hardware products at the best prices. Contact us on WhatsApp for pricing.",
  keywords:
    "hardware pasal, taps Nepal, water basin, toilet seat, bathroom fittings, branded taps, GoodWill Hardware",
  openGraph: {
    title: "GoodWill Hardware Pasal | Premium Bathroom Fittings",
    description:
      "Premium branded taps, water basins, toilet seats and bathroom hardware in Nepal.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen bg-slate-50 antialiased">{children}</body>
    </html>
  );
}
