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
            Our Man In Milan is a personal publication based in Milan, exploring
            style, money, culture, and the rituals of a well-lived life.
          </p>

          <p>
            It began as a place to record observations — lunches, streets,
            habits, and the small details that define a city — and has since
            grown into a broader reflection on modern European living.
          </p>

          <p>
            The project sits somewhere between a column and a notebook: part
            documentation, part opinion, occasionally useful.
          </p>

          <p>— Our Man In Milan</p>
        </div>
      </section>
    </main>
  );
}
