export default function AmbientGlow() {
  return (
    <div
      className="pointer-events-none absolute bottom-0 left-1/2 h-[560px] w-[560px] -translate-x-1/2 translate-y-1/3 rounded-full opacity-20 blur-3xl"
      style={{
        background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
      }}
    />
  );
}
