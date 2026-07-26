export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="content-container flex flex-col items-center justify-between gap-2 text-sm text-muted sm:flex-row">
        <p>© {year} Deeksha Chilukuri</p>
        <p>Built with Next.js &amp; Tailwind CSS</p>
      </div>
    </footer>
  );
}
