import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '~/components/layouts/Header';
import { StoreProvider } from '~/store/(provider)/StoreProvider';
import { TanstackProvider } from '~/components/TanstackProvide';
import { Toaster } from '~/components/ui/toaster';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Buyings',
  description: "Fashion Man's E-commerce",
  category: 'ecommerce',
  authors: { name: 'Raffiansyah' },
  keywords: ['Next Js', 'Clothing', 'Shoes', 'Accessories', 'Fashion Mans'],
  creator: 'Mohammad Raffiansyah',
  publisher: 'Mohammad Raffiansyah',
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
          </TanstackProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
