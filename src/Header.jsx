import logoImage from "./assets/images/logo.png";

function NavElement() {
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
    <header id="header">
      <img className="logo" src={logoImage} alt="Logo Image" />
      <NavElement />
    </header>
  );
}
