'use client';

import { getProducts } from '~/hooks/useProducts';
import { productType } from '~/lib/type';
import CardComponent from '~/components/layouts/CardComponent';
import Combobox from '~/components/layouts/Combobox';
import { useEffect, useState } from 'react';

export default function Sneakers() {
  const [products, setProducts] = useState<productType[]>([]);
  const [sortBy, setSortBy] = useState<string>('');
  const imageUrl = process.env.NEXT_PUBLIC_IMAGE_URL;

  useEffect(() => {
    async function fetchProducts() {
      const products = await getProducts(sortBy);
      setProducts(products);
    }
    fetchProducts();
  }, [sortBy]);

  return (
    <div className='py-10 container'>
      <Combobox setSortBy={setSortBy} />
      <div className="grid grid-cols-4 gap-2 justify-between items-center">
        {products?.map((product: productType) => (
          <CardComponent
            product={product}
            imageUrl={imageUrl}
            key={product.id}
          />
        ))}
      </div>
    </div>
  );
}
