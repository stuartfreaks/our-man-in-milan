import Link from 'next/link';

export default function ArticlePage() {
  return (
    <main className="interiorPage">
      <header className="interiorHeader">
        <Link href="/" className="brand">
          Our Man In Milan
        </Link>
      </header>

      <article className="article">
        <p className="sectionLabel">May 2026</p>
        <p className="articleKicker">Milan / Korea / Street Corners</p>

        <h1>Kiwon 기원 — The kimchi revolution on my street corner</h1>

        <p>Coming soon.</p>
      </article>
    </main>
  );
}
