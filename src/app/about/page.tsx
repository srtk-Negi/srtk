import { Button } from "@/components/ui/button";

function Intro() {
  return (
    <div className="">
      <h1>
        I'm Sarthak, a junior at UTSA pursuing a major in{" "}
        <span className="">Computer Science</span> with a concentration in{" "}
        <span className="">Software Engineering</span> and{" "}
        <span className="">Data Science</span>.
      </h1>
      <h2>
        I am actively looking for <span className="">Internship</span>{" "}
        opportunities for Summer 2024. Currently, I am working as a{" "}
        <span className="">Research Assistant </span>
        at the Data Analytics Center, where I actively contribute to the{" "}
        <span className="">development</span> and{" "}
        <span className="">maintainace</span> of our application,{" "}
        <span className="">collecting data</span> and{" "}
        <span className="">managing databases</span> for projects in production.
        I specialize in <span className="">full stack development </span>
        and excel at collecting and preparing data for various{" "}
        <span className="">modeling tasks</span>. I thrive in{" "}
        <span className="">collaborative environments</span> and thoroughly
        enjoy being part of a <span className="">team</span>. I am always ready
        to take on higher responsibilities and contribute to the success of a
        project. <span className="">Passionate</span> and eager to learn, I
        actively seek out opportunities to acquire new skills and knowledge. I
        strongly believe in applying my learnings to my work and making a
        tangible impact. Feel free to contact me through LinkedIn, email or my
        portfolio.
      </h2>
    </div>
  );
}

function SkillBox({ skill }: { skill: string }) {
  return (
    <div className="">
      <Button variant={"outline"}>{skill}</Button>
    </div>
  );
}

function SkillsSection({ skills }: { skills: string[] }) {
  return (
    <div className="">
      <h1>Skills</h1>
      <div className="">
        {skills.map((skill, index) => (
          <SkillBox skill={skill} key={index} />
        ))}
      </div>
    </div>
  );
}

export default function AboutMe() {
  const skills = [
    "Python",
    "Java",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "FastAPI",
    "MS SQL",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "HTML",
    "CSS",
    "Git",
    "GitHub",
    "AWS",
    "PyTorch",
    "Pandas",
    "Numpy",
    "Matplotlib",
    "Scikit-learn",
    "Jupyter",
    "Flask",
    "REST",
    "Nginx",
    "BeautifulSoup",
    "Selenium",
    "Pytest",
  ];

  return (
    <div className="">
      <Intro />
      <SkillsSection skills={skills} />
    </div>
  );
}
