'use client';

import Link from 'next/link';
import MaxWitdthWrapper from '../MaxWidthWrapper';
import { buttonVariants } from '../ui/button';
import { productType } from '~/utils/type';
import { useEffect, useState } from 'react';
import { useGetProducts } from '~/service/query';
import CardComponent from '../layouts/CardComponent';

export default function ProdSection() {
  const [products, setProducts] = useState<productType[]>([]);
  const { data, isLoading } = useGetProducts('product_desc', 'sneakers');
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
            href={'/products/sneakers'}
          >
            View All
          </Link>
        </div>
        <CardComponent
          products={products}
          imageUrl={imageUrl}
          isLoading={isLoading}
        />
      </MaxWitdthWrapper>
    </section>
  );
}
