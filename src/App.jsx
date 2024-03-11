// Code: Main App component
import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";

// Importing PrimeReact components
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

// Importing components
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import Resume from "./Components/Resume";
import ContactMe from "./Components/ContactMe";
import SideBar from "./Components/SideBar";
import ErrorPage from "./Components/ErrorPage";

export default function App() {
    return (
        <PrimeReactProvider>
            <div className="app">
                <Router>
                    <Navbar />
                    <SideBar />
                    <Routes>
                        <Route path="/" element={<Navigate to="/home" />} />
                        <Route index path="/home" element={<Home />} />
                        <Route path="/aboutMe" element={<AboutMe />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/resume" element={<Resume />} />
                        <Route path="/contact" element={<ContactMe />} />
                        <Route path="*" element={<ErrorPage />} />
                    </Routes>
                </Router>
            </div>
        </PrimeReactProvider>
    );
}
