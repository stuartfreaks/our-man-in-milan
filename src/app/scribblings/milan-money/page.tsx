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
        <h1>Milan, Money, and the Performance of Ease</h1>

        <p>
          There is a particular kind of wealth in Milan that does not announce
          itself. It is not the blunt instrument of London or the glossy theatre
          of Dubai. It is quieter, more coded.
        </p>

        <p>
          One sees it in the way lunch is taken. Not rushed, not performative.
          Simply assumed.
        </p>
      </article>
    </main>
  );
}
