import Image from 'next/image';
import MaxWitdthWrapper from '~/components/MaxWidthWrapper';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MaxWitdthWrapper className="grid grid-cols-2 py-10">
      <div className="grid grid-rows-1 items-center text-center justify-center">
        <Image
          src={'/Buyings-vector.svg'}
          alt="BuyingsVector"
          width={400}
          height={400}
        />
        <p className="text-lg font-normal">Let&apos;s Buyings somethings</p>
        <p className="text-muted-foreground">
          Immerse yourself in the latest trend in fashion
        </p>
      </div>
      <div>{children}</div>
    </MaxWitdthWrapper>
  );
}
