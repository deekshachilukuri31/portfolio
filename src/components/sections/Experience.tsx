import Reveal from "../Reveal";

const PLACEHOLDER_ROLES = [
  {
    title: "Role title",
    company: "Company name",
    period: "Start — End",
    description:
      "Placeholder — send me the role details, key responsibilities, and impact/metrics for this position.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-padding border-t border-border"
    >
      <div className="content-container">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold text-text md:text-4xl">
            Experience
          </h2>
        </Reveal>

        <div className="mt-10 flex flex-col gap-6">
          {PLACEHOLDER_ROLES.map((role, i) => (
            <Reveal key={i} delay={0.1 * (i + 1)}>
              <div className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg font-medium text-text">
                    {role.title} · {role.company}
                  </h3>
                  <span className="text-sm text-muted">{role.period}</span>
                </div>
                <p className="mt-3 text-muted">{role.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
