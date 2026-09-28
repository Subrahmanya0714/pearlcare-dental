import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://pearlcare-dental.vercel.app"),

  title: {
    default: "PearlCare Dental Studio | Professional Dental Care",
    template: "%s | PearlCare Dental Studio",
  },

  description:
    "PearlCare Dental Studio provides personalized dental care, modern treatments and a comfortable patient experience.",

  keywords: [
    "dentist",
    "dental clinic",
    "dental studio",
    "dentist in Kundapura",
    "dental clinic in Kundapura",
    "dental implants",
    "root canal treatment",
    "teeth whitening",
    "braces",
    "cosmetic dentistry",
    "pediatric dentistry",
  ],

  authors: [
    {
      name: "PearlCare Dental Studio",
    },
  ],

  creator: "PearlCare Dental Studio",

  openGraph: {
    title: "PearlCare Dental Studio | Professional Dental Care",

    description:
      "Personalized dental care combining modern technology, experienced professionals and a comfortable patient experience.",

    type: "website",

    locale: "en_IN",

    images: [
      {
        url: "/images/dentist-hero.jpg",
        width: 1200,
        height: 630,
        alt: "PearlCare Dental Studio",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}