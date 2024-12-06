import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollTo, setScrollTo] = useState<{
    id: string;
    offset: number;
  } | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (scrollTo) {
      const section = document.getElementById(scrollTo.id);
      if (section) {
        const yOffset = scrollTo.offset || 0;
        const y =
          section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
      setScrollTo(null);
    }
  }, [scrollTo]);

  const handleScrollTo = (id: string, offset = 0) => {
    setScrollTo({ id, offset });
  };

  const handleAboutClick = () => {
    handleScrollTo("contact", -142);
  };

  const handleProjectsClick = () => {
    const refer = window.location.pathname;
    if (refer !== "/") {
      navigate("/");
      setTimeout(() => {
        handleScrollTo("activities", -50);
      }, 100);
    } else {
      handleScrollTo("activities", -50);
    }
  };
  const handleHighlightsClick = () => {
    const refer = window.location.pathname;
    if (refer !== "/") {
      navigate("/");
      setTimeout(() => {
        handleScrollTo("highlights", -50);
      }, 100);
    } else {
      handleScrollTo("highlights", -50);
    }
  };

  const handleImpactClick = () => {
    const refer = window.location.pathname;
    if (refer !== "/") {
      navigate("/");
      setTimeout(() => {
        handleScrollTo("gallery", -150);
      }, 100);
    } else {
      handleScrollTo("gallery", -150);
    }
  };
  const handleFaq = () => {
    const refer = window.location.pathname;
    if (refer !== "/") {
      navigate("/");
      setTimeout(() => {
        handleScrollTo("faq", -50);
      }, 100);
    } else {
      handleScrollTo("faq", -50);
    }
  };
  const handleLeaderboard = () => {
    const refer = window.location.pathname;
    if (refer !== "/") {
      navigate("/");
      setTimeout(() => {
        handleScrollTo("leaderboard", -100);
      }, 100);
    } else {
      handleScrollTo("leaderboard", -100);
    }
  };

  return (
    <nav className="bg-purple-800 text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* <PartyPopper className="h-8 w-8 mr-2" /> */}
            <span className="font-bold text-xl">Starlit 2024</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 ml-10">
            {/* {navItems.map((item, index) => ( */}
            <Link
              to="/"
              className="hover:bg-purple-700 px-3 py-2 rounded-md transition-colors"
            >
              Home
            </Link>
            <li className="listNav" onClick={handleProjectsClick}>
              <p className="hover:bg-purple-700 px-3 py-2 rounded-md transition-colors">
                Schedule
              </p>
            </li>
            <li className="listNav" onClick={handleHighlightsClick}>
              <p className="hover:bg-purple-700 px-3 py-2 rounded-md transition-colors">
                Highlights
              </p>
            </li>
            <li className="listNav" onClick={handleLeaderboard}>
              <p className="hover:bg-purple-700 px-3 py-2 rounded-md transition-colors">
                Leaderboard
              </p>
            </li>
            <li className="listNav" onClick={handleImpactClick}>
              <p className="hover:bg-purple-700 px-3 py-2 rounded-md transition-colors">
                Gallery
              </p>
            </li>
            <li className="listNav" onClick={handleFaq}>
              <p className="hover:bg-purple-700 px-3 py-2 rounded-md transition-colors">
                {" "}
                FAQ
              </p>
            </li>
            <li className="listNav" onClick={handleAboutClick}>
              <p className="hover:bg-purple-700 px-3 py-2 rounded-md transition-colors">
                {" "}
                Contact
              </p>
            </li>

            {/* ))} */}
          </div>

          {/* Hamburger button for mobile view */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-purple-800">
          <div
            className="flex flex-col justify-center items-center px-2 pt-2 pb-3 space-y-1 sm:px-3"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Link
              to="/"
              className="hover:bg-purple-700 px-3 py-2 rounded-md transition-colors"
            >
              Home
            </Link>
            <li className="listNav" onClick={handleProjectsClick}>
              <p className="hover:bg-purple-700 px-3 py-2 rounded-md transition-colors">
                Schedule
              </p>
            </li>
            <li className="listNav" onClick={handleHighlightsClick}>
              <p className="hover:bg-purple-700 px-3 py-2 rounded-md transition-colors">
                Highlights
              </p>
            </li>
            <li className="listNav" onClick={handleLeaderboard}>
              <p className="hover:bg-purple-700 px-3 py-2 rounded-md transition-colors">
                Leaderboard
              </p>
            </li>
            <li className="listNav" onClick={handleImpactClick}>
              <p className="hover:bg-purple-700 px-3 py-2 rounded-md transition-colors">
                Gallery
              </p>
            </li>
            <li className="listNav" onClick={handleFaq}>
              <p className="hover:bg-purple-700 px-3 py-2 rounded-md transition-colors">
                {" "}
                FAQ
              </p>
            </li>
            <li className="listNav" onClick={handleAboutClick}>
              <p className="hover:bg-purple-700 px-3 py-2 rounded-md transition-colors">
                {" "}
                Contact
              </p>
            </li>
          </div>
        </div>
      )}
    </nav>
  );
}
