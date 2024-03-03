import React, { useState } from "react";
import { Avatar } from "primereact/avatar";
import { NavLink } from "react-router-dom";
import "../scss/navbar.scss";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "primereact/button";

function NavElements() {
    const items = [
        {
            label: "Home",
            href: "/home",
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
        <ul className="menu">
            {items.map((item, index) => {
                return (
                    <li key={index} className="p-mr-1 text-with-line-hover">
                        <NavLink className="nav-element" to={item.href}>
                            {item.label}
                        </NavLink>
                    </li>
                );
            })}
        </ul>
    );
}

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const handleMenuOpening = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const avatar = (
        <div className="avatar">
            <Avatar
                image="src/assets/images/memoji.jpeg"
                shape="circle"
                size="xlarge"
            >
                Sarthak Negi
            </Avatar>
        </div>
    );

    return (
        <div id="header">
            {avatar}
            {isMenuOpen ? <NavElements /> : null}
            <Button
                className="burgerMenuBtn"
                outlined
                onClick={handleMenuOpening}
            >
                <FontAwesomeIcon icon={faBars} size="2x" inverse />
            </Button>
        </div>
    );
}
