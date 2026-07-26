import Reveal from "../Reveal";

const SCHOOLS = [
  {
    degree: "Masters in Data Science",
    school: "Northeastern University, Toronto, ON",
    period: "Sep 2021 — Jul 2023",
    coursework:
      "Statistics, Predictive Analytics, Probability Theory, Data Mining, Database Management System",
  },
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    school: "Vignan's Institute of Information Technology, Vizag, India",
    period: "Jun 2016 — Sep 2020",
    coursework:
      "Data Structures, Object Oriented Programming, Machine Learning, Artificial Intelligence",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="section-padding border-t border-border"
    >
      <div className="content-container">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold text-text md:text-4xl">
            Education
          </h2>
        </Reveal>

        <div className="mt-10 flex flex-col gap-4">
          {SCHOOLS.map((item, i) => (
            <Reveal key={i} delay={0.05 * (i + 1)}>
              <div className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg font-medium text-text">
                    {item.degree}
                  </h3>
                  <span className="text-sm text-muted">{item.period}</span>
                </div>
                <p className="mt-2 text-sm text-muted">{item.school}</p>
                <p className="mt-3 text-sm text-muted">
                  Relevant coursework: {item.coursework}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
