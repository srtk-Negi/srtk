"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "bg-white/10 dark:bg-black/10 backdrop-blur-xl border-white/20 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-white/5"
          : "bg-white/5 dark:bg-black/5 backdrop-blur-lg border-white/10 dark:border-white/5"
      } border-b`}
      style={{
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo with liquid effect */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl font-bold tracking-tighter text-gray-900 dark:text-white hover:scale-105 transition-all duration-300 ease-out relative group"
            >
              srtk
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300 ease-out group"
                >
                  <span className="relative z-10">{item.name}</span>
                  {/* Liquid hover effect */}
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 dark:from-blue-400/10 dark:via-purple-400/10 dark:to-cyan-400/10 rounded-full scale-0 group-hover:scale-100 transition-all duration-500 ease-out backdrop-blur-sm border border-white/20 dark:border-white/10"
                    style={{
                      backdropFilter: "blur(10px) saturate(150%)",
                      WebkitBackdropFilter: "blur(10px) saturate(150%)",
                    }}
                  />
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 rounded-full blur-lg scale-0 group-hover:scale-150 transition-all duration-700 ease-out" />
                </Link>
              ))}

              {/* Theme toggle with liquid glass effect */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="relative ml-4 rounded-full bg-white/10 dark:bg-black/10 hover:bg-white/20 dark:hover:bg-black/20 border border-white/20 dark:border-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-110 group"
                aria-label="Toggle dark mode"
                style={{
                  backdropFilter: "blur(10px) saturate(150%)",
                  WebkitBackdropFilter: "blur(10px) saturate(150%)",
                }}
              >
                <div className="relative z-10">
                  {mounted && theme === "dark" ? (
                    <Sun size={18} className="text-yellow-400" />
                  ) : (
                    <Moon size={18} className="text-blue-400" />
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-blue-400/20 rounded-full blur-lg scale-0 group-hover:scale-150 transition-all duration-500 ease-out" />
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full bg-white/10 dark:bg-black/10 hover:bg-white/20 dark:hover:bg-black/20 border border-white/20 dark:border-white/10 backdrop-blur-sm transition-all duration-300"
              aria-label="Toggle dark mode"
              style={{
                backdropFilter: "blur(10px) saturate(150%)",
                WebkitBackdropFilter: "blur(10px) saturate(150%)",
              }}
            >
              {mounted && theme === "dark" ? (
                <Sun size={18} className="text-yellow-400" />
              ) : (
                <Moon size={18} className="text-blue-400" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="rounded-full bg-white/10 dark:bg-black/10 hover:bg-white/20 dark:hover:bg-black/20 border border-white/20 dark:border-white/10 backdrop-blur-sm transition-all duration-300"
              aria-label="Open menu"
              style={{
                backdropFilter: "blur(10px) saturate(150%)",
                WebkitBackdropFilter: "blur(10px) saturate(150%)",
              }}
            >
              <div
                className={`transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </div>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu with liquid glass effect */}
      <div
        className={`md:hidden transition-all duration-500 ease-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className="px-4 py-6 space-y-2 bg-white/5 dark:bg-black/5 border-t border-white/10 dark:border-white/5"
          style={{
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
          }}
        >
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative block px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300 ease-out group rounded-xl"
              onClick={toggleMenu}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <span className="relative z-10">{item.name}</span>
              {/* Liquid hover effect for mobile */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 dark:from-blue-400/10 dark:via-purple-400/10 dark:to-cyan-400/10 rounded-xl scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ease-out backdrop-blur-sm border border-white/10 dark:border-white/5"
                style={{
                  backdropFilter: "blur(10px) saturate(150%)",
                  WebkitBackdropFilter: "blur(10px) saturate(150%)",
                }}
              />
              {/* Mobile glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 rounded-xl blur-lg scale-75 group-hover:scale-125 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out" />
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
