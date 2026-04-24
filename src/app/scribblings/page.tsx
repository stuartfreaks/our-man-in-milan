import Link from 'next/link';

export default function ScribblingsPage() {
  return (
    <main className="interiorPage">
      <header className="interiorHeader">
        <Link href="/" className="brand">
          Our Man In Milan
        </Link>
      </header>

      <section className="interiorContent">
        <p className="sectionLabel">Scribblings</p>

        <div className="articleList">
          <Link href="/scribblings/milan-money" className="articleItem">
            <span>May 2026</span>
            <h2>Milan, Money, and the Performance of Ease</h2>
          </Link>

          <Link href="/scribblings/lunch-observations" className="articleItem">
            <span>May 2026</span>
            <h2>The Quiet Authority of a Good Lunch</h2>
          </Link>
        </div>

        <Link href="/scribblings/trattoria-masuelli" className="articleItem">
          <span>May 2026</span>
          <h2>Trattoria Masuelli San Marco</h2>
        </Link>
      </section>
    </main>
  );
}
