"use client";
import { motion, useScroll, useTransform } from "framer-motion"
export const ScrollTitle = () => {
  const { scrollYProgress } = useScroll();

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const translateX = useTransform(scrollYProgress, [0, 0.5, 1], [-100, 0, 200]);
  return (
    <div className="h-screen flex items-center justify-center space-y-8">
      <motion.h1 style={{ opacity, x: translateX }} className="text-4xl font-bold">
        Scroll Title for LandingPage
      </motion.h1>
    </div>
  ); 
};

