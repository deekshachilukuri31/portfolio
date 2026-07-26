export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="content-container flex items-center justify-center text-sm text-muted">
        <p>© {year} Deeksha Chilukuri</p>
      </div>
    </footer>
  );
}
