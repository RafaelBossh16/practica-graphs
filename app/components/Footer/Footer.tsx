"use client";
import { motion } from "framer-motion";
const links = ["Inicio", "Servicios", "Acerca de", "Contacto"];
const socialIcons = [
  { name: "Twitter", url: "#", icon: "🐦" },
  { name: "LinkedIn", url: "#", icon: "💼" },
  { name: "GitHub", url: "#", icon: "🐱" }
];
export const Footer = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };
  return (
    <footer className="relative bg-gradient-to-br from-blue-600 via-purple-700 to-pink-600 text-white py-16 px-8">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-30 blur-3xl -z-10"></div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeIn}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
      >
        <div>
          <h4>Accesos rapidos</h4>
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  className="transition-all"
                  href={`#`}
                >
                  {link}
                </motion.a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Informacion de contacto</h4>
          <p>Correo</p>
          <p>tel</p>
        </div>
        <div>
          <h4>Redes sociales</h4>
          <div className="flex space-x-4">
            {socialIcons.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="text-2xl"
                whileTap={{ scale: 0.9 }}
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="mt-8 text-center">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 1 }}
          className="text-sm opacity-75"
        >
          © 2024 Mi Empresa. Todos los derechos reservados.
        </motion.p>
      </div>
    </footer>
  );
};