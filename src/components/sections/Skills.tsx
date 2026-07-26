import Reveal from "../Reveal";

const PLACEHOLDER_SKILLS = [
  "Skill one",
  "Skill two",
  "Skill three",
  "Skill four",
  "Skill five",
  "Skill six",
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding border-t border-border">
      <div className="content-container">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold text-text md:text-4xl">
            Skills
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-3">
          {PLACEHOLDER_SKILLS.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-text"
            >
              {skill}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
