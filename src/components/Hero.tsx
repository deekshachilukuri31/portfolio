import { ChevronDown } from "lucide-react";
import DoodleIcons from "./DoodleIcons";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <DoodleIcons />

      <div className="content-container relative z-10">
        <Reveal>
          <p className="text-lg font-medium tracking-wide text-accent sm:text-xl">
            Senior Data Scientist · 5+ Years Experience
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h1
            className="mt-4 max-w-3xl font-display text-4xl font-black leading-tight text-text sm:text-5xl md:text-6xl"
            style={{ fontVariationSettings: '"opsz" 144, "SOFT" 20' }}
          >
            Hey there,
            <br />
            <span className="italic text-accent-bright">I&apos;m Deeksha.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 max-w-xl text-base text-muted sm:text-lg">
            Data science, analytics engineering, and the infrastructure
            between them — I own each end-to-end, turning ambiguous
            questions into production systems teams trust for high-stakes
            decisions.
          </p>
        </Reveal>

      </div>

      <Reveal
        delay={0.4}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-sm text-muted transition-colors hover:text-text"
        >
          Scroll Down
          <ChevronDown className="animate-bounce" size={20} />
        </a>
      </Reveal>
    </section>
  );
}
