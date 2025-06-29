import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gandymow Döwletmyrat - Full-Stack programmaçy | ReactJS, NextJS, Go, MySQL',
  description: 'Professional portfolio of Gandymow Döwletmyrat, a Full-Stack Developer specializing in ReactJS, NextJS, Go backend, and MySQL. Showcasing scalable web applications and innovative solutions.',
  keywords: ['Full-Stack Developer', 'ReactJS', 'NextJS', 'Go', 'MySQL', 'Web Development', 'Portfolio'],
  authors: [{ name: 'Gandymow Döwletmyrat' }],
  creator: 'Gandymow Döwletmyrat',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://myportfolio.com',
    title: 'John Doe - Full-Stack Developer Portfolio',
    description: 'Professional portfolio showcasing expertise in ReactJS, NextJS, Go, and MySQL development.',
    siteName: 'John Doe Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'John Doe - Full-Stack Developer Portfolio',
    description: 'Professional portfolio showcasing expertise in ReactJS, NextJS, Go, and MySQL development.',
    creator: '@Dowlet20',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}