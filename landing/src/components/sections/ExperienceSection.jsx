import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionIntro from "../SectionIntro";
import SectionReveal from "../SectionReveal";

const pillars = [
  {
    title: "Not another player window",
    copy: "Paraline stays in the periphery and turns the whole desktop into the stage.",
  },
  {
    title: "Soft by default",
    copy: "Glow, pressure, drift, and light that stays atmospheric even during long sessions.",
  },
  {
    title: "Reactive without shouting",
    copy: "Designed for focus setups, music nights, and ambient desktops that still feel alive.",
  },
];

export default function ExperienceSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const stageY = useTransform(scrollYProgress, [0, 1], [80, -50]);
  const stageRotate = useTransform(scrollYProgress, [0, 1], [-4, 4]);

  return (
  );
}
