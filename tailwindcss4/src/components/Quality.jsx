import React from 'react';
import { motion } from 'framer-motion';

const Quality = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.4, 
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-white px-4 overflow-hidden">
      <motion.h1 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={titleVariants}
        className="text-3xl md:text-5xl lg:text-6xl font-bold text-center text-gray-800"
      >
        Quality Products
      </motion.h1>
      
      <motion.p 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={paragraphVariants}
        className="mt-8 text-lg md:text-xl text-gray-600 max-w-2xl text-center leading-relaxed"
      >
        We take pride in delivering exceptional quality products that exceed industry standards. Our commitment to excellence ensures that every item meets the highest benchmarks of durability, performance, and innovation.
      </motion.p>
    </div>
  );
};

export default Quality;