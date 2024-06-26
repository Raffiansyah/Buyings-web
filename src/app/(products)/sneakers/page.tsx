import { getProducts } from '~/hooks/useProducts';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '~/components/ui/card';
import { formatPrice } from '~/utils';

export default async function Sneakers() {
  const products = await getProducts();
  const imageUrl = process.env.NEXT_PUBLIC_IMAGE_URL;
  return (
    <div className="py-10 grid grid-cols-4 gap-2 container justify-between items-center">
      {products?.map((product: any) => (
        <Card key={product.id} className="flex flex-col gap-y-5">
          <CardHeader>
            <Image
              src={`${imageUrl}${product.images}`}
              alt="Products images"
              width={154}
              height={154}
              className='h-full w-full'
            />
          </CardHeader>
          <CardContent>
            <p className='font-bold'>{product.title}</p>
          </CardContent>
          <CardFooter>
            <p className='font-semibold text-green-800'>{formatPrice(Number(product.prices))}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
