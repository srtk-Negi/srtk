export default function SideBar() {
  const icons = [
    {
      label: "LinkedIn",
      icon: "pi pi-linkedin",
      url: "https://www.linkedin.com/in/sarthak-negi-98301b1b7/",
    },
    {
      label: "GitHub",
      icon: "pi pi-github",
      url: "https://github.com/srtk-Negi",
    },
    {
      label: "Twitter",
      icon: "pi pi-twitter",
      url: "https://twitter.com/srtk_negi",
    },
    {
      label: "Email",
      icon: "pi pi-envelope",
      url: "mailto:srnegi141@gmail.com",
    },
  ];

  return (
    <div className="">
      {icons.map((icon) => (
        <div key={icon.label} className="">
          <a href={icon.url} target="_blank">
            <i className={icon.icon} style={{ fontSize: "2rem" }}></i>
          </a>
        </div>
      ))}
    </div>
  );
}
