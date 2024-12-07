// import React, { useEffect, useState } from "react";
// import { Menu, X } from "lucide-react";
// import { Link, useLocation, useNavigate } from "react-router-dom";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrollTo, setScrollTo] = useState<{
//     id: string;
//     offset: number;
//   } | null>(null);
//   const navigate = useNavigate();
//   const location = useLocation();
//   console.log(location)
//   const [isScrolled, setIsScrolled] = useState(false);
//   // const location = useLocation();

//   useEffect(() => {
//     if (scrollTo) {
//       const section = document.getElementById(scrollTo.id);
//       if (section) {
//         const yOffset = scrollTo.offset || 0;
//         const y =
//           section.getBoundingClientRect().top + window.pageYOffset + yOffset;
//         window.scrollTo({ top: y, behavior: "smooth" });
//       }
//       setScrollTo(null);
//     }
//   }, [scrollTo]);
//   useEffect(() => {
//     const handleScroll = () => {
//       const heroHeight = document.getElementById("hero")?.offsetHeight || 0;
//       setIsScrolled(window.scrollY > heroHeight);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);
//   const handleScrollTo = (id: string, offset = 0) => {
//     setScrollTo({ id, offset });
//   };

  // const handleAboutClick = () => {
  //   handleScrollTo("contact", -142);
  // };

  // const handleProjectsClick = () => {
  //   const refer = window.location.pathname;
  //   if (refer !== "/") {
  //     navigate("/");
  //     setTimeout(() => {
  //       handleScrollTo("activities", -50);
  //     }, 100);
  //   } else {
  //     handleScrollTo("activities", -50);
  //   }
  // };
  // const handleHighlightsClick = () => {
  //   const refer = window.location.pathname;
  //   if (refer !== "/") {
  //     navigate("/");
  //     setTimeout(() => {
  //       handleScrollTo("highlights", -50);
  //     }, 100);
  //   } else {
  //     handleScrollTo("highlights", -50);
  //   }
  // };

  // const handleImpactClick = () => {
  //   const refer = window.location.pathname;
  //   if (refer !== "/") {
  //     navigate("/");
  //     setTimeout(() => {
  //       handleScrollTo("gallery", -150);
  //     }, 100);
  //   } else {
  //     handleScrollTo("gallery", -150);
  //   }
  // };
  // const handleFaq = () => {
  //   const refer = window.location.pathname;
  //   if (refer !== "/") {
  //     navigate("/");
  //     setTimeout(() => {
  //       handleScrollTo("faq", -50);
  //     }, 100);
  //   } else {
  //     handleScrollTo("faq", -50);
  //   }
  // };
  // const handleLeaderboard = () => {
  //   const refer = window.location.pathname;
  //   if (refer !== "/") {
  //     navigate("/");
  //     setTimeout(() => {
  //       handleScrollTo("leaderboard", -100);
  //     }, 100);
  //   } else {
  //     handleScrollTo("leaderboard", -100);
  //   }
  // };
//   const width = window.innerWidth

//   return (
    
//     <nav
//       className={`fixed w-full z-50 transition-colors duration-300 text-white ${
//         location.pathname !== "/Home" || isScrolled ? "bg-purple-800" : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-around h-16" style={{height:"70px"}}>
//             {/* <PartyPopper className="h-8 w-8 mr-2" /> */}
//             { location.pathname !== "/Home" || isScrolled ?
//           <div className="flex items-center">

//             <Link to="/Home">
//             <img  src="https://i.ibb.co/HV8DpnR/final-pic-1.png" alt="final-pic-1" style={{ width: "68px", height: "74px" }}/>
//             </Link></div> : width<768? <div className="flex items-center">

// <Link to="/Home">
// <img  src="https://i.ibb.co/HV8DpnR/final-pic-1.png" alt="final-pic-1" style={{ width: "68px", height: "74px" }}/>
// </Link></div> :null}
//             {/* <span className="font-bold text-xl">Starlit 24</span> */}
          

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-6 ml-10">
//             {/* {navItems.map((item, index) => ( */}
//             <Link
//               to="/Home"
//               className="hover:bg-purple-700 px-3 py-2 rounded-md transition-colors"
//             >
//               Home
//             </Link>
//             <li className="listNav" onClick={handleProjectsClick}>
//               <p className="hover:bg-purple-700 px-3 py-2 rounded-md transition-colors">
//                 Schedule
//               </p>
//             </li>
//             <li className="listNav" onClick={handleHighlightsClick}>
//               <p className="hover:bg-purple-700 px-3 py-2 rounded-md transition-colors">
//                 Highlights
//               </p>
//             </li>
//             <li className="listNav" onClick={handleLeaderboard}>
//               <p className="hover:bg-purple-700 px-3 py-2 rounded-md transition-colors">
//                 Leaderboard
//               </p>
//             </li>
//             <li className="listNav" onClick={handleImpactClick}>
//               <p className="hover:bg-purple-700 px-3 py-2 rounded-md transition-colors">
//                 Gallery
//               </p>
//             </li>
//             <li className="listNav" onClick={handleFaq}>
//               <p className="hover:bg-purple-700 px-3 py-2 rounded-md transition-colors">
//                 {" "}
//                 FAQ
//               </p>
//             </li>
//             <li className="listNav" onClick={handleAboutClick}>
//               <p className="hover:bg-purple-700 px-3 py-2 rounded-md transition-colors">
//                 {" "}
//                 Contact
//               </p>
//             </li>

