import Reveal from "../Reveal";
import { AboutIcon } from "../sectionIcons";

const WHAT_I_DO = [
  {
    emoji: "📊",
    title: "Product Analytics",
    description:
      "Analyzing user behavior, transaction lifecycles, and operational performance to evaluate feature impact and influence product strategy.",
  },
  {
    emoji: "🤖",
    title: "AI-Powered Analytics & ML",
    description:
      "Building AI-driven workflows that automate analysis, surface risks, and accelerate decisions using LLMs and machine learning.",
  },
  {
    emoji: "📈",
    title: "Metrics & Measurement",
    description:
      "Defining product and operational KPIs and building the dashboards teams rely on to track performance.",
  },
  {
    emoji: "🧪",
    title: "Statistical Analysis & Experimentation",
    description:
      "Applying experimentation and causal reasoning to quantify business impact.",
  },
  {
    emoji: "⚙️",
    title: "Analytics Engineering",
    description:
      "Designing scalable SQL data models and metric layers that establish trusted business definitions.",
  },
  {
    emoji: "🤝",
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
          <div className="flex items-center gap-3">
            <AboutIcon />
            <h2 className="font-display text-3xl font-semibold text-text md:text-4xl">
              About
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <p className="text-base font-medium tracking-wide text-accent sm:text-lg">
            What I Do
          </p>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {WHAT_I_DO.map((item, i) => (
            <Reveal key={item.title} delay={0.05 * (i + 1)}>
              <div className="h-full rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent">
                <span className="text-3xl">{item.emoji}</span>
                <h3 className="mt-3 font-display text-lg font-medium text-text">
                  {item.title}
                </h3>
                <p className="mt-3 text-text/70">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
