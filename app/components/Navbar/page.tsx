"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
  dropdown?: {
    name: string;
    href: string;
  }[];
}

const navItems: NavItem[] = [
  { name: "Home", href: "/" },

  {
    name: "Services",
    href: "/#services",
  },
  {
    name: "Work",
    href: "/work",
  },
  { name: "About", href: "/about" },
  { name: "Blogs", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setActiveDropdown(null);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <>
      {/* Floating Navbar */}
      <nav
        className={`fixed top-4 left-5 right-5 z-50 transition-all duration-500 ease-in-out ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="bg-white/80 backdrop-blur-md w-full border border-black/10 rounded-xl px-6 py-3 shadow-md">
          <div className="flex items-center justify-between space-x-8 ">
            {/* Logo */}
            <Link href="/">
              <span className="text-black font-bold text-3xl">Driflo</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className="text-black/80 hover:text-black transition-colors duration-200 flex items-center space-x-1 py-2"
                    onMouseEnter={() =>
                      item.dropdown && setActiveDropdown(item.name)
                    }
                    onMouseLeave={() =>
                      item.dropdown && setActiveDropdown(null)
                    }
                  >
                    <span className="relative">
                      {item.name}
                      <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-300 group-hover:w-full"></div>
                    </span>
                    {item.dropdown && (
                      <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.dropdown && (
                    <div
                      className={`absolute top-full left-0 mt-2 w-48 bg-white/90 backdrop-blur-md border border-black/10 rounded-lg shadow-xl overflow-hidden transition-all duration-300 ease-out ${
                        activeDropdown === item.name
                          ? "opacity-100 translate-y-0 visible"
                          : "opacity-0 -translate-y-2 invisible"
                      }`}
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item.dropdown.map((dropItem, index) => (
                        <Link
                          key={dropItem.name}
                          href={dropItem.href}
                          className={`block px-4 py-3 text-black/80 hover:text-black hover:bg-black/10 transition-all duration-200 ${
                            activeDropdown === item.name
                              ? "translate-x-0 opacity-100"
                              : "translate-x-4 opacity-0"
                          }`}
                          style={{
                            transitionDelay:
                              activeDropdown === item.name
                                ? `${index * 50}ms`
                                : "0ms",
                          }}
                        >
                          {dropItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden w-32 lg:block">
              <Link href="/contact">
                <button className="bg-brand-blue text-white px-6 py-2 rounded-full hover:bg-brand-blueHover transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Lets's Talk
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden text-black p-2 rounded-full hover:bg-black/10 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={toggleMenu}
          ></div>
          <div className="fixed top-4 left-5 right-5">
            {/* Mobile dropdown that matches navbar width and position */}
            <div className="bg-white/90 backdrop-blur-md border border-black/10 rounded-xl shadow-xl overflow-hidden mt-[72px]">
              <div className="px-6 py-4 space-y-4">
                {navItems.map((item, index) => (
                  <div
                    key={item.name}
                    className={`transform transition-all duration-500 ease-out ${
                      isMenuOpen
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }`}
                    style={{
                      transitionDelay: isMenuOpen ? `${index * 100}ms` : "0ms",
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        className="text-black/80 hover:text-black transition-colors duration-200 py-2"
                        onClick={() => !item.dropdown && toggleMenu()}
                      >
                        {item.name}
                      </Link>
                      {item.dropdown && (
                        <button
                          onClick={() => handleDropdownToggle(item.name)}
                          className="text-black/80 hover:text-black transition-colors duration-200 p-1"
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              activeDropdown === item.name ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>

                    {/* Mobile Dropdown */}
                    {item.dropdown && (
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-out ${
                          activeDropdown === item.name
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="ml-4 mt-2 space-y-2 border-l border-black/10 pl-4">
                          {item.dropdown.map((dropItem, dropIndex) => (
                            <Link
                              key={dropItem.name}
                              href={dropItem.href}
                              className={`block text-black/60 hover:text-black transition-all duration-200 py-1 ${
                                activeDropdown === item.name
                                  ? "translate-x-0 opacity-100"
                                  : "translate-x-4 opacity-0"
                              }`}
                              style={{
                                transitionDelay:
                                  activeDropdown === item.name
                                    ? `${dropIndex * 50}ms`
                                    : "0ms",
                              }}
                              onClick={toggleMenu}
                            >
                              {dropItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                {/* Mobile CTA */}
                <div
                  className={`pt-4 border-t border-black/10 transform transition-all duration-500 ease-out ${
                    isMenuOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isMenuOpen
                      ? `${navItems.length * 100}ms`
                      : "0ms",
                  }}
                >
                  <Link
                    href="/contact"
                    className="block w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center px-6 py-3 rounded-full hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    onClick={toggleMenu}
                  >
                    Let's Talk
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
