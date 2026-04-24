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
        <h1>The Quiet Authority of a Good Lunch</h1>

        <p>A long lunch in Milan is not indulgence. It is structure.</p>

        <p>
          The table becomes a place where decisions are deferred just long
          enough to improve.
        </p>
      </article>
    </main>
  );
}
