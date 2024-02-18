import React from "react";

function Intro() {
    return (
        <div className="intro">
            <h1>
                I'm Sarthak, a junior at UTSA pursuing a major in{" "}
                <span className="text-highlight">Computer Science</span> with a
                concentration in{" "}
                <span className="text-highlight">Software Engineering</span> and{" "}
                <span className="text-highlight">Data Science</span>.
            </h1>
            <h2>
                I am actively looking for{" "}
                <span className="text-highlight">Internship</span> opportunities
                for Summer 2024. Currently, I am working as a{" "}
                <span className="text-highlight">Research Assistant </span>
                at the Data Analytics Center, where I actively contribute to the{" "}
                <span className="text-highlight">development</span> and{" "}
                <span className="text-highlight">maintainace</span> of our
                application,{" "}
                <span className="text-highlight">collecting data</span> and{" "}
                <span className="text-highlight">managing databases</span> for
                projects in production. I specialize in{" "}
                <span className="text-highlight">full stack development </span>
                and excel at collecting and preparing data for various{" "}
                <span className="text-highlight">modeling tasks</span>. I thrive
                in{" "}
                <span className="text-highlight">
                    collaborative environments
                </span>{" "}
                and thoroughly enjoy being part of a{" "}
                <span className="text-highlight">team</span>. I am always ready
                to take on higher responsibilities and contribute to the success
                of a project. <span className="text-highlight">Passionate</span>{" "}
                and eager to learn, I actively seek out opportunities to acquire
                new skills and knowledge. I strongly believe in applying my
                learnings to my work and making a tangible impact. Feel free to
                contact me through LinkedIn, email or my portfolio.
            </h2>
        </div>
    );
}

function SkillBox({ skill }) {
    return <div className="skill-box">{skill}</div>;
}

function Skills({ skills }) {
    return (
        <div className="skills">
            <h1>Skills</h1>
            <div className="skill-box-container">
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
        "MongoDB",
        "SQL",
        "HTML",
        "CSS",
        "Git",
        "AWS",
        "GCP",
        "Azure",
        "TensorFlow",
        "PyTorch",
        "Keras",
        "Pandas",
        "Numpy",
        "Matplotlib",
        "Seaborn",
        "Scikit-learn",
        "Jupyter",
        "Flask",
        "Django",
        "REST",
        "GraphQL",
        "CI/CD",
        "GitHub Actions",
        "Nginx",
    ];

    return (
        <div className="aboutMe">
            <Intro />
            <Skills skills={skills} />
        </div>
    );
}
