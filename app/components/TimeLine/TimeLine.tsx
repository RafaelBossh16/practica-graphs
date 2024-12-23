"use client";
import { motion } from "framer-motion";

export const TimeLine = () => {
  const steps = [
    {
      title: "Step 1",
      description: "This is the first step"
    },
    {
      title: "Step 2",
      description: "This is the second step"
    },
    {
      title: "Step 3",
      description: "This is the third step"
    },
    {
      title: "Step 4",
      description: "This is the fourth step"
    }
  ];
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };
  return (
    <section className="bg-gradient-to-r from-gray-900 to-black text-white py-16 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Nuestra linea de tiempo
        </h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
          className="relative"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={item}
              className="border-l-2 border-gray-700 pl-4 py-4"
            >
              {index < steps.length - 1 && (
                <div
                  className={`hidden sm:block absolute w-1 bg-white opacity-50`}
                  style={{
                    left: "50%",
                    top: "50px",
                    bottom: "-50px"
                  }}
                />
              )}

              <div
                className={`ml-4 md:ml-8 ${
                  index % 2 === 0 ? "md:text-right" : "md:text-left"
                }`}
              >
                <h3 className="text-2xl font-bold">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};