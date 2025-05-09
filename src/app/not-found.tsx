import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-8">
        Sorry, the page you are looking for now does not exist.
      </p>
      <Link href="/" className="text-primary font-semibold hover:underline">
        Go back home
      </Link>
    </div>
  );
}
