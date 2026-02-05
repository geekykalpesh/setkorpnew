import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700', '800']
});

const poppins = Poppins({ 
  subsets: ["latin"],
  variable: '--font-poppins',
  weight: ['600', '700', '800']
});

export const metadata: Metadata = {
  title: "Dubai Business Setup | Setkorp - Freezone & Mainland Incorporation",
  description: "Launch your Dubai business in 14 days with Setkorp. Expert business incorporation, banking, real estate & accounting for freezone and mainland setups.",
  keywords: ["Dubai business setup", "UAE company formation", "Freezone company Dubai", "Mainland company registration UAE", "Dubai corporate banking", "Business incorporation Dubai"],
  openGraph: {
    title: "Dubai Business Setup | Setkorp",
    description: "Launch your Dubai business in 14 days with Setkorp. Expert A-Z solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
