import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StickyCTA from "@/components/ui/StickyCTA";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Digitalisierung & KI in Verbänden - Schweizweite Umfrage",
  description: "Nehmen Sie an der schweizweiten Umfrage zu Digitalisierung und Künstlicher Intelligenz in Verbänden teil. In nur 5 Minuten helfen Sie uns, ein aktuelles Stimmungsbild der digitalen Transformation zu erfassen.",
  keywords: ["Digitalisierung", "KI", "Künstliche Intelligenz", "Verbände", "Schweiz", "Umfrage", "Transformation"],
  authors: [{ name: "Survey Team" }],
  openGraph: {
    title: "Wie digital ist Ihr Verband?",
    description: "Schweizweite Umfrage zu Digitalisierung und KI in Verbänden - jetzt teilnehmen!",
    type: "website",
    locale: "de_CH",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wie digital ist Ihr Verband?",
    description: "Schweizweite Umfrage zu Digitalisierung und KI in Verbänden - jetzt teilnehmen!",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.className} antialiased`}>
        {children}
        <StickyCTA />
      </body>
    </html>
  );
}
