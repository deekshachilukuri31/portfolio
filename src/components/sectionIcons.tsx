type IconProps = { className?: string };

const strokeProps = {
  fill: "none",
  stroke: "var(--text)",
  strokeWidth: 3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Base({
  children,
  filter,
  className,
}: {
  children: React.ReactNode;
  filter: string;
  className?: string;
}) {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 60 60"
      className={className}
      style={{ filter: `url(#${filter})` }}
    >
      {children}
    </svg>
  );
}

export function AboutIcon({ className }: IconProps) {
  return (
    <Base filter="roughen1" className={className}>
      <g {...strokeProps}>
        <rect x="8" y="10" width="44" height="28" rx="10" />
      </g>
      <polygon points="20,38 14,50 30,38" fill="none" stroke="var(--text)" strokeWidth={3} strokeLinejoin="round" />
    </Base>
  );
}

export function SkillsIcon({ className }: IconProps) {
  return (
    <Base filter="roughen2" className={className}>
      <g {...strokeProps}>
        <rect x="8" y="24" width="44" height="26" rx="4" />
        <path d="M20 24 A10 10 0 0 1 40 24" />
        <line x1="8" y1="34" x2="52" y2="34" />
      </g>
    </Base>
  );
}

export function ExperienceIcon({ className }: IconProps) {
  return (
    <Base filter="roughen3" className={className}>
      <g {...strokeProps}>
        <rect x="8" y="22" width="44" height="28" rx="4" />
        <rect x="22" y="13" width="16" height="11" rx="3" />
        <line x1="8" y1="35" x2="52" y2="35" />
      </g>
    </Base>
  );
}

export function EducationIcon({ className }: IconProps) {
  return (
    <Base filter="roughen1" className={className}>
      <g {...strokeProps}>
        <polygon points="30,12 54,25 30,38 6,25" />
        <line x1="46" y1="29" x2="46" y2="42" />
        <circle cx="46" cy="45" r="2.5" fill="var(--text)" stroke="none" />
      </g>
    </Base>
  );
}

export function ProjectsIcon({ className }: IconProps) {
  return (
    <Base filter="roughen2" className={className}>
      <path
        d="M6 20 h14 l4 6 h30 v24 h-48 z"
        fill="none"
        stroke="var(--text)"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Base>
  );
}

export function ContactIcon({ className }: IconProps) {
  return (
    <Base filter="roughen3" className={className}>
      <g {...strokeProps}>
        <rect x="6" y="14" width="48" height="34" rx="4" />
        <path d="M8 16 L30 34 L52 16" fill="none" />
      </g>
    </Base>
  );
}
