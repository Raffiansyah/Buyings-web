'use client';

import Link from 'next/link';
import MaxWitdthWrapper from '../MaxWidthWrapper';
import { buttonVariants } from '../ui/button';
import { SkeletonCard } from '../Skeleton';
import { productType } from '~/utils/type';
import { useEffect, useState } from 'react';
import { useGetProducts } from '~/service/query';
import CardComponent from '../layouts/CardComponent';
import { motion } from 'motion/react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

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
            {products?.map((product: productType, idx: number) => (
              <motion.div
                key={product.id}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.1 }}
              >
                <CardComponent product={product} imageUrl={imageUrl} />
              </motion.div>
            ))}
          </div>
        )}
      </MaxWitdthWrapper>
    </section>
  );
}
