import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import Slide1 from "../assets/Slide1.png";
import Slide2 from "../assets/Silde2.png";
import Slide3 from "../assets/Slide3.png";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const x = useMotionValue(0);
  const slides = [
    { image: Slide1, text: "Discover Innovative Design" },
    { image: Slide2, text: "Crafting Excellence" },
    { image: Slide3, text: "Transforming Possibilities" }
  ];

  const rotate = useTransform(x, [-200, 0, 200], [-30, 0, 30]);
  const opacity = useTransform(x, [-200, 0, 200], [0.5, 1, 0.5]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleDragEnd = (event, info) => {
    const { offset } = info;
    const threshold = 100;

    if (offset.x < -threshold) {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    } else if (offset.x > threshold) {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  return (
    <div className="relative w-full h-[600px] flex flex-col">
      <motion.div 
        className="relative w-full h-[500px] flex items-center justify-center"
        drag="x"
        dragElastic={0.7}
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={handleDragEnd}
        style={{ x, rotate, opacity }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            src={slides[currentSlide].image}
            alt="Slide"
            className="absolute w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1, x: "-100%" }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="w-full py-4 text-center bg-gray-100"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800">
            {slides[currentSlide].text}
          </h3>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Slider;