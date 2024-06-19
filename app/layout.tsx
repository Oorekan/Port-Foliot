import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'
import SmoothScroll from '@/components/SmoothScroll'

const japaneseRobot = localFont({
  src: [
    {
      path: '../public/Japanese Robot.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../public/Japanese Robot Italic.ttf',
      weight: '400',
      style: 'italic'
    }
  ],
  variable: '--font-japaneseRobot'
})

const akiraExpanded = localFont({
  src: [
    {
      path: '../public/Akira Expanded Demo.otf',
      weight: '400',
      style: 'normal'
    }
  ],
  variable: '--font-akiraExpanded'
})

export const metadata: Metadata = {
  title: "Brandon Monge",
  description: "Portfolio de Brandon Monge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </head>
      <body className={`${japaneseRobot.variable} ${akiraExpanded.variable}`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
