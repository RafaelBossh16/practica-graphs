"use client";

import { motion } from "framer-motion";
import Link from "next/link";
// import { useState } from "react";

export const Banner = () => {
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // const handleMouseMove = (e: React.MouseEvent) => {
    // const { clientX, clientY } = e;
    // setMousePosition({ x: clientX, y: clientY });
  // };
  return (
    <div
      // onMouseMove={handleMouseMove}
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-400 relative overflow-hidden"
    >
      <motion.img
        src="/react.png"
        alt="banner"
        className="w-96 absolute"
        initial={{ x: 0, y: 0 }}
        animate={
          {
            // x: mousePosition.x / 20 - window.innerWidth / 40,
            // y: mousePosition.y / 20 - window.innerHeight / 40
          }
        }
        transition={{ duration: 1 }}
      />

      <h1 className="text-white text-[90px] font-bold relative z-10">
        Bienvenido al JSS
      </h1>
      <Link
        className="mt-80 block bg-blue-500 text-white px-4 py-2 rounded border border-white relative z-10"
        href="/login"
      >
        Login
      </Link>
    </div>
  );
};