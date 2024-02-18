import React from "react";
import "../scss/home.scss";

export default function Home() {
    return (
        <div className="homePageContent">
            <h1 className="text-with-line-hover">Sarthak Negi</h1>
            <h2>
                <span className="text-highlight">Software Developer</span> and
                <span className="text-highlight"> Research Assistant</span> at
                the{" "}
                <span className="text-highlight text-with-line-permanent">
                    <a href="https://dac.utsa.edu/" target="_blank">
                        Data Analytics Center, UTSA
                    </a>
                </span>
                .
            </h2>
            <h2>
                Junior <span className="text-highlight">Computer Science</span>{" "}
                student at The University of Texas at San Antonio with a
                concentration in{" "}
                <span className="text-highlight">Software Engineering </span>and{" "}
                <span className="text-highlight">Data Science</span>.
            </h2>
        </div>
    );
}
