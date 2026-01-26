"use client";

import { useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const socialMedia = [
  {
    name: "GitHub",
    href: "https://github.com/erland-wt",
    icon: "/icons/github.svg",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/erland-widyatamaka",
    icon: "/icons/linkedin.svg",
  },
  {
    name: "Email",
    href: "mailto:ewidyatamaka@gmail.com",
    icon: "/icons/mail.svg",
  },
];

const headerVariants: Variants = {
  hidden: { y: -40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: -10, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseMenu = () => setIsOpen(false);

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      className="fixed left-0 top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-md"
    >
      {/* Top bar (mobile-first) */}
      <nav className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <motion.div variants={itemVariants}>
          <Link href="/" onClick={handleCloseMenu}>
            <h1 className="text-base font-semibold text-blue-950 sm:text-lg">
              Erland Widyatamaka
            </h1>
          </Link>
        </motion.div>

        {/* Desktop nav (centered) */}
        <motion.ul
          variants={itemVariants}
          className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-4 text-xs font-light text-blue-950 sm:flex sm:text-sm md:gap-6 lg:gap-14"
        >
          {navLinks.map((link) => (
            <motion.li key={link.name} variants={itemVariants}>
              <Link
                href={link.href}
                className="group relative px-1 py-1"
              >
                <span className="whitespace-nowrap">{link.name}</span>
                <span className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 overflow-hidden">
                  <span className="block h-full w-0 bg-blue-950 transition-all duration-300 ease-out group-hover:w-full" />
                </span>
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        {/* Desktop social (right) */}
        <motion.ul
          variants={itemVariants}
          className="hidden items-center gap-3 sm:flex sm:gap-4"
        >
          {socialMedia.map((social) => (
            <motion.li key={social.name} variants={itemVariants}>
              <Link
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={24}
                  height={24}
                  className="h-5 w-5 object-contain transition-transform duration-200 ease-out hover:scale-110 sm:h-6 sm:w-6"
                />
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        {/* Hamburger (mobile only) */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-md p-2 text-blue-950 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-full bg-blue-950 transition-transform duration-200 ${
                isOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-full bg-blue-950 transition-opacity duration-200 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-3 h-0.5 w-full bg-blue-950 transition-transform duration-200 ${
                isOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="sm:hidden fixed inset-x-0 top-16 bg-white/95 backdrop-blur-md border-t border-blue-100 shadow-md"
          >
            <div className="mx-auto max-w-7xl px-4 py-3">
              <ul className="flex flex-col gap-2 text-sm font-light text-blue-950">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={handleCloseMenu}
                      className="block py-2"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-3 flex items-center gap-4">
                {socialMedia.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="p-1"
                  >
                    <Image
                      src={social.icon}
                      alt={social.name}
                      width={24}
                      height={24}
                      className="h-5 w-5 object-contain transition-transform duration-200 ease-out hover:scale-110"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}