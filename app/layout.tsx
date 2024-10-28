import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { GraduationCap } from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BFTC - Business and Future Training Center',
  description: 'Professional vocational training center offering courses in culinary arts, hairdressing, tailoring, mechanics, and welding.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="border-b">
          <div className="max-w-7xl mx-auto px-4">
            <nav className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center space-x-2">
                <GraduationCap className="w-8 h-8 text-blue-600" />
                <span className="text-xl font-bold text-blue-900">BFTC</span>
              </Link>
              <div className="hidden md:flex items-center space-x-6">
                <Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link>
                <Link href="/about" className="text-gray-600 hover:text-blue-600">About</Link>
                <Link href="/services" className="text-gray-600 hover:text-blue-600">Services</Link>
                <Link href="/book" className="text-gray-600 hover:text-blue-600">Book Service</Link>
                <Button asChild>
                  <Link href="/apply">Apply Now</Link>
                </Button>
              </div>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}