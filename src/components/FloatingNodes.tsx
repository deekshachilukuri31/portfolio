"use client";

import { motion, useReducedMotion } from "framer-motion";

type Node = {
  top: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
};

const NODES: Node[] = [
  { top: 15, left: 10, size: 10, duration: 7, delay: 0 },
  { top: 30, left: 80, size: 14, duration: 8, delay: 1 },
  { top: 55, left: 25, size: 8, duration: 6, delay: 0.5 },
  { top: 65, left: 65, size: 12, duration: 9, delay: 2 },
  { top: 80, left: 40, size: 10, duration: 7.5, delay: 1.5 },
  { top: 22, left: 52, size: 8, duration: 6.5, delay: 2.5 },
];

const LINKS: [number, number, number][] = [
  [0, 2, 0],
  [2, 4, 1.2],
  [1, 3, 0.6],
  [3, 5, 1.8],
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

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {LINKS.map(([a, b, delay], i) => {
          const from = NODES[a];
          const to = NODES[b];
          return (
            <motion.line
              key={i}
              x1={from.left}
              y1={from.top}
              x2={to.left}
              y2={to.top}
              stroke="var(--accent)"
              strokeWidth={0.15}
              initial={{ opacity: 0.15 }}
              animate={
                shouldReduceMotion
                  ? { opacity: 0.25 }
                  : { opacity: [0.15, 0.6, 0.15] }
              }
              transition={{
                duration: 5 + i * 0.4,
                repeat: shouldReduceMotion ? 0 : Infinity,
                ease: "easeInOut",
                delay,
              }}
            />
          );
        })}
      </svg>

      {NODES.map((node, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-accent"
          style={{
            top: `${node.top}%`,
            left: `${node.left}%`,
            width: node.size,
            height: node.size,
            boxShadow: "0 0 12px 2px var(--accent)",
          }}
          initial={{ y: 0 }}
          animate={shouldReduceMotion ? { y: 0 } : { y: [0, -18, 0] }}
          transition={{
            duration: node.duration,
            repeat: shouldReduceMotion ? 0 : Infinity,
            ease: "easeInOut",
            delay: node.delay,
          }}
        />
      ))}
    </div>
  );
}
