import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <motion.main
      className="relative z-10 mt-20 container mx-auto px-4 py-20 text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="mb-6 text-3xl md:text-5xl font-bold leading-tight text-yellow-300"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
      >
        Autofill Your Applications <br className="hidden md:block" /> with Ease!
      </motion.h1>
      <motion.p
        className="mb-8 text-lg md:text-xl text-gray-300"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
      >
        Streamline your job and scholarship application process with our
        intelligent autofill technology.
      </motion.p>
      <Link to={"/Signup"}>
        <motion.button
          className="bg-teal-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-teal-600 transition"
          variants={buttonVariants}
          whileHover="hover"
        >
          Get Started
        </motion.button>
      </Link>
    </motion.main>
  );
}
