import React from "react";
import { Button } from "primereact/button";

import "../assets/css/projects.css";
import defaultProj from "/defaultProj.png";
import GWheels from "/GWheels.png";
import workTracker from "/workTracker.png";
import portfolio from "/portfolio.png";
import pixelpulse from "/pixelpulse.png";

function ProjectCard(props) {
  return (
    <>
      <div className="project-card">
        <div className="project-img">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="details">
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          {props.stackUsed && (
            <div className="stack">
              <h3>Stack Used:</h3>
              {props.stackUsed.map((stack, index) => {
                return (
                  <span key={index} className="stack-item text-highlight">
                    {stack}
                  </span>
                );
              })}
            </div>
          )}
          <div className="button">
            <a href={props.github} target="_blank">
              <Button className="p-button git-btn" rounded raised outlined>
                GitHub
              </Button>
            </a>
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
      description:
        "Guardian Wheels -An advanced car alarm system that uses AI to recognize when a burglary is in progress. Images (via internal dashcam and drone) & geo info are sent to the user and the police.",
      image: GWheels,
      github: "https://github.com/srtk-Negi/Guardian-Wheels",
      stackUsed: [
        "Python",
        "FastAPI",
        "JavaScript",
        "Twilio",
        "Arduino",
        "AWS",
        "MySQL",
      ],
    },
    {
      title: "Pixel Pulse",
      description:
        "PixelPulse is an online shopping site for purchasing PCs and related accessories. This project involved developing an online shopping website with a focus on an intuitive interface and user-friendly features. The website includes many features both on the Admin and User sides of the webpage. On the User side, we get features such as the ability to purchase individual parts for your PC, hone your searches for different products with filters, and receive detailed information on the orders that you place. On the Admin side, we have the ability to edit user information, create or edit products, review detailed order information, and much more. ",
      image: pixelpulse,
      github: "https://github.com/srtk-Negi/PixelPulse",
      stackUsed: [
        "React",
        "Node.js",
        "FastAPI",
        "Postgresql",
        "AWS RDS",
        "AWS S3",
      ],
    },
    {
      title: "Workout Tracker",
      description:
        "A workout tracker web application that uses the Geolocation API to find your current location and helps you keep record of your runnning and cycling workouts.",
      image: workTracker,
      github: "https://github.com/srtk-Negi/Work-Tracker",
      stackUsed: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Personal Portfolio",
      description: "This is my personal portfolio website.",
      image: portfolio,
      github: "https://github.com/srtk-Negi/portfolio-website",
      stackUsed: ["React", "SCSS", "PrimeReact"],
    },
    {
      title: "Commentalyzer",
      description:
        "Fetches all the comments from a youtube video and performs sentiment analysis.Uses the YouTube API to get all the comments from the video the link was provided for. Uses the OpenAI API to access ChatGPT to perform sentiment analysis.",
      image: defaultProj,
      github: "https://github.com/srtk-Negi/commentalyzer",
      stackUsed: ["Python", "OpenAI API", "YouTube API"],
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
            stackUsed={project.stackUsed}
          />
        );
      })}
    </div>
  );
}
