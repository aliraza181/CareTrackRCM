import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "@/theme/ThemeRegistry";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const SITE = "CareTrack RCM";
const DESCRIPTION =
  "CareTrack RCM turns medical billing into a revenue engine — reduce denials, recover aging A/R, and get paid faster with a fully managed revenue cycle partner.";

export const metadata: Metadata = {
  metadataBase: new URL("https://caretrackrcm.example.com"),
  title: {
    default: `${SITE} — Revenue Cycle Management for Healthcare`,
    template: `%s | ${SITE}`,
  },
  description: DESCRIPTION,
  keywords: [
    "medical billing services",
    "revenue cycle management",
    "denial management",
    "A/R recovery",
    "medical coding services",
    "physician billing",
    "healthcare RCM",
  ],
  authors: [{ name: SITE }],
  openGraph: {
    type: "website",
    title: `${SITE} — Revenue Cycle Management for Healthcare`,
    description: DESCRIPTION,
    siteName: SITE,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE} — Revenue Cycle Management for Healthcare`,
    description: DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#0A1A2F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
