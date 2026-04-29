import Link from 'next/link';

export default function ScribblingsPage() {
  return (
    <main className="interiorPage">
      <header className="interiorHeader">
        <Link href="/" className="brand">
          Our Man In Milan
        </Link>

        <nav className="menu" aria-label="Main navigation">
          <Link href="/scribblings">Scribblings</Link>
          <Link href="/shop">Buy A T Shirt</Link>
          <Link href="/about">About</Link>
        </nav>
      </header>

      <section className="interiorContent">
        <p className="sectionLabel">Scribblings</p>

        {/* FEATURED ARTICLE */}
        <Link
          href="/scribblings/trattoria-masuelli"
          className="featuredArticle"
        >
          <span>Featured</span>
          <h2>Trattoria Masuelli San Marco</h2>
          <p>
            A long-standing Milanese trattoria on Viale Umbria, and a personal
            favourite for over six years.
          </p>
        </Link>

        {/* ARTICLE LIST */}
        <div className="articleList">
          <Link href="/scribblings/milan-money" className="articleItem">
            <span>May 2026</span>
            <h2>Milan, Money, and the Performance of Ease</h2>
          </Link>

          <Link href="/scribblings/lunch-observations" className="articleItem">
            <span>May 2026</span>
            <h2>The Quiet Authority of a Good Lunch</h2>
          </Link>

          <Link href="/scribblings/trattoria-masuelli" className="articleItem">
            <span>December 2023</span>
            <h2>Trattoria Masuelli San Marco</h2>
          </Link>
        </div>
      </section>
    </main>
  );
}
