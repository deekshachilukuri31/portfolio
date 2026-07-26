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

        <div className="relative mt-14 border-l border-border pl-8 md:border-l-0 md:pl-0">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-border md:block" />
          {SCHOOLS.map((item, i) => {
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
                  <p className="text-sm font-medium tracking-wide text-accent">
                    {item.period}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-text md:text-2xl">
                    {item.degree}
                  </h3>
                  <p className="mt-1 text-text/70">{item.school}</p>
                  <p className="mt-3 text-sm text-text/70">
                    Relevant coursework: {item.coursework}
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
