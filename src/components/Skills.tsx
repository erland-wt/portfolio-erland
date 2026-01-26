"use client";

import { motion, easeOut } from "framer-motion";
import Image from "next/image";
import backgroundNavy from "../../public/images/backgroundBlue.jpg";
import {
  useCardSkills,
  sectionVariants,
  cardVariants,
  itemVariants,
} from "../hooks/useCardSkills";

type SkillItem = {
  name: string;
  level: number;
  icon: any;
};

interface SkillsColumnProps {
  title: string;
  skills: SkillItem[];
}

const SkillsColumn: React.FC<SkillsColumnProps> = ({ title, skills }) => (
  <motion.div
    variants={cardVariants as any}
    whileHover={{ y: -4 }}
    className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md p-5 sm:p-6 shadow-lg"
  >
    <h3 className="text-base sm:text-lg font-semibold text-white mb-4">
      {title}
    </h3>
    <div className="space-y-4">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          variants={itemVariants as any}
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 shrink-0">
            <Image
              src={skill.icon}
              alt={`${skill.name} Icon`}
              className="w-6 h-6"
            />
          </div>
          <div className="flex-1">
            <div className="flex justify-between text-[11px] sm:text-xs text-blue-50 mb-1">
              <span>{skill.name}</span>
              <span className="font-medium">{skill.level}%</span>
            </div>
            <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-linear-to-r from-cyan-300 to-blue-500"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: easeOut }}
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default function Skills() {
  const { leftColumnSkills, rightColumnSkills } = useCardSkills();

  return (
    <motion.section
      id="skills"
      className="py-16 sm:py-20 lg:py-24"
      style={{
        backgroundImage: `url(${backgroundNavy.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants as any}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-0">
        <header className="text-center mb-10 sm:mb-14">
          <p className="text-xs sm:text-sm font-semibold text-blue-100 tracking-wide uppercase">
            Skills
          </p>
          <h1 className="mt-1 text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            My skills in frontend development & design tools
          </h1>
          <span className="mt-4 block h-1 w-32 sm:w-44 md:w-56 rounded-full bg-white/80 mx-auto" />
        </header>

        <div className="grid gap-6 md:gap-8 md:grid-cols-2">
          <SkillsColumn title="Frontend & Markup" skills={leftColumnSkills} />
          <SkillsColumn title="Frameworks & Tools" skills={rightColumnSkills} />
        </div>
      </div>
    </motion.section>
  );
}