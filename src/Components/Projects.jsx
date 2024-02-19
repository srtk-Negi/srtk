import React from "react";
import { Button } from "primereact/button";

function ProjectCard({ title, description, image, github }) {
    return (
        <>
            <div className="project-card">
                <div className="project-img">
                    <img src={image} alt={title} />
                </div>
                <div className="details">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <div className="button">
                        <Button
                            className="p-button git-btn"
                            href={github}
                            target="_blank"
                            rounded
                            raised
                            outlined
                        >
                            GitHub
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default function Projects() {
    const projects = [
        {
            title: "Guardian Wheels",
            description: "Project 1 description",
            image: "src/assets/images/GWheels.png",
            github: "https://github.com/srtk-Negi/Guardian-Wheels",
        },
        {
            title: "Commentalyzer",
            description: "Project 2 description",
            image: "src/assets/images/defaultProj.png",
            github: "https://github.com/srtk-Negi/commentalyzer",
        },
        {
            title: "Personal Portfolio",
            description: "Project 3 description",
            image: "src/assets/images/portfolio.png",
            github: "https://github.com/srtk-Negi/portfolio-website",
        },
    ];

    return (
        <div className="projects">
            {projects.map((project, index) => {
                return (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        github={project.github}
                    />
                );
            })}
        </div>
    );
}
