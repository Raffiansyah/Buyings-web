'use client';

import { productType } from '~/utils/type';
import CardComponent from '~/components/layouts/CardComponent';
import Combobox from '~/components/layouts/Combobox';
import { useEffect, useState } from 'react';
import { useGetProducts } from '~/service/query';
import { SkeletonCard } from '~/components/Skeleton';

export default function Sneakers() {
  const [products, setProducts] = useState<productType[]>([]);
  const [sortBy, setSortBy] = useState<string>('');
  const imageUrl = process.env.NEXT_PUBLIC_IMAGE_URL;
  const { data, isLoading } = useGetProducts(sortBy);

  useEffect(() => {
    setProducts(data);
  }, [data]);

  return (
    <div className="py-10 container">
      <Combobox setSortBy={setSortBy} />
      {isLoading ? (
        <div className="grid grid-cols-4 gap-4 gap-y-5 py-5 justify-between items-center">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-2 justify-between items-center">
          {products?.map((product: productType) => (
            <CardComponent
              product={product}
              imageUrl={imageUrl}
              key={product.id}
            />
          ))}
        </div>
      )}
    </div>
  );
}
