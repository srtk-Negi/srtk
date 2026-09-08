export type ProjectLink = {
  label: string;
  url: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl: ProjectLink[] | null;
  githubUrl: ProjectLink[] | null;
};

export const assetUrls = {
  sadMan:
    "https://2c7eswxxwk.ufs.sh/f/2osH2RhSI3NmvmpB9l6l86j4KDZtedMuXf3RUx0Lir7aqIpO",
  resume:
    "https://2c7eswxxwk.ufs.sh/f/2osH2RhSI3Nm02chB8Ul9dAoiwvhO6nV34SLIG71tgfWekJx",
};

export const experiences = [
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

export const education = [
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

export const skills = [
  "TypeScript",
  "React",
  "Python",
  "FastAPI",
  "SQL",
  "Next.js",
  "Java",
  "C",
  "Springboot",
  "Supabase",
  "Tailwind CSS",
  "Docker",
  "Selenium",
  "AWS",
  "PostgreSQL",
  "MySQL",
  "GraphQL",
  "Much More...",
];

export const projects: Project[] = [
  {
    slug: "zyphircom",
    title: "Zyphircom",
    description:
      "NestJS monorepo containing an API service for scheduling and managing jobs, and a worker service for processing queued tasks using BullMQ and Redis.",
    tags: ["NestJS", "TypeScript", "PostgreSQL", "Drizzle", "BullMQ", "Redis"],
    liveUrl: null,
    githubUrl: [
      {
        label: "Zyphircom Services",
        url: "https://github.com/zyphircom/zyphircom_services",
      },
    ],
  },
  {
    slug: "rowdy-cybercon",
    title: "Rowdy CyberCon",
    description:
      "RowdyCyberCon is a one-day cybersecurity conference where San Antonio area-based students can learn new skills, participate in challenges, and network! You'll also have the opportunity to attend a plethora of different workshops and meet employers.",
    tags: [
      "NextJS",
      "TypeScript",
      "trpc",
      "Drizzle/Turso",
      "Clerk",
      "Vercel",
      "Cloudflare",
      "AWS SES",
    ],
    liveUrl: [
      {
        label: "Frutiger Edition",
        url: "https://frutiger.rowdycybercon.org/",
      },
      {
        label: "Win98 Edition",
        url: "https://win98.rowdycybercon.org/",
      },
    ],
    githubUrl: [
      {
        label: "Fall '26 Site",
        url: "https://github.com/rowdycon/RowdyCyberConFall26",
      },
      {
        label: "'26 Site",
        url: "https://github.com/rowdycon/RowdyCyberCon26",
      },
    ],
  },
  {
    slug: "kubera",
    title: "Kubera",
    description: "An opinionated finance management tool 💰",
    tags: ["Next.js", "React", "TypeScript", "PostgreSQL", "Vercel"],
    liveUrl: [
      {
        label: "kubera.srtk.dev",
        url: "https://kubera.srtk.dev/",
      },
    ],
    githubUrl: null,
  },
  {
    slug: "brick",
    title: "Brick",
    description:
      "A production-ready SaaS starter kit that handles authentication, billing, multi-tenancy, RBAC, and team collaboration — so you can focus on building your product, not boilerplate.",
    tags: ["Next.js", "React", "TypeScript", "PostgreSQL", "Authjs"],
    liveUrl: null,
    githubUrl: [
      {
        label: "Brick",
        url: "https://github.com/srtk-Negi/brick",
      },
    ],
  },
  {
    slug: "laynote",
    title: "LayNote",
    description:
      "LayNote provides users with a curated list of activities and points of interest tailored to their layover location and time.",
    tags: ["React", "TypeScript", "FastAPI", "Ollama", "MySQL"],
    liveUrl: null,
    githubUrl: [
      {
        label: "LayNote",
        url: "https://github.com/srtk-Negi/LayNote",
      },
    ],
  },
  {
    slug: "pixelpulse",
    title: "PixelPulse",
    description:
      "PixelPulse is an online shopping site for purchasing PCs and related accessories. This project involved developing an online shopping website with a focus on an intuitive interface and user-friendly features. The website includes many features both on the Admin and User sides of the webpage. On the User side, you get features such as the ability to purchase individual parts for your PC, hone your searches for different products with filters, and receive detailed information on the orders that you place. On the Admin side, you have the ability to edit user information, create or edit products, review detailed order information, and much more. ",
    tags: ["React", "Node.js", "FastAPI", "PostgreSQL", "AWS RDS", "AWS S3"],
    liveUrl: null,
    githubUrl: [
      {
        label: "PixelPulse",
        url: "https://github.com/srtk-Negi/PixelPulse",
      },
    ],
  },
  {
    slug: "srtk-dev",
    title: "srtk.dev",
    description:
      "This is my personal portfolio website, built with Next.js and Tailwind CSS. It showcases my projects, skills, and experience in a clean and modern design.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "React"],
    liveUrl: [
      {
        label: "srtk.dev",
        url: "https://srtk.dev/",
      },
    ],
    githubUrl: [
      {
        label: "srtk",
        url: "https://github.com/srtk-Negi/srtk",
      },
    ],
  },
  {
    slug: "guardian-wheels",
    title: "Guardian Wheels",
    description:
      "Guardian Wheels -An advanced car alarm system that uses AI to recognize when a burglary is in progress. Images (via internal dashcam and drone) and geo info are sent to the user and the police.",
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
    githubUrl: [
      {
        label: "Guardian Wheels",
        url: "https://github.com/srtk-Negi/Guardian-Wheels",
      },
    ],
  },
];

export const contactInfo = {
  email: "contact@srtk.dev",
  location: "San Antonio, TX, USA",
  socialLinks: {
    github: "https://github.com/srtk-Negi",
    linkedin: "https://www.linkedin.com/in/sarthak-negi-98301b1b7/",
    twitter: "https://x.com/s4arthakk",
  },
};
