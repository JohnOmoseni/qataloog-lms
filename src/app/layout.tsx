import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { cn } from "@/lib/utils";

import "./globals.css";
import "./index.css";
import "./utilities.css";

const LatoFont = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Qataloog",
  description: "Learning Management system",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("font-lato", LatoFont.variable)}>
        <div className="wrapper">{children}</div>
      </body>
    </html>
  );
}
