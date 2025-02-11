

// frontend/app/layout.tsx
import { ReactNode } from 'react';
import './globals.css'; // Import Tailwind styles
import Header from '@/components/header/Header';
import Footer from '@/components/header/Footer';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <Header />
        <main className="container mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;

