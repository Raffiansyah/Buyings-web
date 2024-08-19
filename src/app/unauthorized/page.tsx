import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">Unauthorized</h1>
      <p className="text-lg mb-8">
      Sorry, the page you are looking for is not public
      </p>
      <Link href="/" className="text-green-800 font-semibold hover:underline">
        Go back home
      </Link>
    </div>
  );
}
