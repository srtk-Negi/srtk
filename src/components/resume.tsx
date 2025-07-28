import { Calendar, MapPin, Building, GraduationCap } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import assetUrls from "@/app/assetUrls";
import LiquidGlassButton from "@/components/LiquidGlassButton";

export default function Resume() {
  const experiences = [
    {
      id: 1,
      role: "Research Software Developer II",
      company: "The Data Analytics Center, UTSA",
      location: "San Antonio, TX",
      period: "Jan 2025 - Present",
      description:
        "In my role as a Research Software Developer II, I have gained extensive practical experience in developing sophisticated software solutions. My contributions include designing and implementing modular AI chat UIs, architecting scalable PostgreSQL and MSSQL schemas, integrating vector databases for retrieval-augmented generation (RAG) in production pipelines, and developing robust role- and group-based access control systems. I have also led interviews for graduate hires and mentored new contributors in backend and DevOps. My skills encompass full-stack development, utilizing technologies such as React, FastAPI, and PostgreSQL, and I am adept at leveraging data-driven insights to optimize content strategy and enhance audience engagement",
    },
    {
      id: 2,
      role: "Undergrad Researcher",
      company: "The Data Analytics Center, UTSA",
      location: "San Antonio, TX",
      period: "March 2023 - Dec 2024",
      description:
        "As an Undergrad Researcher at The Data Analytics Center, UTSA, I significantly contributed to various projects. I developed and published an internal Python package, complete with over 50 unit tests and 100% code coverage, which demonstrably boosted developer productivity by 50%. To enhance data processing efficiency, I implemented a CUDA-based parallel data processing queue that reduced query and analysis time by 75%. I also created an LDAP microservice, centralizing user data across internal services and improving authentication and user management. My work also included co-developing a full-stack analytics dashboard using React, FastAPI, and MSSQL Server, and building more than 12 robust scrapers and parsers for ingesting research data from over 5 diverse sources.",
    },
  ];

  const education = [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      institution: "The University of Texas at San Antonio",
      location: "San Antonio, TX",
      period: "2021 - 2024",
      description:
        "I earned my Bachelor of Science in Computer Science from The University of Texas at San Antonio, graduating in December 2024. My studies focused on a dual concentration in Software Engineering and Data Science. I maintained a strong academic record with a GPA of 3.86 overall and a 3.97 in my major coursework. My achievements were recognized through the Distinguished Presidential Scholarship, President's List, and Honor Roll. My relevant coursework provided a comprehensive understanding of critical areas, including Data Structures, Systems Programming, Analysis of Algorithms, Application Programming, Data Science, AI, Computer Organization, Database Systems, Software Engineering, and Secure Software Development.",
    },
  ];

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
