import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { StairsTransition } from './components/StairsTransition';

const jetbransMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetbrainsMono',
});
export const metadata: Metadata = {
  title: 'RS Portfolio',
  description: 'Rolando Sanchez Portfolio',
  icons: {
    icon: [
      {
        url: '/img/1.png',
        href: '/img/1.png',
        sizes: '50x50',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetbransMono.variable} antialiased bg-gradient-to-r from-customBlack to-gray-800`}
      >
        <StairsTransition />
        {children}
      </body>
    </html>
  );
}
