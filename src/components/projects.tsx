import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import assetUrls from "@/app/assetUrls";
import LiquidGlassButton from "@/components/liquid-glass-button";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Guardian Wheels",
      description:
        "Guardian Wheels -An advanced car alarm system that uses AI to recognize when a burglary is in progress. Images (via internal dashcam and drone) and geo info are sent to the user and the police.",
      image: assetUrls.GWheels,
      tags: [
        "Python",
        "FastAPI",
        "JavaScript",
        "Twilio",
        "Arduino",
        "AWS",
        "MySQL",
      ],
      liveUrl: null,
      githubUrl: "https://github.com/srtk-Negi/Guardian-Wheels",
    },
    {
      id: 2,
      title: "LayNote",
      description:
        "LayNote provides users with a curated list of activities and points of interest tailored to their layover location and time.",
      image: assetUrls.defaultProj,
      tags: ["React", "TypeScript", "FastAPI", "Ollama", "MySQL"],
      liveUrl: null,
      githubUrl: "https://github.com/srtk-Negi/LayNote",
    },
    {
      id: 3,
      title: "PixelPulse",
      description:
        "PixelPulse is an online shopping site for purchasing PCs and related accessories. This project involved developing an online shopping website with a focus on an intuitive interface and user-friendly features. The website includes many features both on the Admin and User sides of the webpage. On the User side, you get features such as the ability to purchase individual parts for your PC, hone your searches for different products with filters, and receive detailed information on the orders that you place. On the Admin side, you have the ability to edit user information, create or edit products, review detailed order information, and much more. ",

      image: assetUrls.pixelpulse,
      tags: ["React", "Node.js", "FastAPI", "Postgresql", "AWS RDS", "AWS S3"],
      liveUrl: null,
      githubUrl: "https://github.com/srtk-Negi/PixelPulse",
    },
    {
      id: 4,
      title: "srtk.dev",
      description:
        "This is my personal portfolio website, built with Next.js and Tailwind CSS. It showcases my projects, skills, and experience in a clean and modern design.",
      image: assetUrls.portfolio,
      tags: ["Next.js", "Tailwind CSS", "TypeScript", "React"],
      liveUrl: "https://srtk.dev/",
      githubUrl: "https://github.com/srtk-Negi/srtk",
    },
    {
      id: 5,
      title: "Comment Sentiment Analysis",
      description:
        "Fetches all the comments from a youtube video and performs sentiment analysis.Uses the YouTube API to get all the comments from the video the link was provided for. Uses the OpenAI API to access ChatGPT to perform sentiment analysis.",
      image: assetUrls.defaultProj,
      tags: ["Python", "OpenAI API", "YouTube API"],
      liveUrl: null,
      githubUrl: "https://github.com/srtk-Negi/commentalyzer",
    },
    {
      id: 6,
      title: "CryptDiary",
      description:
        "SecureDiary is a simple command-line tool to securely create and retrieve encrypted text entries (like diary entries). Each entry is AES-GCM encrypted using a password and saved as a .json file, ensuring confidentiality and integrity.",
      image: assetUrls.defaultProj,
      tags: ["Python", "Cryptography", "AES-GCM", "Command Line"],
      liveUrl: null,
      githubUrl: "https://github.com/srtk-Negi/CryptDiary",
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-16">
        <h2 className="text-3xl font-bold tracking-tighter mb-3">Projects</h2>
        <Separator className="w-12 h-1 bg-black dark:bg-white" />
        <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl">
          A selection of my recent work. Each project represents my commitment
          to clean design and efficient functionality.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-4">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="border-grey rounded-5 overflow-hidden bg-transparent shadow-5 transition-transform hover:-translate-y-1"
          >
            {/* <div className="relative h-64 w-full bg-gray-100 dark:bg-neutral-900">
              <Image
                src={project.image}
                alt={assetUrls.defaultProj}
                fill
                className="object-cover"
              />
            </div> */}

            <CardContent className="p-4">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>

              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-gray-200 dark:border-neutral-800 px-2 py-1 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    className="flex items-center text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 font-medium"
                  >
                    <ExternalLink size={16} className="mr-1" /> View Project
                  </Link>
                )}

                <Link
                  href={project.githubUrl}
                  className="flex items-center text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 font-medium"
                >
                  <Github size={16} className="mr-1" /> Source Code
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-16">
        <Link
          href="https://github.com/srtk-Negi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LiquidGlassButton>
            <Github size={18} className="mr-2" /> View More on GitHub
          </LiquidGlassButton>
        </Link>
      </div>
    </div>
  );
}
