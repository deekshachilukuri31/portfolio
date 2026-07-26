export default function DoodleIcons() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden overflow-hidden sm:block">
      <svg
        width="72"
        height="72"
        viewBox="0 0 60 60"
        className="absolute right-[12%] top-16 opacity-70"
        style={{ filter: "url(#roughen1)", transform: "rotate(8deg)" }}
      >
        <g
          fill="none"
          stroke="var(--accent)"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="6" y1="52" x2="54" y2="52" />
          <rect x="10" y="30" width="8" height="20" rx="2" />
          <rect x="26" y="18" width="8" height="32" rx="2" />
          <rect x="42" y="8" width="8" height="42" rx="2" />
        </g>
      </svg>

      <svg
        width="64"
        height="64"
        viewBox="0 0 60 60"
        className="absolute right-[4%] top-64 opacity-70"
        style={{ filter: "url(#roughen2)", transform: "rotate(-10deg)" }}
      >
        <g
          fill="none"
          stroke="var(--accent)"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="26" cy="26" r="14" />
          <line x1="36" y1="36" x2="50" y2="50" />
        </g>
        <g fill="var(--accent)">
          <circle cx="21" cy="24" r="1.8" />
          <circle cx="29" cy="20" r="1.8" />
          <circle cx="30" cy="30" r="1.8" />
        </g>
      </svg>

      <svg
        width="58"
        height="58"
        viewBox="0 0 60 60"
        className="absolute right-[20%] top-[28rem] opacity-70"
        style={{ filter: "url(#roughen3)", transform: "rotate(6deg)" }}
      >
        <g
          fill="none"
          stroke="var(--accent)"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="14" y="18" width="32" height="26" rx="10" />
          <line x1="30" y1="18" x2="30" y2="10" />
          <circle cx="30" cy="7" r="3" />
        </g>
        <g fill="var(--accent)">
          <circle cx="24" cy="30" r="2.6" />
          <circle cx="36" cy="30" r="2.6" />
        </g>
      </svg>
    </div>
  );
}
