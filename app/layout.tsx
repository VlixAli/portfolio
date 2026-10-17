import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { profile, siteUrl } from "@/lib/data";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${profile.name} | ${profile.title}`,
  description: profile.tagline,
  keywords: [
    profile.name,
    profile.title,
    "Backend Engineer",
    "Java",
    "Spring Boot",
    "Quarkus",
    "Microservices",
    "AWS",
    "Azure",
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: `${profile.name} | ${profile.title}`,
    title: `${profile.name} | ${profile.title}`,
    description: profile.slogan,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | ${profile.title}`,
    description: profile.slogan,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <noscript>
          <style>{`.reveal{opacity:1 !important}`}</style>
        </noscript>
      </head>
      <body className="min-h-full flex flex-col bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
