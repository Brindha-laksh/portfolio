import { Bars3Icon } from "@heroicons/react/24/solid"; // Adjusted icon path
import { useState } from "react";

export default function Header() {
  const [toggleMenu, settoggleMenu] = useState(false);

  return (
    <header className="flex justify-between items-center px-4 py-3 bg-slate-800 shadow-md">
      <a
        className="font-bold text-2xl text-white hover:text-indigo-900 transition duration-300"
        href="#"
      >
        Brindha L
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex space-x-6 text-white text-lg">
          <li>
            <a
              href="/"
              className="hover:text-indigo-300 transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-indigo-300 transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-indigo-300 transition duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#resume"
              className="hover:text-indigo-300 transition duration-300"
            >
              Resume
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-indigo-300 transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => settoggleMenu(!toggleMenu)}
        className="block md:hidden focus:outline-none"
      >
        <Bars3Icon className="text-white h-8 w-8" />
      </button>

      {/* Mobile Navigation */}
      {toggleMenu && (
        <nav className="absolute top-16 left-0 w-full bg-slate-900 shadow-md md:hidden z-50">
          <ul
            onClick={() => settoggleMenu(false)}
            className="flex flex-col items-center text-white text-lg space-y-4 py-4"
          >
            <li>
              <a
                href="/"
                className="hover:text-indigo-300 transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-indigo-300 transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-indigo-300 transition duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#resume"
                className="hover:text-indigo-300 transition duration-300"
              >
                Resume
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-indigo-300 transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
