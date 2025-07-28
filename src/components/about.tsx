import { Code, Briefcase, GraduationCap } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function About() {
  const skills = [
    { name: "TypeScript", level: 85, isLanguage: true },
    { name: "React", level: 90, isLanguage: false },
    { name: "Python", level: 75, isLanguage: true },
    { name: "FastAPI", level: 70, isLanguage: false },
    { name: "SQL", level: 80, isLanguage: true },
    { name: "Next.js", level: 85, isLanguage: false },
    { name: "Java", level: 80, isLanguage: true },
    { name: "C", level: 80, isLanguage: true },
    { name: "Springboot", level: 80, isLanguage: true },
    { name: "Supabase", level: 80, isLanguage: false },
    { name: "Tailwind CSS", level: 80, isLanguage: false },
    { name: "Docker", level: 70, isLanguage: false },
    { name: "Selenium", level: 60, isLanguage: false },
    { name: "AWS", level: 70, isLanguage: false },
    { name: "PostgreSQL", level: 75, isLanguage: false },
    { name: "MySQL", level: 75, isLanguage: false },
    { name: "GraphQL", level: 65, isLanguage: false },
    { name: "Much More...", level: 65, isLanguage: false },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-16">
        <h2 className="text-3xl font-bold tracking-tighter mb-3">About Me</h2>
        <Separator className="w-12 h-1 bg-black dark:bg-white" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h3 className="text-2xl font-semibold mb-6">Who I Am?</h3>

          <p className="text-gray-600 dark:text-gray-400 mb-6">
            As a dedicated professional, I am currently a Research Software
            Developer II at The Data Analytics Center, UTSA. I hold a Bachelor
            of Science degree in Computer Science, with concentrations in
            Software Engineering and Data Science, from The University of Texas
            at San Antonio, where I graduated with a strong academic record,
            including a 3.86 GPA overall and a 3.97 in my major coursework. My
            academic achievements were recognized with awards such as the
            Distinguished Presidential Scholarship, President&apos;s List, and
            Honor Roll. My expertise is built upon a solid foundation in
            computer science principles, cultivated through relevant coursework
            in Data Structures, Systems Programming, Analysis of Algorithms, AI,
            Database Systems, and Secure Software Development
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="p-2 border border-gray-200 dark:border-neutral-800">
                <Code className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold">Development</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Building robust, scalable applications with clean code and
                  modern architectures, from full-stack analytics dashboards to
                  secure API services.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-2 border border-gray-200 dark:border-neutral-800">
                <Briefcase className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold">Strategic Impact</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Applying data-driven insights and strategic planning to
                  optimize systems and boost productivity
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-2 border border-gray-200 dark:border-neutral-800">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold">
                  Continuous Learning and Mentorship
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Passionate about expanding expertise in AI, data science, and
                  secure software development, while actively mentoring new
                  contributors.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6">My Expertise</h3>

          <p className="text-gray-600 dark:text-gray-400 mb-8">
            I possess a strong command over a diverse set of technologies,
            allowing me to build robust and scalable applications from concept
            to deployment.
          </p>

          {/* Replaced progress bars with a simple grid of skill tags */}
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="border border-gray-200 dark:border-neutral-800 px-3 py-2 text-center text-sm hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors rounded-lg"
              >
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
