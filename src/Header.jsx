import logoImage from "./assets/images/logo.png";

function NavElement() {
  return (
    <>
      <h2>
        <a href="#aboutMe">About Me</a>
      </h2>
      <h2>
        <a href="#projects">Projects</a>
      </h2>
      <h2>
        <a href="#resume">Resume</a>
      </h2>
      <h2>
        <a href="#contactMe">Contact Me</a>
      </h2>
    </>
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
