import Reveal from "../Reveal";

const PLACEHOLDER_PROJECTS = [
  {
    title: "Project one",
    description: "Placeholder — send me the project details and outcomes.",
  },
  {
    title: "Project two",
    description: "Placeholder — send me the project details and outcomes.",
  },
  {
    title: "Project three",
    description: "Placeholder — send me the project details and outcomes.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding border-t border-border">
      <div className="content-container">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold text-text md:text-4xl">
            Projects
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {PLACEHOLDER_PROJECTS.map((project, i) => (
            <Reveal key={i} delay={0.1 * (i + 1)}>
              <div className="h-full rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-accent">
                <h3 className="font-display text-lg font-medium text-text">
                  {project.title}
                </h3>
                <p className="mt-3 text-muted">{project.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
