import FloatingNodes from "./FloatingNodes";
import DoodleIcons from "./DoodleIcons";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <FloatingNodes />
      <DoodleIcons />

      <div className="content-container relative z-10">
        <Reveal>
          <p className="text-lg font-medium tracking-wide text-accent sm:text-xl">
            Hey there! I&apos;m Deeksha
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight text-text sm:text-5xl md:text-6xl">
            Data Scientist
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 max-w-xl text-base text-muted sm:text-lg">
            Data science, analytics engineering, and the infrastructure
            between them.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-text transition-transform hover:-translate-y-1"
            >
              View Projects
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
