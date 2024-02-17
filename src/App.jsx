// Code: Main App component
import React from "react";

// Importing PrimeReact components
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

// Importing components
import Header from "./Components/Header";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import Resume from "./Components/Resume";
import Footer from "./Components/Footer";
import ContactMe from "./Components/ContactMe";

// Importing styles
import "./scss/header.scss";
import "./scss/aboutMe.scss";
import "./scss/projects.scss";
import "./scss/resume.scss";
import "./scss/footer.scss";
import "./scss/contactMe.scss";

export default function App() {
    return (
        <PrimeReactProvider>
            <div className="app">
                <Header />
                <AboutMe />
                <Projects />
                <Resume />
                <ContactMe />
                <Footer />
            </div>
        </PrimeReactProvider>
    );
}
