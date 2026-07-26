import Reveal from "../Reveal";

const ROLES = [
  {
    title: "Data Scientist",
    company: "Marqeta (B2B Fintech Infrastructure)",
    period: "Jun 2025 — Present",
  },
  {
    title: "Data Scientist - II",
    company: "Toronto-Dominion Bank (TD)",
    period: "Aug 2023 — Jun 2025",
  },
  {
    title: "Data Analyst",
    company: "Royal Bank of Canada (RBC)",
    period: "Sep 2022 — Aug 2023",
  },
  {
    title: "Data Scientist",
    company: "AwanTunai (Finance & Lending Platform)",
    period: "Mar 2022 — Jun 2022",
  },
  {
    title: "Data Analyst",
    company: "Essen Electronic Systems Pvt Ltd",
    period: "Sep 2020 — Aug 2021",
  },
  {
    title: "Data Scientist Intern",
    company: "Verzeo (E-Learning Platform)",
    period: "May 2018 — Jul 2018",
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

        <div className="mt-10 flex flex-col gap-4">
          {ROLES.map((role, i) => (
            <Reveal key={i} delay={0.05 * (i + 1)}>
              <div className="flex flex-wrap items-baseline justify-between gap-2 rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent">
                <h3 className="font-display text-lg font-medium text-text">
                  {role.title} · {role.company}
                </h3>
                <span className="text-sm text-muted">{role.period}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
