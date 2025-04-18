import { Instagram, Facebook } from 'lucide-react';
import MaxWitdthWrapper from '../MaxWidthWrapper';

export default function Footer() {
  return (
    <section className="border-t-2 p-5">
      <MaxWitdthWrapper className='flex justify-between items-center'>
        <div>
          <p>&copy; 2024 Buyings, All Rights Reserved.</p>
        </div>
        <div>
          <p>Terms of Service | Privacy Policy</p>
        </div>
      </MaxWitdthWrapper>
    </section>
  );
}
