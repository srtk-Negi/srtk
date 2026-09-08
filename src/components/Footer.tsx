import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-neutral-800 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Link href="/" className="text-xl font-bold tracking-tighter">
              srtk
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xs">
              A passionate Full Stack Developer specializing in building
              exceptional digital experiences.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-neutral-800 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {currentYear} Sarthak Negi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export const dynamic = "force-dynamic";
