import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '~/components/layouts/Header';
import { StoreProvider } from '~/store/(provider)/StoreProvider';
import { TanstackProvider } from '~/components/TanstackProvide';
import { Toaster } from '~/components/ui/toaster';
import Footer from '~/components/layouts/Footer';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Buyings',
  description: "Fashion Man's E-commerce",
  category: 'ecommerce',
  authors: { name: 'Luxvuryy' },
  keywords: ['Next Js', 'Clothing', 'Shoes', 'Accessories', 'Fashion Mans'],
  creator: 'Luxvuryy',
  publisher: 'Buyings',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/logo.svg" sizes="any" />
      </head>
      <body className={inter.className}>
        <StoreProvider>
          <TanstackProvider>
            <Header />
            <main>{children}</main>
            <Toaster />
            <Footer />
          </TanstackProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
