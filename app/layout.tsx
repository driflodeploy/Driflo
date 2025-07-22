import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Driflo",
  description: "Headless e-commerce Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
