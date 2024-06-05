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
      <body className={`${japaneseRobot.variable} ${akiraExpanded.variable}`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
