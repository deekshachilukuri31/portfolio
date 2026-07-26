import Reveal from "../Reveal";

const WHAT_I_DO = [
  {
    title: "Product Analytics",
    description:
      "Analyzing user behavior, transaction lifecycles, and operational performance to evaluate feature impact and influence product strategy.",
  },
  {
    title: "AI-Powered Analytics",
    description:
      "Building AI-driven workflows that automate analysis, surface risks, and accelerate decisions using LLMs and machine learning.",
  },
  {
    title: "Metrics & Measurement",
    description:
      "Defining product and operational KPIs and building the dashboards teams rely on to track performance.",
  },
  {
    title: "Statistical Analysis & Experimentation",
    description:
      "Applying experimentation and causal reasoning to quantify business impact.",
  },
  {
    title: "Analytics Engineering",
    description:
      "Designing scalable SQL data models and metric layers that establish trusted business definitions.",
  },
  {
    title: "Cross-Functional Partnership",
    description:
      "Translating ambiguous questions from Product, Engineering, Finance, Risk, and Operations into data products.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding border-t border-border">
      <div className="content-container">
        <Reveal>
          <p className="text-sm font-medium tracking-wide text-accent">
            Hey there! I&apos;m Deeksha
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-3 font-display text-3xl font-semibold text-text md:text-4xl">
            Data Scientist
          </h2>
        </Reveal>

        <Reveal delay={0.2} className="mt-4 max-w-2xl">
          <p className="text-muted">
            Data science, analytics engineering, and the infrastructure
            between them.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-16">
          <p className="text-sm font-medium tracking-wide text-accent">
            06 / What I Do
          </p>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {WHAT_I_DO.map((item, i) => (
            <Reveal key={item.title} delay={0.05 * (i + 1)}>
              <div className="h-full rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent">
                <h3 className="font-display text-lg font-medium text-text">
                  {item.title}
                </h3>
                <p className="mt-3 text-muted">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
