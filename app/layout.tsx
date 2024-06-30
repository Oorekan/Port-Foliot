import type { Metadata } from "next";
import Head from "next/head";
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

const danzza = localFont({
  src: [
    {
      path: '../public/Danzza Medium.otf',
      weight: '400',
      style: 'normal'
    }
  ],
  variable: '--font-danzza'
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
      <Head>
        <link rel="icon" href="/icon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </Head>
      <body className={`${japaneseRobot.variable} ${akiraExpanded.variable} ${danzza.variable}`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
