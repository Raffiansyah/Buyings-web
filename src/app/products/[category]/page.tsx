'use client';

import CardComponent from '~/components/layouts/CardComponent';
import Combobox from '~/components/layouts/Combobox';
import { useState } from 'react';
import { useGetInfiniteProducts } from '~/service/query';
import Link from 'next/link';
import InfiniteScroll from 'react-infinite-scroll-component';
import { LoaderCircle } from 'lucide-react';

type Params = {
  params: {
    category: string;
  };
};

export default function Sneakers({ params }: Params) {
  const { category } = params;
  const [sortBy, setSortBy] = useState<string>('');
  const imageUrl = process.env.NEXT_PUBLIC_IMAGE_URL;
  const { data, hasNextPage, fetchNextPage, isLoading } =
    useGetInfiniteProducts(sortBy, category);

  const products = data?.pages.reduce((prev, page) => {
    return [...prev, ...page]
  }, [])

  return (
    <div className="py-10 container min-h-screen">
      {products?.length != 0 ? (
        <>
          <Combobox setSortBy={setSortBy} />
          <InfiniteScroll
            dataLength={products ? products?.length : 0}
            next={() => fetchNextPage()}
            hasMore={hasNextPage}
            loader={<LoaderCircle />}
          >
            <CardComponent
              products={products}
              imageUrl={imageUrl}
              isLoading={isLoading}
            />
          </InfiniteScroll>
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
