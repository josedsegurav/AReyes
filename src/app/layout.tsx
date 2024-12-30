import type { Metadata } from "next";
import { Roboto_Mono, Roboto_Condensed, Bodoni_Moda } from "next/font/google";
import "./globals.css";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

const roboto = Roboto_Condensed({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni-moda",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Andrea Reyes",
  description: "Andrea Reyes website, interior designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoMono.variable} ${roboto.className} ${bodoni.variable} bg-gray-100 text-gray-800 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
