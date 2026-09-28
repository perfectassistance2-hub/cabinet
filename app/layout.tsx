import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import siteConfig from "@/data/site-config.json";
import type { SiteConfig } from "@/lib/types";

const config = siteConfig as SiteConfig;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const MOTS_CLES = [
  "cabinet de formation Maroc",
  "cabinet de formation secteur public",
  "renforcement des capacités administration publique",
  "formation continue fonctionnaires",
  "formation cadres administration publique Afrique",
  "séminaires gestion publique",
  "formation finances publiques",
  "formation audit et contrôle interne",
  "formation gestion de projets secteur public",
  "formation leadership administration publique",
  "cabinet de formation panafricain",
  "formation fonction publique Rabat",
  "voyage d'étude administration publique",
  "Perfect Assistance",
];

export const metadata: Metadata = {
  metadataBase: new URL(config.fr.url ?? "https://cabinetperfectassistance.com"),
  title: {
    default: config.fr.nomCabinet,
    template: `%s · ${config.fr.nomCabinet}`,
  },
  description: config.fr.slogan,
  keywords: MOTS_CLES,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
