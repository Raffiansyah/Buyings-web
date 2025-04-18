'use client';

import Link from 'next/link';
import MaxWitdthWrapper from '../MaxWidthWrapper';
import { buttonVariants } from '../ui/button';
import { SkeletonCard } from '../Skeleton';
import { productType } from '~/utils/type';
import { useEffect, useState } from 'react';
import { useGetProducts } from '~/service/query';
import CardComponent from '../layouts/CardComponent';

export default function ProdSection() {
  const [products, setProducts] = useState<productType[]>([]);
  const { data, isLoading } = useGetProducts('product_desc');
  const imageUrl = process.env.NEXT_PUBLIC_IMAGE_URL;

  useEffect(() => {
    setProducts(data);
  }, [data]);
  return (
    <section className="mb-12">
      <MaxWitdthWrapper>
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-semibold">New Deals</h1>
          <Link
            className={buttonVariants({ variant: 'default' })}
            href={'/sneakers'}
          >
            View All
          </Link>
        </div>
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
      </MaxWitdthWrapper>
    </section>
  );
}
