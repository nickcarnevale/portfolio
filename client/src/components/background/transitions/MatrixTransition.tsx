"use client";
import { motion } from "framer-motion";

export default function MatrixTransition() {
  return (
    <motion.div
      initial={{ scaleY: 1, opacity: 1 }}
      animate={{ scaleY: 0, opacity: 0 }}
      exit={{ scaleY: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 bg-black origin-top z-[9999] pointer-events-none"
    />
  );
}