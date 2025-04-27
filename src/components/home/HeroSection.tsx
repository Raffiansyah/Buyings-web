'use client'

import Image from 'next/image';
import MaxWitdthWrapper from '../MaxWidthWrapper';
import { buttonVariants } from '../ui/button';
import Link from 'next/link';
import { motion } from 'motion/react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 * i,
      duration: 1,
      ease: 'easeOut',
    },
  }),
};

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
        <motion.h1
          className="mb-5 text-8xl font-semibold"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={1}
          viewport={{ once: true }}
        >
          Step into Style & Comfort
        </motion.h1>
        <motion.p
          className="mb-5 text-xl w-2/3 text-center"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={2}
          viewport={{ once: true, amount: 0.5 }}
        >
          Discover our curated collection of premium mens footwear. from formal
          elegance to casual comfort, find your perfect pair.
        </motion.p>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={3}
          viewport={{ once: true }}
        >
          <Link
            className={buttonVariants({ variant: 'default' })}
            href={'/products/sneakers'}
          >
            Shop Collection
          </Link>
        </motion.div>
      </MaxWitdthWrapper>
    </section>
  );
}
