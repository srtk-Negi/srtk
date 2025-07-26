import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import assetUrls from "@/app/assetUrls";

function NavElements() {
  const items = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/aboutMe",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Resume",
      href: "/resume",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  return (
    <div className="flex space-x-4">
      {items.map((item, index) => {
        return (
          <Link key={index} href={item.href}>
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}

export default function Navbar() {
  const avatar = (
    <Avatar>
      <AvatarImage src={assetUrls.avatar} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );

  return (
    <div className="flex items-center justify-between p-4">
      {avatar}
      <NavElements />
    </div>
  );
}
