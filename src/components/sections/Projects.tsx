import Reveal from "../Reveal";

const GITHUB_PROFILE = "https://github.com/deekshachilukuri31";
const MEDIUM_PROFILE = "https://medium.com/@deekshachilukuri31";

const PROJECTS = [
  {
    title: "Real-Time AI Search Agent",
    period: "Feb 2023 — Mar 2023",
    description:
      "Developed a Real-Time AI Search Agent leveraging LangChain, achieving instant query responses and enabling a 40% reduction in data retrieval time.",
    linkLabel: "Read on Medium",
    href: MEDIUM_PROFILE,
  },
  {
    title: "Data Analysis on Promotional Campaigns",
    period: "Apr 2023",
    description:
      "Evaluated campaign effects on sales, validated with a statistical t-test, and found that 'discount offers' had a 72% uplift compared to 'Buy One Get One' at 43%.",
    linkLabel: "View on GitHub",
    href: GITHUB_PROFILE,
  },
  {
    title: "Prediction of Emotional Tone of Songs using NLTK & PySpark",
    period: "Feb 2023 — Mar 2023",
    description:
      "Designed a real-time emotion prediction system using NLP techniques such as VADER and BERT, achieving a 20% increase in accuracy through fine-tuning.",
    linkLabel: "View on GitHub",
    href: GITHUB_PROFILE,
  },
  {
    title: "Sentiment Analysis on ChatGPT Tweets",
    period: "Feb 2023 — Mar 2023",
    description:
      "Implemented PySpark for preprocessing 82,129 #ChatGPT tweets, applied BERT models for sentiment analysis, resulting in 15% positive, 78% neutral, and 7% negative sentiment.",
    linkLabel: "View on GitHub",
    href: GITHUB_PROFILE,
  },
];

const CERTIFICATIONS = [
  { title: "Claude Code 101", issuer: "Anthropic", date: "Jul 2026" },
  {
    title: "Agentic AI",
    issuer: "DeepLearning.AI",
    date: "Jan 2026 — Feb 2026",
    description:
      "Built agentic AI systems using reflection, tool use, planning, and multi-agent workflows, integrating external tools and optimizing for production.",
  },
  {
    title: "IBM Building AI Agents and Agentic Workflows",
    issuer: "IBM",
    date: "Aug 2025 — Oct 2025",
    description:
      "Certified in orchestrating AI agents and workflows for real-world applications.",
  },
  {
    title: "Introduction to Machine Learning in Production",
    issuer: "DeepLearning.AI",
    date: "May 2024",
  },
  {
    title: "dbt Fundamentals",
    issuer: "dbt Labs",
    date: "May 2024",
    description:
      "Proficient in models, sources, tests, docs, and deployment in dbt.",
  },
  {
    title: "CS50's Introduction to Artificial Intelligence with Python",
    issuer: "Harvard",
    date: "Dec 2023",
    description:
      "Certified in AI with Python, specializing in machine learning, neural networks & large language models.",
  },
  { title: "IBM Data Engineering", issuer: "IBM", date: "Jan 2023" },
  {
    title: "Google Cloud Big Data & Machine Learning Fundamentals",
    issuer: "Coursera",
    date: "Aug 2022",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding border-t border-border">
      <div className="content-container">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold text-text md:text-4xl">
            Projects & Certifications
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-surface p-6">
            <p className="font-display text-lg font-medium text-text">
              Checkout My Latest Tech Blogs
            </p>
            <a
              href={MEDIUM_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent transition-colors hover:text-text"
            >
              View My Tech Insights on Medium →
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-16">
          <p className="text-sm font-medium tracking-wide text-accent">
            Projects
          </p>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.title} delay={0.05 * (i + 1)}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-accent">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg font-medium text-text">
                    {project.title}
                  </h3>
                  <span className="text-sm text-muted">{project.period}</span>
                </div>
                <p className="mt-3 flex-1 text-text/70">{project.description}</p>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-fit text-sm text-accent transition-colors hover:text-text"
                >
                  {project.linkLabel} →
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-16">
          <p className="text-sm font-medium tracking-wide text-accent">
            Certifications
          </p>
        </Reveal>

        <div className="mt-8 flex flex-col divide-y divide-border rounded-2xl border border-border bg-surface">
          {CERTIFICATIONS.map((cert, i) => (
            <Reveal key={cert.title} delay={0.03 * (i + 1)}>
              <div className="p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-medium text-text">{cert.title}</h3>
                  <span className="text-sm text-muted">
                    {cert.issuer} · {cert.date}
                  </span>
                </div>
                {cert.description && (
                  <p className="mt-2 text-sm text-text/70">
                    {cert.description}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
