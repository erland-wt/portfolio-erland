import { useMemo, useState } from "react";
import nusantaraXray from "../../public/images/mockup-desktop-nusantaraXray.png";
import canvasandcode from "../../public/images/mockup-desktop-canvasandcode.png";
import sentimentAnalysis from "../../public/images/mockup-desktop-sentiment-analysis-platform.png";

export const PROJECTS = [
  {
    id: 1,
    title: "Sentiment Analysis Platform",
    description:
      "A web application that analyzes user reviews and feedback to determine the overall sentiment (positive, negative, neutral) using natural language processing techniques.",
    image: sentimentAnalysis,
    alt: "Sentiment Analysis Platform Mockup",
    techStack: ["React", "Tailwind CSS", "Python", "FastAPI", "Typescript", "Scikit-learn"],
    href: "https://sentiment-analysis-platform.vercel.app",
    status: "live",
  },
  {
    id: 2,
    title: "Nusantara Xray",
    description:
      "Company profile website for Nusantara Xray, a leading provider of advanced X-ray inspection solutions in Indonesia.",
    image: nusantaraXray,
    alt: "Nusantara Xray Project Mockup",
    techStack: ["React", "Tailwind CSS"],
    href: "https://nusantaraxray.com",
    status: "live",
  },
  {
    id: 3,
    title: "Canvas and Code",
    description:
      "A portfolio website template designed for developers and designers to showcase their work with a clean and modern aesthetic.",
    image: canvasandcode,
    alt: "Canvas and Code Project Mockup",
    techStack: ["Next.js", "Tailwind CSS"],
    href: "https://canvas-code-beta.vercel.app/",
    status: "live",
  },
  {
    id: 4,
    title: "More projects coming soon",
    description:
      "Currently working on new projects to expand my portfolio. Stay tuned for upcoming updates and releases.",
    techStack: [],
    status: "ongoing",
  },
];

export const PROJECTS_PER_PAGE = 2;

export const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.1 * index,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export function useCardProjects() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = useMemo(
    () => Math.ceil(PROJECTS.length / PROJECTS_PER_PAGE),
    []
  );

  const currentProjects = useMemo(() => {
    const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
    return PROJECTS.slice(startIndex, startIndex + PROJECTS_PER_PAGE);
  }, [currentPage]);

  return {
    currentPage,
    setCurrentPage,
    totalPages,
    currentProjects,
  };
}