import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "AtomInfra",
  description:
    "Redefining the Future of Data Centers",
  keywords: [
    "AI",
    "Data Centers",
    "GPU Optimization",
    "Cloud Computing",
    "AI Infrastructure",
  ],
  authors: [{ name: "AtomInfra Team", url: "https://atominfra.com" }],
  openGraph: {
    title: "AtomInfra",
    description:
      "Redefining the Future of Data Centers",
    url: "https://atominfra.com",
    siteName: "AtomInfra",
    images: [
      {
        url: "https://res.cloudinary.com/dy8hx2xrj/image/upload/v1738880841/science-fiction-1674554_1920_rbgpfi.jpg",
        width: 1200,
        height: 630,
        alt: "Future",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AtomInfra",
    description:
      "Redefining the Future of Data Centers",
    images: [
      "https://res.cloudinary.com/dy8hx2xrj/image/upload/v1738880841/science-fiction-1674554_1920_rbgpfi.jpg",
    ],
  },
  metadataBase: new URL("https://atominfra.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
