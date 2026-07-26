import { ChevronDown } from "lucide-react";
import AmbientGlow from "./AmbientGlow";
import DoodleIcons from "./DoodleIcons";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <AmbientGlow />
      <DoodleIcons />

      <div className="content-container relative z-10">
        <Reveal>
          <p className="text-lg font-medium tracking-wide text-accent sm:text-xl">
            Senior Data Scientist · 5+ Years Experience
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight text-text sm:text-5xl md:text-6xl">
            Hey there,
            <br />
            <span className="italic text-accent">I&apos;m Deeksha.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 max-w-xl text-base text-muted sm:text-lg">
            I own data problems end-to-end — from ambiguous question to
            production system — building analytics infrastructure that
            teams trust to make high-stakes decisions.
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
