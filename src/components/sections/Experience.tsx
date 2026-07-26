import Reveal from "../Reveal";
import { ExperienceIcon } from "../sectionIcons";

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
          <div className="flex items-center gap-3">
            <ExperienceIcon />
            <h2 className="font-display text-3xl font-semibold text-text md:text-4xl">
              Experience
            </h2>
          </div>
        </Reveal>

        <div className="relative mt-14 border-l border-border pl-8 md:border-l-0 md:pl-0">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-border md:block" />
          {ROLES.map((role, i) => {
            const isEven = i % 2 === 0;
            return (
              <Reveal
                key={i}
                delay={0.05 * (i + 1)}
                className="relative pb-12 last:pb-0 md:grid md:grid-cols-2 md:gap-10"
              >
                <span className="absolute -left-8 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full bg-accent shadow-glow md:left-1/2" />
                <div
                  className={
                    isEven
                      ? "md:col-start-1 md:pr-10 md:text-right"
                      : "md:col-start-2 md:pl-10"
                  }
                >
                  <p className="text-base font-medium tracking-wide text-accent sm:text-lg">
                    {role.period}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-text md:text-2xl">
                    {role.title}
                  </h3>
                  <p className="mt-1 text-text/70">{role.company}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
