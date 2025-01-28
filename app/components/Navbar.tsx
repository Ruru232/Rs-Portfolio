'use client';
import Link from 'next/link';
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from 'react-icons/ai';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="fixed top-0 w-full h-24 shadow-sm bg-gradient-to-r from-customBlack to-gray-800 2xl:px-[25%] xl:px-44 md:px-20 px-0 z-10">
      <div className="flex justify-between items-center h-full w-full px-4">
        <div
          data-tip="RS Portfolio means Rolando Sanchez Portfolio"
          className="relative before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-36 before:top-24 lg:before:left-[120px] lg:before:top-16 md:before:left-32 md:before:top-16 xl:before:left-20 before:w-max before:max-w-xs md:before:max-w-lg before:-translate-x-1/2 before:-translate-y-full before:bg-customBlack before:text-white before:rounded-md before:opacity-0 before:transition-all after:absolute after:left-1/2 after:-bottom-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100"
        >
          <Link href="/">RS Portfolio</Link>
        </div>

        <div className="hidden md:flex lg:flex">
          <ul className="flex gap-4 xs:gap-5 md:gap-10">
            <li>
              <Link href="/Projects/">Projects & Tech Stacks</Link>
            </li>
            <li>
              <Link href="/About_Me">About Me</Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/rolando-sanchez-435125174/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineLinkedin size={30} />
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/Ruru232"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineGithub size={30} />
              </Link>
            </li>
          </ul>
        </div>
        <div
          onClick={handleNav}
          className="md:hidden flex cursor-pointer pl-24"
        >
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div
        className={
          menuOpen
            ? 'fixed left-0 top-0 w-[65%] md:hidden h-screen bg-customBlack p-10 ease-in duration-500 z-50'
            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500 z-50'
        }
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={25} />
          </div>
        </div>
        <div className="flex-col py-4">
          <ul className="flex-col py-4 gap-4 xs:gap-5 md:gap-10">
            <li
              onClick={() => setMenuOpen(false)}
              className="py-4 text-xs cursor-pointer"
            >
              <Link href="/Projects/">Projects & Tech Stacks</Link>
            </li>
            <li
              onClick={() => setMenuOpen(false)}
              className="py-4 cursor-pointer"
            >
              <Link href="/About_Me">About Me</Link>
            </li>
            <div className="flex flex-row justify-around pt-10 items-center">
              <Link
                href="https://www.linkedin.com/in/rolando-sanchez-435125174/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineLinkedin size={30} />
              </Link>
              <Link
                href="https://github.com/Ruru232"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineGithub size={30} />
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
