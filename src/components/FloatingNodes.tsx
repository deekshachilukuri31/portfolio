"use client";

import { motion, useReducedMotion } from "framer-motion";

type Node = {
  top: number;
  left: number;
  size: number;
  driftDuration: number;
  driftDelay: number;
  glowDuration: number;
  glowDelay: number;
};

const NODES: Node[] = [
  { top: 15, left: 10, size: 10, driftDuration: 7, driftDelay: 0, glowDuration: 4.5, glowDelay: 0 },
  { top: 30, left: 80, size: 16, driftDuration: 8, driftDelay: 1, glowDuration: 5.5, glowDelay: 0.8 },
  { top: 48, left: 60, size: 8, driftDuration: 6, driftDelay: 0.5, glowDuration: 4, glowDelay: 1.6 },
  { top: 65, left: 65, size: 13, driftDuration: 9, driftDelay: 2, glowDuration: 6, glowDelay: 0.4 },
  { top: 80, left: 40, size: 10, driftDuration: 7.5, driftDelay: 1.5, glowDuration: 5, glowDelay: 2.2 },
  { top: 22, left: 52, size: 7, driftDuration: 6.5, driftDelay: 2.5, glowDuration: 4.8, glowDelay: 1.2 },
];

export default function FloatingNodes() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute bottom-0 left-1/2 h-[560px] w-[560px] -translate-x-1/2 translate-y-1/3 rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
        }}
      />

      {NODES.map((node, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ top: `${node.top}%`, left: `${node.left}%` }}
          initial={{ y: 0 }}
          animate={shouldReduceMotion ? { y: 0 } : { y: [0, -18, 0] }}
          transition={{
            duration: node.driftDuration,
            repeat: shouldReduceMotion ? 0 : Infinity,
            ease: "easeInOut",
            delay: node.driftDelay,
          }}
        >
          <motion.div
            className="rounded-full bg-accent"
            style={{ width: node.size, height: node.size }}
            initial={{ opacity: 0.5, boxShadow: "0 0 10px 2px var(--accent)" }}
            animate={
              shouldReduceMotion
                ? { opacity: 0.8 }
                : {
                    opacity: [0.4, 1, 0.4],
                    boxShadow: [
                      "0 0 8px 2px var(--accent)",
                      "0 0 22px 6px var(--accent)",
                      "0 0 8px 2px var(--accent)",
                    ],
                  }
            }
            transition={{
              duration: node.glowDuration,
              repeat: shouldReduceMotion ? 0 : Infinity,
              ease: "easeInOut",
              delay: node.glowDelay,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
