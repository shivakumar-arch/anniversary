// version 2.0 - cache bust
"use client";

import { useState } from "react";
import Image from "next/image"; // IMPORTING THE FAST IMAGE TOOL
import { motion, AnimatePresence } from "framer-motion";
import { Phone, PhoneOff, Heart, ChevronRight, ChevronLeft } from "lucide-react";
import confetti from "canvas-confetti";

const pages = [
  {
    image: "/p1.jpg",
    highlight: "Pondatiiiiiiiiiiiii",
    text: "I Love You Pondatiiiiiiiiiiiii! ❤️ Happy 1 Month Anniversary baby! 💑 Un kooda irukka ovvoru nimishamum enakku oru gift madhiri. ✨😘"
  },
  {
    image: "/p2.jpg",
    highlight: "Azhagiiiiiiiiiiiiiii",
    text: "I Love You Azhagiiiiiiiiiiiiiii! 💖 Ulagathulaye nee dhan di enakku romba azhagu. Looking at you heals my soul instantly. 🌸😍"
  },
  {
    image: "/p3.jpg",
    highlight: "Chellameeeeee",
    text: "I Love You Chellameeeeee! 🍬 Unna konjum pothu kidaikura sandhosham vera ethulayum illa. You are my cutie pie forever! 🧸✨"
  },
  {
    image: "/p4.jpg",
    highlight: "Ammu kuttyyyyyy",
    text: "I Love You Ammu kuttyyyyyy! 🐥 Sometimes we fight, aana adhu kooda love dhan. Un mela irukka paasam eppovum korayadhu di. 💞🤞"
  },
  {
    image: "/p5.jpg",
    highlight: "Kannadiiiiiiiiiiiiiii",
    text: "I Love You Kannadiiiiiiiiiiiiiii! 🪞 Ennoda reflection nee. Nee siricha naanum sirippen, nee azhutha en manasu thudikkum. 💑✨"
  },
  {
    image: "/p6.jpg",
    highlight: "Vairameeeeeee",
    text: "I Love You Vairameeeeeee! 💎 You are more precious than diamond to me. Unna pathukradhu dhan en life oda ore aim. 💍❤️"
  },
  {
    image: "/p7.jpg",
    highlight: "En uyireeeeee",
    text: "I Love You En uyireeeeee! 🌍 Nee illama en life-la oru meaning-e illa. You complete me in every single way, baby ma. 🌹💋"
  },
  {
    image: "/p8.jpg",
    highlight: "En anbaeeeee",
    text: "I Love You En anbaeeeee! 👑 Inimel vara pora ella years-um namaku happy-a irukum. I promise to treat you like a queen. 🏰💖"
  },
  {
    image: "/p9.jpg", 
    highlight: "En thozhiyeeeeee",
    text: "I Love You En thozhiyeeeeee! 👀 Your eyes speak a thousand words without saying anything. Avlo azhagu! ✨👀"
  },
  {
    image: "/p10.jpg", 
    highlight: "Anbu manaiviyeee",
    text: "I Love You Anbu manaiviyeee! 🤪 (Your Weirdness) Unnoda antha lousu thanam, kurumbu ellam enakku romba pidikkum. You are my favorite entertainer di! 💖🥳"
  },
  {
    image: "/p11.jpg", 
    highlight: "En kanaveeeeee",
    text: "I Love You En kanaveeeeee! 💋 (Your Lips) Un lips... paathale kiss panna thonudhu. The taste I crave every single day. Waiting to feel them. 🔥😘"
  }
];

export default function AnniversaryPage() {
  const [isAnswered, setIsAnswered] = useState(false);
  const [isDeclined, setIsDeclined] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const handleDecline = () => {
    setIsDeclined(true);
    setTimeout(() => {
      try {
        window.close();
      } catch (e) {}
      window.location.href = "about:blank";
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
            className="flex flex-col items-center justify-between h-full py-10 w-full max-w-md bg-gradient-to-b from-gray-900 to-black"
          >
            <div className="flex flex-col items-center mt-8">
              <div className="relative mb-6">
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute inset-0 bg-pink-500 rounded-full blur-xl"
                ></motion.div>
                
                {/* OPTIMIZED CALL IMAGE */}
                <div className="relative w-32 h-32 z-10">
                  <Image 
                    src="/call.jpg" 
                    alt="My Love" 
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="rounded-full border-4 border-gray-800 object-cover"
                    priority
                  />
                </div>
              </div>
              <h1 className="text-4xl font-light tracking-wide text-white">My Pondati ❤️</h1>
              <p className="text-gray-400 mt-3 text-lg">Mobile +91 63832 64697</p>
              <p className="text-gray-500 text-sm mt-1 animate-pulse">Incoming video call...</p>
            </div>
            
            <div className="flex w-full justify-around px-12 mb-10">
              <div className="flex flex-col items-center gap-3">
                <button 
                  onClick={handleDecline}
                  className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center shadow-lg shadow-red-500/30 active:scale-95 transition-transform"
                >
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

            <div className="flex-1 w-full overflow-y-auto pb-32 px-4 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPage}
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center gap-3"
                >
                  {/* OPTIMIZED SLIDESHOW IMAGE */}
                  <div className="relative bg-white p-2 rounded-2xl shadow-xl rotate-[-2deg]">
                    <div className="relative w-64 h-64">
                       <Image 
                         src={pages[currentPage].image} 
                         alt={`Page ${currentPage + 1}`} 
                         fill
                         sizes="(max-width: 768px) 100vw, 50vw"
                         className="object-cover rounded-xl"
                         priority
                       />
                    </div>
                  </div>
                  
                  <div className="text-center space-y-2 w-full mt-2">
                    <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-600 filter drop-shadow-sm leading-tight break-words px-1">
                       {pages[currentPage].highlight}
                    </h2>
                    <p className="text-gray-700 text-lg font-medium leading-relaxed font-dancing-script px-2">
                      {pages[currentPage].text}
                    </p>
                    <p className="text-pink-400 text-xs font-semibold">
                      Page {currentPage + 1}/11
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="w-full p-4 flex justify-between items-center bg-white/80 backdrop-blur-md rounded-t-3xl absolute bottom-0 z-50 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
              <button 
                onClick={prevPage} 
                disabled={currentPage === 0}
                className={`p-4 rounded-full ${currentPage === 0 ? 'text-gray-300' : 'bg-gray-100 text-pink-500 shadow-md active:scale-95'}`}
              >
                <ChevronLeft size={24} />
              </button>

              {currentPage === pages.length - 1 ? (
                <button 
                  onClick={makeCall}
                  className="px-6 py-3 bg-green-500 text-white rounded-full font-bold shadow-xl animate-pulse flex items-center gap-2 active:scale-95 transition-transform"
                >
                  <Phone fill="white" size={20} /> Call Me
                </button>
              ) : (
                <button 
                  onClick={nextPage}
                  className="p-4 bg-pink-500 text-white rounded-full shadow-lg shadow-pink-500/30 hover:bg-pink-600 active:scale-95"
                >
                  <ChevronRight size={24} />
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
