import Link from "next/link";

export const contactInfo = {
  email: "srnegi141@gmail.com",
  phone: "+1 (210) 935-6275",
  location: "San Antonio, TX, USA",
  socialLinks: {
    github: "https://github.com/srtk-Negi",
    linkedin: "https://www.linkedin.com/in/sarthak-negi-98301b1b7/",
    twitter: "https://twitter.com/srtk_negi",
  },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-neutral-800 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="text-xl font-bold tracking-tighter">
              srtk
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xs">
              A passionate Full Stack Developer specializing in building
              exceptional digital experiences.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#home"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#resume"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                >
                  Resume
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-400">
                <span className="font-medium">Email: {contactInfo.email}</span>
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                <span className="font-medium">Phone:</span> {contactInfo.phone}
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                <span className="font-medium">Location: </span>
                {contactInfo.location}
              </li>
            </ul>
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
