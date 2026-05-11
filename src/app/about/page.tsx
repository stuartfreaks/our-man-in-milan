import Link from 'next/link';

export default function AboutPage() {
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
        <p className="sectionLabel">About</p>

        <h1>Our Man In Milan</h1>

        <div className="aboutText">
          <p>
            <em>Our Man In Milan</em> is a publication based in Milan exploring
            food, money, culture and the rituals of a well-lived life.
          </p>

          <p>
            It began as a home for observations — lunches, streets, habits and
            the small details that define a city — and has since evolved into a
            broader reflection on modern European living.
          </p>

          <p>Essays, guides and photography from the centre of Milan.</p>

          <p>
            — <em>Our Man In Milan</em>
          </p>
        </div>
      </section>
    </main>
  );
}
