"use client";

import React from "react";
import { motion } from "framer-motion";
import backgroundWhite from "../../public/images/background.jpg";
import Link from "next/link";
import Image from "next/image";
import {
  useCardProjects,
  containerVariants,
  cardVariants,
} from "../hooks/useCardProjects";

type IconProps = React.SVGProps<SVGSVGElement>;

const IconBase: React.FC<IconProps> = ({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  />
);

const FolderIcon: React.FC<IconProps> = (props) => (
  <IconBase {...props}>
    <rect x="3" y="7" width="18" height="12" rx="2" ry="2" />
    <path d="M3 9h7.5l1.5-2H15" />
  </IconBase>
);

const ExternalLinkIcon: React.FC<IconProps> = (props) => (
  <IconBase {...props}>
    <path d="M10 5H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-4" />
    <polyline points="12 4 20 4 20 12" />
    <line x1="20" y1="4" x2="11" y2="13" />
  </IconBase>
);

const ChevronLeftIcon: React.FC<IconProps> = (props) => (
  <IconBase {...props}>
    <polyline points="14.5 6 9 12 14.5 18" />
  </IconBase>
);

const ChevronRightIcon: React.FC<IconProps> = (props) => (
  <IconBase {...props}>
    <polyline points="9.5 6 15 12 9.5 18" />
  </IconBase>
);

const ClockIcon: React.FC<IconProps> = (props) => (
  <IconBase {...props}>
    <circle cx="12" cy="12" r="8.5" />
    <line x1="12" y1="7.5" x2="12" y2="12.5" />
    <line x1="12" y1="12.5" x2="15" y2="14.5" />
  </IconBase>
);

type ProjectStatus = "live" | "ongoing";

interface Project {
  id: number;
  title: string;
  description: string;
  image?: any;
  alt?: string;
  techStack: string[];
  href?: string;
  status: ProjectStatus;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const isOngoing = project.status === "ongoing";

  if (isOngoing) {
    return (
      <motion.article
        variants={cardVariants as any}
        custom={index}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        whileHover={{ scale: 1.02 }}
        className="flex flex-col items-center bg-white/80 backdrop-blur-md border border-blue-100 rounded-xl shadow-lg p-6 sm:p-8"
      >
        <div className="flex h-48 sm:h-56 w-full items-center justify-center rounded-lg border-2 border-dashed border-blue-900/60 bg-blue-50/40">
          <div className="flex flex-col items-center gap-2 text-center">
            <ClockIcon
              className="text-blue-900 w-8 h-8"
              aria-hidden="true"
            />
            <p className="text-blue-950 font-medium italic">
              More projects are currently in progress...
            </p>
          </div>
        </div>
        <div className="mt-6 text-center max-w-xl">
          <p className="text-blue-900 text-sm sm:text-base">
            {project.description}
          </p>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      variants={cardVariants as any}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ scale: 1.02 }}
      className="flex flex-col md:flex-row gap-6 sm:gap-8 bg-white/80 backdrop-blur-md border border-blue-100 rounded-xl shadow-lg p-6 sm:p-8"
    >
      {project.image && (
        <div className="md:w-1/2 shrink-0">
          <div className="overflow-hidden rounded-lg shadow-md">
            <Image
              src={project.image}
              alt={project.alt || project.title}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              width={400}
              height={250}
              priority={project.id === 1}
            />
          </div>
        </div>
      )}

      <div className="md:w-1/2 flex flex-col justify-center">
        <div className="flex items-center gap-2 text-blue-900 mb-2">
          <FolderIcon
            className="text-blue-900 w-5 h-5"
            aria-hidden="true"
          />
          <span className="uppercase tracking-wide text-xs font-semibold">
            Featured Project
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-semibold text-blue-950 mb-3">
          {project.title}
        </h3>

        <p className="text-blue-900 text-sm sm:text-base leading-relaxed">
          {project.description}
        </p>

        {project.techStack.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="inline-block bg-blue-100 text-blue-950 text-xs font-medium px-3 py-1 rounded-full shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {project.href && (
          <div className="mt-5">
            <Link
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-800 transition-colors duration-200"
            >
              <span>View Project</span>
              <ExternalLinkIcon
                className="w-4 h-4"
                aria-hidden="true"
              />
            </Link>
          </div>
        )}
      </div>
    </motion.article>
  );
};

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;

  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className="mt-10 flex items-center justify-center gap-4">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="inline-flex items-center gap-1 rounded-full border border-blue-900/70 px-3 py-1 text-sm font-medium text-blue-900 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-blue-900 hover:text-white transition-colors duration-200"
      >
        <ChevronLeftIcon
          className="w-4 h-4"
          aria-hidden="true"
        />
        <span>Prev</span>
      </button>

      <span className="text-xs sm:text-sm text-blue-950">
        Page <span className="font-semibold">{currentPage}</span> of{" "}
        <span className="font-semibold">{totalPages}</span>
      </span>

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="inline-flex items-center gap-1 rounded-full border border-blue-900/70 px-3 py-1 text-sm font-medium text-blue-900 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-blue-900 hover:text-white transition-colors duration-200"
      >
        <span>Next</span>
        <ChevronRightIcon
          className="w-4 h-4"
          aria-hidden="true"
        />
      </button>
    </div>
  );
};

export default function Projects() {
  const { currentPage, setCurrentPage, totalPages, currentProjects } =
    useCardProjects();

  return (
    <motion.section
      id="projects"
      style={{
        backgroundImage: `url(${backgroundWhite.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants as any}
    >
      <div className="absolute inset-0 bg-white/70" aria-hidden="true" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-0 py-20 sm:py-24">
        <div className="flex flex-col text-center mb-10 sm:mb-14">
          <h2 className="text-sm sm:text-base font-semibold text-blue-950 mb-1 tracking-wide uppercase">
            Projects
          </h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-blue-950">
            This is my latest work
          </h1>
          <span className="block h-1 w-40 sm:w-64 md:w-80 rounded-full bg-blue-950 mx-auto" />
        </div>

        <div className="flex flex-col gap-8 sm:gap-10">
          {currentProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project as Project}
              index={index}
            />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </motion.section>
  );
}