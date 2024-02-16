import logoImage from "../assets/images/logo.png";

function NavElements() {
    return (
        <div className="navLinksContainer">
            <a href="#aboutMe">About Me</a>
            <a href="#projects">Projects</a>
            <a href="#resume">Resume</a>
            <a href="#contactMe">Contact Me</a>
        </div>
    );
}

export default function Header() {
    return (
        <navbar id="navbar">
            <img className="logo" src={logoImage} alt="Logo Image" />
            <NavElements />
        </navbar>
    );
}
