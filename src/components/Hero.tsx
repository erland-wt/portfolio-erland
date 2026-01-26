"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import fotoErland from "../../public/images/erland-widyatamaka.jpg";
import backgroundWhite from "../../public/images/background.jpg";

type HoverImage = {
  name: string;
  src: string;
};

const hoverImages: HoverImage[] = [
  { name: "React", src: "/icons/react.png" },
  { name: "HTML", src: "/icons/html.png" },
  { name: "CSS", src: "/icons/css.png" },
  { name: "JavaScript", src: "/icons/javascript.png" },
  { name: "Tailwind", src: "/icons/tailwind.png" },
];

interface HoverIconRingProps {
  images: HoverImage[];
  isHovered: boolean;
  stackRadius?: number;
  spreadRadius?: number;
  iconSize?: number;
}

const createIconVariants = (
  images: HoverImage[],
  stackRadius: number,
  spreadRadius: number
): Variants => ({
  stack: (index: number) => {
    const angle = (index / images.length) * Math.PI * 2;
    return {
      x: Math.cos(angle) * stackRadius,
      y: Math.sin(angle) * stackRadius,
      scale: 1,
      opacity: 1,
      zIndex: 0,
    };
  },
  spread: (index: number) => {
    const angle = (index / images.length) * Math.PI * 2;
    return {
      x: Math.cos(angle) * spreadRadius,
      y: Math.sin(angle) * spreadRadius,
      scale: 1,
      opacity: 1,
      zIndex: 0,
    };
  },
});

const HoverIconRing: React.FC<HoverIconRingProps> = ({
  images,
  isHovered,
  stackRadius = 150,
  spreadRadius = 200,
  iconSize = 56,
}) => {
  const iconVariants = createIconVariants(images, stackRadius, spreadRadius);

  return (
    <>
      {images.map((img, index) => (
        <motion.div
          key={img.name}
          className="pointer-events-none absolute"
          custom={index}
          variants={iconVariants}
          initial="stack"
          animate={isHovered ? "spread" : "stack"}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            mass: 0.6,
          }}
        >
          <Image
            src={img.src}
            alt={img.name}
            width={iconSize}
            height={iconSize}
            className="h-10 w-10 rounded-full border border-white shadow-md sm:h-12 sm:w-12"
          />
        </motion.div>
      ))}
    </>
  );
};

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <motion.section
      id="hero"
      className="flex min-h-screen flex-col-reverse items-center justify-center gap-10 px-6 py-30 md:py-20 text-blue-950 md:flex-row md:gap-20 lg:px-32"
      style={{ backgroundImage: `url(${backgroundWhite.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.4 }}

    >
      {/* Kiri: Text */}
      <div className="max-w-xl space-y-3 text-center md:text-left">
        <p className="text-sm text-blue-900 sm:text-base">Hello, I'm</p>
        <h1 className="text-4xl font-bold sm:text-5xl lg:text-7xl">
          Erland
          <br />
          Widyatamaka
        </h1>
        <p className="text-sm text-blue-900 sm:text-base">
          Web Developer | Programmer | Tech Enthusiast
        </p>
        <p className="text-xs text-blue-900 sm:text-sm">
          I craft elegant digital experiences with a focus on clean code,
          user-centered design, and scalable solutions.
        </p>

        {/* CTA */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3 md:justify-start">
          <Link
            href="#contact"
            className="rounded-full bg-blue-900 px-4 py-2 text-xs font-semibold text-white transition-colors duration-200 hover:bg-blue-800 sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Get In Touch
          </Link>
          <Link
            href="#projects"
            className="rounded-full border border-blue-900 px-4 py-2 text-xs font-semibold text-blue-900 transition-colors duration-200 hover:bg-blue-50 sm:px-5 sm:py-2.5 sm:text-sm"
          >
            View Projects
          </Link>
        </div>
      </div>

      {/* Kanan: Image + icons hover */}
      <div className="flex items-center justify-center">
        <div
          className="relative flex h-64 w-64 items-center justify-center sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-96 lg:w-96"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {hasMounted && (
            <HoverIconRing images={hoverImages} isHovered={isHovered} />
          )}

          <motion.div className="relative z-10">
            <Image
              src={fotoErland}
              alt="Erland Widyatamaka"
              width={300}
              height={300}
              priority
              className="h-40 w-40 rounded-full shadow-xl sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-70 lg:w-70"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}