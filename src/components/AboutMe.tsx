"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import erlandBEM from "../../public/images/erland-bem.jpg";
import backgroundNavy from "../../public/images/backgroundBlue.jpg";

const textVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const imageVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export default function AboutMe() {
  return (
    <motion.section
      id="about"
      aria-labelledby="about-heading"
      className="bg-blue-950 text-white py-16 sm:py-20 lg:py-24"
      style={{ backgroundImage: `url(${backgroundNavy.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: 0.08 }}
    >
      <div className="mx-auto flex max-w-5xl flex-col-reverse gap-10 px-6 sm:px-8 lg:px-12 md:flex-row md:items-center">
        {/* Kiri: Heading + intro + icon pemanis */}
        <motion.header
          className="md:w-1/2 space-y-4"
          variants={textVariants}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-blue-300">
            About Me
          </p>
          <h2
            id="about-heading"
            className="text-2xl font-semibold sm:text-3xl lg:text-4xl"
          >
            Building fast, clean, and user‑focused web experiences.
          </h2>
          <span className="block h-1 w-20 rounded-full bg-blue-400/80" />

          <p className="text-sm leading-relaxed text-blue-100 sm:text-base">
            I&apos;m Erland Widyatamaka, an Informatics Engineering student with
            a strong interest in front-end development. I focus on writing clean
            code, crafting responsive layouts, and delivering smooth user
            experiences across all devices.
          </p>
          <p className="text-sm leading-relaxed text-blue-100 sm:text-base">
            I work mainly with HTML, CSS, JavaScript, React, Next.js, and
            Tailwind CSS, always aiming for performance, accessibility, and SEO
            best practices.
          </p>

          {/* Icon highlight row */}
          <div className="mt-4 flex flex-wrap gap-3 text-xs sm:text-sm">
            {/* Icon 1 */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-700/70 bg-blue-900/60 px-3 py-1.5">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/20 text-blue-200">
                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5"
                  aria-hidden="true"
                >
                  <path
                    d="M9 5L4 12l5 7M15 5l5 7-5 7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>Clean Code</span>
            </div>

            {/* Icon 2 */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-700/70 bg-blue-900/60 px-3 py-1.5">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-200">
                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="6"
                    width="10"
                    height="8"
                    rx="1.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <rect
                    x="15"
                    y="5"
                    width="6"
                    height="12"
                    rx="1.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                </svg>
              </span>
              <span>Mobile‑first UI</span>
            </div>

            {/* Icon 3 */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-700/70 bg-blue-900/60 px-3 py-1.5">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/20 text-amber-200">
                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5"
                  aria-hidden="true"
                >
                  <path
                    d="M5 19l2-5 4-4 4-1 1 4-4 4-5 2 2-5 3-3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>Fast & SEO‑friendly</span>
            </div>
          </div>
        </motion.header>

        {/* Kanan: Gambar */}
        <motion.div
          className="md:w-1/2 flex justify-center md:justify-end"
          variants={imageVariants}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="relative w-52 h-64 sm:w-60 sm:h-72 md:w-72 md:h-88 lg:w-80 lg:h-88">
            {/* Background glow */}
            <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-linear-to-tr from-blue-500/30 via-blue-400/10 to-transparent blur-2xl" />
            <Image
              src={erlandBEM}
              alt="Portrait of Erland Widyatamaka"
              fill
              priority
              sizes="(min-width: 1024px) 20rem, (min-width: 768px) 18rem, 14rem"
              className="rounded-3xl object-cover shadow-2xl shadow-blue-900/70"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}