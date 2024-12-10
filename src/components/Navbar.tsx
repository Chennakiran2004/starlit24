import React, { useEffect, useMemo, useState } from "react";
import {  Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollTo, setScrollTo] = useState<{ id: string; offset: number } | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<string>("Home");

  // Smooth scrolling to specific sections
  useEffect(() => {
    if (scrollTo) {
      const section = document.getElementById(scrollTo.id);
      if (section) {
        const yOffset = scrollTo.offset || 0;
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
      setScrollTo(null);
    }
  }, [scrollTo]);
  
  const menuItems = useMemo(
    () => [
      { label: "Schedule", id: "activities", offset: -50 },
      { label: "Highlights", id: "highlights", offset: -50 },
      { label: "Leaderboard", id: "leaderboard", offset: -100 },
      { label: "Gallery", id: "gallery", offset: -150 },
      { label: "FAQ", id: "faq", offset: -50 },
      { label: "Contact", id: "contact", offset: -142 },
    ],
    []
  );
  // Handle navbar style on scroll

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero")?.offsetHeight || 0;
      setIsScrolled(window.scrollY > heroHeight);

      // Update active section based on scroll position
      if (window.scrollY <= heroHeight / 2) {
        setActiveSection("Home");
      } else {
        menuItems.forEach(({ id }) => {
          const section = document.getElementById(id);
          if (section) {
            const { top, bottom } = section.getBoundingClientRect();
            const offset = window.innerHeight / 2; // Adjust as needed for sensitivity
            if (top <= offset && bottom >= offset) {
              setActiveSection(id);
            }
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuItems]);

  const handleScrollTo = (id: string, offset = 0) => {
    const currentPath = window.location.pathname;
    if (currentPath !== "/Home") {
      navigate("/Home");
      setTimeout(() => setScrollTo({ id, offset }), 100);
    } else {
      setScrollTo({ id, offset });
    }
  };

  // Define scroll handlers

  return (
    <nav
      className={`fixed w-full z-50 transition-colors duration-300 text-white ${
        location.pathname !== "/Home" || isScrolled ? "bg-purple-800" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center h-16`}
          style={{
            height: "70px",
            justifyContent: window.innerWidth < 768 ? "space-between" : "space-around",
          }}
        >
          {/* Logo */}
          {(location.pathname !== "/Home" || isScrolled || window.innerWidth < 768) && (
            <div className="flex items-center">
              <Link to="/Home">
                <img
                  src="https://i.ibb.co/HV8DpnR/final-pic-1.png"
                  alt="Logo"
                  style={{ width: "68px", height: "74px" }}
                />
              </Link>
            </div>
          )}

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => handleScrollTo("hero", 0)}
              className="hover:bg-purple-700 px-3 py-2 rounded-md transition-colors"
              style={activeSection === "Home" && location.pathname === "/Home" ? { backgroundColor: "rgb(126 34 206)" } : { backgroundColor: "transparent" }}
            >
              Home
            </button>
            {menuItems.map(({ label, id, offset }) => (
              <button
                key={id}
                className="hover:bg-purple-700 px-3 py-2 rounded-md transition-colors"
                style={activeSection === id ? { backgroundColor: "rgb(126 34 206)" } : { backgroundColor: "transparent" }}
                onClick={() => handleScrollTo(id, offset)}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-purple-800">
          <div
            className="flex flex-col justify-center items-center px-2 pt-2 pb-3 space-y-1 sm:px-3"
            onClick={() => setIsOpen(false)}
          >
            <button
              onClick={() => handleScrollTo("hero", 0)}
              className="hover:bg-purple-700 px-3 py-2 rounded-md transition-colors"
              style={activeSection === "Home" ? { backgroundColor: "rgb(126 34 206)" } : {}}
            >
              Home
            </button>
            {menuItems.map(({ label, id, offset }) => (
              <button
                key={id}
                className="hover:bg-purple-700 px-3 py-2 rounded-md transition-colors"
                style={activeSection === id ? { backgroundColor: "rgb(126 34 206)" } : {}}
                onClick={() => handleScrollTo(id, offset)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
