"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, PhoneOff, Heart, ChevronRight, ChevronLeft } from "lucide-react";
import confetti from "canvas-confetti";

// --- YOUR NEW 11 PAGES WITH HIGHLIGHTED NAMES ---
const pages = [
  {
    image: "/p1.jpg",
    highlight: "Pondatiiiiiiiiiiiii",
    text: "I love you ❤️"
  },
  {
    image: "/p2.jpg",
    highlight: "Azhagiiiiiiiiiiiiiii",
    text: "I love you so much!"
  },
  {
    image: "/p3.jpg",
    highlight: "Chellameeeeee",
    text: "You are my everything."
  },
  {
    image: "/p4.jpg",
    highlight: "Ammu kuttyyyyyy",
    text: "My cutest sweetie."
  },
  {
    image: "/p5.jpg",
    highlight: "Kannadiiiiiiiiiiiiiii",
    text: "Looking at you is paradise."
  },
  {
    image: "/p6.jpg",
    highlight: "Vairameeeeeee",
    text: "My precious diamond."
  },
  {
    image: "/p7.jpg",
    highlight: "En uyireeeeee",
    text: "You are my life."
  },
  {
    image: "/p8.jpg",
    highlight: "En anbaeeeee",
    text: "My love forever."
  },
  {
    image: "/p9.jpg",
    highlight: "Anbu manaiviyeee",
    text: "My dear wife."
  },
  {
    image: "/p10.jpg",
    highlight: "En thozhiyeeeeee",
    text: "My best friend always."
  },
  {
    image: "/p11.jpg",
    highlight: "En kanaveeeeee",
    text: "My dream come true. Happy 1 Month! Click below! 👇"
  }
];

export default function AnniversaryPage() {
  const [isAnswered, setIsAnswered] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  // Call screen setup
  const handleAnswer = () => {
    setIsAnswered(true);
    confetti({ particleCount: 50, spread: 70, origin: { y: 0.6 } });
  };

  // Next Slide
  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Previous Slide
  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Final Confetti Blast
  const triggerFinalConfetti = () => {
    const duration = 3000;
    const end = Date.now() + duration;
    (function frame() {
      confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#ff0000', '#ff69b4'] });
      confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#ff0000', '#ff69b4'] });
      if (Date.now() < end) requestAnimationFrame(frame);
    }());
  };

  return (
    <main className="h-screen w-screen bg-black overflow-hidden flex flex-col items-center justify-center font-sans text-white">
      <AnimatePresence mode="wait">
        {!isAnswered ? (
          /* --- SCREEN 1: INCOMING CALL --- */
          <motion.div
            key="call-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.5, filter: "blur(10px)" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-between h-full py-16 w-full max-w-md bg-gradient-to-b from-gray-900 to-black"
          >
            <div className="flex flex-col items-center mt-12">
              <div className="relative mb-6">
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute inset-0 bg-pink-500 rounded-full blur-xl"
                ></motion.div>
                {/* USE PAGE 1 PHOTO AS PROFILE PIC - Ensure p1.jpg exists */}
                <img src="/p1.jpg" alt="My Love" className="w-32 h-32 rounded-full border-4 border-gray-800 z-10 relative object-cover" />
              </div>
              <h1 className="text-4xl font-light tracking-wide text-white">My Pondati ❤️</h1>
              <p className="text-gray-400 mt-3 text-lg">Mobile +91 63832 64697</p>
              <p className="text-gray-500 text-sm mt-1 animate-pulse">Incoming video call...</p>
            </div>
            <div className="flex w-full justify-around px-12 mb-16">
              <div className="flex flex-col items-center gap-3">
                <button className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center shadow-lg shadow-red-500/30">
                  <PhoneOff fill="white" size={32} />
                </button>
                <span className="text-gray-400">Decline</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleAnswer}
                  className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 animate-bounce"
                >
                  <Phone fill="white" size={32} />
                </motion.button>
                <span className="text-gray-400">Accept</span>
              </div>
            </div>
          </motion.div>
        ) : (
          /* --- SCREEN 2: 11 PAGES SLIDESHOW --- */
          <motion.div
            key="story-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full max-w-md bg-pink-50 flex flex-col items-center relative"
          >
            {/* Progress Bar */}
            <div className="w-full h-1 bg-gray-200 mt-2 flex">
              {pages.map((_, index) => (
                <div 
                  key={index} 
                  className={`h-full flex-1 transition-all duration-300 ${index <= currentPage ? 'bg-pink-500' : 'bg-transparent'}`}
                />
              ))}
            </div>

            {/* Slide Content */}
            <div className="flex-1 flex flex-col items-center justify-center p-6 w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPage}
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center gap-6"
                >
                  <div className="relative bg-white p-2 rounded-2xl shadow-xl rotate-[-2deg] mt-4">
                    {/* Ensure photos p1.jpg to p11.jpg are in public folder */}
                    <img 
                      src={pages[currentPage].image} 
                      className="w-72 h-72 object-cover rounded-xl" 
                      alt={`Page ${currentPage + 1}`} 
                    />
                  </div>
                  
                  <div className="text-center space-y-3 mt-4 px-2">
                    {/* BIG HIGHLIGHTED NAME */}
                    <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-600 filter drop-shadow-sm leading-tight break-words">
                       {pages[currentPage].highlight}
                    </h2>
                    {/* I Love You Text */}
                    <p className="text-gray-700 text-2xl font-dancing-script">
                      {pages[currentPage].text}
                    </p>
                    <p className="text-pink-400 text-sm font-semibold">
                      Page {currentPage + 1}/11
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="w-full p-6 flex justify-between items-center bg-white/60 backdrop-blur-md rounded-t-3xl absolute bottom-0">
              <button 
                onClick={prevPage} 
                disabled={currentPage === 0}
                className={`p-4 rounded-full ${currentPage === 0 ? 'text-gray-300' : 'bg-gray-100 text-pink-500 shadow-md active:scale-95'}`}
              >
                <ChevronLeft size={28} />
              </button>

              {currentPage === pages.length - 1 ? (
                <button 
                  onClick={triggerFinalConfetti}
                  className="px-8 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full font-bold shadow-xl animate-pulse flex items-center gap-2 active:scale-95 transition-transform"
                >
                  <Heart fill="white" size={24} /> Love You Forever
                </button>
              ) : (
                <button 
                  onClick={nextPage}
                  className="p-4 bg-pink-500 text-white rounded-full shadow-lg shadow-pink-500/30 hover:bg-pink-600 active:scale-95"
                >
                  <ChevronRight size={28} />
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

