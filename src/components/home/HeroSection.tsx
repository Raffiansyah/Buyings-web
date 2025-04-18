import Image from "next/image";
import MaxWitdthWrapper from "../MaxWidthWrapper";
import { buttonVariants } from "../ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full text-white flex items-center justify-center overflow-hidden mb-12">
            <div className="absolute inset-0 w-full h-full">
              <Image
                alt="hero-img"
                src={'/asset8.jpg'}
                objectFit="cover"
                layout="fill"
                className="w-full h-full"
              />
            </div>
            <div className="absolute inset-0 bg-black/30"></div>
            <MaxWitdthWrapper className="relative z-10 text-white px-6 flex flex-col justify-center items-center">
              <h1 className="mb-5 text-8xl font-semibold">
                Step into Style &{' '} Comfort
              </h1>
              <p className="mb-5 text-xl w-2/3 text-center">
                Discover our curated collection of premium mens footwear. from
                formal elegance to casual comfort, find your perfect pair.
              </p>
              <Link
                className={buttonVariants({ variant: 'default' })}
                href={'/sneakers'}
              >
                Shop Collection
              </Link>
            </MaxWitdthWrapper>
          </section>
  )
}
