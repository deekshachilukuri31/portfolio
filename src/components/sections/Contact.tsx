import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../icons";
import Reveal from "../Reveal";

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
          <h2 className="font-display text-3xl font-semibold text-text md:text-4xl">
            Get in touch
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-6 max-w-xl">
          <p className="text-muted">
            Placeholder — send me the contact details/socials you want listed
            here.
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mt-8 flex flex-wrap gap-4">
          <a
            href="mailto:hello@example.com"
            className="flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm text-text transition-all hover:-translate-y-1 hover:border-accent"
          >
            <Mail size={16} />
            Email
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm text-text transition-all hover:-translate-y-1 hover:border-accent"
          >
            <GithubIcon size={16} />
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm text-text transition-all hover:-translate-y-1 hover:border-accent"
          >
            <LinkedinIcon size={16} />
            LinkedIn
          </a>
        </Reveal>
      </div>
    </section>
  );
}
