import { productType } from '~/utils/type';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import Image from 'next/image';
import { formatPrice } from '~/utils';

type propTypes = {
  product: productType
  imageUrl: string | undefined
}

export default function CardComponent(props: propTypes) {
  const {product, imageUrl} = props
  return (
    <Card key={product.id} className="flex flex-col gap-y-5">
      <CardHeader>
        <Image
          src={`${imageUrl}/ProductImages/${product.images}`}
          alt="Products images"
          width={154}
          height={154}
          className="h-full w-full"
          loading='lazy'
        />
      </CardHeader>
      <CardContent>
        <p className="font-bold">{product.title}</p>
      </CardContent>
      <CardFooter>
        <p className="font-semibold text-green-800">
          {formatPrice(Number(product.prices))}
        </p>
      </CardFooter>
    </Card>
  );
}
