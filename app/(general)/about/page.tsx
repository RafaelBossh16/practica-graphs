"use client";
import { AboutMe } from "@/app/components/AboutMe";
import { Hero } from "@/app/components/Hero";
import { Projects } from "@/app/components/Projects";

export default function About() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Projects />
    </>
  );  
}