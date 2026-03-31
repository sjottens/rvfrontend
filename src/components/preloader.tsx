"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setLoading(false);
    }, 1100);

    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.35 } }}
          className="pointer-events-none fixed inset-0 z-[120] grid place-items-center bg-[#04060d]"
        >
          <div className="w-[280px] max-w-[70vw]">
            <p className="text-center text-sm uppercase tracking-[0.3em] text-white/70">RV Frontend</p>
            <div className="mt-4 h-[3px] overflow-hidden rounded-full bg-white/15">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan to-electric"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
