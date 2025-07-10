import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex-grow flex items-center justify-center px-6 md:px-10">
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-4xl font-medium mb-4">404</h1>
          <h2 className="text-xl mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link 
            href="/"
            className="inline-flex items-center text-sm bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    </main>
  );
} 