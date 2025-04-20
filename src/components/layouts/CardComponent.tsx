import { productType } from '~/utils/type';
import Image from 'next/image';
import { formatPrice } from '~/utils';
import { Backpack } from 'lucide-react';
import { Button } from '../ui/button';
import { motion } from 'motion/react';

type propTypes = {
  product: productType;
  imageUrl: string | undefined;
};

export default function CardComponent(props: propTypes) {
  const { product, imageUrl } = props;
  return (
    <motion.div
      key={product.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.1, ease: 'easeOut' }}
      whileHover={{ scale: 1.03, boxShadow: '0px 8px 20px rgba(0,0,0,0.1)' }}
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
        <p className="font-semibold">{formatPrice(Number(product.prices))}</p>
      </div>
      <div>
        <Button variant="default">
          <Backpack className="w-5 h-5" />
        </Button>
      </div>
    </motion.div>
  );
}