//             {/* ))} */}
//           </div>

//           {/* Hamburger button for mobile view */}
//           <div className="md:hidden">
//             <button onClick={() => setIsOpen(!isOpen)} className="p-2">
//               {isOpen ? (
//                 <X className="h-6 w-6" />
//               ) : (
//                 <Menu className="h-6 w-6" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-purple-800">
//           <div
//             className="flex flex-col justify-center items-center px-2 pt-2 pb-3 space-y-1 sm:px-3"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             <Link
//               to="/"
//               className="hover:bg-purple-700 px-3 py-2 rounded-md transition-colors"
//             >
//               Home
//             </Link>
//             <li className="listNav" onClick={handleProjectsClick}>
//               <p className="hover:bg-purple-700 px-3 py-2 rounded-md transition-colors">
//                 Schedule
//               </p>
//             </li>
//             <li className="listNav" onClick={handleHighlightsClick}>
//               <p className="hover:bg-purple-700 px-3 py-2 rounded-md transition-colors">
//                 Highlights
//               </p>
//             </li>
//             <li className="listNav" onClick={handleLeaderboard}>
//               <p className="hover:bg-purple-700 px-3 py-2 rounded-md transition-colors">
//                 Leaderboard
//               </p>
//             </li>
//             <li className="listNav" onClick={handleImpactClick}>
//               <p className="hover:bg-purple-700 px-3 py-2 rounded-md transition-colors">
//                 Gallery
//               </p>
//             </li>
//             <li className="listNav" onClick={handleFaq}>
//               <p className="hover:bg-purple-700 px-3 py-2 rounded-md transition-colors">
//                 {" "}
//                 FAQ
//               </p>
//             </li>
//             <li className="listNav" onClick={handleAboutClick}>
//               <p className="hover:bg-purple-700 px-3 py-2 rounded-md transition-colors">
//                 {" "}
//                 Contact
//               </p>
//             </li>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollTo, setScrollTo] = useState<{ id: string; offset: number } | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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

  // Handle navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero")?.offsetHeight || 0;
      setIsScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollTo = (id: string, offset = 0) => {
    const currentPath = window.location.pathname;
    if (currentPath !== "/") {
      navigate("/");
      setTimeout(() => setScrollTo({ id, offset }), 100);
    } else {
      setScrollTo({ id, offset });
    }
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
  
  const handleAboutClick = () => {
    handleScrollTo("contact", -142);
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
  // Define scroll handlers
  const menuItems = [
    { label: "Schedule", id: "activities", offset: -50 },
    { label: "Highlights", id: "highlights", offset: -50 },
    { label: "Leaderboard", id: "leaderboard", offset: -100 },
    { label: "Gallery", id: "gallery", offset: -150 },
    { label: "FAQ", id: "faq", offset: -50 },
    { label: "Contact", id: "contact", offset: -142 },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-colors duration-300 text-white ${
        location.pathname !== "/Home" || isScrolled ? "bg-purple-800" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-${window.innerWidth < 768 ?"between":"around"} h-16`}
 style={{ height: "70px" }}>
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
            <Link to="/Home" className="hover:bg-purple-700 px-3 py-2 rounded-md transition-colors">
              Home
            </Link>
            {menuItems.map(({ label, id, offset }) => (
              <button
                key={id}
                className="hover:bg-purple-700 px-3 py-2 rounded-md transition-colors"
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
            <Link
              to="/Home"
              className="hover:bg-purple-700 px-3 py-2 rounded-md transition-colors"
            >
              Home
            </Link>
            <hr style={{backgroundColor:"#ddb7fc", width:"100%"}}/>
            <li className="listNav" onClick={handleProjectsClick}>
              <p className="hover:bg-purple-700 px-3 py-2 rounded-md transition-colors">
                Schedule
              </p>
            </li>
            <hr style={{backgroundColor:"#ddb7fc", width:"100%"}}/>
            <li className="listNav" onClick={handleHighlightsClick}>
              <p className="hover:bg-purple-700 px-3 py-2 rounded-md transition-colors">
                Highlights
              </p>
            </li>
            <hr style={{backgroundColor:"#ddb7fc", width:"100%"}}/>
            <li className="listNav" onClick={handleLeaderboard}>
              <p className="hover:bg-purple-700 px-3 py-2 rounded-md transition-colors">
                Leaderboard
              </p>
            </li>
            <hr style={{backgroundColor:"#ddb7fc", width:"100%"}}/>
            <li className="listNav" onClick={handleImpactClick}>
              <p className="hover:bg-purple-700 px-3 py-2 rounded-md transition-colors">
                Gallery
              </p>
            </li>
            <hr style={{backgroundColor:"#ddb7fc", width:"100%"}}/>
            <li className="listNav" onClick={handleFaq}>
              <p className="hover:bg-purple-700 px-3 py-2 rounded-md transition-colors">
                {" "}
                FAQ
              </p>
            </li>
            <hr style={{backgroundColor:"#ddb7fc", width:"100%"}}/>
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
