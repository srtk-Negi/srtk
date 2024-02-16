// Code: Main App component

// Importing components
import Header from "./Components/Header";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import Resume from "./Components/Resume";
import Footer from "./Components/Footer";
import ContactMe from "./Components/ContactMe";
import React from "react";

// Importing styles
import "./scss/header.scss";
import "./scss/aboutMe.scss";
import "./scss/projects.scss";
import "./scss/resume.scss";
import "./scss/footer.scss";
import "./scss/contactMe.scss";

function App() {
    return (
        <div>
            <Header />
            <AboutMe />
            <Projects />
            <Resume />
            <ContactMe />
            <Footer />
        </div>
    );
}

export default App;
