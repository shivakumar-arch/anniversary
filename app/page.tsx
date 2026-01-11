"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, PhoneOff, Heart } from "lucide-react";
import confetti from "canvas-confetti";

export default function AnniversaryPage() {
  const [isAnswered, setIsAnswered] = useState(false);
  const [callDuration, setCallDuration] = useState("00:00");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCallDuration(now.toLocaleTimeString([], { hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleAnswer = () => {
    setIsAnswered(true);
    const duration = 3000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#ff0000', '#ff69b4']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ff0000', '#ff69b4']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
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
                {/* Glowing Ring */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute inset-0 bg-pink-500 rounded-full blur-xl"
                ></motion.div>
                
                {/* HER PHOTO */}
                <img
                  src="/her.jpg" 
                  alt="My Love"
                  className="w-32 h-32 rounded-full border-4 border-gray-800 z-10 relative object-cover"
                />
              </div>
              
              <h1 className="text-4xl font-light tracking-wide text-white">My Pondati ❤️</h1>
              <p className="text-gray-400 mt-3 text-lg">Mobile +91 63832 64697</p>
            </div>

            {/* Buttons */}
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
          /* --- SCREEN 2: CELEBRATION --- */
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="h-full w-full max-w-md bg-pink-50 overflow-y-scroll p-6 text-center relative"
          >
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
               <div className="absolute top-[-10%] left-[-10%] w-40 h-40 bg-pink-300 rounded-full blur-3xl opacity-30"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center gap-6 pb-20">
              <motion.div 
                initial={{ scale: 0 }} 
                animate={{ scale: 1 }} 
                transition={{ delay: 0.3, type: "spring" }}
                className="bg-white p-2 rounded-2xl shadow-xl rotate-[-3deg] mt-8"
              >
                {/* PHOTO OF BOTH OF YOU */}
                <img src="/us.jpg" className="w-64 h-64 object-cover rounded-xl" alt="Us" />
                <p className="text-black font-serif text-xl mt-2 font-bold">Happy 1 Month! ✨</p>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-3xl font-bold text-gray-800"
              >
                I Love You! 💖
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-gray-600 leading-relaxed px-4"
              >
                30 days of happiness, smiles, and you being the cutest. You make my world brighter. Here is to forever! 
              </motion.p>

              {/* GIF GRID */}
              <div className="grid grid-cols-2 gap-4 w-full mt-4">
                 <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXo5eGp6YjV4Y3Z5Y3Z5Y3Z5Y3Z5Y3Z5Y3Z5Y3Z5Y3Z5/26FLdmIp6wJr91JAI/giphy.gif" className="rounded-xl shadow-md w-full h-32 object-cover" />
                 <img src="https://media.giphy.com/media/MpXP6x5V8J81G/giphy.gif" className="rounded-xl shadow-md w-full h-32 object-cover" />
              </div>

              <button 
                  onClick={() => confetti()}
                  className="mt-8 px-8 py-3 bg-pink-500 text-white rounded-full font-semibold shadow-lg flex items-center gap-2 justify-center mx-auto mb-10"
              >
                <Heart fill="white" size={20} />
                Love You More
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

