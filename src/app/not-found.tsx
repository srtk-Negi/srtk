import Image from "next/image";
import Link from "next/link";
import { assetUrls } from "@/config";

const NotFound = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
      <div className="flex flex-col items-center justify-center text-center gap-6">
        <Image
          src={assetUrls.sadMan}
          alt="Sad man illustration"
          width={280}
          height={280}
          className="w-48 sm:w-64 h-auto dark:invert"
          priority
          unoptimized
        />
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tighter">
          404 — Page Not Found
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-md">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been
          moved.
        </p>
        <Link
          href="/"
          className="mt-2 px-6 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black font-medium hover:opacity-80 transition-opacity"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
