import Link from "next/link";
import MaxWitdthWrapper from "../MaxWidthWrapper";
import { buttonVariants } from "../ui/button";

export default function DiscountSection() {
  return (
    <section className="bg-gradient-to-b from-white to-black/20 p-14">
        <MaxWitdthWrapper className="bg-primary rounded-2xl text-white py-20">
          <div>
            <div className="mb-4">
              <h1 className="text-4xl font-semibold">
                Get 10% off your first order!
              </h1>
              <p>
                Sign up and be the first to know about new drops, exlusive
                deals, and early access to limited editions
              </p>
            </div>
            <div className='flex flex-row gap-x-5'>
              <Link
                className={buttonVariants({ variant: 'secondary' })}
                href={'/auth/sign-in'}
              >
                Unlock Discount
              </Link>
              <Link className={buttonVariants({ variant: 'ghost' })} href={'/'}>
                Learn More
              </Link>
            </div>
          </div>
        </MaxWitdthWrapper>
      </section>
  )
}
