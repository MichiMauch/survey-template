import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StickyCTA from "@/components/ui/StickyCTA";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://survey-template.vercel.app'),
  title: "Umfrage zur Digitalisierung und Künstliche Intelligenz bei Verbänden",
  description: "Nehmen Sie jetzt an der schweizweiten Umfrage zu Digitalisierung und Künstlicher Intelligenz in Verbänden teil – in nur 5 Minuten.",
  keywords: ["Digitalisierung", "KI", "Künstliche Intelligenz", "Verbände", "Schweiz", "Umfrage", "Transformation", "Digital", "Survey", "Verbandslandschaft"],
  authors: [{ name: "NETNODE" }],
  creator: "NETNODE",
  publisher: "NETNODE",
  robots: "index, follow",
  
  openGraph: {
    title: "Umfrage zur Digitalisierung und Künstliche Intelligenz bei Verbänden",
    description: "Nehmen Sie jetzt an der schweizweiten Umfrage zu Digitalisierung und Künstlicher Intelligenz in Verbänden teil – in nur 5 Minuten.",
    type: "website",
    locale: "de_CH",
    siteName: "Digitalisierung & KI in Verbänden - Schweizweite Umfrage 2025",
    url: "https://survey-template.vercel.app",
    images: [
      {
        url: "/social.webp",
        width: 1200,
        height: 630,
        alt: "Schweizweite Umfrage zur Digitalisierung und KI in Verbänden",
        type: "image/webp",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Umfrage zur Digitalisierung und Künstliche Intelligenz bei Verbänden",
    description: "Nehmen Sie jetzt an der schweizweiten Umfrage zu Digitalisierung und Künstlicher Intelligenz in Verbänden teil – in nur 5 Minuten.",
    images: ["/social.webp"],
    creator: "@netnode_ch",
  },
  
  alternates: {
    canonical: "https://survey-template.vercel.app",
  },
  
  other: {
    "application-name": "Verbände Digitalisierung Survey",
    "apple-mobile-web-app-title": "Verbände Digital Survey",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "format-detection": "telephone=no",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#3363D3",
    "msapplication-tap-highlight": "no",
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#3363D3',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Survey",
    "name": "Schweizweite Umfrage zur Digitalisierung und KI in Verbänden",
    "description": "Nehmen Sie jetzt an der schweizweiten Umfrage zu Digitalisierung und Künstlicher Intelligenz in Verbänden teil – in nur 5 Minuten.",
    "url": "https://survey-template.vercel.app",
    "datePublished": "2025-01-01",
    "inLanguage": "de-CH",
    "creator": {
      "@type": "Organization",
      "name": "NETNODE",
      "url": "https://www.netnode.ch"
    },
    "about": [
      {
        "@type": "Thing",
        "name": "Digitalisierung"
      },
      {
        "@type": "Thing", 
        "name": "Künstliche Intelligenz"
      },
      {
        "@type": "Thing",
        "name": "Verbände Schweiz"
      }
    ],
    "audience": {
      "@type": "Audience",
      "audienceType": "Verbände, Vereine, Organisationen"
    }
  };

  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <StickyCTA />
      </body>
    </html>
  );
}
