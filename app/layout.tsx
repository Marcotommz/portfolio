import type { Metadata } from "next";
import { Poppins, Monoton, Space_Grotesk } from "next/font/google";
import { site } from "@/lib/config";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const monoton = Monoton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-monoton",
  display: "swap",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} — ${site.role}`,
  description: site.bio,
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.bio,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="it"
      className={`${poppins.variable} ${monoton.variable} ${grotesk.variable}`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
