import FloatingNodes from "./FloatingNodes";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <FloatingNodes />

      <div className="content-container relative z-10">
        <Reveal>
          <p className="text-sm font-medium tracking-wide text-accent">
            Senior Data Scientist / Analytics Engineer
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight text-text sm:text-5xl md:text-6xl">
            Data doesn&apos;t move until it&apos;s reconciled.
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 max-w-xl text-base text-muted sm:text-lg">
            I&apos;m a data scientist building the systems that match network
            and ledger data at scale — so product and finance teams can trust
            every number they see.
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
            <a
              href="/portfolio/resume.pdf"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium text-text transition-all hover:-translate-y-1 hover:border-accent"
            >
              Download Resume
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
