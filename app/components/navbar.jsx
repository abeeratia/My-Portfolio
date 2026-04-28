"use client";

import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5 relative">
        <div className="flex items-center flex-shrink-0">
          <Link href="/" className=" text-[#16f2b3] text-3xl font-bold">
            Abeer Atia
          </Link>
        </div>

        <div className="block md:hidden z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-[#16f2b3] focus:outline-none flex items-center justify-center p-2"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        <ul
          className={`${
            isOpen ? "opacity-100 max-h-screen pb-4" : "opacity-0 max-h-0 overflow-hidden"
          } absolute top-full left-0 z-50 flex flex-col items-start w-full bg-[#0d1224] text-sm md:opacity-100 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:bg-transparent md:static md:pb-0 transition-all duration-300 ease-in-out md:overflow-visible`}
          id="navbar-default"
        >
          <li className="w-full md:w-auto">
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#about"
              onClick={() => setIsOpen(false)}
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-[#16f2b3]">
                ABOUT
              </div>
            </Link>
          </li>
          <li className="w-full md:w-auto">
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#experience"
              onClick={() => setIsOpen(false)}
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-[#16f2b3]">
                EXPERIENCE
              </div>
            </Link>
          </li>
          <li className="w-full md:w-auto">
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#skills"
              onClick={() => setIsOpen(false)}
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-[#16f2b3]">
                SKILLS
              </div>
            </Link>
          </li>
          <li className="w-full md:w-auto">
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#education"
              onClick={() => setIsOpen(false)}
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-[#16f2b3]">
                EDUCATION
              </div>
            </Link>
          </li>
          <li className="w-full md:w-auto">
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#projects"
              onClick={() => setIsOpen(false)}
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-[#16f2b3]">
                PROJECTS
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
