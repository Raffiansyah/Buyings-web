'use client';

import { productType } from '~/utils/type';
import CardComponent from '~/components/layouts/CardComponent';
import Combobox from '~/components/layouts/Combobox';
import { useEffect, useState } from 'react';
import { useGetProducts } from '~/service/query';
import Link from 'next/link';

type Params = {
  params: {
    category: string;
  };
};

export default function Sneakers({ params }: Params) {
  const { category } = params;
  const [products, setProducts] = useState<productType[]>([]);
  const [sortBy, setSortBy] = useState<string>('');
  const imageUrl = process.env.NEXT_PUBLIC_IMAGE_URL;
  const { data, isLoading } = useGetProducts(sortBy, category);  

  useEffect(() => {
    setProducts(data);
  }, [data]);

  return (
    <div className="py-10 container min-h-screen">
      {products?.length != 0 ? (
        <>
          <Combobox setSortBy={setSortBy} />
          <CardComponent
            products={products}
            imageUrl={imageUrl}
            isLoading={isLoading}
          />
        </>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <p className="text-lg mb-8">
            Sorry, the product you are looking for now does not available.
          </p>
          <Link href="/" className="text-primary font-semibold hover:underline">
            Go back home
          </Link>
        </div>
      )}
    </div>
  );
}
