import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Quality from './components/Quality';
import backgroundImage from './assets/Maskgroup.png';
import cornerImage from './assets/sub.png';
import CityImage from './assets/city2.jpg';
import Slider from './components/Slider';

const App = () => {
  const [isCityBackground, setIsCityBackground] = useState(false);
  const [borderProgress, setBorderProgress] = useState(0);
  const cornerImageRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setBorderProgress((prev) => {
        const newProgress = prev + 1;
        return newProgress > 100 ? 0 : newProgress;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const handleCornerClick = () => {
    setIsCityBackground(prevState => !prevState);
    setBorderProgress(0);
  };

  const variants = {
    initial: { opacity: 0, scale: 1.2 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 }
  };

  return (
    <div className="w-full">
      <div className="min-h-screen relative overflow-hidden">
        <AnimatePresence exitBeforeEnter>
          {isCityBackground ? (
            <motion.div
              key="cityBackground"
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 1 }}
              className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${CityImage})` }}
            />
          ) : (
            <motion.div
              key="defaultBackground"
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 1 }}
              className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            />
          )}
        </AnimatePresence>

        <div className="bg-black/50 min-h-screen relative z-10">
          <Header />
          <AnimatePresence exitBeforeEnter>
            {isCityBackground ? (
              <motion.h1
                key="islandText"
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 1 }}
                className="absolute text-white font-bold
                           text-xl sm:text-2xl md:text-4xl lg:text-6xl
                           top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                Welcome to Island
              </motion.h1>
            ) : (
              <motion.h1
                key="indiaText"
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 1 }}
                className="absolute text-white font-bold
                           text-xl sm:text-2xl md:text-4xl lg:text-6xl
                           top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                Welcome to India
              </motion.h1>
            )}
          </AnimatePresence>
          <div 
            className="absolute cursor-pointer
                       bottom-8 left-8 w-24 h-24        
                       sm:bottom-12 sm:left-10 sm:w-28 sm:h-28
                       md:bottom-16 md:left-12 md:w-32 md:h-32
                       lg:bottom-16 lg:left-12 lg:w-32 lg:h-32
                       z-10"
          >
            <div 
              className="absolute inset-0 border-4 border-white"
              style={{
                clipPath: `polygon(0 0, ${borderProgress}% 0, ${borderProgress}% 100%, 0 100%)`
              }}
            />
            <img
              ref={cornerImageRef}
              src={cornerImage}
              alt="Corner decoration"
              onClick={handleCornerClick}
              className="w-full h-full object-contain relative z-10"
            />
          </div>
        </div>
      </div>
      <section className="relative bg-white">
        <Quality />
      </section>
      <section className="relative bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <Slider />
        </div>
      </section>
    </div>
  );
};

export default App;