import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Lato } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lato = Lato({
  weight: ["400", "700"],
  variable: "--font-lato",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AiroDental | AI-Powered Dental Practice Management",
  description: "Revolutionize your dental practice with AiroDental's AI solutions. Streamline patient communication, enhance staff training, and improve practice efficiency with our comprehensive AI ecosystem.",
  keywords: "dental AI, dental practice management, AI dental assistant, dental automation, dental staff training, patient communication, dental technology, AiroDental, dental practice software",
  authors: [{ name: "AiroDental Team" }],
  creator: "AiroDental",
  publisher: "AiroDental",
  openGraph: {
    title: "AiroDental | AI-Powered Dental Practice Management",
    description: "Revolutionize your dental practice with AiroDental's AI solutions. Streamline patient communication, enhance staff training, and improve practice efficiency.",
    url: "https://AiroDental.com",
    siteName: "AiroDental",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AiroDental - AI for Dental Practices"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AiroDental | AI-Powered Dental Practice Management",
    description: "Revolutionize your dental practice with AI solutions for patient communication, staff training, and practice efficiency.",
    images: ["/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: "Technology",
  verification: {
    google: "verification_token", // Replace with actual verification token
  },
  other: {
    "theme-color": "#09474C",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lato.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
