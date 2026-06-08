import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="fixed inset-0 z-100 flex items-center justify-center bg-abyss"
        >
          {/* particles */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 24 }).map((_, i) => (
              <span
                key={i}
                className="absolute block rounded-full bg-(--gold)/30 animate-bubble"
                style={{
                  left: `${(i * 37) % 100}%`,
                  width: `${2 + (i % 5)}px`,
                  height: `${2 + (i % 5)}px`,
                  animationDuration: `${5 + (i % 6)}s`,
                  animationDelay: `${(i % 8) * 0.4}s`,
                }}
              />
            ))}
          </div>
          {/* sweeping light */}
          <motion.div
            initial={{ x: "-120%" }}
            animate={{ x: "120%" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="absolute inset-y-0 w-1/3 -skew-x-12 bg-linear-to-r from-transparent via-(--gold)/10 to-transparent"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.92, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, scale: 1, letterSpacing: "0.45em" }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 text-center"
          >
            <div className="text-[10px] uppercase tracking-[0.5em] text-(--gold)/80 mb-3">
              Maison
            </div>
            <div className="font-display text-5xl md:text-6xl text-gold-gradient">Maréa</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
