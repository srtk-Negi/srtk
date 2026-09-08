import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import LiquidGlassButton from "@/components/LiquidGlassButton";
import { contactInfo, projects } from "@/config";

const MAX_VISIBLE_TAGS = 3;

export default function Projects() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-16">
        <h2 className="text-3xl font-bold tracking-tighter mb-3">Projects</h2>
        <Separator className="w-12 h-1 bg-black dark:bg-white" />
        <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl">
          A selection of my recent work. Each project represents my commitment
          to clean design and efficient functionality. Click a card to learn
          more.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group block h-full"
          >
            <Card className="h-full border-grey rounded-5 overflow-hidden bg-transparent shadow-5 transition-all group-hover:-translate-y-1 group-hover:shadow-md">
              <CardContent className="p-4 flex flex-col h-full">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold">{project.title}</h3>
                  <ArrowUpRight
                    size={18}
                    className="shrink-0 mt-1 text-gray-400 transition-all group-hover:text-black dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.slice(0, MAX_VISIBLE_TAGS).map((tag) => (
                    <span
                      key={tag}
                      className="border border-gray-200 dark:border-neutral-800 px-2 py-1 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > MAX_VISIBLE_TAGS && (
                    <span className="px-2 py-1 text-xs text-gray-500 dark:text-gray-400">
                      +{project.tags.length - MAX_VISIBLE_TAGS} more
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="text-center mt-16">
        <Link
          href={contactInfo.socialLinks.github}
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
