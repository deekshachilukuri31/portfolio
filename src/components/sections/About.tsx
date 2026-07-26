import Reveal from "../Reveal";
import { AboutIcon } from "../sectionIcons";

const WHAT_I_DO = [
  {
    emoji: "📊",
    title: "Product Analytics",
    description:
      "Own product analytics end-to-end — from the user behavior and transaction lifecycle down to the metric that changes roadmap and strategy.",
  },
  {
    emoji: "🤖",
    title: "AI-Powered Analytics & ML",
    description:
      "Architect AI-driven analytics end-to-end, from LLM workflow design to production — cutting incident response time by up to 90%.",
  },
  {
    emoji: "📈",
    title: "Metrics & Measurement",
    description:
      "Own the metrics layer end-to-end — defining the KPIs and building the dashboards leadership trusts as the single source of truth.",
  },
  {
    emoji: "🧪",
    title: "Statistical Analysis & Experimentation",
    description:
      "Lead experimentation end-to-end — design, causal analysis, and the go/no-go call — to quantify real, high-stakes business impact.",
  },
  {
    emoji: "⚙️",
    title: "Analytics Engineering",
    description:
      "Architect the data platform end-to-end, from raw pipelines to a centralized metrics layer trusted across 100+ enterprise customers.",
  },
  {
    emoji: "🤝",
    title: "Cross-Functional Partnership",
    description:
      "Operate as the senior bridge across Product, Engineering, Finance, Risk, and Ops — turning ambiguity into shipped, high-impact data products.",
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
          {WHAT_I_DO.map((item, i) => {
            const tilts = [
              "md:rotate-[-1.4deg]",
              "md:rotate-[1deg]",
              "md:rotate-[-0.6deg]",
              "md:rotate-[0.8deg]",
              "md:rotate-[-1deg]",
              "md:rotate-[1.2deg]",
            ];
            const isSage = i % 2 === 0;
            const bg = isSage ? "bg-sage" : "bg-lavender";
            const ink = isSage ? "text-sage-ink" : "text-lavender-ink";
            const border = isSage
              ? "border-sage-ink/30"
              : "border-lavender-ink/30";
            return (
              <Reveal key={item.title} delay={0.05 * (i + 1)}>
                <div
                  className={`h-full rounded-2xl border border-dashed ${border} ${bg} p-6 transition-all hover:-translate-y-1 hover:rotate-0 ${tilts[i % tilts.length]}`}
                >
                  <span className="text-3xl">{item.emoji}</span>
                  <h3 className={`mt-3 font-display text-lg font-medium ${ink}`}>
                    {item.title}
                  </h3>
                  <p className={`mt-3 ${ink} opacity-80`}>{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
