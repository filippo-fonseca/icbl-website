import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ICB Lab | Yale",
  description: "Decoding the mechanics of the human heart.",
  openGraph: {
    title: "ICB Lab | Yale",
    description: "Decoding the mechanics of the human heart.",
    type: "website",
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
        {children}
      </body>
    </html>
  );
}
