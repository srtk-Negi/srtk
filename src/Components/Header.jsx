import React from "react";
import { Avatar } from "primereact/avatar";
import { NavLink } from "react-router-dom";
import "../scss/header.scss";

function NavElements() {
    const items = [
        {
            label: "Home",
            icon: "pi pi-home",
            href: "/home",
        },
        {
            label: "About",
            icon: "pi pi-star",
            href: "/aboutMe",
        },
        {
            label: "Projects",
            icon: "pi pi-search",
            href: "/projects",
        },
        {
            label: "Resume",
            icon: "pi pi-file",
            href: "/resume",
        },
        {
            label: "Contact",
            icon: "pi pi-envelope",
            href: "/contact",
        },
    ];
    const navElements = items.map((item, index) => {
        return (
            <li key={index} className="p-mr-1 text-with-line-hover">
                <NavLink className="nav-element" to={item.href}>
                    <span className="mx-1">{item.label}</span>
                    <span className={item.icon} style={{ fontSize: "1rem" }} />
                </NavLink>
            </li>
        );
    });

    return (
        <ul
            className="flex flex-wrap align-items-center gap-8 justify-content-center"
            style={{ listStyleType: "none" }}
        >
            {navElements}
        </ul>
    );
}

export default function Header() {
    const avatar = (
        <div className="flex align-items-center gap-2 ">
            <Avatar
                image="src/assets/images/memoji.jpeg"
                shape="circle"
                size="xlarge"
            />
            <h1 className="username">Sarthak Negi</h1>
        </div>
    );

    return (
        <div id="header">
            {avatar}
            <NavElements />
        </div>
    );
}
