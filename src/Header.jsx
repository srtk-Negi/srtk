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
    </>
  );
}
export default function Header() {
  return (
    <header id="header">
      <div className="logo">
        <img src={logoImage} alt="Logo Image" />
      </div>
      <NavElement />
    </header>
  );
}
