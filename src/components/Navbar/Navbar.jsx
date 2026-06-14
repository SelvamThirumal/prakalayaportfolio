// src/components/Navbar/Navbar.jsx

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      bg-slate-950/70
      backdrop-blur-xl
      border-b
      border-slate-800
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}

        <a
          href="#home"
          className="text-3xl font-black"
        >
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Prakalya P
          </span>
        </a>

        {/* Desktop Menu */}

        <nav className="hidden md:flex items-center gap-8">

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="
              relative
              text-slate-300
              hover:text-blue-500
              duration-300
              group
              "
            >
              {link.name}

              <span
                className="
                absolute
                left-0
                -bottom-1
                w-0
                h-[2px]
                bg-blue-500
                group-hover:w-full
                duration-300
                "
              />
            </a>
          ))}

        </nav>

        {/* Contact Button */}

        <a
          href="#contact"
          className="
          hidden
          md:block
          px-5
          py-3
          rounded-xl
          bg-gradient-to-r
          from-blue-600
          to-purple-600
          hover:scale-105
          duration-300
          "
        >
          Contact Me
        </a>

        {/* Mobile Button */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}

      <AnimatePresence>

        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            className="
            md:hidden
            bg-slate-900/95
            backdrop-blur-xl
            border-t
            border-slate-800
            "
          >
            <div className="flex flex-col p-6 gap-5">

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="
                  text-slate-300
                  hover:text-blue-500
                  duration-300
                  "
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="
                mt-2
                text-center
                py-3
                rounded-xl
                bg-gradient-to-r
                from-blue-600
                to-purple-600
                "
              >
                Contact Me
              </a>

            </div>
          </motion.div>
        )}

      </AnimatePresence>

    </header>
  );
};

export default Navbar;