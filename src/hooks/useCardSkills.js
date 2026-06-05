import { easeOut } from "framer-motion";
import HTML from "../../public/icons/html.png";
import CSS from "../../public/icons/css.png";
import JavaScript from "../../public/icons/javascript.png";
import ReactIcon from "../../public/icons/react.png";
import NextJS from "../../public/icons/nextjs.svg";
import Tailwind from "../../public/icons/tailwind.png";
import Figma from "../../public/icons/figma.svg";
import Python from "../../public/icons/python.png";
import PostgreSQL from "../../public/icons/postgresql.png";

export const SKILLS = [
  { name: "HTML", level: 90, icon: HTML },
  { name: "CSS", level: 90, icon: CSS },
  { name: "JavaScript", level: 70, icon: JavaScript },
  { name: "Python", level: 70, icon: Python },
  { name: "React", level: 45, icon: ReactIcon },
  { name: "Next.js", level: 40, icon: NextJS },
  { name: "Tailwind CSS", level: 60, icon: Tailwind },
  { name: "Figma", level: 50, icon: Figma },
  { name: "PostgreSQL", level: 50, icon: PostgreSQL },
];

export const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      delay: 0.06 * index,
      ease: easeOut,
    },
  }),
};

export function useCardSkills() {
  const leftColumnSkills = SKILLS.slice(0, Math.ceil(SKILLS.length / 2));
  const rightColumnSkills = SKILLS.slice(Math.ceil(SKILLS.length / 2));

  return {
    leftColumnSkills,
    rightColumnSkills,
  };
}