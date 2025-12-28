import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://prescott-web.vercel.app"),
  alternates: {
    canonical: "https://prescott-web.vercel.app",  
  },
  title: "Prescott Properties | Luxury Properties in Dubai",
  description: "Prescott Properties is your trusted partner for luxury properties in Dubai. Discover your dream home with us.",
  keywords: [
    "Prescott Properties", "Luxury Properties", "Dubai Real Estate", "Apartments for Sale", "Villas for Sale", "Property Investment", "Real Estate Agency", "Luxury Homes", "Dubai Properties", "Real Estate Listings",
  ],
  authors: [{ name: "Prescott Properties" }],
  creator: "Prescott Properties",
  publisher: "Prescott Properties",


  openGraph: {
    title: "Prescott Properties | Luxury Properties in Dubai",
    description:
      "Prescott is your trusted partner for luxury properties in Dubai. Discover your dream home with us.",
    url: "https://prescott-web.vercel.app",
    siteName: "Prescott Properties",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/assets/common/hero-img.png",
        width: 1200,
        height: 630,
        alt: "Prescott Properties | Luxury Properties in Dubai",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Prescott Properties | Luxury Properties in Dubai",
    description:
      "Prescott is your trusted partner for luxury properties in Dubai. Discover your dream home with us.",
    images: ["/assets/common/hero-img.png"],

  },

  robots: {
    index: false,
    follow: false
  }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
