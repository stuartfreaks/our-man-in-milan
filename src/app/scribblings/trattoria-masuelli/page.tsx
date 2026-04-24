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

        <h1>Trattoria Masuelli San Marco</h1>

        <p>
          Nestled on the wide, tree-lined Viale Umbria, Trattoria Masuelli San
          Marco has been quietly serving Milan since 1921. Family-run and
          wood-panelled, it has the sort of atmosphere that makes you
          immediately slow down.
        </p>

        <p>
          The veal with tuna sauce — finished with caperberries and crisp
          crackers — is essential, whether taken as a starter or a lighter main.
          The cotoletta alla Milanese is among the best in the city: generous,
          golden, and handled with care.
        </p>

        <p>
          For those inclined, there are more traditional offerings — including
          fried veal brains with pomegranate mayonnaise — executed with a level
          of precision that reflects the kitchen’s confidence.
        </p>

        <p>
          Masuelli has been my neighbourhood trattoria for over six years. It is
          the sort of place one hesitates to recommend too widely, for fear of
          losing it. But good places endure, and this one has done so for more
          than a century.
        </p>

        <p>
          <em>
            Originally featured in the Financial Times. Read the full piece{' '}
            <a
              href="https://www.ft.com/content/183cd8ce-6c2b-4c5e-a7fa-b55480ce4220"
              target="_blank"
            >
              here
            </a>
            .
          </em>
        </p>
      </article>
    </main>
  );
}
