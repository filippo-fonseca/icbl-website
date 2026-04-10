import type { Metadata } from "next";
import "./globals.css";
import NavigationSound from "./components/NavigationSound";

export const metadata: Metadata = {
  title: "Integrative Cardiac Biomechanics Laboratory | Yale",
  description:
    "Led by Dr. Stuart Campbell at Yale Biomedical Engineering, we conduct translational research in cardiac physiology, biomechanics, and stem cell biology to solve unmet clinical needs.",
  metadataBase: new URL("https://icbl-website.vercel.app"),
  openGraph: {
    title: "Integrative Cardiac Biomechanics Laboratory | Yale",
    description:
      "Translational research at the intersection of cardiac physiology, biomechanics, tissue engineering, and clinical cardiology.",
    type: "website",
    images: [
      {
        url: "/cover-metadata.png",
        width: 1200,
        height: 630,
        alt: "Integrative Cardiac Biomechanics Laboratory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Integrative Cardiac Biomechanics Laboratory | Yale",
    description:
      "Translational research in cardiac physiology, biomechanics, and stem cell biology.",
    images: ["/cover-metadata.png"],
  },
  themeColor: "#14365d",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white overflow-x-hidden">
        <NavigationSound />
        {children}
      </body>
    </html>
  );
}
