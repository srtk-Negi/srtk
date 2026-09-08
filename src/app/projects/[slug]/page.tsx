import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { projects } from "@/config";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found | Sarthak Negi" };
  }

  return {
    title: `${project.title} | Sarthak Negi`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/#projects"
          className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors mb-10"
        >
          <ArrowLeft size={16} className="mr-2" /> Back to Projects
        </Link>

        <h1 className="text-4xl font-bold tracking-tighter mb-3">
          {project.title}
        </h1>
        <Separator className="w-12 h-1 bg-black dark:bg-white mb-8" />

        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-10">
          {project.description}
        </p>

        <div className="mb-10">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
            Built With
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="border border-gray-200 dark:border-neutral-800 px-2 py-1 text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {project.liveUrl && project.liveUrl.length > 0 && (
          <div className="mb-8">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
              {project.liveUrl.length > 1 ? "Live Sites" : "Live Site"}
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.liveUrl.map((link) => (
                <Link
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="secondary">
                    <ExternalLink size={16} className="mr-1" /> {link.label}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        )}

        {project.githubUrl && project.githubUrl.length > 0 && (
          <div className="mb-8">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
              Source Code
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.githubUrl.map((link) => (
                <Link
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="secondary">
                    <Github size={16} className="mr-1" /> {link.label}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export const dynamic = "force-dynamic";
