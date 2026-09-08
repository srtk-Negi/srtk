import { Calendar, MapPin, Building, GraduationCap } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { assetUrls } from "@/config";
import LiquidGlassButton from "@/components/LiquidGlassButton";
import { experiences, education } from "@/config";

export default function Resume() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-16">
        <h2 className="text-3xl font-bold tracking-tighter mb-3">Resume</h2>
        <Separator className="w-12 h-1 bg-black dark:bg-white" />
        <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl">
          My professional journey and educational background
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h3 className="text-2xl font-semibold mb-8 flex items-center">
            <Building className="mr-2" /> Work Experience
          </h3>

          <div className="space-y-12">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="relative pl-8 border-l border-gray-200 dark:border-neutral-800"
              >
                <div className="absolute -left-[4px] top-0 w-2 h-2 bg-black dark:bg-white"></div>

                <h4 className="text-xl font-semibold"> {exp.role}</h4>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center">
                    <Building size={14} className="mr-1" /> {exp.company}
                  </div>

                  <div className="flex items-center">
                    <MapPin size={14} className="mr-1" /> {exp.location}
                  </div>

                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" /> {exp.period}
                  </div>
                </div>

                <p className="mt-3 text-gray-600 dark:text-gray-400">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-8 flex items-center">
            <GraduationCap className="mr-2" /> Education
          </h3>

          <div className="space-y-12">
            {education.map((edu) => (
              <div
                key={edu.id}
                className="relative pl-8 border-l border-gray-200 dark:border-neutral-800"
              >
                <div className="absolute -left-[4px] top-0 w-2 h-2 bg-black dark:bg-white"></div>

                <h4 className="text-xl font-semibold">{edu.degree}</h4>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center">
                    <Building size={14} className="mr-1" /> {edu.institution}
                  </div>

                  <div className="flex items-center">
                    <MapPin size={14} className="mr-1" /> {edu.location}
                  </div>

                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" /> {edu.period}
                  </div>
                </div>

                <p className="mt-3 text-gray-600 dark:text-gray-400">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <a href={assetUrls.resume} target="_blank" download>
              <LiquidGlassButton className="w-full">
                Download Resume
              </LiquidGlassButton>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
