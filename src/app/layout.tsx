import type { Metadata } from "next";
import { Crimson_Pro, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const crimsonPro = Crimson_Pro({
  variable: "--font-crimson-pro",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Manaforge Press — Fantasy & LitRPG Publishing",
    template: "%s | Manaforge Press",
  },
  description:
    "A fantasy and LitRPG publishing imprint. Discover grimdark epics, progression fantasy, and dungeon crawler adventures from multiple authors under one forge.",
  keywords: [
    "fantasy publishing",
    "LitRPG",
    "progression fantasy",
    "grimdark",
    "dungeon crawler",
    "indie publishing",
    "Manaforge Press",
  ],
  openGraph: {
    title: "Manaforge Press — Fantasy & LitRPG Publishing",
    description:
      "Discover grimdark epics, progression fantasy, and dungeon crawler adventures from multiple authors under one forge.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manaforge Press — Fantasy & LitRPG Publishing",
    description:
      "Discover grimdark epics, progression fantasy, and dungeon crawler adventures from multiple authors under one forge.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://manaforge-press.vercel.app',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${crimsonPro.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg-deep">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Manaforge Press',
              url: 'https://manaforge-press.vercel.app',
              description: 'Fantasy and LitRPG publishing imprint. Multiple authors, one forge.',
              logo: 'https://manaforge-press.vercel.app/favicon.ico',
              sameAs: [],
            }),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
