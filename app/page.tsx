"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, PhoneOff, Heart, ChevronRight, ChevronLeft } from "lucide-react";
import confetti from "canvas-confetti";

const pages = [
  {
    image: "/p1.jpg",
    highlight: "Pondatiiiiiiiiiiiii",
    text: "Happy 1 Month Anniversary baby! ❤️ Un kooda irukka ovvoru nimishamum enakku oru gift madhiri."
  },
  {
    image: "/p2.jpg",
    highlight: "Azhagiiiiiiiiiiiiiii",
    text: "Ulagathulaye nee dhan di enakku romba azhagu. Looking at you heals my soul instantly. ✨"
  },
  {
    image: "/p3.jpg",
    highlight: "Chellameeeeee",
    text: "Unna konjum pothu kidaikura sandhosham vera ethulayum illa. You are my cutie pie forever."
  },
  {
    image: "/p4.jpg",
    highlight: "Ammu kuttyyyyyy",
    text: "Sometimes we fight, aana adhu kooda love dhan. Un mela irukka paasam eppovum korayadhu di."
  },
  {
    image: "/p5.jpg",
    highlight: "Kannadiiiiiiiiiiiiiii",
    text: "Ennoda reflecton nee. Nee siricha naanum sirippen, nee azhutha en manasu thudikkum."
  },
  {
    image: "/p6.jpg",
    highlight: "Vairameeeeeee",
    text: "You are more precious than diamond to me. Unna pathukradhu dhan en life oda ore aim. 💎"
  },
  {
    image: "/p7.jpg",
    highlight: "En uyireeeeee",
    text: "Nee illama en life-la oru meaning-e illa. You complete me in every single way, baby ma."
  },
  {
    image: "/p8.jpg",
    highlight: "En anbaeeeee",
    text: "Inimel vara pora ella years-um namaku happy-a irukum. I promise to treat you like a queen. 👑"
  },
  {
    image: "/p9.jpg",
    highlight: "Kaikorthu...",
    text: "Un viralodu viral korkum bodhu... adhu vera level feel. I never want to let go. 🤝✨"
  },
  {
    image: "/p10.jpg",
    highlight: "Andha Kangal...",
    text: "Un kannu rendum kaandha sakthi di... One look and I'm totally lost. Adhula irukkura bodhai vera level. 😉🔥"
  },
  {
    image: "/p11.jpg",
    highlight: "Andha Udhadu...",
    text: "Un lips... paathale kiss panna thonudhu. The taste I crave every single day. Waiting to feel them. 💋"
  }
];

export default function AnniversaryPage() {
  const [isAnswered, setIsAnswered] = useState(false);
  const [isDeclined, setIsDeclined] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  // Handle Decline (Close Tab / Blank Screen)
  const handleDecline = () => {
    setIsDeclined(true);
    setTimeout(() => {
      try {
        window.close(); // Tries to close tab
      } catch (e) {}
      window.location.href = "about:blank"; // Fallback to blank page
    }, 1500);
  };

  const handleAnswer = () => {
    setIsAnswered(true);
    confetti({ particleCount: 50, spread: 70, origin: { y: 0.6 } });
  };

  const nextPage = () => {
    if (currentPage < pages.length - 1) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  // Handle Call Button Click
  const makeCall = () => {
    window.location.href = "tel:9353781514";
  };

  if (isDeclined) {
    return (
      <main className="h-screen w-screen bg-black flex items-center justify-center">
        <h1 className="text-gray-500 text-xl font-light">Call Ended</h1>
      </main>
    );
  }

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
                <img src="/call.jpg" alt="My Love" className="w-32 h-32 rounded-full border-4 border-gray-800 z-10 relative object-cover" />
              </div>
              <h1 className="text-4xl font-light tracking-wide text-white">My Pondati ❤️</h1>
              <p className="text-gray-400 mt-3 text-lg">Mobile +91 63832 64697</p>
              <p className="text-gray-500 text-sm mt-1 animate-pulse">Incoming video call...</p>
            </div>
            
            <div className="flex w-full justify-around px-12 mb-16">
              {/* DECLINE BUTTON - CLOSES TAB */}
              <div className="flex flex-col items-center gap-3">
                <button 
                  onClick={handleDecline}
                  className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center shadow-lg shadow-red-500/30 active:scale-95 transition-transform"
                >
                  <PhoneOff fill="white" size={32} />
                </button>
                <span className="text-gray-400">Decline</span>
              </div>

              {/* ACCEPT BUTTON */}
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
          /* --- SCREEN 2: SLIDESHOW --- */
          <motion.div
            key="story-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full max-w-md bg-pink-50 flex flex-col items-center relative"
          >
            <div className="w-full h-1 bg-gray-200 mt-2 flex">
              {pages.map((_, index) => (
                <div key={index} className={`h-full flex-1 transition-all duration-300 ${index <= currentPage ? 'bg-pink-500' : 'bg-transparent'}`} />
              ))}
            </div>

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
                    <img 
                      src={pages[currentPage].image} 
                      className="w-72 h-72 object-cover rounded-xl" 
                      alt={`Page ${currentPage + 1}`} 
                    />
                  </div>
                  
                  <div className="text-center space-y-3 mt-4 px-2">
                    <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-600 filter drop-shadow-sm leading-tight break-words">
                       {pages[currentPage].highlight}
                    </h2>
                    <p className="text-gray-700 text-lg font-medium leading-relaxed font-dancing-script">
                      {pages[currentPage].text}
                    </p>
                    <p className="text-pink-400 text-xs font-semibold mt-4">
                      Page {currentPage + 1}/11
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="w-full p-6 flex justify-between items-center bg-white/60 backdrop-blur-md rounded-t-3xl absolute bottom-0">
              <button 
                onClick={prevPage} 
                disabled={currentPage === 0}
                className={`p-4 rounded-full ${currentPage === 0 ? 'text-gray-300' : 'bg-gray-100 text-pink-500 shadow-md active:scale-95'}`}
              >
                <ChevronLeft size={28} />
              </button>

              {currentPage === pages.length - 1 ? (
                /* CALL BUTTON ON LAST PAGE */
                <button 
                  onClick={makeCall}
                  className="px-8 py-4 bg-green-500 text-white rounded-full font-bold shadow-xl animate-pulse flex items-center gap-2 active:scale-95 transition-transform"
                >
                  <Phone fill="white" size={24} /> Call Me Now
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

