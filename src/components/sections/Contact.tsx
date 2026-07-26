import { Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../icons";
import { ContactIcon } from "../sectionIcons";
import Reveal from "../Reveal";

const CONTACT_ITEMS = [
  {
    label: "Email",
    value: "deekshachilukuri31@gmail.com",
    href: "mailto:deekshachilukuri31@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/deekshachilukuri",
    href: "https://www.linkedin.com/in/deekshachilukuri/",
    icon: LinkedinIcon,
  },
  {
    label: "GitHub",
    value: "github.com/deekshachilukuri31",
    href: "https://github.com/deekshachilukuri31",
    icon: GithubIcon,
  },
  {
    label: "Location",
    value: "Toronto, Canada",
    href: null,
    icon: MapPin,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden border-t border-border"
    >
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-[400px] w-[400px] -translate-x-1/2 translate-y-1/2 rounded-full opacity-10 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
        }}
      />

      <div className="content-container relative z-10">
        <Reveal>
          <p className="text-base font-medium tracking-wide text-accent sm:text-lg">
            Contact Me
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-3 flex items-center gap-3">
            <ContactIcon />
            <h2 className="font-display text-3xl font-semibold text-text md:text-4xl">
              Get in touch
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {CONTACT_ITEMS.map((item, i) => {
            const Icon = item.icon;
            const content = (
              <div className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 transition-all hover:-translate-y-1 hover:border-accent">
                <Icon size={20} />
                <div>
                  <p className="text-sm text-muted">{item.label}</p>
                  <p className="text-text">{item.value}</p>
                </div>
              </div>
            );

            return (
              <Reveal key={item.label} delay={0.05 * (i + 1)}>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {content}
                  </a>
                ) : (
                  content
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
