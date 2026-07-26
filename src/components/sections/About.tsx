import Reveal from "../Reveal";

export default function About() {
  return (
    <section id="about" className="section-padding border-t border-border">
      <div className="content-container">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold text-text md:text-4xl">
            About
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-6 max-w-2xl">
          <p className="text-muted">
            Placeholder — send me your bio and this section will be written
            up: background, what you focus on, and what drives your work as
            a data scientist / analytics engineer.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
