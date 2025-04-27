import { productType } from '~/utils/type';
import Image from 'next/image';
import { formatPrice } from '~/utils';
import { Backpack } from 'lucide-react';
import { Button } from '../ui/button';
import { motion } from 'motion/react';
import { SkeletonCard } from '../Skeleton';

type propTypes = {
  products: productType[];
  imageUrl: string | undefined;
  isLoading: boolean;
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: 'easeOut' },
  },
};

export default function CardComponent(props: propTypes) {
  const { products, imageUrl, isLoading } = props;
  return (
    <>
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
        <div className='grid grid-cols-4 gap-2 justify-between items-center'>
          {products?.map((product, idx) => {
            return (
              <motion.div
                key={product.id}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: '0px 8px 20px rgba(0,0,0,0.1)',
                }}
                className="rounded-2xl bg-white p-4 shadow-sm transition-all"
              >
                <div className="flex items-center mb-5">
                  <Image
                    src={`${imageUrl}/ProductImages/${product.images}`}
                    alt="Products images"
                    width={250}
                    height={250}
                    objectFit="cover"
                    loading="lazy"
                  />
                </div>
                <div className="mb-5">
                  <p className="text-xl overflow-hidden text-ellipsis whitespace-nowrap w-full mb-3">
                    {product.title}
                  </p>
                  <p className="font-semibold">
                    {formatPrice(Number(product.prices))}
                  </p>
                </div>
                <div>
                  <Button variant="default">
                    <Backpack className="w-5 h-5" />
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </>
  );
}
