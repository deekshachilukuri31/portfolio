import Reveal from "../Reveal";
import { SkillsIcon } from "../sectionIcons";

const SKILL_GROUPS = [
  {
    category: "Programming Languages",
    skills: ["R", "Python", "Java", "Scala", "SAS", "HiveQL", "MQL", "SQL", "C", "C++"],
  },
  {
    category: "Tools",
    skills: [
      "Alteryx",
      "Looker",
      "Tableau",
      "Kibana",
      "Jira",
      "GIT/Bitbucket",
      "R Studio",
      "ELK Stack",
      "Airflow",
      "Databricks",
      "Snowflake",
      "dbt",
    ],
  },
  {
    category: "Data Management",
    skills: ["MySQL", "NoSQL", "Spark", "Hue", "Hive", "Flink", "Kafka"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS", "Azure", "Jenkins", "Docker", "Kubernetes"],
  },
  {
    category: "Analytical & ML Expertise",
    skills: [
      "Statistical Tests (T-test, ANOVA, Chi-square)",
      "Causal Inference",
      "Supervised & Unsupervised Algorithms",
      "Natural Language Processing (NLP)",
    ],
  },
  {
    category: "AI & LLMs",
    skills: [
      "Claude",
      "MCP",
      "Prompt Engineering",
      "Agentic AI Workflows",
      "RAG",
      "LLM Applications",
      "Vector Databases",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding border-t border-border">
      <div className="content-container">
        <Reveal>
          <div className="flex items-center gap-3">
            <SkillsIcon />
            <h2 className="font-display text-3xl font-semibold text-text md:text-4xl">
              Skills
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 flex flex-col gap-8">
          {SKILL_GROUPS.map((group, i) => (
            <Reveal key={group.category} delay={0.05 * (i + 1)}>
              <h3 className="text-base font-medium tracking-wide text-accent sm:text-lg">
                {group.category}
              </h3>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-border bg-surface px-4 py-2 text-center text-sm text-muted transition-colors hover:border-accent hover:text-text"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
