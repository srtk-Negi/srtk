// Code: Main App component
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Importing PrimeReact components
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

// Importing components
import Header from "./Components/Header";
import Home from "./Components/Home";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import Resume from "./Components/Resume";
import Footer from "./Components/Footer";
import ContactMe from "./Components/ContactMe";
import SideBar from "./Components/SideBar";

// Importing styles
import "./scss/header.scss";
import "./scss/aboutMe.scss";
import "./scss/projects.scss";
import "./scss/resume.scss";
import "./scss/footer.scss";
import "./scss/contactMe.scss";
import "./scss/sidebar.scss";

export default function App() {
    return (
        <PrimeReactProvider>
            <div className="app">
                <Router>
                    <Header />
                    <SideBar />
                    <Routes>
                        <Route path="/" Component={Home} />
                        <Route path="/home" Component={Home} />
                        <Route path="/aboutMe" Component={AboutMe} />
                        <Route path="/projects" Component={Projects} />
                        <Route path="/resume" Component={Resume} />
                        <Route path="/contact" Component={ContactMe} />
                    </Routes>
                </Router>
            </div>
        </PrimeReactProvider>
    );
}
