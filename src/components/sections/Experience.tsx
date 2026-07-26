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
      className="border-t border-border py-14 md:py-20"
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

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {ROLES.map((role, i) => {
            const isSage = i % 2 === 0;
            const bg = isSage ? "bg-sage" : "bg-lavender";
            const ink = isSage ? "text-sage-ink" : "text-lavender-ink";
            const dot = isSage ? "bg-sage-ink" : "bg-lavender-ink";
            return (
              <Reveal key={i} delay={0.04 * (i + 1)}>
                <div
                  className={`relative rounded-2xl ${bg} py-5 pl-7 pr-5 transition-transform hover:-translate-y-1`}
                >
                  <span className={`absolute left-3 top-6 h-2.5 w-2.5 rounded-full ${dot}`} />
                  <p className={`text-xs font-medium tracking-wide ${ink} opacity-70`}>
                    {role.period}
                  </p>
                  <h3 className={`mt-1 font-display text-lg font-semibold ${ink}`}>
                    {role.title}
                  </h3>
                  <p className={`mt-0.5 text-sm ${ink} opacity-80`}>
                    {role.company}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
