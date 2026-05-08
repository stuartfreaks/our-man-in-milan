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
        <p className="articleKicker">Milan / Wine / Lunches</p>

        <h1>
          Dal Vinattiere — where wine and everything good converge in one place
        </h1>

        <p>Coming soon.</p>
      </article>
    </main>
  );
}
