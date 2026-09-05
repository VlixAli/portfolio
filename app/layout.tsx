import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import { profile, siteUrl } from "@/lib/data";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
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

const splashScript =
  '(function(){try{var m=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(m||sessionStorage.getItem("splash-seen")){document.documentElement.setAttribute("data-splash","off")}}catch(e){}})()';

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${robotoMono.variable} dark scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: splashScript }} />
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
