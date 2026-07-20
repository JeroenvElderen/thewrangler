import type { Metadata } from "next";
import PageViewTracker from "./_components/page-view-tracker";
import "./globals.css";


export const metadata: Metadata = {
  title: "The Wrangler | American Trucks in Sweden",
  description: "Premium American trucks and cars imported for Swedish roads.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PageViewTracker />
        {children}
      </body>
    </html>
  );
}
